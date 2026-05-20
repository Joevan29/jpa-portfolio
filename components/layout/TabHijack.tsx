"use client"
import { useEffect } from "react"

export default function TabHijack() {
  useEffect(() => {
    const originalTitle = document.title || "JPA.DEV"
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "HEY COME BACK! 😭"
      } else {
        document.title = originalTitle
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return null
}
