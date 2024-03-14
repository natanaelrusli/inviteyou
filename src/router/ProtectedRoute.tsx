import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  user,
  children,
}: {
  user: string;
  children: ReactNode;
}) => {
  if (!user) {
    return <Navigate to={"/"} replace />;
  }

  return children;
};

export default ProtectedRoute;
