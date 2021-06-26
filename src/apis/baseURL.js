import axios from "axios";

const instance = axios.create({
  baseURL: "https://15455a31199b.ngrok.io",
});

export default instance;
