import admin from 'firebase-admin';
import serviceAccount from '../config/serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://play-firebase-a6706.firebaseio.com',
});

const db = admin.firestore();

/**
 * phone 컬렉션 만들어서 DOC samsung { brand: ... 입력 }
 */
const phoneRef = db.collection('phone').doc('samsung');

const setPhone = phoneRef.set({
  brand: 'samsung',
  device: 'galaxy note 3',
});

/**
 * phone 모델의 apple 추가
 */
const appleRef = db.collection('phone').doc('apple');

const setApple = appleRef.set({
  brand: 'apple',
  device: 'iPhone X',
  color: 'black',
});

// get data
db
  .collection('phone')
  .get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
