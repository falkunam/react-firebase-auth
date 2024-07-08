import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState } from "react";
import Typography from "../../components/Typography";
import { registerUser } from "../../firebase/authetication/emailAuth";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerUser(name, email, password, navigate);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-slate-200 p-10 rounded-lg shadow-xl w-96">
        <Typography isRegisterPage />
        <form
          className="flex flex-col gap-4 mt-5"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            label="First Name"
            name="text"
            value={name}
            onChange={setName}
          />
          <Input
            label="Last Name"
            name="text"
            value={lastName}
            onChange={setLastName}
          />
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
          <Button text="Register" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
