import axios from 'axios';

const host = 'http://localhost:8001/api';

export const setToken = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const call = async (method, path, data) => {
  const res = await axios[method](`${host}/${path}`, data);
  return res.data;
};

const api = { call, setToken };
export default api;              

