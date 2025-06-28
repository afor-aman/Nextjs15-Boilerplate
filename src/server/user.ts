"use server"

import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

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
        console.error("Sign in error:", error);
        return { 
            success: false, 
            error: "Invalid credentials. Please try again." 
        };
    }
};

export const signUpAction = async (name: string, email: string, password: string) => {
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
        console.error("Sign up error:", error);
        return { 
            success: false, 
            error: "Failed to create account. Please try again." 
        };
    }
};  