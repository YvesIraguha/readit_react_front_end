import axios from 'axios';

const baseURL = process.env.BASE_URL;
const token = localStorage.getItem('token');
export default () =>
  axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
