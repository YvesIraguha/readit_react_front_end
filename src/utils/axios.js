import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const token = localStorage.getItem("token");
const baseURL = process.env.BASE_URL;

const http = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`
  }
});
export default http;
