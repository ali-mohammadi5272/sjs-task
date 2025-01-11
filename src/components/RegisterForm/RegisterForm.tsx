import { useId } from "react";
import CustomInput from "../CustomInput/CustomInput";

const LoginForm = (): React.ReactNode => {
  const nameInputId = useId();
  const emailInputId = useId();
  const passwordInputId = useId();

  return (
    <form action="">
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
    </form>
  );
};

export default LoginForm;
