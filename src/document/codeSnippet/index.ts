export const firebaseConfigSnippet =
  `// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);`
  ;

export const signUpSnippet = `import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });`;

export const signInSnippet = `import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });`;

export const sendSignInLinkSnippet = `import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

const sendSignInLinkToEmail = (email) => {
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://www.example.com/finishSignUp?cartId=1234',
    handleCodeInApp: true,
  };

  sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    window.localStorage.setItem('emailForSignIn', email);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
};`

export const signInWithEmailLinkSnippet = `import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

const signInWithEmailLink = (email, windowLocationHref) => {
  if (isSignInWithEmailLink(auth, window.location.href)) {
 
  let email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
    email = window.prompt('Please provide your email for confirmation');
  }

  signInWithEmailLink(auth, email, window.location.href)
    .then((result) => {
      window.localStorage.removeItem('emailForSignIn');
    })
    .catch((error) => {
      const errorCode = error.code;
    const errorMessage = error.message;
    });
  }
};
`

export const googleSignInSnippet = `import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();

// Optional: Add custom scopes
googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// Optional: Set custom parameters (e.g., language)
googleProvider.setCustomParameters({
  prompt: 'select_account',
  login_hint: 'user@example.com',
  // Specify the preferred language for the OAuth consent screen
  hl: 'en'
});

signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });`