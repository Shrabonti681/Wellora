import { api } from './axios';
export const notificationsApi = { list: () => api.get('/notifications') };
