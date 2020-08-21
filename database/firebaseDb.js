import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCoeRDoYYEkuyllwOqqAQ1VGzrgExqYzBw",
    authDomain: "crudapp-56c98.firebaseapp.com",
    databaseURL: "https://crudapp-56c98.firebaseio.com",
    projectId: "crudapp-56c98",
    storageBucket: "crudapp-56c98.appspot.com",
    messagingSenderId: "1030953617381",
    appId: "1:1030953617381:web:3312cc1efefd51faafd10c",
    measurementId: "G-Y5QYB0KNKL"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;