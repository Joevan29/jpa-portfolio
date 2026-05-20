"use client"

import { PROJECTS } from "@/lib/data"
import ProjectCard from "@/components/ui/ProjectCard"

export default function SelectedWorks() {
  return (
    <section className="relative z-10" id="projects" style={{ paddingTop: 'clamp(5rem, 10vw, 10rem)', paddingBottom: 'clamp(5rem, 10vw, 10rem)' }}>
      <div className="w-full max-w-7xl mx-auto" style={{ paddingLeft: 'var(--pad-x)', paddingRight: 'var(--pad-x)' }}>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-ink flex items-center gap-3" style={{ marginBottom: '4rem' }}>
          Selected Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12 lg:gap-16" style={{ paddingTop: '2rem' }}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

    </section>
  )
}

