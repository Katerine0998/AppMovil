import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAv2so1AAFhUGJMcV0hwaA4XGFTEbs4uRI",
    authDomain: "gestion-de-clinicas.firebaseapp.com",
    projectId: "gestion-de-clinicas",
    storageBucket: "gestion-de-clinicas.firebasestorage.app",
    messagingSenderId: "1044382893832",
    appId: "1:1044382893832:web:4f1a76ffea5ad07cc70ebd",
    measurementId: "G-CF76CMQNYF"
  };





const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
