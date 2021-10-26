import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQwjxah1_SLdXNy30u-zsxF9emIAtoPJ8",
  authDomain: "clone-50ef0.firebaseapp.com",
  projectId: "clone-50ef0",
  storageBucket: "clone-50ef0.appspot.com",
  messagingSenderId: "565984759622",
  appId: "1:565984759622:web:c9a5163b6de67687699f47",
  measurementId: "G-WC2R6CML5E",
};
const firbaseApp = firebase.initializeApp(firebaseConfig);
const db = firbaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
