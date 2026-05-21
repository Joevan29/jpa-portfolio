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
    <section className="relative z-10 min-h-[100dvh] pt-32 pb-24 md:pt-40 flex flex-col justify-center overflow-hidden" id="home">
      
      {/* Draggable Stickers - Tetap ada */}
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

      {/* Main Container - Dibuat lebih aman dengan flex-wrap */}
      <div
        className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8 items-center justify-between"
        style={{ paddingLeft: 'var(--pad-x)', paddingRight: 'var(--pad-x)' }}
      >
        
        {/* Left Column - Teks */}
        <div className="flex flex-col gap-6 z-20 w-full lg:w-[60%]">
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

          <div className="relative inline-block w-fit">
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-[1] tracking-tighter text-ink relative z-10">
              Joevan Pramana<br/>Achmad
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            {SKILL_TAGS.map((tag) => (
              <span
                key={tag.label}
                className={`inline-flex items-center px-4 py-2 rounded-full font-mono text-xs font-bold text-ink border-2 border-ink ${tag.bg} shadow-[2px_2px_0_0_#000000] hover:-translate-y-1 transition-all`}
              >
                {tag.label}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-3 border-[2px] border-ink bg-white px-4 py-2 w-fit shadow-[2px_2px_0_0_#000000]">
              <span className="font-mono text-[9px] font-black bg-ink text-[#A2FF00] px-2 py-0.5 uppercase tracking-widest shrink-0">Now</span>
              <p className="font-mono text-[11px] text-ink">Building Mobile Apps (Prodexcell) · PT Kirana Megatara</p>
            </div>
            <GitHubActivity />
          </div>
        </div>

        {/* Right Column - Avatar */}
        <div className="flex justify-center lg:justify-end items-center z-10 w-full lg:w-[35%] shrink-0">
          <div className="group relative w-full max-w-[280px]">
            <div className="bg-surface border-[4px] border-ink p-4 pb-16 rotate-3 group-hover:rotate-0 transition-all duration-500 shadow-brutal relative z-10">
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
              <p className="text-center mt-4 font-mono text-xs font-bold tracking-widest text-ink">Me, IRL.</p>
              <svg className="absolute bottom-4 right-4 w-6 h-6" viewBox="0 0 24 24" fill="#A2FF00" stroke="#000000" strokeWidth="2.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Ticker */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t-[3px] border-ink bg-ink h-12 flex items-center">
        <div className="whitespace-nowrap animate-scroll-x text-sm font-mono text-[#A2FF00] flex gap-12">
           {[...Array(6)].map((_, i) => <span key={i}>CODE IS ART · BUILD WITH PASSION · BREAK THE RULES · STAY CURIOUS ·</span>)}
        </div>
      </div>
    </section>
  )
}
