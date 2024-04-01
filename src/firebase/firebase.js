import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
    //appId: "1:783823693133:web:f751099e401a2ccf474304",
    //measurementId: "G-TX4QMQVP7S"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });



// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });

//         console.log(expenses)

//     })
    

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });

//         console.log(expenses)
//     })



// database.ref('expenses').push({
//     description: 'buy coffee',
//     note: '',
//     amount: 12,
//     createdAt: 1
// })



//database.ref('notes/-NtNF6DwMynzxCon5zO0').remove()

// database.ref('notes').push( {
//     title: 'to do it',
//     body: 'go for a run more !!!'
// }) 

//***Read data***//

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// })


// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// })

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500)

// setTimeout(() => {
//     database.ref().off();
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500)

// database.ref('name')
//     .once('value')
//     .then( (snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch( (e) => {
//         console.log('Error fetching data', e)
//     });


// ***Create Data***
// database.ref().set({
//     name: 'Wilson',
//     age: 38,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Atlanta',
//         country: 'US'
//     }
// }).then(() => {
//     console.log('data is saved!')
// }).catch((e) => {
//     console.log('this failed', e)
// })

// ***Update data***
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })

// ***Delete data***
// database.ref('isSingle').set(null)

// database.ref().remove().then(() => {
//     console.log('data was removed')
// }).catch((e) => {
//     console.log('data is not removed', e)
// })


// ***Modify/Update data with .set***
// // database.ref('age').set('27')

// database.ref('attributes').set(
//     {
//         height: 180,
//         weight: 150
//     }
// ).then(() => {
//     console.log('ssss')
// }).catch((e) => {
//     console.log('fffff', e)
// })
