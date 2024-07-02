import axios from "axios";

const runtimeConfig = useRuntimeConfig();

const NewInstance = axios.create({
  // Configuration
  baseURL: runtimeConfig.public.RpcUrl,
  timeout: 8000,
  headers: {
    Accept: "application/json",
  },
});
