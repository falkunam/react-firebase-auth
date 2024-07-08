import React from "react";

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

const Input: React.FC<InputProps> = ({ name, label, value, onChange }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <input
        type={name}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-md border-0 p-2 shadow-sm placeholder:text-gray-400 outline-none"
      />
    </div>
  );
};

export default Input;