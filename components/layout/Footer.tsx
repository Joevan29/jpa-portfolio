const FOOTER_LINKS = [
  { label: "EMAIL", href: "mailto:joevanpan@outlook.com", download: false },
  { label: "GITHUB", href: "https://github.com/Joevan29", download: false },
  { label: "LINKEDIN", href: "https://linkedin.com/in/jvnprmnachmd", download: false },
  { label: "RESUME", href: "/cv.pdf", download: true },
]

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#A2FF00] border-t-[3px] border-ink py-24 md:py-32 lg:py-40 overflow-hidden flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center px-4">
        
        {/* Logo */}
        <a 
          href="#home" 
          className="relative z-10 font-display font-black text-7xl md:text-8xl lg:text-[100px] tracking-tighter text-ink leading-none hover:opacity-80 transition-all text-center block glitch-hover mb-20 md:mb-32"
          data-text="JPA"
        >
          JPA
        </a>

        {/* Links */}
        <nav className="relative z-20 flex flex-wrap justify-center gap-6 md:gap-12 mb-20 md:mb-32">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              download={link.download || undefined}
              className="font-mono text-[11px] md:text-sm font-black text-ink tracking-widest hover:underline underline-offset-4 decoration-2 transition-all cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Centered Divider */}
        <div className="w-[85%] md:w-full max-w-xl lg:max-w-2xl h-[2px] bg-ink mb-12 md:mb-16 relative z-10" />

        {/* Copyright */}
        <p className="font-mono text-[9px] md:text-[10px] font-black text-ink tracking-widest uppercase text-center relative z-10">
          © 2026 JOEVAN PRAMANA ACHMAD • ENGINEERED WITH CHAOS
        </p>
        
      </div>
    </footer>
  )
}
