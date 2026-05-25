"use client"

import { EXPERIENCES } from "@/lib/data"
import TimelineItem from "@/components/ui/TimelineItem"

export default function TheJourney() {
  return (
    <section className="relative z-10 overflow-hidden flex flex-col items-center w-full" id="journey" style={{ paddingTop: 'clamp(5rem, 10vw, 13rem)', paddingBottom: 'clamp(5rem, 10vw, 13rem)' }}>
      <div className="w-full max-w-7xl relative" style={{ paddingLeft: 'var(--pad-x)', paddingRight: 'var(--pad-x)' }}>
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-20 relative z-20 gap-6 w-full">
          <h2 className="font-display font-black text-4xl md:text-5xl text-ink glitch-hover" data-text="The Journey">
            The Journey
          </h2>
          
          {/* Floating Stats Badges */}
          <div className="flex items-center gap-6 shrink-0 md:mr-4">
            <div className="bg-[#A2FF00] border-[3px] border-ink w-24 h-14 flex flex-col items-center justify-center text-black -rotate-6 shadow-brutal">
              <span className="font-mono text-[9px] md:text-[10px] font-black">BACKEND</span>
              <span className="font-mono text-[9px] md:text-[10px] font-black">DEV</span>
            </div>
            <div className="bg-[#D9C4FF] border-[3px] border-ink rounded-full w-24 h-24 flex flex-col items-center justify-center text-black rotate-6 shadow-brutal">
              <span className="font-mono text-lg font-black leading-none">5+</span>
              <span className="font-mono text-[10px] font-black leading-tight text-center">PROJECTS</span>
            </div>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full pt-4 md:pt-10">
          {/* Wavy Vertical Line */}
          <div 
            className="absolute left-[26px] md:left-1/2 md:-translate-x-1/2 top-6 bottom-0 w-[12px] z-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='80' viewBox='0 0 12 80' fill='none'%3E%3Cpath d='M 6,0 C 6,10 1,10 1,20 C 1,30 6,30 6,40 C 6,50 11,50 11,60 C 11,70 6,70 6,80' stroke='black' stroke-width='3.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat-y',
              backgroundSize: '12px 80px'
            }}
            aria-hidden="true" 
          />

          <div className="flex flex-col gap-24 md:gap-32 relative z-10 w-full pl-16 md:pl-0">
            {EXPERIENCES.map((exp, i) => (
              <TimelineItem key={exp.id} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
