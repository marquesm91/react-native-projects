const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
const fs = require('fs');
const UUID = require('uuid-v4');

/*
================= MAKE SURE YOU DID THIS! ======================================
 projectId: Can be found inside project settings in firebase
 keyFilename: Inside the project settings and services accounts you could
              generate a private key. Download and save it next to this index.js
================================================================================

  // inside gcconfig.js

  const gcconfig = {
    projectId: 'your-project-id',
    keyFilename: 'your-private-key-json-file-inside-index.json'
  }

  module.exports = gcconfig;

*/
const gcconfig = require('./gcconfig');
const gcs = require('@google-cloud/storage')(gcconfig);

admin.initializeApp({
  credential: admin.credential.cert(require('./awesome-places.json'))
});

exports.storeImage = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    if (
      !request.headers.authorization ||
      !request.headers.authorization.startsWith('Bearer ')
    ) {
      console.log('No token present!');
      response.status(403).json({ error: 'Unauthorized' });
      return;
    }

    let idToken;
    idToken = request.headers.authorization.split('Bearer ')[1];
    admin
      .auth()
      .verifyIdToken(idToken)
      .then(decodedToken => {
        const body = JSON.parse(request.body);

        fs.writeFileSync(
          '/tmp/uploaded-image.jpg',
          body.image,
          'base64',
          err => {
            console.log(err);
            return reponse.status(500).json({ error: err });
          }
        );

        const bucket = gcs.bucket('awesome-places-1514600820487.appspot.com');
        const uuid = UUID();

        bucket.upload('/tmp/uploaded-image.jpg', {
          uploadType: 'media',
          destination: '/places/' + uuid + '.jpg',
          metadata: {
            metadata: {
              contentType: 'image/jpeg',
              firebaseStorageDownloadTokens: uuid
            }
          }
        }, (err, file) => {
          if (!err) {
            response.status(201).json({
              imageUrl: 'https://firebasestorage.googleapis.com/v0/b/' +
                bucket.name +
                '/o/' +
                encodeURIComponent(file.name) +
                '?alt=media&token=' +
                uuid,
              imagePath: '/places/' + uuid + '.jpg'
            });
          } else {
            console.log(err);
            response.status(500).json({ error: err });
          }
        });
      })
      .catch(err => {
        console.log('Token is invalid!');
        response.status(403).json({ error: 'Unauthorized' });
      });
  });
});

exports.deleteImage = functions.database
  .ref('/places/{placesId}')
  .onDelete(event => {
    const placeData = event.data.previous.val();
    const imagePath = placeData.imagePath;

    const bucket = gcs.bucket('awesome-places-1514600820487.appspot.com');

    return bucket.file(imagePath).delete();
  });
