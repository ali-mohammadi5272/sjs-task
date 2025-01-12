import { RouteObject } from "react-router-dom";
import AuthLayout from "./layouts/Auth/AuthLayout";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";

const routes: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
];

export { routes };
