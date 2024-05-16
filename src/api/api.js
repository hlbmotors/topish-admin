import axios from "axios";
axios.defaults.baseURL = "https://binaries.uz/api/v1";
export const BASE_URL = "https://binaries.uz/api/v1";
axios.interceptors.request.use((config) => {
  config.withCredentials = true;
  return config;
});

export default axios;
