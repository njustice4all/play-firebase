import admin from 'firebase-admin';
import * as firebase from 'firebase';

import serviceAccount from './serviceAccountKey.json';

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://play-firebase-a6706.firebaseio.com',
//   storageBucket: 'gs://play-firebase-a6706.appspot.com/',
//   apiKey: 'AIzaSyCvVDtQ3-hLVdf_6bc6U4k0OLafADO53RA',
// });

const config = {
  apiKey: 'AIzaSyCvVDtQ3-hLVdf_6bc6U4k0OLafADO53RA',
  databaseURL: 'https://play-firebase-a6706.firebaseio.com',
  storageBucket: 'gs://play-firebase-a6706.appspot.com/',
};

firebase.initializeApp(config);

export const database = firebase.database();
export const storage = firebase.storage();
