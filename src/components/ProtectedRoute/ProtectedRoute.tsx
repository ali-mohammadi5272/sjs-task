import { useState } from "react";
import { tokens } from "../../utils/constants";
import { getCookie } from "../../utils/helperFunctions";
import { Navigate } from "react-router-dom";
import { ProtectedRoutePropsType } from "./protectedRoute.type";

const ProtectedRoute: React.FC<ProtectedRoutePropsType> = ({ children }) => {
  const [isLogin, _] = useState<boolean>(
    getCookie(tokens.REFRESH_TOKEN) ? true : false
  );

  return isLogin ? children : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;
