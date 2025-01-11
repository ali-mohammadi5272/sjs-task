import { useId } from "react";
import { Link } from "react-router-dom";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";

const LoginForm = (): React.ReactNode => {
  const emailInputId = useId();
  const passwordInputId = useId();

  return (
    <>
      <form action="" className="space-y-6">
        <CustomInput
          id={emailInputId}
          type="email"
          label="Email"
          required
          onChange={(e) => {}}
        />
        <CustomInput
          id={passwordInputId}
          type="password"
          label="password"
          minLength={8}
          required
          onChange={(e) => {}}
        />
        <CustomButton
          title="submit"
          type="submit"
          className=" bg-transparent border-2 bg-primary text-light"
        />
      </form>
      <div className="text-lg mb-14 space-x-2 text-center py-4">
        <span className="text-[#5C4529]">Don't have an account?</span>
        <Link className="text-blue-400 font-medium" to="/auth/register">
          Sign up
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
