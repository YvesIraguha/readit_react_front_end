import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const token = localStorage.getItem("token");
const baseURL = process.env.BASE_URL;
console.log("tyring to fetch some data", baseURL);
const http = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`
  }
});
export default http;
