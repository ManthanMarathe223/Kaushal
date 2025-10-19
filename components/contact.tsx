"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, Linkedin, Instagram, Loader2 } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [showTooltip, setShowTooltip] = useState(false)
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

  const isValidGmail = (email: string): boolean => {
    return email.trim().toLowerCase().endsWith("@gmail.com") && email.includes("@")
  }

  const isFormValid = (): boolean => {
    return (
      formData.name.trim().length > 0 &&
      formData.message.trim().length > 0 &&
      isValidGmail(formData.email)
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isFormValid()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
        setTimeout(() => {
          setSubmitStatus("idle")
        }, 5000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => {
          setSubmitStatus("idle")
        }, 3000)
      }
    } catch (error) {
      setSubmitStatus("error")
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-balance">
            Get in <span className="text-cyan-500">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Want to collaborate or learn more about our work? Let's connect and explore the future of automation
            together.
          </p>

          <div className="bg-muted/50 border border-border rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email (Gmail only)</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg bg-background border transition-colors ${
                    formData.email && !isValidGmail(formData.email)
                      ? "border-red-500 focus:border-red-500"
                      : "border-border focus:border-cyan-500"
                  } focus:outline-none`}
                  placeholder="yourname@gmail.com"
                />
                {formData.email && !isValidGmail(formData.email) && (
                  <p className="text-red-500 text-xs mt-1">Please enter a valid Gmail address</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  rows={5}
                  placeholder="Tell us about your project..."
                />
              </div>
              <div className="relative">
                <button
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  onMouseEnter={() => !isFormValid() && setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  className={`w-full px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isFormValid() && !isSubmitting
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="animate-spin" size={20} />
                      Sending...
                    </span>
                  ) : submitStatus === "success" ? (
                    "Message Sent! ✓"
                  ) : (
                    "Send Message"
                  )}
                </button>
                {showTooltip && !isFormValid() && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
                    Please fill the form properly
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-foreground rotate-45"></div>
                  </div>
                )}
              </div>
            </form>

            {submitStatus === "success" && (
              <div className="mb-8 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-600 text-center animate-in slide-in-from-top duration-300">
                Your message has been sent successfully! Check your email for confirmation.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-8 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-600 text-center animate-in slide-in-from-top duration-300">
                Failed to send message. Please try again later.
              </div>
            )}

            <div className="border-t border-border pt-8">
              <p className="text-center text-muted-foreground mb-6">Connect with us on social media</p>
              <div className="flex justify-center gap-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-background border border-border hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-background border border-border hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="mailto:contact@koushal.com"
                  className="p-3 rounded-lg bg-background border border-border hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
