import { Navigate, Outlet } from 'react-router-dom';import { useApp } from '../contexts/AppContext';
export default function ProtectedRoute(){const {user}=useApp();return user?<Outlet/>:<Navigate to="/login" replace/>}
