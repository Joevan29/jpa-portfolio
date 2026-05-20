"use client"

export default function ConnectCTA() {
  return (
    <section className="relative z-10 overflow-hidden" id="contact" style={{ paddingTop: 'clamp(5rem, 10vw, 13rem)', paddingBottom: 'clamp(5rem, 10vw, 13rem)' }}>
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center" style={{ paddingLeft: 'var(--pad-x)', paddingRight: 'var(--pad-x)' }}>
        {/* Banner Stack */}
        <div className="relative group cursor-pointer w-[85%] md:w-[95%] max-w-[600px] mx-auto my-8 md:my-12">
          {/* Neon Green Offset Layer */}
          <div className="absolute inset-0 bg-[#A2FF00] translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 border-[3px] border-[#A2FF00] group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-300 z-0" aria-hidden="true" />
          
          {/* Main Banner Layer */}
          <a 
            href="mailto:joevanpan@outlook.com"
            className="relative z-10 flex items-center justify-center bg-ink border-[3px] border-[#A2FF00] py-8 md:py-12 px-4 md:px-12 w-full text-center group-hover:-translate-y-2 transition-transform duration-300 min-h-[100px] md:min-h-[140px]"
          >
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#A2FF00] m-0 leading-none">
              LET&apos;S CONNECT
            </h2>
          </a>
        </div>

        {/* Subtitle */}
        <div className="mt-8 md:mt-12 flex flex-col items-center gap-3 w-full">
          <svg width="24" height="20" viewBox="0 0 30 24" fill="none" aria-hidden="true" className="opacity-60 shrink-0">
            <path d="M5 20 C 10 5, 20 5, 28 20" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
          <p className="font-mono text-xs md:text-sm font-bold tracking-widest uppercase text-center" style={{ color: '#000000' }}>
            Open to work · Let&apos;s build something awesome together
          </p>
        </div>
      </div>
    </section>
  )
}

