'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Copy, Check, ArrowUpRight, Download } from 'lucide-react'

const V_BOTTOM_BG = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

export default function ConnectCTA() {
  const [copied, setCopied] = useState(false)
  const [timeStr, setTimeStr] = useState('')
  const [dateStr, setDateStr] = useState('')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTimeStr(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }) + ' WIB'
      )
      setDateStr(
        now.toLocaleDateString('en-GB', {
          timeZone: 'Asia/Jakarta',
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('joevanpan@outlook.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="scroll-mt-24 relative w-full overflow-hidden flex flex-col justify-between pt-16 sm:pt-20 pb-12 sm:pb-16 border-t border-purple-500/15"
    >
      {/* Background 3D Cinematic Visual Loop */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <video
          src={V_BOTTOM_BG}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070412]/80 via-[#070412]/60 to-[#070412] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#070412] to-transparent pointer-events-none" />
      </div>

      {/* Center Content matching reference layout: "You dream it. We ship it." */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center my-auto">
        
        {/* Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="glass-pill px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-[#C084FC] inline-block mb-4 font-bold bg-[#140b28]/80 border border-purple-500/25 shadow-xl"
        >
          Connect &amp; Collaborate
        </motion.div>

        {/* Big Serif Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="font-instrument text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05]"
        >
          You dream it. <em className="italic text-white/60">We engineer it</em><span className="text-[#A2FF00]">.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="text-white/75 text-xs sm:text-base leading-relaxed max-w-lg mx-auto mt-4 font-normal drop-shadow"
        >
          Available for full-time engineering roles, high-concurrency distributed systems, and modern web application development.
        </motion.p>

        {/* Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center gap-3.5 w-full max-w-md mx-auto"
        >
          {/* Copy Email Pill */}
          <div className="glass-pill pl-5 pr-2 py-2 flex items-center justify-between gap-3 w-full shadow-2xl bg-black/80 border border-white/25">
            <span className="font-mono text-xs sm:text-sm text-white/90 select-all truncate font-medium">
              joevanpan@outlook.com
            </span>
            <button
              onClick={copyEmail}
              style={{ color: '#000000', backgroundColor: '#ffffff' }}
              className="!bg-white !text-black hover:!bg-[#A2FF00] rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wider font-bold transition-colors flex items-center gap-1.5 cursor-pointer flex-shrink-0 shadow-md"
            >
              {copied ? (
                <Check size={13} className="text-green-700" />
              ) : (
                <Copy size={13} style={{ color: '#000000' }} />
              )}
              <span style={{ color: '#000000' }}>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Download CV Pill */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#000000', backgroundColor: '#ffffff' }}
            className="px-5 py-3 rounded-full text-xs font-mono font-bold !text-black !bg-white hover:!bg-[#A2FF00] transition-colors flex items-center justify-center gap-1.5 shrink-0 shadow-xl w-full sm:w-auto cursor-pointer"
          >
            <span style={{ color: '#000000' }}>Resume</span>
            <Download size={13} style={{ color: '#000000' }} />
          </a>
        </motion.div>

        {/* Quick Social Logo Buttons & Live WIB Clock */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-7 sm:pt-9">
          {/* Official Social Logos */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/Joevan29"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/15 hover:border-[#A2FF00]/60 hover:bg-white/[0.12] transition-all flex items-center justify-center hover:scale-110 shadow-md group cursor-pointer"
            >
              <img src="/github.svg" alt="GitHub" className="w-4 h-4 invert opacity-80 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.linkedin.com/in/jvnprmnachmd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/15 hover:border-[#A2FF00]/60 hover:bg-white/[0.12] transition-all flex items-center justify-center hover:scale-110 shadow-md group cursor-pointer"
            >
              <img src="/linkedin.svg" alt="LinkedIn" className="w-4 h-4 invert opacity-80 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="https://www.instagram.com/aequorreditusjoi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/15 hover:border-[#A2FF00]/60 hover:bg-white/[0.12] transition-all flex items-center justify-center hover:scale-110 shadow-md group cursor-pointer"
            >
              <img src="/instagram.svg" alt="Instagram" className="w-4 h-4 invert opacity-80 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <span className="hidden sm:inline text-white/20">·</span>

          {/* Real-time Jakarta WIB Clock & Date Pill */}
          <div className="glass-pill px-4 py-2 flex items-center gap-2 border border-white/15 bg-white/[0.04] backdrop-blur-md text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A2FF00] shadow-[0_0_8px_#A2FF00] animate-pulse" />
            <span className="text-white/90 font-medium">Jakarta, ID</span>
            <span className="text-white/25">·</span>
            <span className="text-[#A2FF00] font-bold font-mono">{timeStr || '17:50:00 WIB'}</span>
            <span className="text-white/25">·</span>
            <span className="text-white/50">{dateStr || '19 Sep 2026'}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
