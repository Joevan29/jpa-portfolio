"use client"

import { useState, useEffect, useRef, useCallback } from "react"

const RESPONSES: Record<string, string | string[]> = {
  help: [
    "Available commands:",
    "  whoami       → about me",
    "  skills       → tech stack",
    "  projects     → selected works",
    "  contact      → get in touch",
    "  clear        → clear terminal",
    "  exit         → close terminal",
  ],
  whoami: [
    "Joevan Pramana Achmad",
    "Full Stack Engineer — Backend-heavy, Cloud-curious, IoT-obsessed.",
    "Currently: Mobile Dev Intern @ PT Kirana Megatara Tbk",
    "Education:  Universitas Nasional · Information Systems · 2022–2026",
    "TOEFL ITP:  670",
  ],
  skills: [
    "Languages   → TypeScript, JavaScript, Go, PHP, Python, SQL, R",
    "Backend     → Node.js, CodeIgniter 3, Kafka, K8s, Docker, REST",
    "Frontend    → Next.js, React, Vue, Vite, Tailwind",
    "Data / AI   → PostgreSQL, BigQuery, Pandas, NumPy, YOLO, Power BI",
    "Certs       → BNSP · Google Cloud (6 badges) · IT Specialist Cybersecurity",
  ],
  projects: [
    "1. Smart Nexus                  → Next.js API · 10k+ req/sec · Redis",
    "2. MBA Dashboard                → Python ML · Apriori & FP-Growth",
    "3. Smart Env Monitor            → IoT + MQTT + WebSocket · <100ms · 99.7% uptime",
    "4. JPA Portfolio                → You are here. Type 'exit' to go back.",
    "5. Sea Catering App             → React/Vite · Real-time Tracking",
    "6. IoT Environmental Monitor    → Arduino/C++ · Real-time Data Logging",
    "7. Lumbung Kata Nusantara       → Next.js/AzureAI · Phonetic Search",
    "8. Kimia Farma Big Data         → BigQuery/SQL · 672k+ rows analyzed",
  ],
  contact: [
    "Email    → joevanpan@outlook.com",
    "GitHub   → github.com/Joevan29",
    "LinkedIn → linkedin.com/in/jvnprmnachmd",
    "Credly   → credly.com/users/jvnprmnachmd",
    "",
    "Open to work — available from July 2026.",
  ],
  clear: "__CLEAR__",
  exit: "__EXIT__",
}

const UNKNOWN = (cmd: string) => [`Command not found: ${cmd}`, `Type 'help' for available commands.`]

type Line = { type: "input" | "output" | "system"; text: string }

export default function Terminal() {
  const [open, setOpen] = useState(false)
  const [lines, setLines] = useState<Line[]>([
    { type: "system", text: "JPA Terminal v1.0.0" },
    { type: "system", text: "Type 'help' to see available commands. Press ` to close." },
    { type: "system", text: "" },
  ])
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  const handleToggle = useCallback((e: KeyboardEvent) => {
    if (e.key === "`") {
      e.preventDefault()
      setOpen(prev => !prev)
    }
    if (e.key === "Escape") setOpen(false)
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handleToggle)
    return () => window.removeEventListener("keydown", handleToggle)
  }, [handleToggle])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [lines])

  const runCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase()
    if (!cmd) return

    setHistory(prev => [cmd, ...prev])
    setHistoryIndex(-1)

    const newLines: Line[] = [{ type: "input", text: `> ${raw.trim()}` }]
    const response = RESPONSES[cmd] ?? UNKNOWN(cmd)

    if (response === "__EXIT__") {
      setOpen(false)
      return
    }

    if (response === "__CLEAR__") {
      setLines([
        { type: "system", text: "JPA Terminal v1.0.0" },
        { type: "system", text: "Type 'help' to see available commands." },
        { type: "system", text: "" },
      ])
      setInput("")
      return
    }

    const outputs = Array.isArray(response) ? response : [response]
    outputs.forEach(text => newLines.push({ type: "output", text }))
    newLines.push({ type: "output", text: "" })

    setLines(prev => [...prev, ...newLines])
    setInput("")
  }

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(input)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      const next = Math.min(historyIndex + 1, history.length - 1)
      setHistoryIndex(next)
      setInput(history[next] ?? "")
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      const next = Math.max(historyIndex - 1, -1)
      setHistoryIndex(next)
      setInput(next === -1 ? "" : history[next])
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col"
      style={{ background: "#0D0D0D", fontFamily: "var(--font-jetbrains-mono), monospace" }}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#333]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <button
              onClick={() => setOpen(false)}
              className="w-3 h-3 rounded-full bg-[#FF5F57] hover:opacity-80"
              aria-label="Close terminal"
            />
            <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <span className="text-[#666] text-xs tracking-widest uppercase ml-2">
            jpa — terminal
          </span>
        </div>
        <span className="text-[#444] text-[10px]">Press ` or ESC to close</span>
      </div>

      {/* Output */}
      <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-0.5">
        {lines.map((line, i) => (
          <div key={i}>
            {line.type === "system" ? (
              <p className="text-[#555] text-xs">{line.text || "\u00a0"}</p>
            ) : line.type === "input" ? (
              <p className="text-[#A2FF00] text-sm">{line.text}</p>
            ) : (
              <p className="text-[#CCCCCC] text-sm">{line.text || "\u00a0"}</p>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      <div className="flex items-center px-5 py-4 border-t border-[#222] gap-2">
        <span className="text-[#A2FF00] text-sm shrink-0">jpa@dev:~$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          className="flex-1 bg-transparent text-[#CCCCCC] text-sm outline-none caret-[#A2FF00]"
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          aria-label="Terminal input"
        />
        <span className="text-[#A2FF00] animate-pulse text-sm">█</span>
      </div>
    </div>
  )
}
