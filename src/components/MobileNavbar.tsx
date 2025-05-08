import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LayoutDashboard, Clock, LogOut } from 'lucide-react';
import { useUser } from '../context/UserContext';

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, setUser } = useUser();
  const location = useLocation();
  const navigate = useNavigate();

  if (!user) return null;

  const isActive = (path: string) =>
    location.pathname === path;

  const links =
    user.role === 'admin'
      ? [
          { to: '/admin', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
          { to: '/admin/history', label: 'Leave History', icon: <Clock size={18} /> },
        ]
      : [
          { to: '/employee', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
          { to: '/employee/history', label: 'Leave History', icon: <Clock size={18} /> },
        ];

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <div className="md:hidden bg-primary text-white shadow-md z-50 relative">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="text-lg font-bold tracking-wide">Leave Manager</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Slide-down Drawer Menu */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden bg-primary ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-4 py-2 space-y-2">
          {links.map(({ to, label, icon }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 py-2 px-2 rounded ${
                  isActive(to)
                    ? 'bg-white text-primary font-semibold'
                    : 'text-white hover:bg-primary-hover'
                }`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                setMenuOpen(false);
                handleLogout();
              }}
              className="flex items-center gap-3 py-2 px-2 rounded hover:bg-red-100 hover:text-red-600 text-white"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
