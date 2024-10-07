import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import Typography from "../../components/Typography";
import { forgotPassword } from "../../firebase/authentication/passwordAuth";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    forgotPassword(email, navigate);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-slate-200 p-10 rounded-lg shadow-xl w-96">
          <Typography isForgotPassword />
          <form
            className="mx-auto max-w-3xl space-y-6 mt-5"
            onSubmit={(e) => handleSubmit(e)}
          >
            <Input
              label="Email address"
              name="email"
              value={email}
              onChange={setEmail}
            />
            <Button text="Reset Password" type="submit" />
          </form>
          <div className="lg:flex lg:flex-1 lg:justify-center lg:gap-4 mt-5">
            <Link
              to="/sign-in"
              className="text-sm font-semibold leading-6 mb-2"
            >
              <span className="text-[18px]" aria-hidden="true">
                &larr;
              </span>{" "}
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;