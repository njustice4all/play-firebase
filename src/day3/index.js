// import { storage } from '../../config/firebaseInitialize';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCvVDtQ3-hLVdf_6bc6U4k0OLafADO53RA',
  authDomain: 'play-firebase-a6706.firebaseapp.com',
  databaseURL: 'https://play-firebase-a6706.firebaseio.com',
  storageBucket: 'gs://play-firebase-a6706.appspot.com/',
};

firebase.initializeApp(config);

const storage = firebase.storage();

console.log(storage);

// const storageRef = storage.ref();

// console.log(storageRef);
