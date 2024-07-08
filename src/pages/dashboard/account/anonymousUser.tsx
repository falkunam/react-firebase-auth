import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { convertAnonymousToGoogle } from "../../../firebase/authetication/providerAuth";

const AnonymousUser = () => {
  const navigate = useNavigate();


  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b  pb-12 md:grid-cols-2">
        <div>
          <h2 className="text-base font-semibold leading-7">Anonymous User</h2>
          <p className="mt-1 text-sm leading-6">Convert Anonymous user to Google Credential</p>
        </div>

        <div className="flex justify-end">
          <div className="w-1/2 mt-4">
            <Button
              text="Permanent user"
              type="button"
              handleClick={() => convertAnonymousToGoogle(navigate)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnonymousUser;