import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { signOutUser } from "../../firebase/authetication/userAuth";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  console.log("user", user);

  return (
    <nav
      className="flex items-center justify-between p-6 lg:p-8 bg-slate-200"
      aria-label="Global"
    >
      <h1 className="text-2xl mr-5">Dashboard</h1>
      <div className="lg:flex lg:flex-1 lg:justify-end lg:gap-4">
        <div className="flex gap-4 flex-col lg:flex-row">
          <p
            onClick={() => signOutUser(navigate)}
            className="text-sm font-semibold leading-6 cursor-pointer text-cyan-600"
          >
            Sign Out
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Header;