import axios from "axios";
import { AxiosInstance } from "./../../node_modules/axios/index.d";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default axiosInstance;
