import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apiak.shop'

});

export default api;