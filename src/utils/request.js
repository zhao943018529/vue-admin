import axios from 'axios';

const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
  withCredentials: true,
});

request.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
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

const jsonPost = (url, payload) =>
  request.post(url, payload, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });

const fetch = (url, params) =>
  request.get(url, {
    paramsSerializer(params) {
      let ret = [];
      for (let it in params) {
        if (params[it] != null) {
          // 防止向后台提交空值导致一些问题 例如ip验证不通过
          ret.push(encodeURIComponent(it) + '=' + encodeURIComponent(params[it]));
        }
      }
      return ret.join('&');
    },
    params,
  });

export { request, jsonPost, fetch };
