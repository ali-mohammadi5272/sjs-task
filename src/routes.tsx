import { RouteObject } from "react-router-dom";
import AuthLayout from "./layouts/Auth/AuthLayout";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import MainLayout from "./layouts/Main/MainLayout";
import HomePage from "./pages/Home";
import DashboardPage from "./pages/Dashboard";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

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
    element: (
      <AuthProvider>
        <MainLayout />
      </AuthProvider>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
];

export { routes };
