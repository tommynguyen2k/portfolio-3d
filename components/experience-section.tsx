import RevealOnScroll from "@/components/reveal-on-scroll";
import { EXPERIENCE } from "@/lib/portfolio-data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="wrap">
      <RevealOnScroll>
        <div className="shead">
          <div className="tag">02 — Experience</div>
          <h2>Where I&apos;ve shipped</h2>
        </div>
      </RevealOnScroll>
      <div className="timeline">
        {EXPERIENCE.map((e, i) => (
          <RevealOnScroll key={e.company} delay={i * 60}>
            <div className="tl">
              <div className="when">{e.when}</div>
              <h3>{e.role}</h3>
              <div className="co">{e.company}</div>
              <ul>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
