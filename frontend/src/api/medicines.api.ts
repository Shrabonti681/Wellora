import { api } from './axios';
export const medicinesApi = { list: () => api.get('/medicines') };
