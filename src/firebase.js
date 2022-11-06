// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCayjvFjAE3-Cr-yJsYo9FzMOkMZAk1K8Y",
//   authDomain: "altschool-second-semeste-c1010.firebaseapp.com",
//   projectId: "altschool-second-semeste-c1010",
//   storageBucket: "altschool-second-semeste-c1010.appspot.com",
//   messagingSenderId: "173705074133",
//   appId: "1:173705074133:web:de542bcd916b2bd8ea995c",
//   measurementId: "G-7YJDM582X4",
// };

const firebaseConfig = {
  apiKey: "AIzaSyC4E8A65jRY7jGoeKaOnOx-NkrcTUo1fF4",
  authDomain: "altschool-second-semester.firebaseapp.com",
  projectId: "altschool-second-semester",
  storageBucket: "altschool-second-semester.appspot.com",
  messagingSenderId: "220118838861",
  appId: "1:220118838861:web:a2dc10221e82bf1b9ab604",
  measurementId: "G-0R92F0P5M5"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC4E8A65jRY7jGoeKaOnOx-NkrcTUo1fF4",
//   authDomain: "altschool-second-semester.firebaseapp.com",
//   projectId: "altschool-second-semester",
//   storageBucket: "altschool-second-semester.appspot.com",
//   messagingSenderId: "220118838861",
//   appId: "1:220118838861:web:a2dc10221e82bf1b9ab604",
//   measurementId: "G-0R92F0P5M5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);