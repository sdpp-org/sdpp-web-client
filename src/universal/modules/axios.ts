import axios from 'axios';

const axiosInstance = axios.create({
  timeout: 20000,
});

axiosInstance.interceptors.request.use(request => {
  console.log('[axios] request', request)
  return request
});

axiosInstance.interceptors.response.use(response => {
  console.log('[axios] response', response.data)
  return response
});

export default axiosInstance;
