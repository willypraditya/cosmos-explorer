import axios, { AxiosInstance } from 'axios';

const getClient = (): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'x-allthatnode-api-key': process.env.REACT_APP_API_KEY as string,
    },
  });

  return axiosInstance;
};

export default getClient;
