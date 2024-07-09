import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/config";
import { deleteUserAccount } from "../../../firebase/authetication/userAuth";

const DeleteUser = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const isEmailUser = auth?.currentUser?.providerData.some(
    (provider) => provider.providerId === "password"
  );
  const isGoogleUser = auth?.currentUser?.providerData.some(
    (provider) => provider.providerId === "google.com"
  );

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b  pb-12 md:grid-cols-2">
        <div>
          <h2 className="text-base font-semibold leading-7">Account</h2>
          <p className="mt-1 text-sm leading-6">Delete your account</p>
        </div>

        <div className="flex justify-end">
          <div className="w-1/2 mt-4">
            <Button
              text="Delete Account"
              type="button"
              handleClick={() => setOpen(!open)}
            />
          </div>
          <Modal open={open} onClose={() => setOpen(false)}>
            {isEmailUser && (
              <div className="flex flex-col gap-4 mt-5">
                <Input
                  label="Password"
                  name="password"
                  value={password}
                  onChange={setPassword}
                />
                <Button
                  text="Confirm delete"
                  type="button"
                  handleClick={() => deleteUserAccount(navigate, true, false)}
                />
              </div>
            )}
            {isGoogleUser && (
              <div className="flex flex-col gap-4 mt-5">
                <Button
                  text="Confirm delete"
                  type="button"
                  handleClick={() =>
                    deleteUserAccount(navigate, false, true, password)
                  }
                />
              </div>
            )}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;