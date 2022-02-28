import { customAxios } from './custom-axios';

const endpoint = process.env.API_ENDPOINT || 'http://localhost:5000/';
console.log(endpoint);

interface PARAM_GET_AXIOS {
  url: string;
  params: any;
}

interface PARAM_POST_AXIOS {
  url: string;
  data: any;
}

export const get = (paramsData: PARAM_GET_AXIOS) => {
  const { url, params } = paramsData;
  return customAxios({ method: 'get', url: endpoint + url, params })
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
};

export const post = (paramsData: PARAM_POST_AXIOS) => {
  const { url, data } = paramsData;
  return customAxios({ method: 'post', url: endpoint + url, data })
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
};
