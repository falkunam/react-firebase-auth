import { auth } from "../../config";
import {
  RecaptchaVerifier,
  signInWithCredential,
  signInWithPhoneNumber,
  PhoneAuthProvider,
} from "firebase/auth";
import { firebaseAuthErrorMessage } from "../../errorHandler";
import { FirebaseError } from "firebase/app";
import { toast } from "react-toastify";
import { NavigateFunction } from "react-router-dom";

// interface ExtendedWindow extends Window {
//   confirmationResult?: firebase.auth.ConfirmationResult;
// }

// declare let window: ExtendedWindow;

export const signInWithPhoneAuth = async (
  phoneNumber: string,
  setVerificationCode: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      },
      auth
    );
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      recaptchaVerifier
    );
    window.confirmationResult = confirmationResult;

    setVerificationCode(true);
  } catch (error) {
    if (error instanceof FirebaseError) {
      firebaseAuthErrorMessage(error);
    }
    console.error(error);
  }
};

export const codeVerification = async (
  otp: string,
  navigate: NavigateFunction
) => {
  try {
    await window.confirmationResult.confirm(otp);

    const credential = PhoneAuthProvider.credential(
      window.confirmationResult.verificationId,
      otp
    );
    // Sign in with the credential
    await signInWithCredential(auth, credential);

    navigate("/dashboard");
    toast.success("Successfully authenticated");
  } catch (error) {
    if (error instanceof FirebaseError) {
      firebaseAuthErrorMessage(error);
    }
    console.error(error);
  }
};