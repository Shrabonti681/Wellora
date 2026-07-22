import { api } from './axios';
export const profilesApi = { list: () => api.get('/profiles') };
