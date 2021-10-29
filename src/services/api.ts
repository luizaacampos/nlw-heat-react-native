import axios from 'axios';

const api = axios.create({
  // baseURL: 'exp://192.168.0.109:19000:4000',
  baseURL: 'http://970d-170-84-223-25.ngrok.io',
})

export { api };