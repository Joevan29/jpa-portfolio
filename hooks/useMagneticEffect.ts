"use client"

import { useEffect, useRef, useCallback } from "react"
import { lerp } from "@/lib/utils"

interface MagneticOptions {
  strength?: number
  radius?: number
  maxDisplacement?: number
}

export function useMagneticEffect({
  strength = 0.3,
  radius = 100,
  maxDisplacement = 15,
}: MagneticOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const position = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const rafId = useRef<number>(0)

  const animate = useCallback(() => {
    position.current.x = lerp(position.current.x, target.current.x, 0.15)
    position.current.y = lerp(position.current.y, target.current.y, 0.15)

    if (ref.current) {
      ref.current.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`
    }

    rafId.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    // disable di mobile
    if (window.matchMedia("(max-width: 768px)").matches) return

    const el = ref.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distX = e.clientX - centerX
      const distY = e.clientY - centerY
      const distance = Math.sqrt(distX * distX + distY * distY)

      if (distance < radius) {
        const pullX = (distX * strength)
        const pullY = (distY * strength)
        target.current.x = Math.max(-maxDisplacement, Math.min(maxDisplacement, pullX))
        target.current.y = Math.max(-maxDisplacement, Math.min(maxDisplacement, pullY))
      } else {
        target.current.x = 0
        target.current.y = 0
      }
    }

    rafId.current = requestAnimationFrame(animate)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(rafId.current)
    }
  }, [animate, strength, radius, maxDisplacement])

  return ref
}
