import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="space-y-10">
        <div>
          <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
        </div>
        <div className="text-center">
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
      </div>
    </div>
  );
};

export default NotFoundPage;
