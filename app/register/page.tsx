"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Captcha } from "@/components/captcha"
import { GoogleButton } from "@/components/google-button"

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [captchaVerified, setCaptchaVerified] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords do not match")
      return
    }
    if (!captchaVerified) {
      alert("Please verify the captcha")
      return
    }
    // Handle registration logic here
    console.log({ name, email, password })
    alert("Verification link has been sent to your email")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6e6fa] p-4">
      <Card className="w-full max-w-md bg-transparent border-none shadow-none">
        <CardContent className="pt-6">
          <div className="mb-8">
            <Link href="/login" className="inline-flex items-center text-gray-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
            </Link>
            <h1 className="text-3xl font-bold text-center text-gray-900 mt-2">Register</h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12 bg-white border-gray-200"
              />
            </div>
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
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">
                Confirm Password
              </Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="••••••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="h-12 bg-white border-gray-200"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Captcha</Label>
              <Captcha onVerify={() => setCaptchaVerified(true)} />
            </div>
            <Button type="submit" className="w-full h-12 bg-[#5c5cd6] hover:bg-[#4b4bc7] text-white">
              <UserPlus className="h-4 w-4 mr-2" /> Register
            </Button>

            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#e6e6fa] px-2 text-gray-500">Or register with</span>
              </div>
            </div>

            <GoogleButton variant="register" />
            <div className="text-center mt-4">
              <div className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-[#5c5cd6] hover:underline">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

