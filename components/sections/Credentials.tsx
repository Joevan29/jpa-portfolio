"use client"

import { motion } from "framer-motion"
import { useReveal } from "@/hooks/useReveal"

const CARDS = [
  {
    id: "bnsp",
    title: "BNSP",
    subtitle: "Certified Junior Web Developer",
    badge: "PROFESSIONAL",
    bg: "#F5F3A1",
    textColor: "#000000",
    badgeColor: "#000000",
    badgeText: "#F5F3A1",
    rotate: -8,
    left: 30,
    top: 30,
    icon: "✦",
    width: 190,
  },
  {
    id: "google-cloud",
    title: "Google Cloud",
    subtitle: "Computing Foundations · Data Analytics · GenAI · Vertex AI · ML APIs",
    badge: "6 BADGES",
    bg: "#A2FF00",
    textColor: "#000000",
    badgeColor: "#000000",
    badgeText: "#A2FF00",
    rotate: 4,
    left: 280,
    top: 220,
    icon: "☁",
    width: 210,
  },
  {
    id: "cybersecurity",
    title: "IT Specialist",
    subtitle: "Cybersecurity",
    badge: "CISCO · EC-COUNCIL",
    bg: "#FFFFFF",
    textColor: "#000000",
    badgeColor: "#000000",
    badgeText: "#FFFFFF",
    rotate: -5,
    left: 560,
    top: 40,
    icon: "⚔",
    width: 180,
  },
  {
    id: "academics",
    title: "Universitas Nasional",
    subtitle: "Information Systems\n2022 – 2026",
    badge: "S1 · BACHELOR'S DEGREE",
    bg: "#D9C4FF",
    textColor: "#000000",
    badgeColor: "#000000",
    badgeText: "#D9C4FF",
    rotate: 6,
    left: 120,
    top: 330,
    icon: "◈",
    width: 200,
  },
  {
    id: "toefl",
    title: "TOEFL ITP",
    subtitle: "Test of English as a\nForeign Language",
    badge: "ETS CERTIFIED",
    bg: "#0D0D0D",
    textColor: "#A2FF00",
    badgeColor: "#A2FF00",
    badgeText: "#0D0D0D",
    rotate: -4,
    left: 500,
    top: 300,
    icon: "670",
    bigScore: true,
    score: "670",
    width: 175,
  },
]

function CardContent({ card }: { card: typeof CARDS[0] }) {
  return (
    <div
      className="border-[3px] border-black shadow-brutal p-4 flex flex-col gap-2 h-full"
      style={{ background: card.bg }}
    >
      <span
        className="font-mono text-[9px] font-black tracking-widest px-2 py-1 self-start"
        style={{ background: card.badgeColor, color: card.badgeText }}
      >
        {card.badge}
      </span>

      {card.bigScore ? (
        <span className="font-display font-black text-5xl leading-none" style={{ color: card.textColor }}>
          {card.score}
        </span>
      ) : (
        <span className="font-mono text-xl" style={{ color: card.textColor }}>{card.icon}</span>
      )}

      <h3 className="font-display font-black text-sm leading-tight" style={{ color: card.textColor }}>
        {card.title}
      </h3>

      <p className="font-mono text-[10px] leading-relaxed whitespace-pre-line" style={{ color: card.textColor, opacity: 0.7 }}>
        {card.subtitle}
      </p>
    </div>
  )
}

// Kartu draggable — hanya muncul di desktop (md ke atas)
function DraggableReceiptCard({ card, index }: { card: typeof CARDS[0]; index: number }) {
  return (
    <motion.div
      drag
      dragElastic={0.3}
      dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
      whileDrag={{ scale: 1.08, zIndex: 999 }}
      whileHover={{ scale: 1.05, y: -6 }}
      initial={{ opacity: 0, scale: 0.75, rotate: card.rotate - 5 }}
      animate={{ opacity: 1, scale: 1, rotate: card.rotate }}
      transition={{ type: "spring", stiffness: 260, damping: 22, delay: index * 0.12 }}
      className="absolute cursor-grab active:cursor-grabbing"
      style={{
        touchAction: 'none',
        userSelect: 'none',
        width: card.width,
        left: card.left,
        top: card.top,
      }}
    >
      <CardContent card={card} />
    </motion.div>
  )
}

export default function Credentials() {
  const titleRef = useReveal('reveal-up')

  return (
    <section className="relative z-10" id="credentials" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="w-full max-w-7xl mx-auto" style={{ paddingLeft: 'var(--pad-x)', paddingRight: 'var(--pad-x)' }}>

        {/* Title */}
        <div ref={titleRef as React.RefObject<HTMLDivElement>} className="mb-12 flex items-start sm:items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-ink tracking-tighter">
              Credentials
              <span className="text-[#B44FFF] ml-2">*</span>
            </h2>
            <p className="font-mono text-xs text-ink opacity-40 mt-2 tracking-widest uppercase">
              Licenses · Certifications · Education
            </p>
          </div>
          <a
            href="https://www.credly.com/users/jvnprmnachmd"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-black tracking-widest border-[2px] border-black px-4 py-2 hover:bg-ink hover:text-white transition-colors uppercase whitespace-nowrap"
          >
            View Badge Profile ↗
          </a>
        </div>

        {/* Mobile: grid cards (tidak ada drag) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:hidden">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              style={{ rotate: `${card.rotate * 0.4}deg` }}
            >
              <CardContent card={card} />
            </motion.div>
          ))}
        </div>

        {/* Desktop: draggable canvas */}
        <div
          className="relative w-full overflow-hidden border-[3px] border-ink hidden md:block"
          style={{ height: 580, background: 'rgba(0,0,0,0.015)' }}
        >
          {CARDS.map((card, i) => (
            <DraggableReceiptCard key={card.id} card={card} index={i} />
          ))}

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] text-center opacity-25 tracking-widest uppercase pointer-events-none whitespace-nowrap">
            [Drag the cards around]
          </p>
        </div>

      </div>
    </section>
  )
}
