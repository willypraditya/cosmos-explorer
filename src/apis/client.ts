import axios, { AxiosInstance } from 'axios';

const getClient = (): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  return axiosInstance;
};

export default getClient;
