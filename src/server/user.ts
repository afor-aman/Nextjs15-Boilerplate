"use server"

import { auth } from "@/lib/auth";

export const signInAction = async (email: string, password: string) => {
    try {
        await auth.api.signInEmail({
            body: {
                email,
                password,
            },
        });
        return { success: true };
    } catch (error) {
        return { 
            success: false, 
            error: (error as any).body.message || "Invalid credentials. Please try again."
        };
    }
};

export const signUpAction = async (name: string, email: string, password: string) => {
    if (!name) {
        return { 
            success: false, 
            error: "Name is required" 
        };
    }
    try {
        await auth.api.signUpEmail({
            body: {
                name,
                email,
                password,
            },
        });
        return { success: true };
    } catch (error) {
        return { 
            success: false, 
            error: (error as any).body.message || "Failed to create account. Please try again." 
        };
    }
};  