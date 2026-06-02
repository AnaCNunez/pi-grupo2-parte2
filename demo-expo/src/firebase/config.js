import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD4phz7SFLU3qU-Ux1J-Vlw7cVVphoWh9o",
  authDomain: "pi-grupo2-native.firebaseapp.com",
  projectId: "pi-grupo2-native",
  storageBucket: "pi-grupo2-native.firebasestorage.app",
  messagingSenderId: "470755846878",
  appId: "1:470755846878:web:4ec142d783b21b88bab04f"
};


app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = app.firestore();