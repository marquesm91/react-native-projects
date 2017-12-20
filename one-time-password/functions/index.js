const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./createUser');
const requestOneTimePassword = require('./requestOneTimePassword');
const verifyOneTimePassword = require('./verifyOneTimePassword');

// Make sure you generate this JSON file on Firebase config project
const serviceAccount = require ('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-feed9.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestOneTimePassword = functions.https.onRequest(requestOneTimePassword);
exports.verifyOneTimePassword = functions.https.onRequest(verifyOneTimePassword);
