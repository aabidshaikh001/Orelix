"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function VerifyEmailPage() {
  const [verifying, setVerifying] = useState(true)
  const [verified, setVerified] = useState(false)

  useEffect(() => {
    // Simulate verification process
    const timer = setTimeout(() => {
      setVerifying(false)
      // Simulate successful verification
      setVerified(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6e6fa] p-4">
      <Card className="w-full max-w-md bg-transparent border-none shadow-none">
        <CardContent className="pt-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-center text-gray-900">Email Verification</h1>
          </div>
          <div className="text-center space-y-6">
            {verifying ? (
              <p className="text-gray-600">Verifying your email address...</p>
            ) : verified ? (
              <>
                <div className="flex justify-center">
                  <CheckCircle className="h-16 w-16 text-green-500" />
                </div>
                <p className="text-green-600">Your email has been successfully verified!</p>
                <Button asChild className="w-full h-12 bg-[#5c5cd6] hover:bg-[#4b4bc7] text-white">
                  <Link href="/login">Proceed to Login</Link>
                </Button>
              </>
            ) : (
              <>
                <div className="flex justify-center">
                  <XCircle className="h-16 w-16 text-red-500" />
                </div>
                <p className="text-red-600">Verification failed. The link may be invalid or expired.</p>
                <Button asChild className="w-full h-12 bg-[#5c5cd6] hover:bg-[#4b4bc7] text-white">
                  <Link href="/login">Return to Login</Link>
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

