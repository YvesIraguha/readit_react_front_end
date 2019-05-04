import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const token = localStorage.getItem("token");
const baseURL = "http://localhost:5070/api/v1";

const http = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`
  }
});
export default http;
