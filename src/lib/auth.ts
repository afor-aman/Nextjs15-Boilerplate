import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import db from "@/utils/db";
import { jwt } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import { Resend } from 'resend';
import { EmailTemplate } from "@/email-templates/verificationEmail";
const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    minPasswordLength: 6,
    resetPasswordTokenExpiresIn: 60 * 60,
    sendResetPassword: async ({ user, url, token }, request) => {
      await resend.emails.send({
        from: "Boilerplate <noreply@mail.aforaman.com>", // You could add your custom domain
        to: user.email,
        subject: 'Reset your password',
        text: `Click the link to reset your password: ${url}`
      })
    }
  },
  emailVerification: {
    sendOnSignUp: true, // Automatically sends a verification email at signup
    autoSignInAfterVerification: true, // Automatically signIn the user after verification
    sendVerificationEmail: async ({ user, url }) => {
      await resend.emails.send({
        from: "Boilerplate <noreply@mail.aforaman.com>", // You could add your custom domain
        to: user.email, // email of the user to want to end
        subject: "Email Verification", // Main subject of the email
        react: EmailTemplate({ firstName: user.name, url }), // Content of the email
        // you could also use "React:" option for sending the email template and there content to user
      });
    },
  },
  plugins: [jwt(), nextCookies()],
});
