import axios from "axios";

const instance = axios.create({
  baseURL: "https://850839c53ca6.ngrok.io",
});

export default instance;
