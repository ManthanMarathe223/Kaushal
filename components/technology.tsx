"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Cpu, Gauge, Layers } from "lucide-react"

const features = [
  {
    icon: Gauge,
    title: "Precision Material Handling",
    description: "Micron-level accuracy for delicate and heavy materials",
  },
  {
    icon: Cpu,
    title: "AI-Powered Motion Control",
    description: "Intelligent algorithms for adaptive and responsive movements",
  },
  {
    icon: Zap,
    title: "High Payload Capacity",
    description: "Handle loads up to 500kg with consistent precision",
  },
  {
    icon: Layers,
    title: "Modular & Scalable Design",
    description: "Easily integrate and expand your automation systems",
  },
]

export default function Technology() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="technology" className="py-16 sm:py-20 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Our Robotic Hand <span className="text-primary">Technology</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-2xl">
            Cutting-edge engineering meets practical innovation in our industrial robotic systems.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/robot-2791677-OFaOBMiqUkdSfkIvOuKofn2acjCSjx.jpg"
                alt="Robotic arm with precision gripper"
                className="relative rounded-2xl w-full h-auto object-cover"
              />
            </div>

            <div className="grid grid-cols-1 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="p-4 sm:p-6 rounded-xl bg-muted/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
