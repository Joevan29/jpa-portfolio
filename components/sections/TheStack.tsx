'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Database, Cpu, Layers, Code2, Shield, GitBranch } from 'lucide-react'
import {
  siGo,
  siNodedotjs,
  siPostgresql,
  siRedis,
  siDocker,
  siKubernetes,
  siApachekafka,
  siLinux,
  siGooglebigquery,
  siPython,
  siStreamlit,
  siPandas,
  siNextdotjs,
  siReact,
  siTypescript,
  siTailwindcss,
  siFramer,
  siVite,
  siGit,
  siGithubactions,
  siGooglecloud,
} from 'simple-icons'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

// Tech icon definition: uses real Simple Icons SVG paths
interface TechItem {
  name: string
  si?: { svg: string; hex: string }
  fallbackColor?: string
}

const TECH_PILLARS: {
  category: string
  icon: React.ReactNode
  highlight: string
  items: TechItem[]
}[] = [
  {
    category: 'Backend & Cloud',
    icon: <Database size={18} className="text-[#C084FC]" />,
    highlight: 'High-throughput APIs, event-driven pipelines & distributed storage',
    items: [
      { name: 'Go',         si: siGo },
      { name: 'Node.js',    si: siNodedotjs },
      { name: 'PostgreSQL', si: siPostgresql },
      { name: 'Redis',      si: siRedis },
      { name: 'Docker',     si: siDocker },
      { name: 'Kubernetes', si: siKubernetes },
      { name: 'Kafka',      si: siApachekafka },
      { name: 'Linux',      si: siLinux },
    ],
  },
  {
    category: 'Data & ML',
    icon: <Cpu size={18} className="text-[#C084FC]" />,
    highlight: 'Petabyte warehousing, ETL aggregation & predictive models',
    items: [
      { name: 'BigQuery',   si: siGooglebigquery },
      { name: 'Python',     si: siPython },
      { name: 'Streamlit',  si: siStreamlit },
      { name: 'Pandas',     si: siPandas },
      { name: 'Google Cloud', si: siGooglecloud },
      { name: 'SQL',        fallbackColor: '#E38C00' },
      { name: 'MLxtend',    fallbackColor: '#A2FF00' },
      { name: 'Gemini AI',  fallbackColor: '#8E75B2' },
    ],
  },
  {
    category: 'Frontend & Mobile',
    icon: <Layers size={18} className="text-[#C084FC]" />,
    highlight: 'Performance-obsessed reactive interfaces & cross-platform apps',
    items: [
      { name: 'Next.js',        si: siNextdotjs },
      { name: 'React',          si: siReact },
      { name: 'React Native',   si: siReact, fallbackColor: '#61DAFB' },
      { name: 'TypeScript',     si: siTypescript },
      { name: 'Tailwind',       si: siTailwindcss },
      { name: 'Framer Motion',  si: siFramer },
      { name: 'Vite',           si: siVite },
    ],
  },
  {
    category: 'Architecture & DevOps',
    icon: <Code2 size={18} className="text-[#C084FC]" />,
    highlight: 'Clean architecture, CI/CD automation & secure authentication',
    items: [
      { name: 'Git',           si: siGit },
      { name: 'GitHub CI',     si: siGithubactions },
      { name: 'REST & gRPC',   fallbackColor: '#85EA2D' },
      { name: 'Microservices', fallbackColor: '#A2FF00' },
      { name: 'IoT',           fallbackColor: '#00BCD4' },
      { name: 'BNSP Certified',fallbackColor: '#A2FF00' },
    ],
  },
]

// Fallback minimal SVG icons for things not in simple-icons
const FALLBACK_SVGS: Record<string, string> = {
  'SQL': `<path d="M12 3C7.06 3 3 4.343 3 6s4.06 3 9 3 9-1.343 9-3-4.06-3-9-3zM3 9v3c0 1.657 4.06 3 9 3s9-1.343 9-3V9c-1.9 1.294-5.31 2-9 2S4.9 10.294 3 9zm0 6v3c0 1.657 4.06 3 9 3s9-1.343 9-3v-3c-1.9 1.294-5.31 2-9 2S4.9 16.294 3 15z"/>`,
  'MLxtend': `<path d="M9 3L5 9l4 6H3l-2 3h18l-2-3h-6l4-6-4-6H9z"/>`,
  'Gemini AI': `<path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>`,
  'REST & gRPC': `<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1zm-7-2l-4-4 4-4 4 4-4 4z"/>`,
  'Microservices': `<path d="M4 8a4 4 0 118 0A4 4 0 014 8zm8 8a4 4 0 118 0 4 4 0 01-8 0zM4 16a4 4 0 118 0 4 4 0 01-8 0z"/>`,
  'IoT': `<path d="M17 8C8 10 5.9 16.17 3.82 20.32L5.71 21l1-2.3A4.49 4.49 0 008 19c8 0 11-10 9-11zM12 4a8 8 0 00-8 8c0 1.44.39 2.78 1.07 3.95L12 4z"/>`,
  'BNSP Certified': `<path d="M12 2L3 7l9 5 9-5-9-5zM3 17l9 5 9-5M3 12l9 5 9-5"/>`,
  'React Native': `<path d="M14.23 12a2.24 2.24 0 11-4.47 0 2.24 2.24 0 014.47 0zM12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zm5.23 10.5a5.23 5.23 0 11-10.46 0 5.23 5.23 0 0110.46 0z"/>`,
}

