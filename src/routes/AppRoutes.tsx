// import { Routes, Route, Navigate } from 'react-router-dom';
// import LoginPage from '../pages/LoginPage';
// import AdminDashboard from '../pages/AdminDashboard';
// import EmployeeDashboard from '../pages/EmployeeDashboard';
// import ViewHistory from '../pages/ViewHistory';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/login" />} />
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/admin" element={<AdminDashboard />} />
//       <Route path="/employee" element={<EmployeeDashboard />} />
//       <Route path="/history" element={<ViewHistory />} />
//     </Routes>
//   );
// };

// export default AppRoutes;

import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import AdminDashboard from '../pages/AdminDashboard';
import EmployeeDashboard from '../pages/EmployeeDashboard';
import ViewHistory from '../pages/ViewHistory';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Public */}
      <Route path="/login" element={<LoginPage />} />

      {/* Admin only */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Employee only */}
      <Route
        path="/employee"
        element={
          <ProtectedRoute allowedRoles={['employee']}>
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />

      {/* Both roles */}
      <Route
        path="/history"
        element={
          <ProtectedRoute allowedRoles={['admin', 'employee']}>
            <ViewHistory />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
