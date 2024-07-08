import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyC8mgiDaJZJJDe9XC8Zvbz0bA-d_8tTXAE",
  authDomain: "first-demo-b8d2e.firebaseapp.com",
  databaseURL: "https://first-demo-b8d2e-default-rtdb.firebaseio.com",
  projectId: "first-demo-b8d2e",
  storageBucket: "first-demo-b8d2e.appspot.com",
  messagingSenderId: "977137625962",
  appId: "1:977137625962:web:f129fb7a589df60f365313",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
auth.settings.appVerificationDisabledForTesting = true;
setPersistence(auth, browserSessionPersistence);

const messaging = getMessaging(app);

export { app, auth, messaging };