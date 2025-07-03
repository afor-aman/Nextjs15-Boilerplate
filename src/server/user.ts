"use server";

import { auth } from "@/lib/auth";
import {
  authRateLimiter,
  forgotPasswordRateLimiter,
  verificationEmailRateLimiter,
} from "@/utils/rateLimiter";
import { headers } from "next/headers";

export const signInAction = async (email: string, password: string) => {
  const ip =  (await headers()).get('x-forwarded-for') || "127.0.0.1"
  try {
    await authRateLimiter.consume(ip, 1);
    await authRateLimiter.consume(email, 1);
  } catch (error) {
    return {
      success: false,
      error: "Rate limit exceeded retry after 15 minutes",
    };
  }

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
      error:
        (error as any).body.message || "Invalid credentials. Please try again.",
    };
  }
};

export const signUpAction = async (
  name: string,
  email: string,
  password: string
) => {
  const ip =  (await headers()).get('x-forwarded-for') || "127.0.0.1"

  try {
    await authRateLimiter.consume(ip, 1);
    await authRateLimiter.consume(email, 1);
  } catch (error) {
    return {
      success: false,
      error: "Rate limit exceeded retry after 15 minutes",
    };
  }

  if (!name) {
    return {
      success: false,
      error: "Name is required",
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
      error:
        (error as any).body.message ||
        "Failed to create account. Please try again.",
    };
  }
};

export const sendVerificationEmailAction = async (email: string) => {
  const ip =  (await headers()).get('x-forwarded-for') || "127.0.0.1"

  try {
    await verificationEmailRateLimiter.consume(email, 1);
    await verificationEmailRateLimiter.consume(ip, 1);
  } catch (error) {
    return {
      success: false,
      error: "Rate limit exceeded retry after 24 hours",
    };
  }

  try {
    await auth.api.sendVerificationEmail({
      body: {
        email,
      },
    });
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error:
        (error as any).body.message ||
        "Failed to send verification email. Please try again.",
    };
  }
};

export const forgotPasswordAction = async (email: string) => {
  const ip =  (await headers()).get('x-forwarded-for') || "127.0.0.1"
  try {
    await forgotPasswordRateLimiter.consume(email, 1);
    await forgotPasswordRateLimiter.consume(ip, 1);
  } catch (error) {
    return {
      success: false,
      error: "Rate limit exceeded retry after 1 minute",
    };
  }
  try {
    await auth.api.forgetPassword({
      body: {
        email,
      },
    });
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error:
        (error as any).body.message ||
        "Failed to send reset password email. Please try again.",
    };
  }
};
