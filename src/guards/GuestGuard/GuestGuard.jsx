import { Navigate } from "react-router-dom";
import { PATH_NAME } from "../../configs";

export const GuestGuard = ({ children }) => {
  const isAuth = false;
  if (isAuth) return <Navigate to={PATH_NAME.ROOT} />;
  return children;
};
