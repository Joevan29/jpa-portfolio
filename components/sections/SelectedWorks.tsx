'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Terminal } from 'lucide-react'
import { PROJECTS } from '@/lib/data'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

export default function SelectedWorks() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'backend' | 'data' | 'web'>('all')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'backend') {
      return p.tags.some((t) => ['Node.js', 'Scheduler', 'C++', 'IoT'].includes(t)) || p.id.includes('nexus')
    }
    if (activeFilter === 'data') {
      return p.tags.some((t) => ['Python', 'BigQuery', 'SQL', 'Streamlit'].includes(t))
    }
    if (activeFilter === 'web') {
      return p.tags.some((t) => ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'].includes(t))
    }
    return true
  })

  return (
    <section
      id="works"
      ref={ref}
      className="scroll-mt-24 bg-transparent py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-purple-500/15"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="glass-pill px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-[#C084FC] inline-block mb-4 font-bold bg-[#140b28]/80 border border-purple-500/25"
          >
            Curated Showcase
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-instrument text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight"
          >
            Selected <em className="italic text-white/60">Works</em><span className="text-[#A2FF00]">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="text-white/70 text-sm sm:text-base max-w-xl mx-auto mt-4 font-normal"
          >
            Production microservices, large-scale data warehouses, and reactive full-stack web applications.
          </motion.p>

          {/* Centered Segmented Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="mt-6 flex justify-center w-full"
          >
            <div className="glass-pill p-1.5 flex items-center gap-1.5 border border-white/20 bg-[#121218]/90 backdrop-blur-2xl shadow-xl overflow-x-auto max-w-full no-scrollbar">
              {[
                { key: 'all', label: 'All Projects' },
                { key: 'backend', label: 'Backend & IoT' },
                { key: 'data', label: 'Data & AI' },
                { key: 'web', label: 'Web Apps' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key as typeof activeFilter)}
                  style={
                    activeFilter === tab.key
                      ? { color: '#000000', backgroundColor: '#ffffff' }
                      : undefined
                  }
                  className={`px-4 py-2 rounded-full font-mono text-xs whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    activeFilter === tab.key
                      ? '!bg-white !text-black font-bold shadow-md'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Projects Grid with Generous Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.08 * (idx % 4), ease: EASE }}
                className="glass-panel glass-panel-interactive overflow-hidden group flex flex-col justify-between rounded-3xl shadow-2xl border border-white/15"
              >
                {/* Screenshot Frame */}
                <div className="relative aspect-video w-full overflow-hidden bg-black/50 border-b border-white/10 p-3 sm:p-4">
                  {project.thumbnail && project.thumbnail.startsWith('/images') ? (
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="object-cover object-top filter grayscale-[20%] contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/[0.02] rounded-2xl">
                      <Terminal size={32} className="text-white/30" />
                    </div>
                  )}

                  {/* Metric Pill */}
                  {project.metrics && project.metrics[0] && (
                    <div className="absolute top-5 left-5 glass-pill px-3 py-1 font-mono text-[10px] sm:text-xs text-[#A2FF00] font-bold tracking-wider uppercase backdrop-blur-xl shadow-lg border border-white/20">
                      {project.metrics[0]}
                    </div>
                  )}
                </div>

                {/* Card Content Area */}
                <div className="p-7 sm:p-9 flex flex-col flex-grow justify-between gap-6">
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((t) => (
                        <span key={t} className="font-mono text-[11px] text-white/50 uppercase tracking-wider">
                          #{t}
                        </span>
                      ))}
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-instrument text-2xl sm:text-3xl text-white font-bold mb-3 tracking-tight group-hover:text-[#A2FF00] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between pt-5 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: '#000000', backgroundColor: '#ffffff' }}
                          className="glass-pill px-4 py-2 text-xs font-mono uppercase tracking-wider !text-black !bg-white font-bold hover:!bg-[#A2FF00] transition-colors flex items-center gap-1.5 shadow-md cursor-pointer"
                        >
                          <span style={{ color: '#000000' }}>Live Demo</span>
                          <ArrowUpRight size={13} style={{ color: '#000000' }} />
                        </a>
                      )}
                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-pill px-4 py-2 text-xs font-mono uppercase tracking-wider text-white/80 hover:text-white transition-colors flex items-center gap-1.5"
                        >
                          <span>Source</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>

                    <span className="font-mono text-xs text-white/40">
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
