const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const fs = require('fs');
const UUID = require('uuid-v4');

/*
================= MAKE SURE YOU DID THIS! ======================================
 projectId: Can be found inside project settings in firebase
 keyFilename: Inside the project settings and services accounts you could
              generate a private key. Download and save it next to this index.js
================================================================================

  const gcconfig = {
    projectId: 'your-project-id',
    keyFilename: 'your-private-key-json-file-inside-index.json'
  }

*/
const gcconfig = require('./gcconfig');
const gcs = require('@google-cloud/storage')(gcconfig);

exports.storeImage = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const body = JSON.parse(request.body);

    fs.writeFileSync('/tmp/uploaded-image.jpg', body.image, 'base64', err => {
      console.log(err);
      return reponse.status(500).json({ error: err });
    });

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
            uuid
        });
      } else {
        console.log(err);
        response.status(500).json({ error: err });
      }
    });
  });
});
