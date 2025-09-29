import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ScrollAnimation delay={200}>
        <AboutSection />
      </ScrollAnimation>
      <ScrollAnimation delay={300}>
        <ProjectsSection />
      </ScrollAnimation>
      <ScrollAnimation delay={500}>
        <BlogSection />
      </ScrollAnimation>
      <ScrollAnimation delay={600}>
        <ContactSection />
      </ScrollAnimation>
      <Footer />
    </main>
  )
}
