'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Download, Server, Cpu, Database, Cloud } from 'lucide-react'

// Luminous 3D glowing orb / terrain landscape loop
const V_HERO_BG = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

const IMPACT_METRICS = [
  {
    value: '10k+',
    label: 'Req/Sec Handled',
    desc: 'Peak traffic without latency drop',
    icon: Server,
  },
  {
    value: '99.9%',
    label: 'Target Uptime',
    desc: 'Resilient microservices & failover',
    icon: Cpu,
  },
  {
    value: '5+',
    label: 'Production Systems',
    desc: 'Enterprise ERP, SAP & cloud apps',
    icon: Database,
  },
  {
    value: 'Cloud',
    label: 'Google Cloud Infra',
    desc: 'BigQuery, Docker & CI/CD pipelines',
    icon: Cloud,
  },
]

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section
      id="about"
      ref={sectionRef}
      className="scroll-mt-20 relative w-full overflow-hidden flex flex-col justify-between pt-16 sm:pt-20 md:pt-24 pb-14 sm:pb-16 border-t border-purple-500/15"
    >
      {/* Background 3D Bioluminescent Garden Atmosphere */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <video
          ref={videoRef}
          src={V_HERO_BG}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070412]/90 via-[#070412]/70 to-[#070412] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070412] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="glass-pill px-4 py-1.5 inline-flex items-center gap-2 text-xs font-mono tracking-wider shadow-xl border border-purple-500/25 bg-[#140b28]/80 backdrop-blur-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A2FF00] shadow-[0_0_8px_#A2FF00] animate-pulse" />
            <span className="text-white/90 font-medium">About Me</span>
            <span className="text-white/30">·</span>
            <span className="text-white/80 font-mono">Joevan Pramana Achmad</span>
            <span className="text-white/30 hidden sm:inline">·</span>
            <span className="text-white/60 hidden sm:inline">Software Engineer</span>
          </div>

          <h1 className="font-instrument text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.05] mt-4">
            Engineering Scalable Systems
            <br />
            <em className="italic font-normal text-white/60">With Precision &amp; Craft</em>
            <span className="text-[#A2FF00]">.</span>
          </h1>
        </motion.div>

        {/* 2-Column Editorial About Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-12 sm:mb-16">
          
          {/* Left Column: Portrait & Identity Card (4 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="lg:col-span-5 flex flex-col justify-between glass-panel rounded-3xl p-6 sm:p-7 border border-white/15 shadow-2xl relative overflow-hidden"
          >
            {/* Top Status */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#A2FF00] shadow-[0_0_8px_#A2FF00]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#A2FF00] font-bold">
                  Open to Work
                </span>
              </div>
              <span className="font-mono text-[11px] text-white/50">Jakarta, ID (WIB)</span>
            </div>

            {/* Avatar Photo Frame */}
            <div className="relative w-full aspect-square max-w-[260px] mx-auto rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/60 mb-5 group">
              <Image
                src="/avatar.png"
                alt="Joevan Pramana Achmad - Full Stack & Backend Engineer"
                fill
                priority
                sizes="(max-width: 768px) 260px, 300px"
                className="object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90">
                <span className="glass-pill px-2.5 py-1 bg-black/70 border border-white/20">
                  Full Stack &amp; Backend
                </span>
                <span className="text-[#A2FF00] font-bold">JPA.</span>
              </div>
            </div>

            {/* Quick Profile Meta */}
            <div className="space-y-2 font-mono text-xs text-white/80 mb-6">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/40">Full Name</span>
                <span className="text-white font-medium">Joevan Pramana Achmad</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/40">Education</span>
                <span className="text-white font-medium">Univ. Nasional (CS)</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-white/40">Specialization</span>
                <span className="text-white font-medium">Distributed Backends</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Core Stack</span>
                <span className="text-[#A2FF00] font-medium">Go · Node.js · Cloud</span>
              </div>
            </div>

            {/* Download Resume Action Button */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#000000', backgroundColor: '#ffffff' }}
              className="w-full py-3 rounded-full text-xs font-mono font-bold !text-black !bg-white hover:!bg-[#A2FF00] transition-colors flex items-center justify-center gap-2 shadow-xl cursor-pointer"
            >
              <span style={{ color: '#000000' }}>Download Resume (CV)</span>
              <Download size={14} style={{ color: '#000000' }} />
            </a>
          </motion.div>

          {/* Right Column: Personal Story & Impact Metrics (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            className="lg:col-span-7 flex flex-col justify-between gap-6"
          >
            {/* Narrative Story Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 shadow-xl flex flex-col justify-between flex-grow">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#A2FF00] font-bold mb-3 block">
                  // BIOGRAPHY &amp; ENGINEERING CRAFT
                </span>

                <h3 className="font-instrument text-2xl sm:text-3xl text-white font-bold tracking-tight mb-4">
                  Building dependable backends that scale seamlessly under real-world pressure.
                </h3>

                <div className="space-y-3.5 text-xs sm:text-sm text-white/75 leading-relaxed font-normal">
                  <p>
                    Halo! I&apos;m <strong className="text-white font-semibold">Joevan Pramana Achmad</strong>, a software engineer with a deep focus on high-throughput backend services, resilient distributed architectures, and modern web applications.
                  </p>
                  <p>
                    My professional experience spans architecting robust API gateways and enterprise SAP synchronization at <span className="text-white font-medium">PT Kirana Megatara</span>, designing secure backend services at <span className="text-white font-medium">BRI Life</span>, and building high-concurrency platforms capable of sustaining <span className="text-[#A2FF00] font-mono">10,000+ requests per second</span> without latency spikes.
                  </p>
                  <p>
                    This portfolio showcases the production microservices, data analytics pipelines, and interactive digital products I engineer using Go, Node.js, TypeScript, PostgreSQL, and cloud architectures.
                  </p>
                </div>
              </div>

              {/* View Selected Works CTA */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono text-xs text-white/50 hidden sm:inline">
                  Explore selected engineering projects below
                </span>
                <a
                  href="#works"
                  className="glass-pill px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-white hover:text-[#A2FF00] hover:border-[#A2FF00]/40 transition-colors flex items-center gap-2 border border-white/20 bg-white/[0.04] shadow-md ml-auto"
                >
                  <span>View Selected Works</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Impact Metric Grid (4 Stats) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {IMPACT_METRICS.map((metric, idx) => {
                const IconComponent = metric.icon
                return (
                  <div
                    key={metric.label}
                    className="glass-panel rounded-2xl p-4 border border-white/10 flex flex-col justify-between hover:border-white/25 transition-all shadow-md"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-instrument text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {metric.value}
                      </span>
                      <IconComponent size={15} className="text-[#A2FF00]/80" />
                    </div>
                    <div>
                      <h4 className="font-mono text-[11px] font-bold text-white/90 leading-snug">
                        {metric.label}
                      </h4>
                      <p className="font-mono text-[9px] text-white/40 mt-0.5 leading-tight">
                        {metric.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
