"use client"

import { useReveal } from "@/hooks/useReveal"

const SKILLS = [
  {
    category: "Languages",
    number: "01",
    label: "PROG. LANGUAGES",
    accent: "#A2FF00",
    rotate: -1,
    items: ["TypeScript", "JavaScript", "PHP", "Go (Golang)", "SQL", "Python", "R"],
  },
  {
    category: "Backend & Cloud",
    number: "02",
    label: "BACKEND · CLOUD",
    accent: "#A2FF00",
    rotate: 1,
    items: ["Node.js", "CodeIgniter 3", "Apache Kafka", "Kubernetes (K8s)", "Docker", "RESTful APIs", "Microservices"],
  },
  {
    category: "Frontend",
    number: "03",
    label: "FRONTEND · UI",
    accent: "#B44FFF",
    rotate: -0.5,
    items: ["Next.js", "React.js", "Vue.js", "Vite", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    category: "Data & AI",
    number: "04",
    label: "DATA · AI · ML",
    accent: "#B44FFF",
    rotate: 1.5,
    items: ["PostgreSQL", "MS SQL Server", "Google BigQuery", "Pandas", "NumPy", "YOLO (CV)", "Power BI"],
  },
]

function SkillCard({ skill, index }: { skill: typeof SKILLS[0]; index: number }) {
  const revealRef = useReveal('reveal-up')

  return (
    <div
      ref={revealRef as React.RefObject<HTMLDivElement>}
      className="border-[3px] border-ink bg-white shadow-brutal flex flex-col relative overflow-hidden"
      style={{
        transform: `rotate(${skill.rotate}deg)`,
        transitionDelay: `${index * 90}ms`,
      }}
    >
      {/* Number tag — top right corner */}
      <span
        className="absolute top-0 right-0 font-mono text-[10px] font-black px-2 py-1 leading-none"
        style={{ background: skill.accent, color: '#000' }}
      >
        {skill.number}
      </span>

      {/* Header */}
      <div className="bg-ink px-5 pt-5 pb-4">
        <p className="font-mono text-[9px] font-black tracking-[0.2em] uppercase mb-1" style={{ color: skill.accent }}>
          {skill.label}
        </p>
        <h3 className="font-display font-black text-lg text-white leading-tight">{skill.category}</h3>
      </div>

      {/* Divider line accent */}
      <div className="h-[3px]" style={{ background: skill.accent }} />

      {/* Items */}
      <ul className="flex flex-col px-5 py-5 gap-[10px] flex-1">
        {skill.items.map((item, i) => (
          <li
            key={item}
            className="font-mono text-sm text-ink font-medium flex items-center gap-2 group/item"
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0 group-hover/item:scale-150 transition-transform"
              style={{ background: skill.accent }}
            />
            <span className="group-hover/item:translate-x-1 transition-transform">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function TheStack() {
  const titleRef = useReveal('reveal-up')

  return (
    <section className="relative z-10 flex flex-col items-center w-full" id="stack" style={{ paddingTop: 'clamp(5rem, 10vw, 10rem)', paddingBottom: 'clamp(5rem, 10vw, 10rem)' }}>
      <div className="w-full max-w-7xl" style={{ paddingLeft: 'var(--pad-x)', paddingRight: 'var(--pad-x)' }}>

        {/* Title row */}
        <div ref={titleRef as React.RefObject<HTMLDivElement>} className="mb-16 md:mb-20 flex items-end gap-6 flex-wrap">
          <div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-ink tracking-tighter">
              The Stack
              <span className="text-[#A2FF00] ml-1">_</span>
            </h2>
            <p className="font-mono text-xs text-ink opacity-40 mt-2 tracking-widest uppercase">
              Tools I actually ship with
            </p>
          </div>

          {/* Decorative badge */}
          <div className="bg-ink border-[3px] border-ink px-4 py-2 -rotate-2 mb-1">
            <span className="font-mono text-xs font-black text-[#A2FF00] tracking-widest uppercase">
              {SKILLS.reduce((acc, s) => acc + s.items.length, 0)}+ Technologies
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-start">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.category} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
