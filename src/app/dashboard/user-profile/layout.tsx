import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/partials/app-sidebar"
import React from "react";
import DashboardNavbar from "@/components/partials/dashboardNavbar";


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>

          {children}    
    </div>
  )
}

export default layout