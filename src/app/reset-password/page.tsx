"use client"

import React, { Suspense, useState } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authClient } from '@/lib/auth-client'
import { useSearchParams } from 'next/navigation'
import { toast } from 'sonner'

const formSchema = z.object({
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

const ResetPasswordForm = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get("token") as string
  const [resettingPassword, setResettingPassword] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Add a loading state here to show resetting password in a toast sonner
    setResettingPassword(true)
    const response = await authClient.resetPassword({
      newPassword: values.password,
      token: token,
    })
    console.log("🚀 ~ onSubmit ~ response:", response)
    if (response.data) {
      toast.success("Password reset successfully", {
        description: <p className="text-sm text-blue-500">Please login with your new password</p>,
      })
    } else {
      toast.error(response.error.message || "Failed to reset password")
    }
    setResettingPassword(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={resettingPassword}>{resettingPassword ? "Resetting..." : "Reset Password"} </Button>
      </form>
    </Form>
  )
}

const ResetPassword = () => {
  return (
    <div className="space-y-6 max-w-md mx-auto p-6 h-screen flex flex-col justify-center">
      <h1 className="text-2xl font-bold">Reset Password</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  )
}

export default ResetPassword