function TechIcon({ item }: { item: TechItem }) {
  const color = item.si ? `#${item.si.hex}` : (item.fallbackColor || '#ffffff')
  const svgPath = item.si ? item.si.svg : (FALLBACK_SVGS[item.name] || '')

  return (
    <div
      className="group flex flex-col items-center gap-2 cursor-default"
      title={item.name}
    >
      {/* Icon circle */}
      <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/[0.05] border border-white/10 transition-all duration-200 group-hover:bg-white/[0.12] group-hover:border-white/25 group-hover:scale-110 group-hover:shadow-lg">
        {svgPath ? (
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            aria-label={item.name}
            style={{ fill: 'rgba(255,255,255,0.55)', transition: 'fill 0.2s ease' }}
            dangerouslySetInnerHTML={{ __html: svgPath }}
            onMouseEnter={(e) => { (e.currentTarget as SVGSVGElement).style.fill = color }}
            onMouseLeave={(e) => { (e.currentTarget as SVGSVGElement).style.fill = 'rgba(255,255,255,0.55)' }}
          />
        ) : (
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            aria-label={item.name}
          >
            <text
              x="12" y="16"
              textAnchor="middle"
              fontSize="10"
              fontFamily="monospace"
              fontWeight="bold"
              fill="rgba(255,255,255,0.55)"
            >
              {item.name.slice(0, 3).toUpperCase()}
            </text>
          </svg>
        )}
      </div>
      {/* Label */}
      <span className="text-[10px] font-mono text-white/45 group-hover:text-white/80 transition-colors leading-tight text-center whitespace-nowrap">
        {item.name}
      </span>
    </div>
  )
}

export default function TheStack() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="stack"
      ref={ref}
      className="scroll-mt-24 bg-transparent py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-purple-500/15"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="glass-pill px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-[#C084FC] inline-block mb-4 font-bold bg-[#140b28]/80 border border-purple-500/25"
          >
            Technical Arsenal
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-instrument text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-tight"
          >
            Technologies <em className="italic text-white/60">Tested &amp; Proven</em><span className="text-[#A2FF00]">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="text-white/70 text-sm sm:text-base max-w-xl mx-auto mt-4 font-normal"
          >
            Battle-tested languages, high-concurrency runtimes, and resilient cloud infrastructures.
          </motion.p>
        </div>

        {/* 4 Glass Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {TECH_PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.category}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i, ease: EASE }}
              className="glass-panel glass-panel-interactive p-6 sm:p-8 flex flex-col gap-5 rounded-3xl shadow-2xl border border-white/15"
            >
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="glass-pill p-2">
                    {pillar.icon}
                  </div>
                  <h3 className="font-instrument text-xl sm:text-2xl text-white font-bold tracking-tight">
                    {pillar.category}
                  </h3>
                </div>
                <p className="text-xs text-white/55 font-sans leading-relaxed">
                  {pillar.highlight}
                </p>
              </div>

              {/* Tech logo grid */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                {pillar.items.map((item) => (
                  <TechIcon key={item.name} item={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credentials Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
          className="mt-12 sm:mt-16 glass-panel p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl shadow-xl border border-white/15"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#A2FF00] shadow-[0_0_8px_#A2FF00]" />
            <span className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              Industry Credentials:
            </span>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-5 text-xs font-mono text-white/65">
            <span>BNSP Software Engineering</span>
            <span className="text-white/25">·</span>
            <span>Google Cloud 6 Badges</span>
            <span className="text-white/25">·</span>
            <span>IT Specialist Cybersecurity</span>
            <span className="text-white/25">·</span>
            <span>TOEFL ITP: 670</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
