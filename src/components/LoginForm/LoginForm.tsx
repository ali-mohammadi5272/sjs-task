import { useContext, useId, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../CustomInput/CustomInput";
import CustomButton from "../CustomButton/CustomButton";
import axios from "../../services/axios";
import { FormDataType, LoginResponseType } from "./loginForm.type";
import { toast } from "react-toastify";
import { messages, tokens } from "../../utils/constants";
import { setCookie } from "../../utils/helperFunctions";
import { LoadingContext } from "../../contexts/LoadingProvider/LoadingProvider";

const LoginForm = (): React.ReactNode => {
  const userNameInputId = useId();
  const passwordInputId = useId();
  const navigate = useNavigate();
  const { setIsLoading } = useContext(LoadingContext);
  const [formData, _] = useState<FormDataType>({
    username: "emilys",
    password: "emilyspass",
  });

  const formSubmitHandler = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post<LoginResponseType>(
        "/auth/login",
        formData
      );

      if (response.status !== 200) {
        toast.error(messages.LOGIN.ERR);
        return;
      }

      toast.success(messages.LOGIN.SUCCESS);

      setCookie({
        key: tokens.ACCESS_TOKEN,
        value: response.data.accessToken,
        maxAge: 60 * 60,
        path: "/",
      });

      setCookie({
        key: tokens.REFRESH_TOKEN,
        value: response.data.refreshToken,
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });

      navigate("/dashboard", { replace: true });
    } catch (err) {
      toast.error(messages.LOGIN.ERR);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form action="" className="space-y-6" onSubmit={formSubmitHandler}>
        <CustomInput
          id={userNameInputId}
          type="text"
          label="Username"
          required
          value={formData.username}
          onChange={(e) => {}}
        />
        <CustomInput
          id={passwordInputId}
          type="password"
          label="password"
          minLength={8}
          required
          value={formData.password}
          onChange={(e) => {}}
        />
        <CustomButton
          title="submit"
          type="submit"
          className="border-2 bg-primary text-light"
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
