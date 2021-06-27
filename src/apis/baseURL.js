import axios from "axios";

const instance = axios.create({
  baseURL: "https://78f644ef6e8c.ngrok.io",
});

export default instance;
