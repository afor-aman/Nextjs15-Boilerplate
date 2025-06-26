import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/partials/app-sidebar"
import React from "react";
import DashboardNavbar from "@/components/partials/dashboardNavbar";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <main>
        <DashboardNavbar />
        <div className="flex p-2">
          {children}
        </div>
      </main>
    </SidebarInset>
  </SidebarProvider>  
  );
};

export default Layout;
