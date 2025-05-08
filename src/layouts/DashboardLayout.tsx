// // import Sidebar from '../components/Sidebar';

// // const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
// //   return (
// //     <div className="flex h-screen overflow-hidden">
// //       <Sidebar />
// //       <main className="flex-1 bg-background p-6 overflow-auto">
// //         {children}
// //       </main>
// //     </div>
// //   );
// // };

// // export default DashboardLayout;

// // src/layouts/DashboardLayout.tsx
// import Sidebar from '../components/Sidebar';

// const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="flex flex-col md:flex-row h-screen overflow-hidden">
//       <Sidebar />
//       <main className="flex-1 bg-background p-4 md:p-6 overflow-y-auto">
//         {children}
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;

import Sidebar from '../components/Sidebar';
import MobileNavbar from '../components/MobileNavbar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Mobile Navbar */}
      <MobileNavbar />

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-background">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
