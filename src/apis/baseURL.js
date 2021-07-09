import axios from "axios";

const instance = axios.create({
  baseURL: "https://ee4a7b138b91.ngrok.io",
});

export default instance;
