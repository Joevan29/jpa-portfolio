"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import HireMeButton from "@/components/ui/HireMeButton"

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Stack", href: "#stack" },
  { label: "Credentials", href: "#credentials" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#journey" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "stack", "credentials", "projects", "journey", "contact"]
      const scrollPosition = window.scrollY + 200 // Offset

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-4 md:top-6 left-4 right-4 md:left-6 md:right-6 z-50 pointer-events-none transition-all duration-300">
      <div className="bg-white border-[3px] border-black shadow-[4px_4px_0_0_#000000] md:shadow-[6px_6px_0_0_#000000] flex items-center justify-between px-4 md:px-6 py-4 md:py-5 pointer-events-auto gap-4 mx-auto w-full max-w-7xl relative">
        {/* Logo */}
        <a 
          href="#home" 
          className="font-mono font-bold text-xl sm:text-2xl md:text-3xl tracking-normal text-black whitespace-nowrap ml-0 md:ml-16 lg:ml-28 glitch-hover"
          data-text="JPA"
        >
          JPA
        </a>

        {/* Desktop Links (Text Based, Centered) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 lg:gap-12 font-mono text-sm font-bold whitespace-nowrap pointer-events-auto">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-black tracking-wide transition-all ${
                  isActive 
                     ? "underline decoration-[#A2FF00] decoration-[4px] underline-offset-4" 
                    : "opacity-60 hover:opacity-100 hover:underline hover:decoration-black hover:decoration-[2px] hover:underline-offset-4"
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        {/* CTA + Terminal Hint */}
        <div className="hidden md:flex items-center gap-3 mr-6 md:mr-16 lg:mr-28">
          <span className="font-mono text-[9px] text-ink opacity-30 tracking-widest border border-ink/20 px-1.5 py-0.5 rounded-sm hidden lg:block">
            ` terminal
          </span>
          <HireMeButton />
        </div>

        {/* Mobile Burger (Simplified) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative pointer-events-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[3px] bg-black transition-transform rounded-full ${menuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
          <span className={`block w-6 h-[3px] bg-black transition-opacity rounded-full ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[3px] bg-black transition-transform rounded-full ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#F5F3A1] z-40 flex flex-col items-center justify-center gap-10 transition-opacity duration-300 pointer-events-auto ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-2xl font-bold tracking-widest text-black"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-8 py-4 bg-black !text-white border-[3px] border-black font-mono text-lg font-bold tracking-widest hover:bg-[#A2FF00] hover:!text-black transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}
