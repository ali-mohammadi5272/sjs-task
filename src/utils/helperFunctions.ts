import { CookieType } from "../types/cookie";

const setCookie = (cookie: CookieType) => {
  const { key, value, maxAge, path } = cookie;

  document.cookie = `${key}=${value}; max-age=${maxAge}; path=${path}`;
};

const getCookie = (key: string | number): string => {
  const cookie = document.cookie.split(`${key}=`)[1];
  return cookie;
};

export { setCookie, getCookie };
