import Container from "../../components/Container/Container";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = (): React.ReactNode => {
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
