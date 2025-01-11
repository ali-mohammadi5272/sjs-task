import { RouteObject } from "react-router-dom";
import AuthLayout from "./layouts/Auth/AuthLayout";

const routes: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [],
  },
];

export { routes };
