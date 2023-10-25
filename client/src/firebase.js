import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDabMQks57pC9ITtvB1PLAz2MrEGu86oQI",
  authDomain: "e-discountify.firebaseapp.com",
  projectId: "e-discountify",
  storageBucket: "e-discountify.appspot.com",
  messagingSenderId: "522694543288",
  appId: "1:522694543288:web:59898deb629e5831a8714d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app
