import firebase from "firebase";


// const firebaseConfig = {
//     apiKey: "AIzaSyDOh3rp0RDV15rfKM0_kI-p8TscDz16ev8",
//     authDomain: "movies-fa407.firebaseapp.com",
//     projectId: "movies-fa407",
//     storageBucket: "movies-fa407.appspot.com",
//     messagingSenderId: "520139080992",
//     appId: "1:520139080992:web:89241c1dcd2f4978854345",
//     measurementId: "G-KKE0F7Q5FJ"
//   };
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAztnFiFe-exjOUT0-kEFXt3W6wp2O-ELs",
    authDomain: "rejuvenation-hydration.firebaseapp.com",
    projectId: "rejuvenation-hydration",
    storageBucket: "rejuvenation-hydration.appspot.com",
    messagingSenderId: "1030111668526",
    appId: "1:1030111668526:web:378b8b9e46b830b76a32bf"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
