import Container from "../../components/Container/Container";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import usePageTitle from "../../hooks/usePageTitle";

const RegisterPage = (): React.ReactNode => {
  usePageTitle("Register");

  return (
    <main>
      <Container>
        <div className="h-screen flex justify-center items-center flex-col">
          <h1 className="text-center text-5xl font-bold py-6">Register</h1>
          <RegisterForm />
        </div>
      </Container>
    </main>
  );
};

export default RegisterPage;
