import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const auth = { token: true }; // logic auth

  return auth.token ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoute;
