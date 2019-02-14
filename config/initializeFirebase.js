import * as admin from 'firebase-admin';

import serviceAccount from './serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'play-firebase-a6706.firebaseapp.com',
  databaseURL: 'https://play-firebase-a6706.firebaseio.com',
  projectId: 'play-firebase-a6706',
  storageBucket: 'play-firebase-a6706.appspot.com',
  messagingSenderId: process.env.FIREBASE_MSG_ID,
});

export const storage = admin.storage();
