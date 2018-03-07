import getAdmin from '../../config/getAdmin';

const db = getAdmin();

/**
 * phone 컬렉션 만들어서 DOC samsung { brand: ... 입력 } 참조생성
 * 참조를 생성해도 네트워킹은 발생하지 않음
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

const lgRef = db.collection('phone').doc('lg');

/**
 * 레퍼런스 단축
 */
const shortRef = db.doc('phone/samsung');

const setLg = lgRef.set({
  brand: 'lg',
  device: 'G6',
  color: 'white',
  favorites: [
    {
      name: 'online',
      score: 10,
    },
    {
      name: 'offline',
      score: 5,
    },
  ],
});

// overwrite 가능
phoneRef.set({
  brane: 'lg',
  device: 'g6',
  battery: {
    high: 2,
    low: 1,
  },
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

export default () => {
  console.log('=============================================');
  console.log('day 1');
  console.log('=============================================');
};
