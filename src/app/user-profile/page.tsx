"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "@/utils/getSession";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Crown } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

const UserProfile = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await getSession();

        if (!session?.data?.session) {
          router.push("/login");
          return;
        }
        setSession(session);
      } catch (error) {
        console.error("Error fetching session:", error);
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };
    fetchSession();
  }, [router]);

  if (loading) {
    return (
      <div className="container mx-auto p-8">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }

  if (!session?.data?.session) {
    return null;
  }

  const user = session.data.user;
  const userInitials = user?.name ? user.name.split(' ').map((n: string) => n[0]).join('').toUpperCase() : user?.email?.[0]?.toUpperCase() || 'U';
  
  // Dummy plan - will be replaced with real logic later
  const userPlan = "Pro";

  return (
    <div className="container mx-auto p-8 space-y-6">
      <div className="flex items-center space-x-4 mb-8">
        <Avatar className="h-16 w-16">
          <AvatarImage src={user?.image || ""} alt={user?.name || "User"} />
          <AvatarFallback className="text-lg font-semibold">
            {userInitials}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">User Profile</h1>
          <p className="text-muted-foreground">Manage your account information</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Personal Information Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>Personal Information</span>
            </CardTitle>
            <CardDescription>
              Your basic account details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-muted-foreground">Full Name</label>
              <p className="text-base font-medium">{user?.name || "Not provided"}</p>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center space-x-1">
                <Mail className="h-4 w-4" />
                <span>Email Address</span>
              </label>
              <p className="text-base font-medium">{user?.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-muted-foreground">Account Status</label>
              <Badge variant="secondary" className="w-fit">
                {user?.emailVerified ? "Verified" : "Unverified"}
              </Badge>
            </div>
            {!user?.emailVerified && (
              <div className="mt-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className=""
                  onClick={() => {
                    authClient.sendVerificationEmail({
                      email: user?.email,
                    });
                  }}
                >
                  Verify Email
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Plan Information Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Crown className="h-5 w-5" />
              <span>Plan Information</span>
            </CardTitle>
            <CardDescription>
              Your current subscription plan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium text-muted-foreground">Current Plan</label>
              <Badge variant="default" className="text-sm">
                {userPlan}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;