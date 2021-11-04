import * as firebase from 'firebase/app'

console.log(firebase)

const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket>",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);