import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.REACT_APP_API_TOKEN}`;

export default instance;
