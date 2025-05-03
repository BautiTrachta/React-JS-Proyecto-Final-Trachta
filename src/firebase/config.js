import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyC92K-yoESH5RtSMoQQk9RwkBDjNgQcSVM",
    authDomain: "ecommerce-spa-b7df1.firebaseapp.com",
    projectId: "ecommerce-spa-b7df1",
    storageBucket: "ecommerce-spa-b7df1.firebasestorage.app",
    messagingSenderId: "463781417768",
    appId: "1:463781417768:web:d349dced29dc91c57ab61d",
    measurementId: "G-LJJVR491B9"
  };

  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);