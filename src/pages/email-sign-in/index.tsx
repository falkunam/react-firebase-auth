import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { loginInWithEmailLink, sendEmailLinkAuth } from "../../firebase/authentication/emailAuth";

const EmailSignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    loginInWithEmailLink(navigate);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendEmailLinkAuth(email);
    setEmail("");
  };

  console.log("1111", window.location.href);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-slate-200 p-10 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign In with Email Link
        </h2>
        <form
          className="flex flex-col gap-4 mt-5"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            label="Email address"
            name="email"
            value={email}
            onChange={setEmail}
          />
          <Button type="submit" text="Send Email Link" />
        </form>
        <div className="lg:flex lg:flex-1 lg:justify-center lg:gap-4 mt-5">
          <Link to="/" className="text-sm font-semibold leading-6 mb-2">
            <span className="text-[18px]" aria-hidden="true">
              &larr;
            </span>{" "}
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailSignIn;