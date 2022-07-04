import { publicRequest, userRequest } from '../api/requestMethods';

export class ResponseError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}

const checkStatus = (response: any) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new ResponseError(response);
  error.response = response;
  throw error;
};

export const request = async (url: string, data: any) => {
  const fetchResponse = await publicRequest.post(url, data);
  const response = checkStatus(fetchResponse)
  return response.data
};

export const postUserRequest = async (url: string, data: any) => {
  const fetchResponse = await userRequest.post(url, data);
  const response = checkStatus(fetchResponse)
  return response.data
};

export const getRequest = async (url: string) => {
  const fetchResponse = await publicRequest.get(url);
  const response = checkStatus(fetchResponse)
  return response.data
};

export const getUserRequest = async (url: string) => {
  const fetchResponse = await userRequest.get(url);
  const response = checkStatus(fetchResponse)
  return response.data
};
