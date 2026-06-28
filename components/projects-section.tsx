import RevealOnScroll from "@/components/reveal-on-scroll";
import { PROJECTS } from "@/lib/portfolio-data";

export default function ProjectsSection() {
  return (
    <section id="projects" className="wrap">
      <RevealOnScroll>
        <div className="shead">
          <div className="tag">03 — Projects</div>
          <h2>Selected work</h2>
          <p>Enterprise platforms across climate finance, petrochemicals, AI agents and stock media.</p>
        </div>
      </RevealOnScroll>
      <div className="grid">
        {PROJECTS.map((p, i) => (
          <RevealOnScroll key={p.name} delay={i * 60}>
            <article className="glass proj">
              <div className="top">
                <h3>{p.name}</h3>
                <span className="num">0{i + 1}</span>
              </div>
              <p>{p.desc}</p>
              <div className="chips">
                {p.tech.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
