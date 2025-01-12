import Container from "../../components/Container/Container";
import LoginForm from "../../components/LoginForm/LoginForm";
import usePageTitle from "../../hooks/usePageTitle";

const LoginPage = (): React.ReactNode => {
  usePageTitle("Login");

  return (
    <main>
      <Container>
        <h1 className="text-center text-5xl font-bold py-6">Login</h1>
        <LoginForm />
      </Container>
    </main>
  );
};

export default LoginPage;
