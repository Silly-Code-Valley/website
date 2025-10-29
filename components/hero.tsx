"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

interface GroupData {
  group: {
    name: string
    tagline: string
    description: string
  }
}

export function Hero() {
  const [data, setData] = useState<GroupData | null>(null)

  useEffect(() => {
    fetch("/api/team")
      .then((res) => res.json())
      .then(setData)
  }, [])

  if (!data) return null

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/30 py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Logo placeholder */}
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              🐱
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">{data.group.name}</h1>
            <p className="text-xl md:text-2xl text-secondary font-semibold">{data.group.tagline}</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">{data.group.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              View Our Projects
              <ArrowRight size={20} />
            </a>
            <a
              href="#team"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-semibold"
            >
              Meet the Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
