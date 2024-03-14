import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  isInvited,
  children,
}: {
  isInvited: boolean;
  children: ReactNode;
}) => {
  if (!isInvited) {
    return <Navigate to={"/"} replace />;
  }

  return children;
};

export default ProtectedRoute;
