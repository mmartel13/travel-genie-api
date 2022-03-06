const { initializeApp, getApps, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

credentials = require('../credentials.json');

function connectDb() {
    if(!getApps().length) {
        initializeApp({
            credential: cert(credentials)
        })
    }
    return getFirestore();
}

module.exports = { connectDb };