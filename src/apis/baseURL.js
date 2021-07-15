import axios from "axios";

const instance = axios.create({
  baseURL: "https://e49548cc81f8.ngrok.io",
});

export default instance;
