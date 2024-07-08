import { useAuthState } from "react-firebase-hooks/auth";
import { FaRegUser } from "react-icons/fa";
import Header from "../../components/Header";
import { auth } from "../../firebase/config";
import UpdateEmail from "./account/updateEmail";
import ChangePassword from "./account/changePassword";
import DeleteUser from "./account/deleteUser";
import AnonymousUser from "./account/anonymousUser";

const Dashboard = () => {
  const [user] = useAuthState(auth);

  if (!user || user === null) return <div>Not Found</div>;

  const isGoogleUser = user?.providerData[0]?.providerId === "google.com";
  const isAnonymousUser = user?.isAnonymous === true;

  return (
    <>
      {" "}
      <Header />
      <div className="text-center mt-20">
        <div className="relative">
          {user?.photoURL ? (
            <img
              src={user?.photoURL}
              alt={"user"}
              height={40}
              width={40}
              className="rounded-full object-cover shadow-lg mx-auto h-12 w-12"
            />
          ) : (
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-slate-200 mx-auto">
              <FaRegUser className="text-gray-600 text-2xl" />
            </div>
          )}
        </div>

        <p className="text-lg font-semibold">
          Welcome, {user?.displayName || "User"}!
        </p>
        <p className="text-gray-500">{user?.email}</p>
      </div>
      <main className="mx-auto max-w-2xl sm:px-6 lg:px-8">
        <div className="mt-6 gap-8 flex flex-col">
          {!isGoogleUser && (
            <>
              <UpdateEmail user={user} />
              <ChangePassword />
            </>
          )}
          <DeleteUser />
          {isAnonymousUser && (
            <AnonymousUser/>
          )}
        </div>
      </main>
    </>
  );
};

export default Dashboard;