import axios from 'axios';

const customAxios = axios.create();

// Request interceptor for API calls
customAxios.interceptors.request.use(
  async config => {
    if (config?.headers && localStorage.getItem('token')) {
      config.headers['Authorization'] = `Bearer ${localStorage.getItem(
        'token',
      )}`;
    }

    return config;
  },
  error => {
    Promise.reject(error);
  },
);

customAxios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const response = {
      code: 0,
      data: error?.response?.data,
    };

    throw response;
  },
);

export { customAxios };
