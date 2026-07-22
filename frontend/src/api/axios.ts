import axios from 'axios';
export const api=axios.create({baseURL:import.meta.env.VITE_API_BASE_URL??'http://localhost:8000/api/v1',timeout:10000,headers:{'Content-Type':'application/json'}});
api.interceptors.request.use(config=>{const token=localStorage.getItem('wellora-access-token');if(token)config.headers.Authorization=`Bearer ${token}`;return config});
api.interceptors.response.use(r=>r,async error=>Promise.reject(error));
