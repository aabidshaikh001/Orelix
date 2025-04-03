"use client"

import { useState, useEffect } from "react"
import { RefreshCw, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CaptchaProps {
  onVerify: () => void
}

export function Captcha({ onVerify }: CaptchaProps) {
  const [captchaText, setCaptchaText] = useState("")
  const [userInput, setUserInput] = useState("")
  const [verified, setVerified] = useState(false)

  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789"
    let result = ""
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setCaptchaText(result)
    setUserInput("")
    setVerified(false)
  }

  useEffect(() => {
    generateCaptcha()
  }, [])

  const handleVerify = () => {
    if (userInput === captchaText) {
      setVerified(true)
      onVerify()
    } else {
      alert("Incorrect captcha. Please try again.")
      generateCaptcha()
    }
  }

  return (
    <div className="space-y-3 p-4 border rounded-md bg-white">
      {verified ? (
        <div className="flex items-center justify-center space-x-2 text-green-600">
          <Check className="h-5 w-5" />
          <span>Captcha verified</span>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <div className="bg-gray-100 p-2 rounded-md w-40 text-center select-none font-mono text-lg tracking-wider">
              {captchaText}
            </div>
            <Button type="button" variant="ghost" size="icon" onClick={generateCaptcha} className="h-8 w-8">
              <RefreshCw className="h-4 w-4" />
              <span className="sr-only">Refresh Captcha</span>
            </Button>
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Enter captcha"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button type="button" onClick={handleVerify} className="bg-[#5c5cd6] hover:bg-[#4b4bc7] text-white">
              Verify
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

