import axios from "axios";

const token = localStorage.getItem("token");
const baseURL = process.env.BASE_URL;
console.log("tyring to fetch some data", process.env);
const http = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`
  }
});
export default http;
