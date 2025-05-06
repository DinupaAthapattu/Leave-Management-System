
// // src/pages/LoginPage.tsx
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Lottie from 'lottie-react';
// import loginAnimation from '../assets/loginAnimation.json';
// import { useUser } from '../context/UserContext';
// import { mockUsers } from '../constants/mockData';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { setUser } = useUser();
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     const found = mockUsers.find(
//       (u) => u.username === username && u.password === password
//     );

//     if (!found) {
//       setError('Invalid username or password');
//       return;
//     }

//     setUser(found);
//     navigate(found.role === 'admin' ? '/admin' : '/employee');
//   };

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row bg-background text-heading">
//       {/* Left Panel */}
//       <motion.div
//         className="md:w-1/2 w-full flex items-center justify-center bg-primary text-white p-10"
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="flex flex-col items-center text-center max-w-lg">
//           <h1 className="text-5xl font-extrabold mb-4">Leave Management <span className="block">System</span></h1>
//           <p className="text-lg text-white/90 mb-8 px-4">
//             Effortlessly manage leave requests and approvals with our smart system.
//           </p>
//           <div className="w-72 h-72">
//             <Lottie animationData={loginAnimation} loop />
//           </div>
//         </div>
//       </motion.div>

//       {/* Right Panel */}
//       <motion.div
//         className="md:w-1/2 w-full flex justify-center items-center px-6 py-12 bg-accent"
//         initial={{ x: 100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <motion.div
//           className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 border border-border"
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//         >
//           <h2 className="text-3xl font-bold text-center text-heading mb-6">Welcome Back!</h2>

//           {error && (
//             <div className="bg-red-100 text-red-600 px-4 py-2 rounded text-sm text-center mb-4">
//               {error}
//             </div>
//           )}

//           <div className="mb-4">
//             <label className="block text-sm font-semibold mb-1">Username</label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-heading"
//             />
//           </div>

//           <div className="mb-6">
//             <label className="block text-sm font-semibold mb-1">Password</label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-heading"
//             />
//           </div>

//           <button
//             onClick={handleLogin}
//             className="w-full py-2 bg-primary hover:bg-primary-hover text-white font-semibold rounded-md transition"
//           >
//             Login
//           </button>

//           <p className="text-xs text-center text-heading mt-4 opacity-60">
//             Access restricted to authorized users only
//           </p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default LoginPage;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import toast from 'react-hot-toast'; // ✅ import toast
import loginAnimation from '../assets/loginAnimation.json';
import { useUser } from '../context/UserContext';
import { mockUsers } from '../constants/mockData';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = () => {
    const found = mockUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (!found) {
      toast.error('Invalid username or password'); // ✅ show error toast
      return;
    }

    setUser(found);
    toast.success(`Welcome back, ${found.username}!`); // ✅ show success toast
    navigate(found.role === 'admin' ? '/admin' : '/employee');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background text-heading">
      {/* Left Panel */}
      <motion.div
        className="md:w-1/2 w-full flex items-center justify-center bg-primary text-white p-10"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center text-center max-w-lg">
          <h1 className="text-5xl font-extrabold mb-4">Leave Management <span className="block">System</span></h1>
          <p className="text-lg text-white/90 mb-8 px-4">
            Effortlessly manage leave requests and approvals with our smart system.
          </p>
          <div className="w-72 h-72">
            <Lottie animationData={loginAnimation} loop />
          </div>
        </div>
      </motion.div>

      {/* Right Panel */}
      <motion.div
        className="md:w-1/2 w-full flex justify-center items-center px-6 py-12 bg-accent"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-full max-w-md bg-white shadow-2xl rounded-3xl p-8 border border-border"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-heading mb-6">Welcome Back!</h2>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-heading"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-heading"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-2 bg-primary hover:bg-primary-hover text-white font-semibold rounded-md transition"
          >
            Login
          </button>

          <p className="text-xs text-center text-heading mt-4 opacity-60">
            Access restricted to authorized users only
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
