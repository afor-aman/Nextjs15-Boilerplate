import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader
  } from "@/components/ui/sidebar"
import { LogoutButton } from "./logoutButton";
  
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarHeader>
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