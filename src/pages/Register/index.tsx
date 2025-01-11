import Container from "../../components/Container/Container";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = (): React.ReactNode => {
  return (
    <main>
      <Container>
        <h1 className="text-center text-5xl font-bold py-6">Register Page</h1>
        <RegisterForm />
      </Container>
    </main>
  );
};

export default RegisterPage;
