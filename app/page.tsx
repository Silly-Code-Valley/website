import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Team } from "@/components/team"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Team />
      <Projects />
      <Footer />
    </main>
  )
}
