import {
  sendPasswordResetEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import { NavigateFunction } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { toast } from "react-toastify";
import { firebaseAuthErrorMessage } from "../../errorHandler";
import { auth } from "../../config";

export const forgotPassword = async (
  email: string,
  navigate: NavigateFunction
) => {
  try {
    if (email === "") {
      toast.warning("Please enter your email address!");
      return;
    }
    // send password reset email
    await sendPasswordResetEmail(auth, email);
    navigate("/sign-in");
  } catch (error) {
    if (error instanceof FirebaseError) {
      firebaseAuthErrorMessage(error);
    }
    console.error(error);
  }
};

export const updateUserPassword = async (
  currentPassword: string,
  newPassword: string,
  navigate: NavigateFunction
) => {
  try {
    //  check if valid user
    const user = auth.currentUser;
    if (!user) return;

    if (
      !currentPassword ||
      currentPassword === "" ||
      currentPassword.length < 6
    ) {
      toast.warning("Please enter your current password");
      return;
    }

    if (!newPassword || newPassword === "") {
      toast.warning("Please enter your new password");
      return;
    }

    const credential = EmailAuthProvider.credential(
      user.email as string,
      currentPassword
    );
    // reauthenticate user
    await reauthenticateWithCredential(user, credential);

    await updatePassword(user, newPassword);
    navigate("/sign-in");
    toast.success("Password updated successfully");
  } catch (error) {
    if (error instanceof FirebaseError) {
      firebaseAuthErrorMessage(error);
    }
    console.error(error);
  }
};