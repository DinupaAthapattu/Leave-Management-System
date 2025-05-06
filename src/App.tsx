import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <>
      <AppRoutes />
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
    </>
  );
};

export default App;
