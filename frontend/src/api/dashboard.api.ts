import { api } from './axios';
export const dashboardApi = { list: () => api.get('/dashboard') };
