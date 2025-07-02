'use client'

import { LogOutIcon } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
    const router = useRouter();
    
  return (
    <div className="flex items-center gap-2 cursor-pointer" onClick={() => {
      authClient.signOut();
      router.push("/");
    }}>
      <LogOutIcon />
      Logout
    </div>
  )
}
