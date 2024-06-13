import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZ4tYIDN-XjMiTyOdO-SRzJcZmH1sv6K8",
  authDomain: "exam-tasks.firebaseapp.com",
  projectId: "exam-tasks",
  storageBucket: "exam-tasks.appspot.com",
  messagingSenderId: "845250195701",
  appId: "1:845250195701:web:b89e7d45c6dc78897d15bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);