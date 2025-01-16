import { useEffect } from "react";
import { authLayoutRoutePattern } from "./../../utils/patterns";
import { getCookie } from "../../utils/helperFunctions";
import { tokens } from "../../utils/constants";
import {
  Location,
  NavigateFunction,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

const AuthLayout = (): React.ReactNode => {
  const navigate: NavigateFunction = useNavigate();
  const location: Location = useLocation();

  useEffect(() => {
    const refreshToken: string | undefined = getCookie(tokens.REFRESH_TOKEN);
    
    const isUserLoggedIn = !!refreshToken;

    if (isUserLoggedIn) {
      navigate("/dashboard", { replace: true });
    }
    else {
      const isOnlyAuthLayoutRoute: boolean = authLayoutRoutePattern.test(
        location.pathname
      );
      
      if (isOnlyAuthLayoutRoute) {
        navigate("/auth/login", { replace: true });
      }
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
