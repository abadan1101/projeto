import axios from 'axios';

const api = axios.create({
  baseURL: 'http://69.62.88.125:8080'

});

export default api;