import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDmbQxXudO0F7N9h2eWmhQJdhmLAbc4AAw",
    authDomain: "voting-app-c070e.firebaseapp.com",
    databaseURL: "https://voting-app-c070e-default-rtdb.firebaseio.com",
    projectId: "voting-app-c070e",
    storageBucket: "voting-app-c070e.appspot.com",
    messagingSenderId: "201684240623",
    appId: "1:201684240623:web:b663a68713f35844adf31a"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();