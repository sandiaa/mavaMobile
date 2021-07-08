import axios from "axios";

const instance = axios.create({
  baseURL: "https://f9759bed9ff3.ngrok.io",
});

export default instance;
