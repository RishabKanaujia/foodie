
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDANJhvu7n1MzZ7xFEeYaZTSXyCfyR3c6I",
  authDomain: "qviq-demo.firebaseapp.com",
  projectId: "qviq-demo",
  storageBucket: "qviq-demo.appspot.com",
  messagingSenderId: "731513155952",
  appId: "1:731513155952:web:31552d30c38b37c598dfb5",
  measurementId: "G-QXZ0VMR92E"
};
  // REACT_APP_API_KEY= AIzaSyDANJhvu7n1MzZ7xFEeYaZTSXyCfyR3c6I
  // REACT_APP_AUTH_DOMAIN= qviq-demo.firebaseapp.com
  //   REACT_APP_PROJECT_ID= qviq-demo
  //   REACT_APP_STORAGE_BUCKET= qviq-demo.appspot.com
  //   REACT_APP_MESSAGING_SENDER_ID= 731513155952
  //   REACT_APP_APP_ID= 1:731513155952:web:31552d30c38b37c598dfb5
  //   REACT_APP_MEASUREMENT_ID = G-QXZ0VMR92E

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };