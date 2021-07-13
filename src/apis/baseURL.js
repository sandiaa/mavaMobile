import axios from "axios";

const instance = axios.create({
  baseURL: "https://1b4eb5787108.ngrok.io",
});

export default instance;
