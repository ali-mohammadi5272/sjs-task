import { Link } from "react-router-dom";
import usePageTitle from "../../hooks/usePageTitle";

const NotFoundPage = () => {
  usePageTitle("404");

  return (
    <div className="min-h-screen flex justify-center items-center">
      <section>
        <div className="text-center">
          <h3 className="text-9xl mb-10">404</h3>
          <h1 className="font-bold text-3xl">Page not Found</h1>
          <p className="my-5">
            Maybe the page you're looking for is not found or never existed.
          </p>
          <Link
            className="inline-block w-1/3 text-danger font-semibold border-2 border-danger py-1 px-3 rounded-lg hover:bg-danger hover:text-light"
            to="/auth/login"
          >
            Login
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
