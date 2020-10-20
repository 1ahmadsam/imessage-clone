import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCqlAuTLCDnpRt56tEQDB1Oh82uUvRiiIw',
  authDomain: 'imessage-clone-e89c7.firebaseapp.com',
  databaseURL: 'https://imessage-clone-e89c7.firebaseio.com',
  projectId: 'imessage-clone-e89c7',
  storageBucket: 'imessage-clone-e89c7.appspot.com',
  messagingSenderId: '224619392375',
  appId: '1:224619392375:web:4d72ce99a48f02b6020572',
  measurementId: 'G-EVVLV66C9L',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
