import { api } from './axios';
export const dosesApi = { list: () => api.get('/doses') };
