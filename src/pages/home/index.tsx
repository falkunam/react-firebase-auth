import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  FaFacebookF,
  FaApple,
  FaTwitter,
  FaGithub,
  FaMicrosoft,
  FaYahoo,
  FaOpenid,
  FaPhone,
} from "react-icons/fa";
import { MdOutlineEmail, MdLogin } from "react-icons/md";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import { signInWithCustomToken } from "firebase/auth/cordova";
import { handleSignInAnonymously, loginWithProvider } from "../../firebase/authetication/providerAuth";

interface ButtonProps {
  bgColor: string;
  textColor: string;
  text: string;
  onClick: () => void;
  icon?: JSX.Element;
}

const Home = () => {
  const navigate = useNavigate();
  const Button: React.FC<ButtonProps> = ({
    bgColor,
    textColor,
    text,
    onClick,
    icon,
  }) => (
    <button
      onClick={onClick}
      className={`w-full p-3 mt-3 flex justify-center items-center gap-2 ${bgColor} rounded text-${textColor}`}
    >
      {icon} {text}
    </button>
  );

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-slate-200 p-10 rounded-lg shadow-xl w-96">
          <div className="mb-4">
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center font-medium leading-6">
                <span className="px-2 bg-slate-200 text-gray-900">
                  <Link
                    to="/document"
                    className="flex justify-end leading-6 font-semibold text-cyan-600 hover:text-cyan-700"
                  >
                    Document
                  </Link>
                </span>
              </div>
            </div>
          </div>

          <Link
            className="w-full flex justify-center items-center gap-2 mt-3 text-center leading-6 font-semibold text-cyan-600 hover:text-cyan-700"
            to="/sign-in"
          >
            <MdLogin size={20} /> Sign in
          </Link>

          <Link
            className="w-full p-3 mt-3 flex justify-center items-center gap-2 rounded text-white bg-cyan-600"
            to="/email-sign-in"
          >
            <MdOutlineEmail size={20} /> Sign up with Email Link
          </Link>

          <Button
            bgColor="bg-white"
            textColor="black"
            text="Sign In with Google"
            onClick={() =>
              loginWithProvider(navigate, new GoogleAuthProvider())
            }
            icon={<FcGoogle size={20} />}
          />

          <Button
            bgColor="bg-[#4267B2]"
            textColor="white"
            text="Sign In with Facebook"
            onClick={() =>
              loginWithProvider(navigate, new FacebookAuthProvider())
            }
            icon={<FaFacebookF size={20} />}
          />

          <Button
            bgColor="bg-[#1DA1F2]"
            textColor="white"
            text="Sign In with Twitter"
            onClick={() =>
              loginWithProvider(navigate, new TwitterAuthProvider())
            }
            icon={<FaTwitter size={20} />}
          />

          <Button
            bgColor="bg-[#24292E]"
            textColor="white"
            text="Sign In with Github"
            onClick={() =>
              loginWithProvider(navigate, new GithubAuthProvider())
            }
            icon={<FaGithub size={20} />}
          />

          <Link
            className="w-full p-3 mt-3 flex justify-center items-center gap-2 rounded text-white bg-[#34C759]"
            to="/phone-auth"
          >
            <FaPhone size={20} /> Sign In with Phone Number
          </Link>

          <Button
            bgColor="bg-[#dadcd3]"
            textColor="black"
            text="Sign In Anonymously"
            onClick={() => handleSignInAnonymously(navigate)}
            icon={<FaPersonCircleQuestion size={20} />}
          />

          <Button
            bgColor="bg-[#fff]"
            textColor="black"
            text="Custom Authentication"
            onClick={() =>
              signInWithCustomToken(
                auth,
                "34dsfg434u3589fvdjutifdvjk6th7ijuy87j"
              )
            }
            icon={<FaPersonCircleQuestion size={20} />}
          />

          <Button
            bgColor="bg-[#000]"
            textColor="white"
            text="Sign In with Apple"
            onClick={() =>
              loginWithProvider(navigate, new OAuthProvider("apple.com"))
            }
            icon={<FaApple size={20} />}
          />

          <Button
            bgColor="bg-[#252525]"
            textColor="white"
            text="Sign In with Microsoft"
            onClick={() =>
              loginWithProvider(navigate, new OAuthProvider("microsoft.com"))
            }
            icon={<FaMicrosoft size={20} />}
          />

          <Button
            bgColor="bg-[#430074]"
            textColor="white"
            text="Sign In with Yahoo"
            onClick={() =>
              loginWithProvider(navigate, new OAuthProvider("yahoo.com"))
            }
            icon={<FaYahoo size={20} />}
          />

          {/* <Button
            bgColor="bg-[#4F8CCB]"
            textColor="white"
            text="Sign In with OpenID Connect"
            onClick={() => loginWithProvider(navigate, new OAuthProvider("oidc"))}
            icon={<FaOpenid size={20} />}
          />

          <Button
            bgColor="bg-[#0099CC]"
            textColor="white"
            text="Sign In with SAML"
            onClick={() => loginWithProvider(navigate, new SAMLAuthProvider())}
            icon={<FcGoogle size={20} />}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Home;