import { api } from './axios';
export const periodsApi = { list: () => api.get('/periods') };
