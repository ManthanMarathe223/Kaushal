"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
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
    <section id="about" className="py-16 sm:py-20 px-4 bg-muted/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-balance">
            About <span className="text-primary">Kaushal</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                At Kaushal, we design and develop high-performance robotic hands for industrial automation — helping
                factories handle materials with precision, safety, and efficiency.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                Our mission is to revolutionize manufacturing by creating intelligent robotic systems that work
                seamlessly alongside human workers, enhancing productivity while maintaining the highest safety
                standards.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">Precision Engineering</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">Factory Automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">AI-Powered Solutions</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/homa-appliances-sz1CHL7Pky0-unsplash-SaQWyjIi7WpZRQryrMEjrBSTUWahKK.jpg"
                alt="Robotic arm in factory"
                className="relative rounded-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
