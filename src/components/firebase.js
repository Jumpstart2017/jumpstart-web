import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyC1XfIOaFNpwTA-NYLA4H8FVwiiHew5X4E",
  authDomain: "jumpstart-f48ac.firebaseapp.com",
  databaseURL: "https://jumpstart-f48ac.firebaseio.com",
  storageBucket: "jumpstart-f48ac.appspot.com",
  messagingSenderId: "123123123123"
};
var fire = firebase.initializeApp(config);
export default fire;