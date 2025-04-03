import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full py-10 px-6 md:px-12 bg-[#5864CE] text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
          <div className="relative">
  <Image 
    src="/white.png" 
    alt="Orielix Logo" 
    width={100} 
    height={100} 
    className="relative" 
  />
</div>

          
          </div>

          <div className="text-center md:text-right text-sm md:text-base">
            Jump into our exciting sessions at Orielix!
            <br />
            Whether you're looking to learn new skills, explore fresh ideas, or connect
          </div>
        </div>

        <div className="border-t border-indigo-400 pt-6 mt-6">
          <div className="text-center text-sm">Copyright 2025 | All Rights Reserved</div>
        </div>
      </div>
    </footer>
  )
}

