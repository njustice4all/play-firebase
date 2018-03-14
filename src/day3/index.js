import { storage } from '../../config/initializeFirebase';

const bucket = storage.bucket('gs://play-firebase-a6706.appspot.com');
bucket.getFiles().then(value => console.log(value));
