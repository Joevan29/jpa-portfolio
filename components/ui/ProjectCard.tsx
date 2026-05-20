"use client"

import { useState } from "react"
import Image from "next/image"
import type { Project } from "@/lib/data"
import { useReveal } from "@/hooks/useReveal"
import ProjectModal from "@/components/ui/ProjectModal"

type ProjectCardProps = {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const revealRef = useReveal('reveal-up', index * 100)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div ref={revealRef as React.RefObject<HTMLDivElement>} className="group relative w-full h-full flex justify-center hover:-translate-y-2 transition-all duration-300 z-10 hover:z-20">
        {index === 0 && (
          <div className="absolute -top-4 right-4 z-30 bg-[#FFF59D] border-[3px] border-ink px-3 py-1 font-mono text-[10px] md:text-xs font-bold uppercase rotate-12 shadow-brutal text-black">
            AI / ML
          </div>
        )}

        <div className="bg-surface border-[3px] border-ink p-6 md:p-8 flex flex-col w-full h-full shadow-brutal group-hover:shadow-brutal-accent transition-all relative">
          {/* Preview */}
          <div className="relative w-full aspect-video border-[3px] border-ink bg-surface-alt mb-6 overflow-hidden flex items-center justify-center">
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            ) : project.id === "boo-vision" ? (
              <div className="w-full h-full bg-[#E8F0D0] relative flex items-center justify-center p-4">
                <div className="absolute inset-x-0 top-0 h-4 border-b border-ink flex justify-around items-center px-2">
                  {[...Array(8)].map((_, i) => <div key={i} className="w-2 h-2 bg-ink" />)}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-4 border-t border-ink flex justify-around items-center px-2">
                  {[...Array(8)].map((_, i) => <div key={i} className="w-2 h-2 bg-ink" />)}
                </div>
                <div className="w-16 h-16 rounded-full border-[3px] border-ink flex items-center justify-center bg-surface relative">
                  <div className="w-8 h-8 rounded-full border-2 border-ink bg-[#A2FF00]" />
                  <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-ink" />
                </div>
                <div className="absolute bottom-6 right-6 bg-surface border-2 border-ink p-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-black">
                    <rect x="3" y="6" width="18" height="12" rx="1.5" />
                    <path d="M7 6v12M17 6v12M3 10h4M17 10h4M3 14h4M17 14h4" />
                  </svg>
                </div>
              </div>
            ) : project.id === "flowflow-db" ? (
              <div className="w-full h-full bg-[#1A1A1A] p-4 font-mono text-[10px] md:text-xs text-white flex flex-col gap-1 rounded-sm overflow-hidden select-none">
                <div className="flex gap-1.5 mb-2 opacity-60">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <p className="text-[#86E4B1] font-bold">package main</p>
                <p className="text-[#D9C4FF]">import &quot;github.com/joevan/flowflow&quot;</p>
                <p className="text-[#FFF59D]">func main() &#123;</p>
                <p className="text-gray-400 pl-4">// SELECT * FROM life</p>
                <p className="text-[#80DEEA] pl-4">flowflow.TTL(24 * time.Hour)</p>
                <p className="text-[#FFF59D]">&#125;</p>
              </div>
            ) : (
              <div className="w-full h-full bg-surface relative flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:10px_10px] opacity-10" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="border-[3px] border-ink px-4 py-2 font-mono font-bold text-xs uppercase shadow-brutal flex items-center gap-2" style={{ background: project.accent }}>
                    <span className="w-2.5 h-2.5 rounded-full bg-ink animate-pulse" />
                    {project.title}
                  </div>
                  <div className="w-1 h-6 bg-ink" />
                  <div className="w-12 h-0.5 bg-ink" />
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col flex-grow">
            {/* Metrics pills */}
            {project.metrics && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.metrics.map((m) => (
                  <span key={m} className="font-mono text-[9px] font-black bg-[#F5F3A1] border border-ink px-2 py-0.5">
                    {m}
                  </span>
                ))}
              </div>
            )}

            <h3 className="font-display font-black text-xl md:text-2xl text-ink mb-2">
              {project.title}
            </h3>
            <p className="font-body text-sm text-ink-muted leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            <div className="mt-auto flex gap-3 flex-wrap">
              {project.liveUrl ? (
                <>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2 bg-[#A2FF00] text-ink font-mono text-xs font-bold tracking-widest uppercase border-[3px] border-ink hover:bg-ink hover:text-[#A2FF00] transition-colors shadow-brutal hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  >
                    Live Demo ↗
                  </a>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center justify-center px-4 py-2 bg-surface text-ink font-mono text-xs font-bold tracking-widest uppercase border-[3px] border-ink hover:bg-[#FFF59D] transition-colors"
                  >
                    Case Study →
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center justify-center px-5 py-2 bg-ink text-white font-mono text-xs font-bold tracking-widest uppercase border-[3px] border-ink hover:bg-[#A2FF00] hover:text-ink transition-colors shadow-brutal hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                  >
                    Case Study →
                  </button>
                  {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-surface text-ink font-mono text-xs font-bold tracking-widest uppercase border-[3px] border-ink hover:bg-[#D9C4FF] transition-colors"
                    >
                      Code &lt;/&gt;
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <ProjectModal project={project} onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}
