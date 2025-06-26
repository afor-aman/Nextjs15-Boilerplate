import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
  } from "@/components/ui/sidebar"
import { LogoutButton } from "./logoutButton";
import { LayoutDashboard } from "lucide-react";
  
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <LayoutDashboard className="size-4" />    
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Dashboard</span>
                  <span className="">Building great things</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
        <SidebarContent>
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter>
            <LogoutButton />
          </SidebarFooter>
      </Sidebar>
    );
}