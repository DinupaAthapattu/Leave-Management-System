import Sidebar from '../components/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 bg-background p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
