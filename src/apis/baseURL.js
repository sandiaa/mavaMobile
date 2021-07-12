import axios from "axios";

const instance = axios.create({
  baseURL: "https://0f91934d1733.ngrok.io",
});

export default instance;
