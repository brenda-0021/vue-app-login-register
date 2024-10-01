// Importa las funciones necesarias desde Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC8JfK5XBQj99F1BCWaPNLCigK0P4OTWII",
  authDomain: "vue-js-login-9e07e.firebaseapp.com",
  projectId: "vue-js-login-9e07e",
  storageBucket: "vue-js-login-9e07e.appspot.com",
  messagingSenderId: "918871727082",
  appId: "1:918871727082:web:4d88c38b438aeb3ccf3093",
};

// Inicializar Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Inicializar Firestore y Auth
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
