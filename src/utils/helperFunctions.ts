import Swal, { SweetAlertResult } from "sweetalert2";
import { CookieType } from "../types/cookie";
import { messages, tokens } from "./constants";
import { NavigateFunction } from "react-router-dom";
import { SweetAlertType } from "../types/sweetAlert";

const setCookie = (cookie: CookieType) => {
  const { key, value, maxAge, path } = cookie;

  document.cookie = `${key}=${value}; max-age=${maxAge}; path=${path}`;
};

const getCookie = (key: string | number): string => {
  const cookie = document.cookie.split(`${key}=`)[1];
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

export {
  setCookie,
  getCookie,
  removeCookie,
  logout,
  showAlert,
  sessionExpireLogout,
};
