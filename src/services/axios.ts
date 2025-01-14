import axios from "axios";
import { AxiosInstance } from "./../../node_modules/axios/index.d";
import { GetAccessTokenResponseType } from "../types/axios";
import { getAccessToken, sessionExpireLogout } from "../utils/helperFunctions";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { accessToken }: GetAccessTokenResponseType =
          await getAccessToken(axiosInstance);

        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;

        return axiosInstance(originalRequest);
      } catch (err) {
        sessionExpireLogout();

        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
