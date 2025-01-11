import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const App = (): React.ReactNode => {
  const router = useRoutes(routes);

  return router;
};

export default App;
