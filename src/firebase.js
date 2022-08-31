import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBleG4Yxp4b875lqivM01GGPbLXpVtwSCA",
    authDomain: "react-task-manager-fb9b3.firebaseapp.com",
    projectId: "react-task-manager-fb9b3",
    storageBucket: "react-task-manager-fb9b3.appspot.com",
    messagingSenderId: "592528412731",
    appId: "1:592528412731:web:9f4a7d2b644e8c07758c1e",
    measurementId: "G-VR374YTT3Z"
  };

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}