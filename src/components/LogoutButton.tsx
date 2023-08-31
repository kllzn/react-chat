import { FC } from "react";

interface LogoutButtonProps {}

const LogoutButton: FC<LogoutButtonProps> = () => {
  return <button className="font-medium underline text-sm">Logout.</button>;
};

export default LogoutButton;
