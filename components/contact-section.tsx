import RevealOnScroll from "@/components/reveal-on-scroll"
import { PROFILE } from "@/lib/portfolio-data"

export default function ContactSection() {
  return (
    <section id="contact" className="wrap contact">
      <RevealOnScroll>
        <div className="tag tag-contact">05 — Contact</div>
        <h2>
          Let&apos;s build something
          <br />
          <span className="grad">exceptional</span>
        </h2>
        <p>Open to senior frontend roles and interesting product challenges. Reach out anytime.</p>
        <div className="links">
          <a className="btn primary" href={`mailto:${PROFILE.email}`}>
            ✉ Email me
          </a>
          <a className="btn ghost" href={PROFILE.links.linkedin} target="_blank" rel="noopener">
            in LinkedIn
          </a>
          <a className="btn ghost" href={PROFILE.links.github} target="_blank" rel="noopener">
            ⌗ GitHub
          </a>
          <a className="btn ghost" href={PROFILE.links.website} target="_blank" rel="noopener">
            ◎ truongnguyen.cv
          </a>
        </div>
      </RevealOnScroll>
    </section>
  )
}
