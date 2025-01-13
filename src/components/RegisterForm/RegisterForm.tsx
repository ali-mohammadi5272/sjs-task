import { useId } from "react";
import { Link } from "react-router-dom";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";

const RegisterForm = (): React.ReactNode => {
  const nameInputId = useId();
  const emailInputId = useId();
  const passwordInputId = useId();

  return (
    <div className="w-full">
      <form action="" className="space-y-6 sm:w-2/3 md:w-1/2 m-auto">
        <CustomInput
          id={nameInputId}
          label="Name"
          minLength={3}
          required
          onChange={(e) => {}}
        />
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
          className="border-2 bg-primary text-light"
        />
      </form>
      <div className="text-lg mb-14 space-x-2 text-center py-4">
        <span className="text-[#5C4529]">Already registered?</span>
        <Link className="text-blue-400 font-medium" to="/auth/login">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
