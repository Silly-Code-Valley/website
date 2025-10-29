"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <Image src="/logo.png" alt="Silly Code Valley" width={40} height={40} className="rounded-lg" />
          Silly Code Valley
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#team" className="text-foreground hover:text-primary transition-colors">
            Team
          </Link>
          <Link href="#projects" className="text-foreground hover:text-primary transition-colors">
            Projects
          </Link>
          <a
            href="#contact"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Navigation */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link href="#team" className="text-foreground hover:text-primary transition-colors">
                Team
              </Link>
              <Link href="#projects" className="text-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <a
                href="#contact"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
