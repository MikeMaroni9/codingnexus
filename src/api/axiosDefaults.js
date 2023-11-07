import axios from "axios";

axios.defaults.baseURL = "https://finals-api-4952a1f1f072.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();