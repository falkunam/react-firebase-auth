export const firebaseConfigSnippet = `import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };`;

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
};`;

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
};`;

export const googleSignInSnippet = `import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

// Optional: Add custom scopes
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

// Optional: Set custom parameters 
provider.setCustomParameters({
  prompt: 'select_account',
  login_hint: 'user@example.com',
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
  });`;

export const facebookSignInSnippet = `import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new FacebookAuthProvider();

// Optional: Add custom scopes
provider.addScope('email');

// Optional: Set custom parameters
provider.setCustomParameters({
  display: 'popup',
});

signInWithPopup(auth, provider)
  .then((result) => {
   
    const user = result.user;
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = FacebookAuthProvider.credentialFromError(error);
  });`;

export const githubSignInSnippet = `import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new GithubAuthProvider();

// Optional: Add custom scopes
provider.addScope('repo');

// Optional: Set custom parameters
provider.setCustomParameters({
  allow_signup: 'false',
});

signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  
  }).catch((error) => {
   
    const errorCode = error.code;
    const errorMessage = error.message;
   
    const email = error.customData.email;
    const credential = GithubAuthProvider.credentialFromError(error);
  });`;

export const twitterSignInSnippet = `import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new TwitterAuthProvider();

// Optional: Add custom scopes
provider.addScope('custom-scope');

// Optional: Set custom parameters (e.g., language)
provider.setCustomParameters({
  lang: 'en'
});

signInWithPopup(auth, provider)
  .then((result) => {
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const secret = credential.secret;
    const user = result.user;

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = TwitterAuthProvider.credentialFromError(error);

  });`;

export const yahooSignInSnippet = `import { getAuth, signInWithPopup, OAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new OAuthProvider('yahoo.com');

// Optional: Add custom scopes
provider.addScope('openid');
provider.addScope('email');

// Optional: Set custom parameters 
provider.setCustomParameters({
  prompt: 'login',
  language: 'en'
});

signInWithPopup(auth, provider)
  .then((result) => {
    // IdP data available in result.additionalUserInfo.profile
    // ...

    // Yahoo OAuth access token and ID token can be retrieved by calling:
    const credential = OAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    const idToken = credential.idToken;
  })
  .catch((error) => {
    // Handle error.
  });`;

export const setupRecaptchaSnippet = `import { getAuth, RecaptchaVerifier } from "firebase/auth";

const auth = getAuth();
window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
  'size': 'normal',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
  },
  'expired-callback': () => {
    // Response expired. Ask user to solve reCAPTCHA again.
  }
});`;

export const sendVerificationCodeSnippet = `import { getAuth, signInWithPhoneNumber } from "firebase/auth";

const phoneNumber = getPhoneNumberFromUserInput();
const appVerifier = window.recaptchaVerifier;

const auth = getAuth();
signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
    
    }).catch((error) => {
      // Error; SMS not sent

    });`;

export const verifyCodeSnippet = `const code = getCodeFromUserInput();
confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;

}).catch((error) => {
  // User couldn't sign in (bad verification code?)
});`;

export const customAuthSnippet = ``;

export const anonymousSignInSnippet = `import { getAuth, signInAnonymously } from "firebase/auth";

const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
     const user = result.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });`;

export const linkAnonymousAccountSnippet = `import { getAuth, GoogleAuthProvider } from "firebase/auth;

const auth = getAuth();
const provider = new GoogleAuthProvider();
const user = auth.currentUser;

if (user) {
  await signInWithPopup(auth, provider);

  console.log(
        "Anonymous account converted to permanent account with Google successfully."
  );
} else {
      console.error("No user currently signed in.");
};`;
