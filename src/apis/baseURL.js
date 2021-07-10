import axios from "axios";

const instance = axios.create({
  baseURL: "https://34d9a93aefac.ngrok.io",
});

export default instance;
