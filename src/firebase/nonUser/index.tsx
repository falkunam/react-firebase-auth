import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../config";

interface NonUserProps {
  children: React.ReactNode;
}

const NonUser: React.FC<NonUserProps> = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (user) {
    const isPasswordProvider = user.providerData.some(
      (provider) => provider.providerId === "password"
    );

    if (isPasswordProvider && !user.emailVerified) {
      console.log('User email not verified');
      return <Navigate to="/sign-in" />;
    }

    console.log('User authenticated and email verified');
    return <Navigate to="/dashboard" />;
  }

  console.log('No user, rendering children');
  return <>{children}</>;
};

export default NonUser;
