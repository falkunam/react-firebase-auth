import { toast } from "react-toastify";
import { NavigateFunction } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import {
  AuthProvider,
  GoogleAuthProvider,
  linkWithCredential,
  signInAnonymously,
  signInWithPopup,
} from "firebase/auth";
import { firebaseAuthErrorMessage } from "../../errorHandler";
import { auth } from "../../config";

// const savePendingCred = (credential: AuthCredential) => {
//     sessionStorage.setItem("pendingCred", JSON.stringify(credential));
// };

export const loginWithProvider = async (
  navigate: NavigateFunction,
  provider: AuthProvider
) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    navigate("/dashboard");
    toast.success("Signed in successfully:");

    // Example: Reauthenticate before performing a sensitive operation
    // Uncomment and adjust as per your specific needs
    // const reauthResult = await reauthenticateWithPopup(auth.currentUser, appleProvider);
    // const reauthUser = reauthResult.user;
    // Proceed with sensitive operation after successful reauthentication
  } catch (error) {
    if (error instanceof FirebaseError) {
      firebaseAuthErrorMessage(error);
      //   const pendingCred = error?.credential;
      //   savePendingCred(pendingCred);
    }
    console.error(error);
  }
};

export const handleSignInAnonymously = async (navigate: NavigateFunction) => {
  try {
    await signInAnonymously(auth);
    navigate("/");
  } catch (error) {
    if (error instanceof FirebaseError) {
      firebaseAuthErrorMessage(error);
    }
  }
};

export const convertAnonymousToGoogle = async (navigate: NavigateFunction) => {
  try {
    const provider = new GoogleAuthProvider();
    const user = auth.currentUser;

    if (user) {
      // Sign in with Google popup (assuming the user is already authenticated with Google)
      const credential = await signInWithPopup(auth, provider);

      // Link anonymous account with Google account
      // await linkWithCredential(user, credential);

      toast.success(
        "Anonymous account converted to permanent account with Google successfully."
      );
      navigate("/");
    } else {
      toast.error("No user currently signed in.");
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      firebaseAuthErrorMessage(error);
    }
  }
};