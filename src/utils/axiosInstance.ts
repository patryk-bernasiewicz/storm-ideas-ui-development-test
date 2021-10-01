import axios from 'axios';

import { API_URL, API_NAMESPACE } from 'constants/endpoints';

const axiosInstance = axios.create({
  baseURL: API_URL + API_NAMESPACE,
});

axiosInstance.interceptors.response.use((response) => {
  const { data = [], meta = {} } = response.data;
  return { data, meta };
});

export default axiosInstance;
