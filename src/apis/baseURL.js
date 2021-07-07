import axios from "axios";

const instance = axios.create({
  baseURL: "https://ded016b8ca6c.ngrok.io",
});

export default instance;
