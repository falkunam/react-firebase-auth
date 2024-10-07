import { useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase/config";
import { deleteUserAccount } from "../../../firebase/authentication/userAuth";

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

   const providerData = auth?.currentUser?.providerData || [];

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
            {providerData.map((provider) => {
              if (provider.providerId === "password") {
                return (
                  <div className="flex flex-col gap-4 mt-5" key={provider.providerId}>
                    <Input
                      label="Password"
                      name="password"
                      value={password}
                      onChange={setPassword}
                    />
                    <Button
                      text="Confirm delete"
                      type="button"
                      handleClick={() => deleteUserAccount(navigate, provider.providerId, password)}
                    />
                  </div>
                );
              } else {
                return (
                  <div className="flex flex-col gap-4 mt-5" key={provider.providerId}>
                    <Button
                      text={`Confirm delete ${provider.providerId}`}
                      type="button"
                      handleClick={() => deleteUserAccount(navigate, provider.providerId)}
                    />
                  </div>
                );
              }
            })}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;