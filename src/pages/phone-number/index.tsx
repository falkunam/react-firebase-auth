import { useRef, useState, KeyboardEvent } from "react";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { auth } from "../../firebase/config";
import { codeVerification, signInWithPhoneAuth } from "../../firebase/authentication/phoneAuth";

const PhoneNumber = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const otpBoxReference = useRef<HTMLInputElement[]>([]);

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [verificationCode, setVerificationCode] = useState<boolean>(false);

  const numberOfDigits = 6;

  const handleChange = (value: string, index: number) => {
    const newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1].focus();
    }
  };

  const handleBackspaceAndEnter = (
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (
      e.key === "Enter" &&
      e.currentTarget.value &&
      index < numberOfDigits - 1
    ) {
      otpBoxReference.current[index + 1].focus();
    }
  };

  console.log("otp", otp, auth)
  return (
    <>
      <div id="recaptcha-container"></div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-slate-200 p-10 rounded-lg shadow-xl w-96">
          {!verificationCode ? (
            <>
              <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in with Phone Number
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Verify your phone number
              </p>
              <form className="mx-auto max-w-3xl space-y-6 mt-5">
                <Input
                  label="Phone Number"
                  name="tel"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />
                <Button
                  type="button"
                  text="Send Verification Code"
                  handleClick={() =>
                    signInWithPhoneAuth(phoneNumber, setVerificationCode)
                  }
                />
              </form>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Enter your OTP
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Please Enter the otp send to your phone number
              </p>
              <form className="mx-auto max-w-3xl space-y-6 mt-5">
                <div className="flex items-center gap-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      value={digit}
                      maxLength={1}
                      onChange={(e) => handleChange(e.target.value, index)}
                      onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
                      ref={(ref) => (otpBoxReference.current[index] = ref!)}
                      className="mt-1 block w-full rounded-md border-0 p-2 shadow-sm placeholder:text-gray-400 outline-none"
                    />
                  ))}
                </div>
                <Button
                  type="button"
                  text="Verify OTP"
                  handleClick={() => codeVerification(otp.join(''), navigate)}
                />
              </form>
            </>
          )}
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
    </>
  );
};

export default PhoneNumber;