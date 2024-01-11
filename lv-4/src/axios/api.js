import axios from 'axios';

const api = axios.create({ baseURL: process.env.REACT_APP_API });

api.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전 수행
    return config;
  },
  function (error) {
    // 오류 요청을 보내기 전 수행
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    // 정상 응답
    return response;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default api;
