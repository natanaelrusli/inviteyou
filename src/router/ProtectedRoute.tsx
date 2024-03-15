import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const auth = { token: true };

  return auth.token ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoute;
