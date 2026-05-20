"use client"

import { useState, useCallback, useRef } from "react"

export default function HireMeButton() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const [misses, setMisses] = useState(0)
  const [surrendered, setSurrendered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const btnRef = useRef<HTMLAnchorElement>(null)
  const MAX_MISSES = 3

  const flee = useCallback(() => {
    if (surrendered || clicked) return

    const newMisses = misses + 1
    setMisses(newMisses)

    if (newMisses >= MAX_MISSES) {
      setSurrendered(true)
      setPos(null)
      return
    }

    const padding = 80
    const btnW = 110
    const btnH = 44
    const maxX = window.innerWidth - btnW - padding
    const maxY = window.innerHeight - btnH - padding

    // pojok-pojok layar agar tidak ke tengah konten
    const zones = [
      { x: padding, y: padding },
      { x: maxX, y: padding },
      { x: padding, y: maxY },
      { x: maxX, y: maxY },
      { x: maxX / 2, y: padding },
      { x: maxX / 2, y: maxY },
    ]

    // pilih zona yang jauh dari posisi sekarang
    const current = pos ?? { x: window.innerWidth - 200, y: 40 }
    const sorted = zones.sort((a, b) => {
      const da = Math.hypot(a.x - current.x, a.y - current.y)
      const db = Math.hypot(b.x - current.x, b.y - current.y)
      return db - da
    })

    setPos({ x: sorted[0].x, y: sorted[0].y })
  }, [misses, surrendered, clicked, pos])

  const handleClick = () => {
    if (!surrendered && !clicked) return
    setClicked(true)
    // scroll ke contact
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const label = clicked
    ? "✓ On it!"
    : surrendered
    ? "Fine... ok."
    : "Hire Me"

  const isFloating = pos !== null && !surrendered && !clicked

  return (
    <a
      ref={btnRef}
      href="#contact"
      onClick={(e) => {
        if (!surrendered && !clicked) {
          e.preventDefault()
        }
        handleClick()
      }}
      onMouseEnter={flee}
      aria-label="Hire Me"
      style={
        isFloating
          ? {
              position: "fixed",
              left: pos!.x,
              top: pos!.y,
              zIndex: 9980,
              transition: "left 0.18s cubic-bezier(.22,1,.36,1), top 0.18s cubic-bezier(.22,1,.36,1)",
              pointerEvents: "auto",
            }
          : undefined
      }
      className={`inline-flex items-center justify-center px-6 py-2 font-mono text-sm font-bold tracking-wide border-[3px] transition-colors select-none
        ${clicked
          ? "bg-[#A2FF00] text-black border-[#A2FF00] shadow-none cursor-default"
          : surrendered
          ? "bg-[#B44FFF] !text-white border-[#B44FFF] cursor-pointer animate-pulse"
          : "bg-black !text-white border-black hover:bg-[#A2FF00] hover:!text-black shadow-[3px_3px_0_0_#000000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] cursor-none"
        }`}
    >
      {label}
    </a>
  )
}
