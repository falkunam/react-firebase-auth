import { FirebaseError } from "firebase/app";
import {
  EmailAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  deleteUser,
  reauthenticateWithCredential,
  reauthenticateWithPopup,
  signOut,
} from "firebase/auth";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../config";
import { firebaseAuthErrorMessage } from "../../errorHandler";

export const deleteUserAccount = async (
  navigate: NavigateFunction,
  providerId: string,
  password?: string
) => {
  const user = auth?.currentUser;
  if (!user || user === null) return;

  try {
    // Handle Google user
    if (providerId === "google.com") {
      const googleProvider = new GoogleAuthProvider();
      await reauthenticateWithPopup(user, googleProvider);
      await deleteUser(user);
      navigate("/");
      toast.success("Successfully deleted Google user.");
      return;
    }

    // Handle GitHub user
    if (providerId === "github.com") {
      const githubProvider = new GithubAuthProvider();
      await reauthenticateWithPopup(user, githubProvider);
      await deleteUser(user);
      navigate("/");
      toast.success("Successfully deleted GitHub user.");
      return;
    }

    // Handle email user
    if (providerId === "password") {
      if (!password || password === "") {
        toast.warning("Please enter your password");
        return;
      }
      const userEmail = user.email as string;
      const credential = EmailAuthProvider.credential(userEmail, password);
      await reauthenticateWithCredential(user, credential);
      await deleteUser(user);
      navigate("/");
      toast.success("Successfully deleted email user.");
      return;
    }

  } catch (error) {
    if (error instanceof FirebaseError) {
      firebaseAuthErrorMessage(error);
      return;
    }
  }
};

export const signOutUser = async (navigate: NavigateFunction) => {
  try {
    await signOut(auth);
    toast.success("You have been signed out.");
    navigate("/");
  } catch (error) {
    if (error instanceof FirebaseError) {
      firebaseAuthErrorMessage(error);
    }
    console.error(error);
  }
};
