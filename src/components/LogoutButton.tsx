import { signOut } from "firebase/auth";
import { FC } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

interface LogoutButtonProps {}

const LogoutButton: FC<LogoutButtonProps> = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <button
      className="font-medium underline text-sm"
      onClick={() => handleSignOut()}>
      Logout.
    </button>
  );
};

export default LogoutButton;
