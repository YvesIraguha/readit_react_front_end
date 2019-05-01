import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const token = localStorage.getItem('token');

const http = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`
  }
});
export default http;
