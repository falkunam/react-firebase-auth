import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Typography from "../../components/Typography";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { loginUserWithEmailAndPassword } from "../../firebase/authentication/emailAuth";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUserWithEmailAndPassword(email, password, navigate);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-slate-200 p-10 rounded-lg shadow-xl w-96">
        <Typography />
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
          <Input
            label="Password"
            name="password"
            value={password}
            onChange={setPassword}
          />
          <Link
            to="/forgot-password"
            className="flex justify-end text-sm leading-6 font-semibold text-cyan-600 hover:text-cyan-700"
          >
            Forgot Password
          </Link>
          <Button type="submit" text="Sign In" />

          <div className="mt-4">
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm font-medium leading-6">
                <span className="px-2 bg-slate-200 text-gray-900">
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          <Link
            className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md hover:bg-cyan-700"
            to="/"
          >
            Sign In with SDK
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;