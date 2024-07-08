import React, { useState } from "react";
import { User } from "firebase/auth";
import Button from "../../../components/Button";
// import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import { updateUserEmail } from "../../../firebase/authetication/emailAuth";


type UpdateEmailProps = {
  user: User;
};

const UpdateEmail: React.FC<UpdateEmailProps> = ({ user }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>(user?.email as string);
  const [newEmail, setNewEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b  pb-12 md:grid-cols-2">
        <div>
          <h2 className="text-base font-semibold leading-7">Email</h2>
          <p className="mt-1 text-sm leading-6">Update your email address</p>
        </div>

        <div className="flex justify-end">
          <div className="w-1/2 mt-4">
            <Button
              text="Update Email"
              type="button"
              handleClick={() => setOpen(!open)}
            />
          </div>
          {/* <Modal open={open} onClose={() => setOpen(false)}>
            <div className="flex flex-col gap-4 mt-5">
              <Input
                label="Current Email address"
                name="email"
                value={email}
                onChange={setEmail}
              />
              <Input
                label="New Email address"
                name="email"
                value={newEmail}
                onChange={setNewEmail}
              />
              <Input
                label="Password"
                name="password"
                value={password}
                onChange={setPassword}
              />
              <Button
                text="Update Email"
                type="button"
                handleClick={() => updateUserEmail(email, newEmail, password)}
              />
            </div>
          </Modal> */}
        </div>
      </div>
    </div>
  );
};

export default UpdateEmail;