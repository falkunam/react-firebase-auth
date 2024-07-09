export const firebaseConfigSnippet =
    `import { initializeApp } from 'firebase/app';
  import { getAuth } from 'firebase/auth';

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

export const signInSnippet =
    `import React, { useState } from 'react';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../firebase';

  function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        // Redirect to Dashboard or handle success
      } catch (error) {
        console.error('Error signing in:', error);
      }
    };

    return (
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    );
  }

  export default SignIn;`
    ;