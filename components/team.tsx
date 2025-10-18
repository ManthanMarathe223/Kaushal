"use client"

import { useEffect, useRef, useState } from "react"

const teamMembers = [
  {
    name: "Tanishq Khaire",
    role: "CEO & Founder",
    image: "/professional-headshot-tech-founder.jpg",
  },
  {
    name: "Manthan Marathe",
    role: "Co-Founder and Software Head",
    image: "/professional-software-engineer.png",
  },
  {
    name: "Utkarsh Raut",
    role: "Co-Founder and Hardware Head",
    image: "/professional-headshot-tech-founder.jpg",
  },
]

export default function Team() {
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
    <section id="team" className="py-16 sm:py-20 px-4 bg-muted/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-balance">
            Meet Our <span className="text-primary">Team</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 transform group-hover:scale-105">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium text-sm sm:text-base">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
