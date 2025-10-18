"use client"

import { useState } from "react"

export default function Footer() {
  const [showEmail, setShowEmail] = useState(false)
  const [showPhone, setShowPhone] = useState(false)

  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Kaushal</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Engineering precision for the future of industrial automation.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    const email = 'kaushalrobotic' + '@' + 'gmail.com'
                    window.location.href = 'mailto:' + email
                  }}
                  onMouseEnter={() => setShowEmail(true)}
                  onMouseLeave={() => setShowEmail(false)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {showEmail ? 'kaushalrobotic@gmail.com' : 'kaushalrobotic[at]gmail.com'}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span
                  onMouseEnter={() => setShowPhone(true)}
                  onMouseLeave={() => setShowPhone(false)}
                  className="text-muted-foreground"
                >
                  {showPhone ? '+91 9999900000' : '+91 99999•••••'}
                </span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-cyan-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-cyan-500 transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-cyan-500 transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-cyan-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">© 2025 Koushal Robotics — All Rights Reserved.</p>
          <p>Designed with passion by Team Koushal.</p>
        </div>
      </div>
    </footer>
  )
}
