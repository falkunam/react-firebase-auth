import { Link } from "react-router-dom";

interface TypographyProps {
  isRegisterPage?: boolean;
  isForgotPassword?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  isRegisterPage,
  isForgotPassword,
}) => {
  if (isRegisterPage) {
    return (
      <>
        <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign Up
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Are you a member?{" "}
          <Link
            to="/sign-in"
            className={'cursor-pointer font-semibold text-cyan-600 hover:text-cyan-600'}
          >
            {" "}
            Sign In
          </Link>
        </p>
      </>
    );
  }

  if (isForgotPassword) {
    return (
      <>
        <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Forgot your Password?
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Enter your email and we'll send you instruction to reset your password
        </p>
      </>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign In
      </h2>
      <p className="mt-2 text-sm leading-6 text-gray-500">
        Not a member?{" "}
        <Link
          to="/sign-up"
          className={'cursor-pointer font-semibold text-cyan-600 hover:text-cyan-600'}
        >
          {" "}
          Register Now
        </Link>
      </p>
    </>
  );
};

export default Typography;