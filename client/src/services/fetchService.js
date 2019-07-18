import axios from 'axios';

import api from '../helpers/api.json';

axios.defaults.headers.common['Content-Type'] = 'application/json';

export const fetchService = (request) => {
  const { url, method, data } = request;
  const API_ENDPOINT = api.url + url;
  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';

  return axios
    .request({
      url: API_ENDPOINT,
      method,
      [dataOrParams]: data
    })
    .then(({ data }) => {
      return data;
    });
};
