import { useLayoutEffect, useState } from "react";
import { tokens } from "../../utils/constants";
import { getCookie } from "../../utils/helperFunctions";
import { Navigate } from "react-router-dom";
import { ProtectedRoutePropsType } from "./protectedRoute.type";

const ProtectedRoute: React.FC<ProtectedRoutePropsType> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  useLayoutEffect(() => {
    const cookie: string = getCookie(tokens.REFRESH_TOKEN);

    if (!cookie) {
      setIsLogin(false);
    }
  }, []);

  return isLogin ? children : <Navigate to="/auth/login" />;
};

export default ProtectedRoute;
