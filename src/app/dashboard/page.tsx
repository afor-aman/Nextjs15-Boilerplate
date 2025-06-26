"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [session, setSession] = useState<any>(null);
  const router = useRouter();

  const signOut = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  useEffect(() => {
    const fetchSession = async () => {
      const session = await authClient.getSession();
      if (!session?.data?.session) {
        router.push("/login");
        return;
      }
      setSession(session);
    };
    fetchSession();
  }, [router]);

  if (!session?.data?.session) {
    return null;
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Welcome to the dashboard</h2>
      <p className="mb-4">Logged in as: {session?.data?.user?.email}</p>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
};

export default Dashboard;
