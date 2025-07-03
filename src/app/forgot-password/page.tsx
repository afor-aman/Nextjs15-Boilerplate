"use client"

import React, { useState } from 'react'
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
import { forgotPasswordAction } from '@/server/user'
import { toast } from 'sonner'

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

const ForgotPassword = () => {
  const [sendingEmail, setSendingEmail] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Add a loading state here to show sending email in a toast sonner
    setSendingEmail(true)
    const response = await forgotPasswordAction(values.email)
    if (response.success) {
      toast.success("Reset password email sent", {
        description: <p className="text-sm text-blue-500">Please check your email for a reset password link</p>,
      })
    } else {
      toast.error(response.error)
    }
    setSendingEmail(false)
  }

  return (
    <div className="space-y-6 max-w-md mx-auto p-6 h-screen flex flex-col justify-center">
      <h1 className="text-2xl font-bold">Reset Password</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={sendingEmail}>{sendingEmail ? "Sending..." : "Reset Password"}</Button>
        </form>
      </Form>
    </div>
  )
}

export default ForgotPassword