"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

interface GroupData {
  group: {
    name: string
  }
}

export function Footer() {
  const [data, setData] = useState<GroupData | null>(null)

  useEffect(() => {
    fetch("/data/team.json")
      .then((res) => res.json())
      .then(setData)
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">{data?.group.name}</h3>
            <p className="text-primary-foreground/80">CS students building innovative projects together.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link href="#team" className="hover:text-primary-foreground transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-primary-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@sillycodevalley.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Silly-Code-Valley"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a> */}
              {/* <a
                href="mailto:contact@sillycodevalley.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; {currentYear} Silly Code Valley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
