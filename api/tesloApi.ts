import axios from "axios";

const tesloApi = axios.create({
  baseURL: "localhost:3001/api",
});

export default tesloApi;
