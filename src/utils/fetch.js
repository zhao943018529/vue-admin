import axios from 'axios';

const fetcher = axios.create({
  baseURL: '/api',
  timeout: 1000,
  withCredentials: true,
});

fetcher.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    debugger;
    return Promise.reject(error);
  },
);

fetcher.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export { fetcher };
