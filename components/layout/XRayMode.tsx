"use client"

import { useState, useEffect } from "react"

export default function XRayMode() {
  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Saat tombol Alt ditekan
      if (e.key === "Alt") setActive(true)
    }
    const handleKeyUp = (e: KeyboardEvent) => {
      // Saat tombol Alt dilepas
      if (e.key === "Alt") setActive(false)
    }
    const handleBlur = () => {
      // Reset jika user pindah tab agar tidak stuck
      setActive(false)
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)
    window.addEventListener("blur", handleBlur)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
      window.removeEventListener("blur", handleBlur)
    }
  }, [])

  // Hanya render tag <style> global saat active
  if (!active) return null

  return (
    <style dangerouslySetInnerHTML={{ __html: `
      * {
        outline: 1px solid #A2FF00 !important;
        background-color: rgba(0, 0, 0, 0.95) !important;
        color: #A2FF00 !important;
        border-color: #A2FF00 !important;
        box-shadow: none !important;
      }
      img, video, svg {
        filter: grayscale(100%) contrast(200%) opacity(0.5) !important;
      }
    `}} />
  )
}
