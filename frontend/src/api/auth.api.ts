import { api } from './axios';
export const authApi = { list: () => api.get('/auth') };
