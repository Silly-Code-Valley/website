"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin } from "lucide-react"

interface Member {
  id: number
  name: string
  role: string
  bio: string
  skills: string[]
  github: string
  linkedin: string
}

interface TeamData {
  members: Member[]
}

export function Team() {
  const [data, setData] = useState<TeamData | null>(null)

  useEffect(() => {
    fetch("/api/team")
      .then((res) => res.json())
      .then(setData)
  }, [])

  if (!data) return null

  return (
    <section id="team" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet the Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The silly minds behind the silly code
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {data.members.map((member) => (
            <div
              key={member.id}
              className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-accent transition-all duration-300 flex flex-col h-full w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              {/* Avatar */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                {member.name.charAt(0)}
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">{member.name}</h3>
              <p className="text-sm font-semibold text-secondary mb-4">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-6 flex-grow">{member.bio}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {member.skills.slice(0, 3).map((skill) => (
                  <span key={skill} className="text-xs bg-secondary/20 text-secondary px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-6 border-t border-border">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
