"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const heroSlides = [
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homa-appliances-sz1CHL7Pky0-unsplash-SaQWyjIi7WpZRQryrMEjrBSTUWahKK.jpg",
      tagline: "Empowering Industries with Robotic Precision",
      align: "left" as const,
    },
    {
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/simon-kadula-8gr6bObQLOI-unsplash-TTmzgtg3iL6e7DHOOGHJOJCrQPYi1Z.jpg",
      tagline: "Redefining Automation with Innovation",
      align: "right" as const,
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/robot-2791678-8zRlVHW0LbWS9ItPUfwvtfFCnedfII.jpg",
      tagline: "Smart Robotic Hands for Smarter Manufacturing",
      align: "left" as const,
    },
    {
      image: "/automated-car-assembly-stockcake.jpg",
      tagline: "Transforming Manufacturing with Advanced Automation",
      align: "right" as const,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroSlides.length)
        setIsTransitioning(false)
      }, 300)
    }, 6000)

    return () => clearInterval(interval)
  }, [heroSlides.length])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const currentSlide = heroSlides[currentImageIndex]

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 w-full h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image || "/placeholder.svg"}
              alt={`Robot automation ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10 w-full px-4 max-w-6xl mx-auto">
        <div
          className={`flex ${
            currentSlide.align === "left" ? "justify-start" : "justify-end"
          } transition-all duration-1000`}
        >
          <div className={`max-w-2xl ${currentSlide.align === "left" ? "text-left" : "text-right"}`}>
            <p
              className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white text-balance leading-tight transition-all duration-700 ${
                isTransitioning
                  ? currentSlide.align === "left"
                    ? "opacity-0 translate-x-10"
                    : "opacity-0 -translate-x-10"
                  : "opacity-100 translate-x-0"
              }`}
            >
              {currentSlide.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-teal-400" size={32} />
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true)
              setTimeout(() => {
                setCurrentImageIndex(index)
                setIsTransitioning(false)
              }, 300)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-teal-400 w-8" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
