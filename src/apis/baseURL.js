import axios from "axios";

const instance = axios.create({
  baseURL: "https://a0ac738fead4.ngrok.io",
});

export default instance;
