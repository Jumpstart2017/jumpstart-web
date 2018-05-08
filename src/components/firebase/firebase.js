import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyC1XfIOaFNpwTA-NYLA4H8FVwiiHew5X4E",
  authDomain: "jumpstart-f48ac.firebaseapp.com",
  databaseURL: "https://jumpstart-f48ac.firebaseio.com",
  projectId: "jumpstart-f48ac",
  storageBucket: "jumpstart-f48ac.appspot.com",
  messagingSenderId: "938853250241"
};
firebase.initializeApp(config);

const auth = firebase.auth();
const db = firebase.database();

export {
  auth,
  db
};