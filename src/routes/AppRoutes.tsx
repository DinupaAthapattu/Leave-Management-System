
// import { Routes, Route, Navigate } from 'react-router-dom';
// import LoginPage from '../pages/LoginPage';
// import AdminDashboard from '../pages/AdminDashboard';
// import EmployeeDashboard from '../pages/EmployeeDashboard';
// import ViewHistory from '../pages/ViewHistory';
// import ProtectedRoute from '../components/ProtectedRoute';
// import AdminLeaveHistory from '../pages/AdminLeaveHistory';
// import EmployeeLeaveHistory from '../pages/EmployeeLeaveHistory';

// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* Default redirect */}
//       <Route path="/" element={<Navigate to="/login" />} />

//       {/* Public */}
//       <Route path="/login" element={<LoginPage />} />

//       {/* Admin only */}
//       <Route
//         path="/admin"
//         element={
//           <ProtectedRoute allowedRoles={['admin']}>
//             <AdminDashboard />
//           </ProtectedRoute>
//         }
//       />

//       {/* Employee only */}
//       <Route
//         path="/employee"
//         element={
//           <ProtectedRoute allowedRoles={['employee']}>
//             <EmployeeDashboard />
//           </ProtectedRoute>
//         }
//       />

//       {/* Both roles */}
//       <Route
//         path="/history"
//         element={
//           <ProtectedRoute allowedRoles={['admin', 'employee']}>
//             <ViewHistory />
//           </ProtectedRoute>
//         }
//       />
//       <Route path="/admin/history" element={<AdminLeaveHistory />} />
// <Route path="/employee/history" element={<EmployeeLeaveHistory />} />

//     </Routes>
//   );
// };

// export default AppRoutes;


// src/routes/AppRoutes.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import AdminDashboard from '../pages/AdminDashboard';
import EmployeeDashboard from '../pages/EmployeeDashboard';
import AdminLeaveHistory from '../pages/AdminLeaveHistory';
import EmployeeLeaveHistory from '../pages/EmployeeLeaveHistory';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirect to login by default */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Public route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Admin protected routes */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/history"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminLeaveHistory />
          </ProtectedRoute>
        }
      />

      {/* Employee protected routes */}
      <Route
        path="/employee"
        element={
          <ProtectedRoute allowedRoles={['employee']}>
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employee/history"
        element={
          <ProtectedRoute allowedRoles={['employee']}>
            <EmployeeLeaveHistory />
          </ProtectedRoute>
        }
      />

      {/* Optional: fallback route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
