import firebase from 'firebase/app';
import 'firebase/database';

    let firebaseConfig = {
        apiKey: "AIzaSyDfgYPU4-pEqUSy51iAN1HayYI9V8qYt1c",
        authDomain: "reactweb-d740b.firebaseapp.com",
        databaseURL: "https://reactweb-d740b.firebaseio.com",
        projectId: "reactweb-d740b",
        storageBucket: "reactweb-d740b.appspot.com",
        messagingSenderId: "195509226155",
        appId: "1:195509226155:web:b7f6c97209cb31ac0405ee",
        measurementId: "G-6ELXMZZJVY"
      };
      // Initialize Firebase
      // if(!firebase.apps.length){
      //     firebase.initializeApp(firebaseConfig)
      //     firebase.analytics();
      //   }
        firebase.initializeApp(firebaseConfig)
         
export default firebase