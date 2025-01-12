import { RouteObject } from "react-router-dom";
import AuthLayout from "./layouts/Auth/AuthLayout";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import MainLayout from "./layouts/Main/MainLayout";
import HomePage from "./pages/Home";

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
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];

export { routes };
