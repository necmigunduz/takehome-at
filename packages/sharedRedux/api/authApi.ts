import axios from 'axios';
import apiPaths from './apiPaths';

export const register = (authData: any) => axios.post(apiPaths.API_REGISTER, authData);
export const login = (authData: any) => axios.post(apiPaths.API_LOGIN, authData);
