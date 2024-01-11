import axios from 'axios';

const userApi = axios.create({ baseURL: process.env.REACT_APP_USER_API });

userApi.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전 수행
    return config;
  },
  function (error) {
    // 오류 요청을 보내기 전 수행
    return Promise.reject(error);
  }
);

userApi.interceptors.response.use(
  function (response) {
    // 정상 응답
    return response;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default userApi;
