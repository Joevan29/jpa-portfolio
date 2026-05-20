"use client"

import { useEffect } from "react"
import type { Project } from "@/lib/data"

type ProjectModalProps = {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[9990] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-2xl bg-white border-[4px] border-ink shadow-[10px_10px_0_0_#000000] overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-ink px-6 py-5 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] font-black px-2 py-0.5 uppercase tracking-widest"
                  style={{ background: project.accent, color: '#000' }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="font-display font-black text-2xl md:text-3xl text-white leading-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 font-mono text-white text-xl font-black hover:text-[#A2FF00] transition-colors mt-1"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Metrics row */}
        {project.metrics && (
          <div className="flex flex-wrap border-b-[3px] border-ink">
            {project.metrics.map((m, i) => (
              <div
                key={i}
                className="flex-1 min-w-[100px] px-5 py-4 border-r-[3px] border-ink last:border-r-0 text-center"
                style={{ background: i === 0 ? project.accent : i === 1 ? '#F5F3A1' : '#D9C4FF' }}
              >
                <p className="font-display font-black text-lg md:text-xl text-ink leading-none">{m}</p>
              </div>
            ))}
          </div>
        )}

        {/* Body */}
        <div className="p-6 md:p-8 flex flex-col gap-6">

          {/* Problem */}
          {project.problem && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[10px] font-black bg-ink text-white px-2 py-0.5 uppercase tracking-widest">Problem</span>
              </div>
              <p className="font-body text-sm text-ink leading-relaxed">{project.problem}</p>
            </div>
          )}

          {/* Approach */}
          {project.approach && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[10px] font-black border-[2px] border-ink text-ink px-2 py-0.5 uppercase tracking-widest">Approach</span>
              </div>
              <p className="font-body text-sm text-ink leading-relaxed">{project.approach}</p>
            </div>
          )}

          {/* Result */}
          {project.result && (
            <div className="border-[3px] border-ink p-4" style={{ background: '#F5F3A1' }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[10px] font-black bg-ink text-[#A2FF00] px-2 py-0.5 uppercase tracking-widest">Result</span>
              </div>
              <p className="font-body text-sm text-ink leading-relaxed font-medium">{project.result}</p>
            </div>
          )}

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-black px-5 py-2.5 bg-ink text-white border-[3px] border-ink hover:bg-[#A2FF00] hover:text-ink transition-colors uppercase tracking-widest"
              >
                Live Demo ↗
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-black px-5 py-2.5 bg-white text-ink border-[3px] border-ink hover:shadow-brutal transition-all uppercase tracking-widest"
              >
                View Code &lt;/&gt;
              </a>
            )}
            <button
              onClick={onClose}
              className="font-mono text-xs font-black px-5 py-2.5 text-ink border-[3px] border-ink opacity-50 hover:opacity-100 transition-opacity uppercase tracking-widest ml-auto"
            >
              Close ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
