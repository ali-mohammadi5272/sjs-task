import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = (): React.ReactNode => {
  return (
    <main>
      <Container>
        <h1 className="text-center text-5xl font-bold py-6">Login</h1>
        <LoginForm />
        <div className="text-lg mb-14 space-x-2 text-center py-4">
          <span className="text-[#5C4529]">Don't have an account?</span>
          <Link className="text-blue-400 font-medium" to="/auth/register">
            Sign up
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default LoginPage;
