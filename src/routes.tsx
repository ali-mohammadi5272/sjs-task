import { RouteObject } from "react-router-dom";
import AuthLayout from "./layouts/Auth/AuthLayout";
import RegisterPage from "./pages/Register";

const routes: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
];

export { routes };
