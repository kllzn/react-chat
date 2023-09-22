import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

interface ProtecredRouteProps {
  children: React.ReactNode;
}

export const ProtecredRoute: React.FC<ProtecredRouteProps> = ({ children }) => {
  const currentUser = useContext(AuthContext);
  if (!currentUser) {
    return <Navigate to="/login/" />;
  }
  return children;
};
