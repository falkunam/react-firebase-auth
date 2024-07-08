import React from "react";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  text: string;
  handleClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ type, text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-md hover:bg-cyan-700"
    >
      {text}
    </button>
  );
};

export default Button;