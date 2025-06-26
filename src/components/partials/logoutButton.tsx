'use client'

import { Button } from "../ui/button";
import { LogOutIcon } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export const LogoutButton = () => {
    const router = useRouter();
    
  return (
    <Button variant="outline" className="w-full" onClick={() => {
        authClient.signOut();
        router.push("/");
    }}><LogOutIcon />Logout</Button>
  )
}
