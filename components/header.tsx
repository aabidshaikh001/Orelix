import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full py-5 px-6 md:px-12 bg-[#D8DAFA] shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
        <div className="relative">



  {/* Logo with Inline Styles to Make it Black */}
  <Image
    src="/white.png"
    alt="Orielix Logo"
    width={100}
    height={100}
    className="relative"
    style={{ filter: "invert(1) brightness(0)" }} // Makes white black
  />
</div>


         
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-gray-900 hover:text-indigo-600 font-medium transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-900 hover:text-indigo-600 font-medium transition-colors">
            About
          </Link>
          <Link href="/team" className="text-gray-900 hover:text-indigo-600 font-medium transition-colors">
            Team
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="bg-lavender-200 border-none hover:bg-lavender-300 transition-colors">
            Log in
          </Button>
          <Button className="bg-indigo-500 hover:bg-indigo-600 text-white transition-colors">Register</Button>
        </div>
      </div>
    </header>
  )
}

