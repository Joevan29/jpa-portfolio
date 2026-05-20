"use client"

import { useEffect, useState, useRef } from 'react'
import { useSFX } from '@/hooks/useSFX'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)
  const { playTick, playClack } = useSFX()
  const lastHoverState = useRef(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      const target = e.target as HTMLElement
      const isHovering = !!(target.closest('a, button, [role="button"]'))
      setHovering(isHovering)
      
      if (isHovering && !lastHoverState.current) {
        playTick()
      }
      lastHoverState.current = isHovering
    }
    const down = (e: MouseEvent) => {
      setClicking(true)
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"]')) {
        playClack()
      }
    }
    const up = () => setClicking(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [playTick, playClack])

  const ringSize = hovering ? 48 : 32
  const scale = clicking ? 0.7 : 1

  return (
    <>
      {/* Outer ring */}
      <div
        className="fixed z-[9999] pointer-events-none rounded-full border-[2px] transition-all duration-100"
        style={{
          left: pos.x - ringSize / 2,
          top: pos.y - ringSize / 2,
          width: ringSize,
          height: ringSize,
          borderColor: '#B44FFF',
          transform: `scale(${scale})`,
          opacity: 0.8,
        }}
      />
      {/* Inner dot */}
      <div
        className="fixed z-[9999] pointer-events-none rounded-full transition-transform duration-75"
        style={{
          left: pos.x - 4,
          top: pos.y - 4,
          width: 8,
          height: 8,
          background: '#B44FFF',
          transform: `scale(${clicking ? 1.8 : 1})`,
        }}
      />
    </>
  )
}
