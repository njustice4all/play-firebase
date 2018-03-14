import { database } from '../../config/firebaseInitialize';

const citiesRef = database.collection('cities');

citiesRef.doc('SF').set({
  name: 'San Francisco',
  state: 'CA',
  country: 'USA',
  capital: false,
  population: 860000,
});

citiesRef.doc('LA').set({
  name: 'Los Angeles',
  state: 'CA',
  country: 'USA',
  capital: false,
  population: 3900000,
});

citiesRef.doc('DC').set({
  name: 'Washington, D.C.',
  state: null,
  country: 'USA',
  capital: true,
  population: 680000,
});

citiesRef.doc('TOK').set({
  name: 'Tokyo',
  state: null,
  country: 'Japan',
  capital: true,
  population: 9000000,
});

citiesRef.doc('BJ').set({
  name: 'Beijing',
  state: null,
  country: 'China',
  capital: true,
  population: 21500000,
});

// const cityRef = db.collection('cities').doc('SF');
// const getDoc = cityRef
//   .get()
//   .then(doc => {
//     if (!doc.exists) {
//       console.log('No such document!');
//     } else {
//       console.log('Document data:', doc.data());
//     }
//   })
//   .catch(err => {
//     console.log('Error getting document', err);
//   });

// citiesRef
//   .where('capital', '==', true)
//   .get()
//   .then(snapshot => {
//     snapshot.forEach(doc => {
//       console.log(doc.id, '=>', doc.data());
//     });
//   })
//   .catch(err => {
//     console.log('Error getting documents', err);
//   });

// Create a query against the collection
const queryRef = citiesRef.where('state', '==', 'CA');
// where('capital', '==', true) 모든 수도 반환

queryRef.get().then(snapshot => {
  snapshot.forEach(doc => {
    console.log(doc.id, doc.data());
  });
});
