/* global localStorage window confirm */
import axios from 'axios';
import Config from '../constants/config';

/**
 * Axios Config
 */
axios.defaults.baseURL = Config.apiHostname;
axios.defaults.headers.common.Authorization = localStorage.getItem('authToken') || null;

/**
 * Handler for every request
 */
axios.interceptors.response.use(
  (res) => {
    // Status code isn't a success code - throw error
    if (!`${res.status}`.startsWith('2')) throw res.data;

    // Otherwise just return the data
    return res.data;
  },
  err => Promise.reject(err),
);

export default axios;
