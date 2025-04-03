"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GoogleButton } from "@/components/google-button"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log({ email, password, rememberMe })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6e6fa] p-4">
      <Card className="w-full max-w-md bg-transparent border-none shadow-none">
        <CardContent className="pt-6">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-gray-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
            </Link>
            <h1 className="text-3xl font-bold text-center text-gray-900 mt-2">Login</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 bg-white border-gray-200"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 bg-white border-gray-200"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </Label>
            </div>
            <Button type="submit" className="w-full h-12 bg-[#5c5cd6] hover:bg-[#4b4bc7] text-white">
              <Lock className="h-4 w-4 mr-2" /> Login
            </Button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#e6e6fa] px-2 text-gray-500">Or continue with</span>
              </div>
            </div>

            <GoogleButton variant="login" />
            <div className="text-center space-y-2 mt-4">
              <Link href="/forgot-password" className="text-sm text-[#5c5cd6] hover:underline block">
                Forgot password?
              </Link>
              <div className="text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <Link href="/register" className="text-[#5c5cd6] hover:underline">
                  Register
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

