import axios from "axios";
import { AxiosInstance } from "./../../node_modules/axios/index.d";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

export default axiosInstance;
