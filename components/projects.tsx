"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  link: string
  image: string
}

interface ProjectsData {
  projects: Project[]
}

export function Projects() {
  const [data, setData] = useState<ProjectsData | null>(null)

  useEffect(() => {
    fetch("/data/team.json")
      .then((res) => res.json())
      .then(setData)
  }, [])

  if (!data) return null

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions built by our team for school and beyond
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,350px),1fr))] gap-8 justify-items-center">
          {data.projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-accent transition-all duration-300 flex flex-col h-full w-full max-w-md"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-muted overflow-hidden flex-shrink-0">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs bg-accent/20 text-accent px-3 py-1 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links - pushed to bottom */}
                <div className="flex gap-3 pt-4 border-t border-border mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                  >
                    <Github size={18} />
                    Repository
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold ml-auto"
                  >
                    View
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
