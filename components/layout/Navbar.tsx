'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#works' },
  { label: 'Stack', href: '#stack' },
  { label: 'Journey', href: '#journey' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Floating Glass Navbar - reveals smoothly when scrolling past initial studio hero */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 py-3.5 sm:py-4 px-4 sm:px-8 md:px-12 flex justify-between items-center ${
          scrolled
            ? 'opacity-100 translate-y-0 bg-[#070412]/90 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {/* Left: Minimalist Brand Monogram */}
        <a
          href="#home"
          className="flex items-center gap-2 group cursor-pointer"
          aria-label="Back to Top"
        >
          <span className="font-instrument text-2xl sm:text-3xl text-white font-bold tracking-tight group-hover:opacity-80 transition-opacity">
            JPA<span className="text-[#A2FF00]">.</span>
          </span>
        </a>

        {/* Right: Sleek Floating Glass Nav Pill */}
        <div className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-[#140b28]/85 backdrop-blur-2xl border border-purple-500/25 shadow-2xl">
          <nav className="flex items-center px-3 gap-5 lg:gap-6 text-xs font-mono tracking-wider">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button Pill - Explicit High Contrast */}
          <a
            href="#contact"
            style={{ color: '#000000', backgroundColor: '#ffffff' }}
            className="px-4 py-2 rounded-full text-xs font-mono font-bold !text-black !bg-white hover:!bg-[#A2FF00] transition-colors flex items-center gap-1.5 shadow-md ml-1 cursor-pointer"
          >
            <span style={{ color: '#000000' }} className="font-bold">Get in Touch</span>
            <ArrowUpRight size={13} style={{ color: '#000000' }} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-full bg-[#140b28]/90 border border-purple-500/25 text-white/85 hover:text-white cursor-pointer"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-18 z-50 md:hidden glass-panel p-6 shadow-2xl flex flex-col gap-4 border border-purple-500/25 bg-[#140b28]/95 backdrop-blur-3xl rounded-3xl"
          >
            <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-wider">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-3.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={15} className="opacity-40" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="glass-pill w-full py-2.5 text-center font-mono text-xs uppercase tracking-wider text-white hover:bg-white/10"
              >
                Download Resume (CV)
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                style={{ color: '#000000', backgroundColor: '#ffffff' }}
                className="w-full py-2.5 rounded-full text-center font-mono text-xs uppercase tracking-wider font-bold !text-black !bg-white hover:!bg-[#A2FF00] transition-colors shadow-lg"
              >
                Get in Touch ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
