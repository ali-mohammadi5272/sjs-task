import Container from "../../components/Container/Container";
import LoginForm from "../../components/LoginForm/LoginForm";
import usePageTitle from "../../hooks/usePageTitle";

const LoginPage = (): React.ReactNode => {
  usePageTitle("Login");

  return (
    <main>
      <Container>
        <div className="h-screen flex justify-center items-center flex-col">
          <h1 className="text-center text-5xl font-bold py-6">Login</h1>
          <LoginForm />
        </div>
      </Container>
    </main>
  );
};

export default LoginPage;
