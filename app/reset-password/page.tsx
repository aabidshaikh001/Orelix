"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match")
      return
    }
    // Handle password reset logic here
    console.log({ newPassword })
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6e6fa] p-4">
      <Card className="w-full max-w-md bg-transparent border-none shadow-none">
        <CardContent className="pt-6">
          <div className="mb-8">
            <Link href="/login" className="inline-flex items-center text-gray-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
            </Link>
            <h1 className="text-3xl font-bold text-center text-gray-900 mt-2">Reset Password</h1>
          </div>
          {submitted ? (
            <div className="text-center space-y-4">
              <p className="text-green-600">Your password has been successfully reset.</p>
              <Link href="/login" className="text-[#5c5cd6] hover:underline">
                Return to login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="new-password" className="text-sm font-medium text-gray-700">
                  New Password
                </Label>
                <Input
                  id="new-password"
                  type="password"
                  placeholder="••••••••••••"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
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
              <Button type="submit" className="w-full h-12 bg-[#5c5cd6] hover:bg-[#4b4bc7] text-white">
                <Save className="h-4 w-4 mr-2" /> Reset Password
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

