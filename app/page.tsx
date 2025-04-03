"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { motion, useInView } from "framer-motion"

// Testimonials data
const testimonials = [
  {
    quote:
      "I just wanted to say that I'm very happy with my purchase so far. The documentation is outstanding - clear and detailed.",
    author: "Mark Villiams",
  },
  {
    quote:
      "Orielix has transformed the way I approach learning. The community is incredibly supportive and the resources are top-notch.",
    author: "Sarah Johnson",
  },
  {
    quote:
      "The workshops offered by Orielix have helped me develop skills that I use every day in my professional life.",
    author: "Alex Chen",
  },
]

// Roadmaps data
const roadmaps = [
  {
    title: "Card title",
    image: "",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    updatedTime: "5 mins ago",
  },
  {
    title: "Card title",
    image: "",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    updatedTime: "5 mins ago",
  },
  {
    title: "Card title",
    image: "",
    content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    updatedTime: "5 mins ago",
  },
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTextRevealed, setIsTextRevealed] = useState(false)

  // Refs for scroll animations
  const whatWeOfferRef = useRef(null)
  const isWhatWeOfferInView = useInView(whatWeOfferRef, { once: true, amount: 0.3 })

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  // Trigger text reveal animation after component mounts
  useEffect(() => {
    setIsTextRevealed(true)
  }, [])

  // Text animation variants
  const headingVariants = {
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      y: 20,
    },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  }

  const paragraphVariants = {
    hidden: {
      filter: "blur(8px)",
      opacity: 0,
      y: 15,
    },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    hidden: {
      filter: "blur(5px)",
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  }

  // What We Offer animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section with Glassmorphism - No borders */}
        <section className="w-full py-20 px-6 md:px-12 bg-[#D8DAFA] relative overflow-hidden">
          {/* Glassmorphism decorative elements */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400 rounded-full opacity-10 blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-40 right-20 w-40 h-40 bg-pink-300 rounded-full opacity-10 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="container mx-auto text-center relative z-10">
            <motion.h1
              variants={headingVariants}
              initial="hidden"
              animate={isTextRevealed ? "visible" : "hidden"}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight"
            >
              Orielix : Together We Innovate
            </motion.h1>

            <motion.p
              variants={paragraphVariants}
              initial="hidden"
              animate={isTextRevealed ? "visible" : "hidden"}
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10"
            >
              Step into a world of limitless learning and growth with Orielix. Gain essential skills, personalized
              guidance, and hands-on experience to shape your future.
            </motion.p>

            <motion.div variants={buttonVariants} initial="hidden" animate={isTextRevealed ? "visible" : "hidden"}>
              <Button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-6 text-lg h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </Button>
            </motion.div>

            <div className="mt-16">
              <div className="relative">
                {/* Background Decorative Shadows */}
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-indigo-400 rounded-full opacity-40 blur-xl"></div>
                <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-purple-400 rounded-full opacity-50 blur-2xl"></div>

                {/* Soft glow effect */}
                <div className="absolute inset-0 bg-indigo-200 opacity-30 blur-3xl"></div>

                {/* Hero Video with animation - replacing image */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="relative mx-auto rounded-xl shadow-2xl overflow-hidden"
                  style={{ maxWidth: "800px" }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto rounded-xl object-cover transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
                  >
                    <source src="/hero.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Overlay gradient for better text visibility if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-30"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section - with scroll animation */}
        <section ref={whatWeOfferRef} className="w-full py-20 px-6 md:px-12 bg-[#D8DAFA]">
          <motion.div
            className="container mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isWhatWeOfferInView ? "visible" : "hidden"}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900"
            >
              What We Offer
            </motion.h2>

            <motion.p variants={itemVariants} className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              Orielix provides hands-on experiences, peer support, creative challenges, and valuable resources for
              growth.
            </motion.p>

            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-16 h-16 bg-yellow-200 rounded-full opacity-50"></div>
                <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-indigo-200 rounded-full opacity-40"></div>
                <Image src="/whatweoffer.png" alt="What We Offer" width={950} height={500} className="relative z-10" />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Roadmaps Section */}
        <section className="w-full py-16 px-6 md:px-12 bg-[#D8DAFA]">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Popular Roadmaps</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Orielix provides hands-on experiences, peer support, creative challenges, and valuable resources for
              growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {roadmaps.map((roadmap, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Display roadmap image */}
                  <img
                    src={roadmap.image || "/placeholder.svg"}
                    alt={roadmap.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2">{roadmap.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{roadmap.content}</p>
                    <p className="text-xs text-[#5864CE]">Last updated {roadmap.updatedTime}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2">Browse more</Button>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="w-full py-20 px-6 md:px-12 bg-gradient-to-b from-[#D8DAFA] to-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Testimonial</h2>
            <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
              Orielix provides hands-on experiences, peer support, creative challenges, and valuable resources for
              growth.
            </p>

            <div className="relative max-w-3xl mx-auto">
              <div className="bg-lavender-200 p-10 rounded-xl shadow-lg text-center">
                <div className="mb-6">
                  <svg className="w-12 h-12 text-indigo-400 mx-auto opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-xl text-indigo-800 mb-6 italic">{testimonials[currentIndex].quote}</p>
                <p className="font-medium text-gray-700">- {testimonials[currentIndex].author}</p>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white rounded-full shadow-md hover:bg-lavender-200 transition-colors duration-300"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white rounded-full shadow-md hover:bg-lavender-200 transition-colors duration-300"
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Innovation Section */}
        <section className="w-full py-20 px-6 md:px-12 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-indigo-200 rounded-full opacity-50"></div>
                  <Image
                    src="/team.jpg"
                    alt="Team collaboration"
                    width={500}
                    height={300}
                    className="rounded-xl shadow-lg relative z-10"
                  />
                </div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-600 leading-tight">
                  Fueling Innovation
                  <br />& Connections
                </h2>
                <p className="text-gray-700 mb-6 text-lg">
                  At Orielix, we ignite your passion for learning and innovation! Join us to connect with like-minded
                  peers, gain valuable skills, and turn your ideas into reality.
                </p>
                <p className="text-gray-700 text-lg">
                  Whether you're a tech enthusiast, a creative thinker, or just curious to learn, our community is the
                  perfect place to grow and shine.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-32">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-600 leading-tight">
                  Join any of our
                  <br />
                  dynamic sessions
                </h2>
                <p className="text-gray-700 mb-6 text-lg">
                  Jump into our exciting sessions at Orielix! Whether you're looking to learn new skills, explore fresh
                  ideas, or connect with others, we've got something for everyone.
                </p>
                <p className="text-gray-700 text-lg">
                  Our sessions are interactive, fun, and designed to help you grow. Don't miss out discover, learn, and
                  thrive with us today!
                </p>
              </div>

              <div>
                <div className="relative">
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-200 rounded-full opacity-50"></div>
                  <Image
                    src="/notebook.webp"
                    alt="Notebook and coffee"
                    width={500}
                    height={300}
                    className="rounded-xl shadow-lg relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

