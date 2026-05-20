"use client"

import { useEffect, useRef } from "react"

export default function ConsoleMessage() {
  const hasRun = useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    const ascii = `
      ___  ____   ___       ______  _______  _     _ 
     |_  ||  _ \\ / _ \\      |  _  \\|  ___\\ \\/ /   | |
       | || |_) / /_\\ \\     | | | || |__  \\  /    | |
       | ||  __/|  _  |     | | | ||  __| /  \\    |_|
   /\\__/ /| |   | | | |     | |/ / | |___/ /\\ \\    _ 
   \\____/ |_|   \\_| |_/     |___/  \\____/_/  \\_\\  (_)
                                                     
    `
    
    console.log(
      "%c" + ascii + "\n%cAh, a fellow developer looking under the hood! 🕵️‍♂️\n\n%cI see you checking the console. Since you are here:\n1. Source code: https://github.com/Joevan29\n2. Open to work: joevanpan@outlook.com\n\nStay curious, keep shipping.",
      "color: #A2FF00; font-weight: bold; font-family: monospace;",
      "color: #B44FFF; font-size: 16px; font-weight: bold;",
      "color: #CCCCCC; font-size: 14px; line-height: 1.6;"
    )
  }, [])

  return null
}
