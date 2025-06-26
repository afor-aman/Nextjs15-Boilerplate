"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/utils/getSession";


const Dashboard = () => {
  const [session, setSession] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();

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
      <p>This is the dashboard page, you can add your content here</p>
    </div>
  );
};

export default Dashboard;
