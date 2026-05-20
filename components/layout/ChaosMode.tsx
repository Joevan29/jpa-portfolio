"use client"
import { useEffect, useState } from "react"
import { useSFX } from "@/hooks/useSFX"

export default function ChaosMode() {
  const [chaos, setChaos] = useState(false)
  const { playClack } = useSFX()
  
  useEffect(() => {
    let keys = ""
    const secret = "chaos"
    
    const handleKeyDown = (e: KeyboardEvent) => {
      keys += e.key.toLowerCase()
      if (keys.length > 5) keys = keys.slice(-5)
      
      if (keys === secret) {
        setChaos(prev => !prev)
        playClack()
        keys = ""
      }
    }
    
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [playClack])
  
  useEffect(() => {
    if (chaos) {
      document.body.classList.add("chaos-active")
    } else {
      document.body.classList.remove("chaos-active")
    }
  }, [chaos])
  
  return null
}
