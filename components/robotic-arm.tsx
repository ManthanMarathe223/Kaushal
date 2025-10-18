"use client"

import { useEffect, useRef, useState } from "react"

export default function RoboticArm() {
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
    <section id="robotic-arm" className="py-16 sm:py-20 px-4 bg-background transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-balance">
            Our <span className="text-primary">6-DOF Robotic Arm</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative overflow-hidden rounded-2xl border border-border">
                <img
                  src="/Robotic ARM.jpg"
                  alt="6-DOF Robotic Arm"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Our state-of-the-art <span className="text-foreground font-semibold">six-degrees-of-freedom (6-DOF) robotic arm</span> represents
                the pinnacle of precision engineering and advanced motion control.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Advanced Motion Control</h3>
                    <p className="text-muted-foreground">
                      Six independent axes of rotation enable complex movements and precise positioning in three-dimensional space.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Exceptional Precision</h3>
                    <p className="text-muted-foreground">
                      High-accuracy servo motors and advanced control algorithms deliver sub-millimeter precision for demanding applications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Industrial Applications</h3>
                    <p className="text-muted-foreground">
                      Designed for automation in manufacturing, assembly, material handling, welding, and quality inspection processes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Engineered for reliability and performance in demanding industrial environments, our robotic arm delivers
                  consistent results while reducing operational costs and improving productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
