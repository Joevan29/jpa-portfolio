export default function Footer() {
  return (
    <footer className="bg-[#06030e] py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-t border-purple-500/15">
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/40">
        <div>
          © 2026 <span className="text-white font-medium">Joevan Pramana Achmad</span>. All rights reserved.
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <span>Crafted with Next.js 16 &amp; VisionOS Frosted Glass</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#A2FF00] shadow-[0_0_6px_#A2FF00]" />
          <span>Jakarta, ID</span>
        </div>
      </div>
    </footer>
  )
}
