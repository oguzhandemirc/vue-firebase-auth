import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZJRNn94YKDQh0YLmu2KgezHV97T1GG9Y",
  authDomain: "fir-vue-be036.firebaseapp.com",
  projectId: "fir-vue-be036",
  storageBucket: "fir-vue-be036.appspot.com",
  messagingSenderId: "500354009709",
  appId: "1:500354009709:web:efcafffaf6085813c84d64",
  measurementId: "G-WFBNF1LEE9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const DB = getFirestore(app);

export { DB };
