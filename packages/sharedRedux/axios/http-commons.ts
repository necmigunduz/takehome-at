import axios, { AxiosRequestConfig } from 'axios';
import { store } from '../store';

const API_BASE_URL = process.env.API_BASE_URL;

const defaultAxiosInterceptor = () => {
    axios.defaults.baseURL = API_BASE_URL;
    axios.interceptors.request.use((config: AxiosRequestConfig) : any => {
        const token = store.getState().user.access_token || 'dummyToken';
        const configToReturn = token
            ? {
                ...config,
                headers: {
                    Authorization: `Bearer ${token}`,
                    ...config.headers,
                },
            }
            : config;

        return configToReturn;
    });
};

export default defaultAxiosInterceptor;
