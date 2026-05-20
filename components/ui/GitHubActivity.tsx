"use client"

import { useState, useEffect } from "react"

type GitHubEvent = {
  type: string
  repo: { name: string }
  created_at: string
  payload: {
    commits?: { message: string }[]
    ref?: string
  }
}

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime()
  const mins = Math.floor(diff / 60000)
  const hours = Math.floor(mins / 60)
  const days = Math.floor(hours / 24)
  if (mins < 60) return `${mins}m ago`
  if (hours < 24) return `${hours}h ago`
  return `${days}d ago`
}

export default function GitHubActivity() {
  const [event, setEvent] = useState<{ repo: string; message: string; time: string } | null>(null)

  useEffect(() => {
    fetch("https://api.github.com/users/Joevan29/events/public")
      .then(r => r.json())
      .then((data: GitHubEvent[]) => {
        const push = data.find(e => e.type === "PushEvent")
        if (!push) return
        const commit = push.payload.commits?.[0]?.message ?? "pushed code"
        const short = commit.split("\n")[0].slice(0, 48)
        setEvent({
          repo: push.repo.name.split("/")[1],
          message: short,
          time: timeAgo(push.created_at),
        })
      })
      .catch(() => null)
  }, [])

  if (!event) return null

  return (
    <a
      href="https://github.com/Joevan29"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 border-[2px] border-ink bg-white px-3 py-2 w-fit hover:bg-ink hover:text-white transition-colors group shadow-[2px_2px_0_0_#000]"
      title="GitHub Activity"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 opacity-60 group-hover:opacity-100">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
      <div className="flex flex-col leading-none gap-0.5">
        <span className="font-mono text-[9px] font-black uppercase tracking-widest opacity-50 group-hover:opacity-80">
          {event.time} · {event.repo}
        </span>
        <span className="font-mono text-[10px] font-medium truncate max-w-[180px]">
          {event.message}
        </span>
      </div>
    </a>
  )
}
