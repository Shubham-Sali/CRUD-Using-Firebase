# CRUD-Using-Firebase
<h1> CRUD Operation using Firebase</h1>

<h6>Install all necessary packages like naviagation, @stack/navigation and all screen, reanimated like all packages</h6>

<h6> create firebase project Type the this url:console.firebase.google.com on your browser and then click on “Create a project”.</h6>

<h6> install firebase package: npm install firebase --save</h6>

<h6>// database/firebaseDb.js

import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

 const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "reactnativefirebase-00000.firebaseapp.com",
    databaseURL: "https://reactnativefirebase-00000.firebaseio.com",
    projectId: "reactnativefirebase-00000",
    storageBucket: "reactnativefirebase-00000.appspot.com",
    messagingSenderId: "000000000000000",
    appId: "1:000000000000000:web:000000000000000"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;</h6>
