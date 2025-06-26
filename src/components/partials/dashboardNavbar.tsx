"use client";

import React from "react";
import { getSession } from "@/utils/getSession";
import { useEffect, useState } from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const dashboardNavbar = () => {
  const [session, setSession] = useState<any>(null);

  function getInitialsFromEmail(email: string) {
    if (!email || typeof email !== "string") return "";

    const namePart = email.split("@")[0]; // Get part before '@'
    const nameParts = namePart.split(/[\.\_\-\+]/).filter(Boolean); // Split by common separators

    let initials = "";

    if (nameParts.length === 1) {
      initials = nameParts[0].slice(0, 2); // Take first 2 letters if only one part
    } else {
      initials = nameParts[0][0] + nameParts[1][0]; // First letter of first two parts
    }

    return initials.toUpperCase();
  }

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      setSession(session);
    };
    fetchSession();
  }, []);
  return (
    <header className="flex h-12  items-center gap-2 border-b px-4 justify-between">
      <SidebarTrigger className="-ml-1" />

        <Avatar>
          <Tooltip>
            <TooltipTrigger>
              <Avatar >
                {/* <AvatarImage src={"https://github.com/shadcn.png"} /> */}
                <AvatarFallback className="rounded-full w-full h-full flex items-center justify-center border border-gray-400">
                <span className="text-sm text-foreground">
                  {getInitialsFromEmail(session?.data?.user?.email)}
                </span>
                </AvatarFallback> 
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              {session?.data?.user?.email}
            </TooltipContent>
          </Tooltip>
        </Avatar>
        {/* <span className="text-sm text-muted-foreground">
          {session?.data?.user?.email}
        </span> */}

    </header>
  );
};

export default dashboardNavbar;
