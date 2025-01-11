import { useId } from "react";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";

const LoginForm = (): React.ReactNode => {
  const emailInputId = useId();
  const passwordInputId = useId();

  return (
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
  );
};

export default LoginForm;
