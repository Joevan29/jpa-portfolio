"use client"

import Image from "next/image"
import DraggableSticker from "@/components/ui/DraggableSticker"
import GitHubActivity from "@/components/ui/GitHubActivity"

const SKILL_TAGS = [
  { label: "@Node.js", bg: "bg-[#D9C4FF]" },
  { label: "@Go", bg: "bg-[#86E4B1]" },
  { label: "@PostgreSQL", bg: "bg-[#80DEEA]" },
  { label: "@BigQuery", bg: "bg-[#FFC4D9]" },
  { label: "@React", bg: "bg-[#FFF59D]" },
]

export default function Hero() {
  return (
    <section className="relative z-10 min-h-[100dvh] pt-32 pb-24 md:pt-0 md:pb-0 flex flex-col justify-center" id="home">
      
      {/* Draggable Stickers */}
      <DraggableSticker initialX="10%" initialY="20%" rotate={-12} className="hidden md:block z-50">
        <div className="bg-[#A2FF00] border-[3px] border-black p-3 font-mono text-xl font-black shadow-brutal select-none">
          100% CHAOS
        </div>
      </DraggableSticker>
      
      <DraggableSticker initialX="85%" initialY="25%" rotate={15} className="hidden md:block z-50">
        <div className="bg-[#FF3366] border-[3px] border-black p-4 rounded-full shadow-brutal select-none flex items-center justify-center">
          <span className="text-white font-display font-black text-2xl tracking-tighter">X_X</span>
        </div>
      </DraggableSticker>

      <DraggableSticker initialX="75%" initialY="65%" rotate={-5} className="hidden md:block z-50">
        <div className="bg-white border-[3px] border-black px-4 py-2 flex flex-col items-center shadow-brutal select-none">
          <div className="w-16 h-12 flex items-end justify-between border-b-4 border-black pb-1 mb-1">
            <div className="w-1 h-full bg-black"></div>
            <div className="w-2 h-4/5 bg-black"></div>
            <div className="w-1 h-3/5 bg-black"></div>
            <div className="w-3 h-full bg-black"></div>
            <div className="w-1 h-2/5 bg-black"></div>
            <div className="w-2 h-full bg-black"></div>
          </div>
          <span className="font-mono text-[10px] font-black">SCAN ME</span>
        </div>
      </DraggableSticker>

      <div
        className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-4 items-center justify-between"
        style={{ paddingLeft: 'var(--pad-x)', paddingRight: 'var(--pad-x)' }}
      >
        
        {/* Left Column */}
        <div className="flex flex-col gap-4 md:gap-6 z-20 w-full md:w-[60%]">
          {/* Open to Work badge */}
          <div className="flex items-center gap-2 w-fit">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A2FF00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#A2FF00]"></span>
            </span>
            <span className="font-mono text-xs font-black uppercase tracking-widest text-ink">Open to Work · July 2026</span>
          </div>

          <h2 className="font-mono text-base md:text-xl text-ink max-w-xl leading-relaxed relative">
            Meet your trusted Backend Engineer,{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 font-bold px-1">disguised</span>
              <svg className="absolute inset-0 w-[110%] h-[140%] -top-[20%] -left-[5%] z-0 pointer-events-none" viewBox="0 0 100 40" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5 C 5 5, 2 15, 2 20 C 2 35, 15 38, 50 38 C 85 38, 98 35, 98 20 C 98 5, 85 2, 50 2 C 20 2, 10 8, 15 15" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>{" "}
            as a Frontend Developer.
          </h2>

          <div className="relative inline-block w-fit mt-2">
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tighter text-ink whitespace-pre-line relative z-10">
              Joevan Pramana{"\n"}Achmad
            </h1>
            {/* Decorative curve */}
            <svg className="absolute -bottom-6 md:-bottom-10 right-0 w-24 h-8 md:w-40 md:h-12 z-0 pointer-events-none" viewBox="0 0 60 30" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M5 25 C 20 5, 40 5, 55 25" stroke="#000000" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-8">
            {SKILL_TAGS.map((tag) => (
              <span
                key={tag.label}
                className={`inline-flex items-center px-4 md:px-5 py-2 rounded-full font-mono text-xs font-bold text-ink border-2 border-ink ${tag.bg} shadow-[2px_2px_0_0_#000000] hover:-translate-y-1 hover:shadow-brutal hover:border-ink transition-all cursor-default`}
              >
                {tag.label}
              </span>
            ))}
          </div>

          {/* GitHub Activity + Currently Building */}
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-3 border-[2px] border-ink bg-white px-4 py-2.5 w-fit shadow-brutal">
              <span className="font-mono text-[9px] font-black bg-ink text-[#A2FF00] px-2 py-0.5 uppercase tracking-widest shrink-0">Now</span>
              <p className="font-mono text-[11px] text-ink leading-snug">
                Building IoT tracking dashboard · PT Kirana Megatara
              </p>
            </div>
            <GitHubActivity />
          </div>
        </div>

        {/* Right Column (Avatar) */}
        <div className="flex justify-center md:justify-end items-center mt-2 md:mt-0 z-10 w-full md:w-[40%]">
          <div className="group relative w-[65%] max-w-[180px] sm:max-w-[200px] md:max-w-[280px]">
            {/* Polaroid Frame */}
            <div className="bg-surface border-[3px] md:border-4 border-ink p-3 pb-12 md:pb-14 rotate-3 group-hover:rotate-0 transition-all duration-500 shadow-brutal relative z-10">
              <div className="relative w-full aspect-[4/5] border-2 border-ink overflow-hidden bg-surface-alt">
                <Image
                  src="/avatar.png"
                  alt="Joevan Pramana Achmad"
                  fill
                  sizes="(max-width: 768px) 100vw, 280px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
              <p className="text-center mt-2 md:mt-4 font-mono text-[9px] md:text-xs font-bold tracking-widest text-ink">
                Me, IRL.
              </p>
              {/* Star Icon */}
              <svg className="absolute bottom-3 md:bottom-4 right-3 md:right-4 w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="#A2FF00" stroke="#000000" strokeWidth="2.5" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
          </div>
        </div>

      </div>

      {/* Scrolling Ticker Strip */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t-[3px] border-ink bg-ink" style={{ height: '48px' }}>
        <div style={{ display: 'inline-flex', whiteSpace: 'nowrap', height: '100%', alignItems: 'center', animation: 'scroll-x 30s linear infinite' }}>
          {[...Array(6)].map((_, i) => (
            <span key={i} className="font-mono text-xs font-bold text-[#A2FF00] uppercase tracking-widest" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
              CODE IS ART · BUILD WITH PASSION · BREAK THE RULES · STAY CURIOUS · KEEP SHIPPING ·
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
