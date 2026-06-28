import SceneMount from "@/components/scene-mount"
import SiteNav from "@/components/site-nav"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <SceneMount />
      <div className="grain" />
      <SiteNav />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer>
        © 2026 Truong Nguyen · Senior Frontend Developer · Built with Next.js &amp; Three.js
      </footer>
    </>
  )
}
