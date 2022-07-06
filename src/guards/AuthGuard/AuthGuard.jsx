import { Navigate } from "react-router-dom";
import { PATH_NAME } from "../../configs/routes";
export const AuthGuard = ({ children }) => {
  const isAuth = false;
  if (!isAuth) return <Navigate to={PATH_NAME.HOME} />;
  return children;
};
