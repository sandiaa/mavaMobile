import axios from "axios";

const instance = axios.create({
  baseURL: "https://895d41dfc86d.ngrok.io",
});

export default instance;
