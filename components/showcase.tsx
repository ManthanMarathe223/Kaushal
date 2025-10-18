"use client"

import { useEffect, useRef, useState } from "react"

export default function Showcase() {
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
    <section id="showcase" className="py-16 sm:py-20 px-4 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Large title with background image fill effect */}
          <div className="relative mb-12">
            <div className="relative h-24 sm:h-32 md:h-40 flex items-center justify-start overflow-hidden">
              {/* Background image with overlay */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage:
                    "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/simon-kadula-8gr6bObQLOI-unsplash-TTmzgtg3iL6e7DHOOGHJOJCrQPYi1Z.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.15,
                }}
              />
              {/* Text with gradient overlay effect */}
              <div className="relative z-10 px-4 md:px-8">
                <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-balance leading-tight">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Kaushal
                  </span>
                  <br />
                  <span className="text-foreground">Robotics</span>
                </h2>
              </div>
            </div>
          </div>

          {/* Content section with image crossing boundary */}
          <div className="grid md:grid-cols-2 gap-8 items-center relative">
            {/* Left content */}
            <div className="space-y-6 z-10">
              <div>
                <p className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">
                  What we do
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Industrial Automation <span className="text-accent">Solutions</span>
                </h3>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We engineer precision robotic systems designed for modern manufacturing. Our solutions combine
                cutting-edge technology with practical engineering to deliver reliable automation for factories
                worldwide.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-primary to-accent rounded-full mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Advanced Precision</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Micron-level accuracy for complex manufacturing tasks
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-accent to-primary rounded-full mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Intelligent Integration</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Seamlessly integrates with existing factory systems
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - no image */}
            <div className="relative h-64 sm:h-80 md:h-full md:min-h-96">
              {/* Empty space for balance */}
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="mt-16 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full opacity-50" />
        </div>
      </div>
    </section>
  )
}
