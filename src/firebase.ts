import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCOWU-lJblGD2-IdhwS0G9hhJyqJlbugjw",
  authDomain: "dog-care-b3b86.firebaseapp.com",
  projectId: "dog-care-b3b86",
  storageBucket: "dog-care-b3b86.appspot.com",
  messagingSenderId: "848740910793",
  appId: "1:848740910793:web:b44c36cd486b89bf9caf18",
  measurementId: "G-25NJN3LWM4"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const dbRef = ref(db);