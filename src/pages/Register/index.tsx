import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = (): React.ReactNode => {
  return (
    <main>
      <Container>
        <h1 className="text-center text-5xl font-bold py-6">Register Page</h1>
        <RegisterForm />
        <div className="text-lg mb-14 space-x-2 text-center py-4">
          <span className="text-[#5C4529]">Already registered?</span>
          <Link className="text-blue-400 font-medium" to="/auth/login">
            Log in
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default RegisterPage;
