"use client"

import { useEffect, useRef, useCallback } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export function useParticles(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  const particles = useRef<Particle[]>([])
  const mouse = useRef({ x: -1000, y: -1000 })
  const rafId = useRef<number>(0)
  const isIntersecting = useRef<boolean>(false)

  const createParticles = useCallback((width: number, height: number) => {
    // Disable entirely on mobile to save CPU & INP
    if (window.innerWidth < 768) return []
    
    const count = 40 // Reduced from 60 for better performance
    const result: Particle[] = []

    for (let i = 0; i < count; i++) {
      result.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: 2 + Math.random() * 4,
        opacity: 0.1 + Math.random() * 0.3,
      })
    }
    return result
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Intersection Observer to pause animation off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        isIntersecting.current = entries[0].isIntersecting
        if (isIntersecting.current && particles.current.length > 0) {
          animate()
        } else {
          cancelAnimationFrame(rafId.current)
        }
      },
      { threshold: 0 }
    )
    
    observer.observe(canvas)

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.current = createParticles(canvas.width, canvas.height)
    }

    resize()

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    const animate = () => {
      if (!isIntersecting.current || particles.current.length === 0) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles.current) {
        const dx = p.x - mouse.current.x
        const dy = p.y - mouse.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 120) {
          const force = (120 - dist) / 120
          p.vx += (dx / dist) * force * 0.8
          p.vy += (dy / dist) * force * 0.8
        }

        p.vx *= 0.98
        p.vy *= 0.98

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(10, 10, 10, ${p.opacity})`
        ctx.fill()
      }

      rafId.current = requestAnimationFrame(animate)
    }

    if (isIntersecting.current && particles.current.length > 0) {
      rafId.current = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("resize", resize, { passive: true })

    return () => {
      observer.disconnect()
      cancelAnimationFrame(rafId.current)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", resize)
    }
  }, [canvasRef, createParticles])
}
