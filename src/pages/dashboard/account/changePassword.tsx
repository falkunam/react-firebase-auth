import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
// import Modal from "../../../components/Modal";
import Input from "../../../components/Input";
import { updateUserPassword } from "../../../firebase/authetication/passwordAuth";


const ChangePassword = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b  pb-12 md:grid-cols-2">
        <div>
          <h2 className="text-base font-semibold leading-7">Password</h2>
          <p className="mt-1 text-sm leading-6">Update your password</p>
        </div>

        <div className="flex justify-end">
          <div className="w-1/2 mt-4">
            <Button
              text="Change Password"
              type="button"
              handleClick={() => setOpen(!open)}
            />
          </div>
          {/* <Modal open={open} onClose={() => setOpen(false)}>
            <div className="flex flex-col gap-4 mt-5">
              <Input
                label="Current Password"
                name="current-password"
                value={currentPassword}
                onChange={setCurrentPassword}
              />
              <Input
                label="New Password"
                name="new-password"
                value={newPassword}
                onChange={setNewPassword}
              />
              <Button
                text="Confirm password change"
                type="button"
                handleClick={() =>
                  updateUserPassword(currentPassword, newPassword, navigate)
                }
              />
            </div>
          </Modal> */}
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;