'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EXPERIENCES } from '@/lib/data'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

export default function TheJourney() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="journey"
      ref={ref}
      className="scroll-mt-24 bg-transparent py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-purple-500/15"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Centered Header with Generous Space */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="glass-pill px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-[#C084FC] inline-block mb-4 font-bold bg-[#140b28]/80 border border-purple-500/25"
          >
            Professional Journey
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-instrument text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight"
          >
            Where I&apos;ve <em className="italic text-white/60">Shipped &amp; Contributed</em><span className="text-[#A2FF00]">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="text-white/70 text-sm sm:text-base max-w-xl mx-auto mt-4 font-normal"
          >
            Track record of shipping mission-critical systems across enterprise logistics, insurance, and academic research.
          </motion.p>
        </div>

        {/* Timeline Cards with Generous Spacing */}
        <div className="flex flex-col gap-5 sm:gap-6">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i, ease: EASE }}
              className="glass-panel glass-panel-interactive p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-start rounded-3xl shadow-2xl border border-white/15"
            >
              {/* Left: Role & Company */}
              <div className="md:w-1/3 flex flex-col gap-2 shrink-0">
                <span className="font-mono text-xs uppercase text-[#A2FF00] font-bold tracking-wider">
                  {exp.period}
                </span>
                <h3 className="font-instrument text-2xl sm:text-3xl text-white font-bold mt-1 tracking-tight">
                  {exp.role}
                </h3>
                <div className="font-mono text-xs text-white/60 tracking-wide mt-0.5">
                  {exp.company}
                </div>
                <span className="mt-3 glass-pill px-3.5 py-1 font-mono text-[10px] uppercase text-white/80 w-fit">
                  {exp.type}
                </span>
              </div>

              {/* Right: Bullet Impact Points */}
              <div className="md:w-2/3 flex flex-col gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10">
                {exp.description.map((desc, di) => (
                  <div key={di} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A2FF00] mt-2 shrink-0 shadow-[0_0_6px_#A2FF00]" />
                    <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-normal">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
