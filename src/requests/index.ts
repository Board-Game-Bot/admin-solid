import axios from 'axios';
import { TokenStore } from '@/stores';

export const API = axios.create({
  baseURL: import.meta.env.VITE_REQ_URL,
});

API.interceptors.request.use(req => {
  req.headers.set('authorization', `Bearer ${TokenStore[0]()}`);
  return req;
});

API.interceptors.response.use((res) => {
  return res.data;
});