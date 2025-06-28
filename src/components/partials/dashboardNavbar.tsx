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

  function getInitialsFromName(name: string) {
    if (!name || typeof name !== "string") return "";

    const nameParts = name.split(/[\.\_\-\+]/).filter(Boolean); // Split by common separators

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
      console.log("🚀 ~ fetchSession ~ session:", session)
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
                  {getInitialsFromName(session?.data?.user?.name)}
                </span>
                </AvatarFallback> 
              </Avatar>
            </TooltipTrigger>
            <TooltipContent>
              {session?.data?.user?.name}
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
