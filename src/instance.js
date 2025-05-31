import axios from "axios";

const instance = axios.create({

  baseURL: "https://bizplorers-backend.onrender.com/api",
});

export default instance;