"use client";

import React from "react";
import { useState } from "react";
import { SidebarTrigger } from "../ui/sidebar";

const DashboardNavbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const [session, setSession] = useState<any>(null);

  function getInitialsFromName(name: string) {
    const userInitials = name ? name.split(' ').map((n: string) => n[0]).join('').toUpperCase() : 'U';
    return userInitials;
  }

  
  return (
    <header className="flex h-12  items-center gap-2 border-b px-4 justify-between">
      <SidebarTrigger className="-ml-1" />

    </header>
  );
};

export default DashboardNavbar;
