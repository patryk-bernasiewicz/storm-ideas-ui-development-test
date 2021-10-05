import axios from 'axios';
import qs from 'qs';

import { API_URL, API_NAMESPACE } from 'constants/endpoints';

const axiosInstance = axios.create({
  baseURL: API_URL + API_NAMESPACE,
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: 'brackets' });
  },
});

axiosInstance.interceptors.response.use((response) => {
  const { data = [], meta = {} } = response.data;
  return { data, meta };
});

export default axiosInstance;
