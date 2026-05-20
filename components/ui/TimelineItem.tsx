"use client"

import type { Experience } from "@/lib/data"
import { useReveal } from "@/hooks/useReveal"

type TimelineItemProps = {
  experience: Experience
  index: number
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  const isLeft = index % 2 === 0
  const revealRef = useReveal(isLeft ? 'reveal-right' : 'reveal-left')

  return (
    <div ref={revealRef as React.RefObject<HTMLDivElement>} className={`relative flex w-full ${isLeft ? "md:justify-start" : "md:justify-end"}`}>
      
      {/* Node Dot (Centered on Desktop, Left on Mobile) */}
      <div className="absolute -left-[38px] md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 md:w-5 md:h-5 rounded-full border-[3px] border-ink bg-[#A2FF00] z-20 shadow-[2px_2px_0_0_#000000]" />

      {/* Card (Half width on Desktop, Full width on Mobile) */}
      <div className="w-full md:w-[calc(50%-28px)] bg-surface border-[3px] border-ink p-6 md:p-8 shadow-brutal hover:-translate-y-1 hover:shadow-brutal-accent transition-all z-30">
        <div className="flex flex-col md:items-start justify-between gap-1 mb-4">
          <h3 className="font-display font-black text-xl md:text-2xl text-ink">
            {experience.role}
          </h3>
          <div className="font-mono text-xs font-bold tracking-widest uppercase text-[#B44FFF]">
            {experience.company} <span className="mx-2 opacity-50 text-ink">|</span> <span className="text-ink-muted">{experience.period}</span>
          </div>
        </div>
        
        <div className="font-body text-sm md:text-base text-[#333333] leading-relaxed space-y-3">
          {experience.description.map((desc, i) => (
            <p key={i}>{desc}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
