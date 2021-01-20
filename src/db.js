import firebse from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCVccah7OYHGWm3QXwHPzkrd4iOF6-zaHM",
    authDomain: "vue-spas-9b5f3.firebaseapp.com",
    projectId: "vue-spas-9b5f3",
    storageBucket: "vue-spas-9b5f3.appspot.com",
    messagingSenderId: "1050456692414",
    appId: "1:1050456692414:web:867d61f20c8dbdb866b0ef",
    measurementId: "G-4P6MJE31B7"
  };
  // Initialize Firebase
  const firebaseApp = firebse.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();