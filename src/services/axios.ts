import axios from "axios";
import { AxiosInstance } from "./../../node_modules/axios/index.d";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

export default axiosInstance;
