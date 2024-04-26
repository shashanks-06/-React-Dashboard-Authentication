import axios from "axios";

const Axios = axios.create({
  baseURL: import.meta.env.BACKEND_URL,
  withCredentials: true,
});

export default Axios;
