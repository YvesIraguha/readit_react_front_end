import axios from 'axios';

const token = localStorage.getItem('token');
const http = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`
  }
});
export default http;
