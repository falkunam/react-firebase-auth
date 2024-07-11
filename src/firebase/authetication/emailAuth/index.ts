import { NavigateFunction } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updateEmail,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  isSignInWithEmailLink,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { toast } from "react-toastify";
import { auth } from "../../config";
import { firebaseAuthErrorMessage } from "../../errorHandler";

export const registerUser = async (
  name: string,
  email: string,
  password: string,
  navigate: NavigateFunction
) => {
  try {
    // create a new user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const results = userCredential.user;

    // Send an email verification to the users email
    await sendEmailVerification(results);
    alert(
      `A verification email has been sent to your email address ${name}!. Please verify your email to login.`
    );
    navigate("/dashboard");
  } catch (error) {
    if (error instanceof FirebaseError) {
      firebaseAuthErrorMessage(error);
    }
    console.error(error);
  }
};

export const loginUserWithEmailAndPassword = async (
  email: string,
  password: string,
  navigate: NavigateFunction
) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const results = userCredential.user;
    // if (results.emailVerified === false) {
    //   toast.error("Please verify your email to login.");
    //   return;
    // }
    navigate("/dashboard");
  } catch (error) {
    if (error instanceof FirebaseError) {
      firebaseAuthErrorMessage(error);
    }
    console.error(error);
  }
};

export const updateUserEmail = async (
  email: string,
  newEmail: string,
  password: string
) => {
  try {
    if (auth.currentUser === null) return;

    // Reauthenticate the user before updating the email
    const credential = EmailAuthProvider.credential(email, password);
    await reauthenticateWithCredential(auth.currentUser, credential);

    // Update the email after successful reauthenticate
    await updateEmail(auth.currentUser, newEmail);

    await sendEmailVerification(auth.currentUser);
    alert(
      `A verification email has been sent to your new email address ${newEmail}!. Please verify your email to login.`
    );
  } catch (error) {
    if (error instanceof FirebaseError) {
      firebaseAuthErrorMessage(error);
    }
    console.error(error);
  }
};

export const sendEmailLinkAuth = async (email: string) => {
  try {
    await sendSignInLinkToEmail(auth, email, {
      url: `${window.location.origin}/email-sign-in`,
      handleCodeInApp: true,
    }).then(() => {
      window.localStorage.setItem("emailForSignIn", email);
      alert("Email link sent! Check your inbox.");
    });
  } catch (error) {
    if (error instanceof FirebaseError) {
      firebaseAuthErrorMessage(error);
    }
    console.error(error);
  }
};

export const loginInWithEmailLink = async (navigate: NavigateFunction) => {
  if (isSignInWithEmailLink(auth, window.location.href)) {
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      email = window.prompt("Please provide your email for confirmation");
      if (!email) {
        return;
      }
    }
    try {
      await signInWithEmailLink(auth, email, window.location.href);
     
      // if (auth.currentUser === null) return;
      // const credential = EmailAuthProvider.credentialWithLink(
      //   email,
      //   window.location.href
      // );
      // await reauthenticateWithCredential(auth.currentUser, credential);

      // await linkWithCredential(currentUser, credential)
      // window.localStorage.removeItem("emailForSignIn");
      navigate("/dashboard");
      toast.success("Successfully reauthenticated with email link.");
    } catch (error) {
      if (error instanceof FirebaseError) {
        firebaseAuthErrorMessage(error);
      }
      console.error(error);
    }
  }
};