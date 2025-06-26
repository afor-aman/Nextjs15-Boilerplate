
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {children}
    </div>
  );
};

export default Layout;
