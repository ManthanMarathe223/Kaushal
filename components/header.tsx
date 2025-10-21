"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"

interface HeaderProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent dark:from-teal-400 dark:to-amber-400 leading-tight">
              Kaushal
            </h1>
            <p className="text-xs font-light text-muted-foreground dark:text-muted-foreground mt-0.5">
              Robotic System Pvt. Ltd.
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("technology")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("robotic-arm")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              6 DOF
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact Us
            </button>
            <button onClick={toggleTheme} className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("technology")}
              className="block w-full text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("robotic-arm")}
              className="block w-full text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors"
            >
              6 DOF
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 rounded-lg hover:bg-muted transition-colors"
            >
              Contact Us
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
