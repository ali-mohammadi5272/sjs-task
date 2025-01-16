import Swal, { SweetAlertResult } from "sweetalert2";
import { CookieType } from "../types/cookie";
import { messages, tokens } from "./constants";
import { NavigateFunction } from "react-router-dom";
import { SweetAlertType } from "../types/sweetAlert";
import { GetAccessTokenResponseType } from "../types/axios";
import { AxiosInstance } from "axios";

const setCookie = (cookie: CookieType) => {
  const { key, value, maxAge, path } = cookie;

  document.cookie = `${key}=${value}; max-age=${maxAge}; path=${path}`;
};

const getCookie = (key: string | number): string | undefined => {
  const cookie: string | undefined = document.cookie
    ?.split("; ")
    .find((item) => item.includes(`${key}`))
    ?.split(`${key}=`)[1];

  return cookie;
};

const removeCookie = (key: string | number): void => {
  setCookie({
    key,
    value: "",
    maxAge: 0,
    path: "/",
  });
};

const logout = (navigate: NavigateFunction) => {
  removeCookie(tokens.REFRESH_TOKEN);
  removeCookie(tokens.ACCESS_TOKEN);
  navigate("/auth/login", { replace: true });
};

const showAlert = ({
  title,
  text,
  icon,
  showCancelButton,
}: SweetAlertType): Promise<SweetAlertResult<boolean | undefined>> => {
  return Swal.fire<boolean>({
    title,
    text,
    icon,
    showCancelButton,
    reverseButtons: true,
  });
};

const sessionExpireLogout = () => {
  removeCookie(tokens.ACCESS_TOKEN);
  removeCookie(tokens.REFRESH_TOKEN);
  showAlert({
    title: "Session expired",
    text: messages.LOGOUT.SESSION_EXPIRE,
    icon: "error",
  }).then(() => {
    window.location.href = "/auth/login";
  });
};

const getAccessToken = async (
  axiosInstance: AxiosInstance
): Promise<GetAccessTokenResponseType> => {
  const refreshToken: string | null = getCookie(tokens.REFRESH_TOKEN);
  if (!refreshToken) {
    throw new Error("No refresh token available");
  }
  const response = await axiosInstance.post<GetAccessTokenResponseType>(
    "/auth/refresh",
    {
      refreshToken,
    }
  );

  if (response.status === 200) {
    setCookie({
      key: tokens.ACCESS_TOKEN,
      value: response.data.accessToken,
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    setCookie({
      key: tokens.REFRESH_TOKEN,
      value: response.data.refreshToken,
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });
    return response.data;
  }
  throw new Error("Unable to egt Access Token");
};

export {
  setCookie,
  getCookie,
  removeCookie,
  logout,
  showAlert,
  sessionExpireLogout,
  getAccessToken,
};
