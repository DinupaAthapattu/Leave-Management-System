// src/components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

type Props = {
  allowedRoles: ('admin' | 'employee')[];
  children: React.ReactNode;
};

const ProtectedRoute = ({ allowedRoles, children }: Props) => {
  const { user } = useUser();

  if (!user) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(user.role)) return <Navigate to="/login" replace />;

  return <>{children}</>;
};

export default ProtectedRoute;
