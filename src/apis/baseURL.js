import axios from "axios";

const instance = axios.create({
  baseURL: "https://f87808d48299.ngrok.io",
});

export default instance;
