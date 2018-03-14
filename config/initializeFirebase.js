import * as admin from 'firebase-admin';

import serviceAccount from './serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  apiKey: 'AIzaSyCvVDtQ3-hLVdf_6bc6U4k0OLafADO53RA',
  authDomain: 'play-firebase-a6706.firebaseapp.com',
  databaseURL: 'https://play-firebase-a6706.firebaseio.com',
  projectId: 'play-firebase-a6706',
  storageBucket: 'play-firebase-a6706.appspot.com',
  messagingSenderId: '71959538488',
});

export const storage = admin.storage();
