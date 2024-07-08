import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../config";

interface RequireUserProps {
  children: React.ReactNode;
}

const RequireUser: React.FC<RequireUserProps> = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );

  if (!user || user === null) return <Navigate to={"/sign-in"} />;
  return children;
};

export default RequireUser;
