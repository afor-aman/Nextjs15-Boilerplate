"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const Dashboard = (session: any) => {
  const signOut = async () => {
    await authClient.signOut();
  };

  console.log(session);

  return (
    <div>
      <h2>Welcome to the dashboard</h2>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
};

export default Dashboard;
