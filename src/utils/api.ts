import { API_URL, API_NAMESPACE, ENDPOINTS } from 'constants/endpoints';

export const getEndpoint = (endpointKey: keyof typeof ENDPOINTS) => {
  const endpoint = ENDPOINTS[endpointKey];
  return `${API_URL}${API_NAMESPACE}/${endpoint}`;
};
