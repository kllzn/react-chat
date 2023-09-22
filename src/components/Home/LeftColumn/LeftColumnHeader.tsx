import { useContext } from "react";
import LogoutButton from "../../LogoutButton";
import { AuthContext } from "../../../context/AuthContext";

const LeftColumnHeader = () => {
  const currentUser = useContext(AuthContext);
  return (
    <div className="flex items-center p-4 border-b-2">
      <div className=" flex items-center gap-4  flex-1">
        <div className="w-12 h-12 rounded-[50%] bg-gray-300">
          <img
            src={currentUser!.photoURL!}
            alt=""
            className="w-full max-w-full max-h-full h-full object-cover rounded-[50%]"
          />
        </div>
        <span className=" text-xl font-bold">{currentUser!.displayName}</span>
      </div>
      <div>
        <LogoutButton></LogoutButton>
      </div>
    </div>
  );
};

export default LeftColumnHeader;
