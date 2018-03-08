import getAdmin from '../../config/getAdmin';

const db = getAdmin();

const citiesRef = db.collection('cities');

const setSf = citiesRef.doc('SF').set({
  name: 'San Francisco',
  state: 'CA',
  country: 'USA',
  capital: false,
  population: 860000,
});
const setLa = citiesRef.doc('LA').set({
  name: 'Los Angeles',
  state: 'CA',
  country: 'USA',
  capital: false,
  population: 3900000,
});
const setDc = citiesRef.doc('DC').set({
  name: 'Washington, D.C.',
  state: null,
  country: 'USA',
  capital: true,
  population: 680000,
});
const setTok = citiesRef.doc('TOK').set({
  name: 'Tokyo',
  state: null,
  country: 'Japan',
  capital: true,
  population: 9000000,
});
const setBj = citiesRef.doc('BJ').set({
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

const query = citiesRef
  .where('capital', '==', true)
  .get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
