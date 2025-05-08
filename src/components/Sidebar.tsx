

// import { useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import {
//   LayoutDashboard,
//   Clock,
//   LogOut,
//   PanelLeftOpen,
//   PanelRightOpen,
// } from 'lucide-react';
// import { useUser } from '../context/UserContext';

// const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { user, setUser } = useUser();

//   if (!user) return null;
//   const role = user.role;

//   const isActive = (path: string) =>
//     location.pathname === path
//       ? 'bg-accent text-primary font-semibold'
//       : 'text-white';

//   const links =
//     role === 'admin'
//       ? [
//           {
//             to: '/admin',
//             label: 'Dashboard',
//             icon: <LayoutDashboard size={20} />,
//           },
//           {
//             to: '/admin/history',
//             label: 'Leave History',
//             icon: <Clock size={20} />,
//           },
//         ]
//       : [
//           {
//             to: '/employee',
//             label: 'Dashboard',
//             icon: <LayoutDashboard size={20} />,
//           },
//           {
//             to: '/employee/history',
//             label: 'Leave History',
//             icon: <Clock size={20} />,
//           },
//         ];

//   return (
//     <div
//       className={`bg-primary text-white h-screen transition-all duration-300 ${
//         collapsed ? 'w-16' : 'w-64'
//       } flex flex-col`}
//     >
//       {/* Toggle Button */}
//       <div className="flex justify-end p-3">
//         <button
//           onClick={() => setCollapsed(!collapsed)}
//           className="p-2 rounded-md bg-white shadow hover:bg-accent transition"
//           title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
//         >
//           {collapsed ? (
//             <PanelRightOpen size={20} className="text-primary" />
//           ) : (
//             <PanelLeftOpen size={20} className="text-primary" />
//           )}
//         </button>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1">
//         <ul className="mt-4 space-y-1">
//           {links.map(({ to, label, icon }) => (
//             <li key={to}>
//               <Link
//                 to={to}
//                 className={`flex items-center gap-3 px-4 py-2 hover:bg-primary-hover ${isActive(to)}`}
//               >
//                 {icon}
//                 {!collapsed && label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Profile + Logout */}
//       <div className="p-4 border-t border-indigo-400 space-y-4">
//         <div className="flex items-center gap-3">
//           <img
//             src={`https://i.pravatar.cc/150?u=${user.username}`}
//             alt="Profile"
//             className="w-10 h-10 rounded-full border border-white"
//           />
//           {!collapsed && (
//             <div>
//               <p className="text-sm font-medium">{user.username}</p>
//               <p className="text-xs text-indigo-200 capitalize">{role}</p>
//             </div>
//           )}
//         </div>

//         <button
//           onClick={() => {
//             setUser(null);
//             navigate('/login');
//           }}
//           className={`flex items-center gap-3 text-white px-3 py-2 rounded-md transition ${
//             collapsed ? 'justify-center' : 'justify-start'
//           } hover:bg-red-100 hover:text-red-600`}
//           title="Logout"
//         >
//           <LogOut size={20} />
//           {!collapsed && <span className="text-sm font-medium">Logout</span>}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// src/components/Sidebar.tsx
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Clock,
  LogOut,
  PanelLeftOpen,
  PanelRightOpen,
} from 'lucide-react';
import { useUser } from '../context/UserContext';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  if (!user) return null;
  const role = user.role;

  const isActive = (path: string) =>
    location.pathname === path
      ? 'bg-accent text-primary font-semibold'
      : 'text-white';

  const links =
    role === 'admin'
      ? [
          {
            to: '/admin',
            label: 'Dashboard',
            icon: <LayoutDashboard size={20} />,
          },
          {
            to: '/admin/history',
            label: 'Leave History',
            icon: <Clock size={20} />,
          },
        ]
      : [
          {
            to: '/employee',
            label: 'Dashboard',
            icon: <LayoutDashboard size={20} />,
          },
          {
            to: '/employee/history',
            label: 'Leave History',
            icon: <Clock size={20} />,
          },
        ];

  return (
    <div
      className={`bg-primary text-white fixed md:static z-50 transition-all duration-300 h-full ${
        collapsed ? 'w-16' : 'w-64'
      } flex flex-col`}
    >
      {/* Toggle Button */}
      <div className="flex justify-end p-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-md bg-white shadow hover:bg-accent transition"
          title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {collapsed ? (
            <PanelRightOpen size={20} className="text-primary" />
          ) : (
            <PanelLeftOpen size={20} className="text-primary" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        <ul className="mt-4 space-y-1">
          {links.map(({ to, label, icon }) => (
            <li key={to}>
              <Link
                to={to}
                className={`flex items-center gap-3 px-4 py-2 hover:bg-primary-hover ${isActive(to)}`}
              >
                {icon}
                {!collapsed && label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Profile + Logout */}
      <div className="p-4 border-t border-indigo-400 space-y-4">
        <div className="flex items-center gap-3">
          <img
            src={`https://i.pravatar.cc/150?u=${user.username}`}
            alt="Profile"
            className="w-10 h-10 rounded-full border border-white"
          />
          {!collapsed && (
            <div>
              <p className="text-sm font-medium">{user.username}</p>
              <p className="text-xs text-indigo-200 capitalize">{role}</p>
            </div>
          )}
        </div>

        <button
          onClick={() => {
            setUser(null);
            navigate('/login');
          }}
          className={`flex items-center gap-3 text-white px-3 py-2 rounded-md transition ${
            collapsed ? 'justify-center' : 'justify-start'
          } hover:bg-red-100 hover:text-red-600`}
          title="Logout"
        >
          <LogOut size={20} />
          {!collapsed && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
