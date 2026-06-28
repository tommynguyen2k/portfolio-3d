import RevealOnScroll from "@/components/reveal-on-scroll";
import { SKILLS } from "@/lib/portfolio-data";

export default function SkillsSection() {
  return (
    <section id="skills" className="wrap">
      <RevealOnScroll>
        <div className="shead">
          <div className="tag">04 — Skills</div>
          <h2>Toolbox</h2>
        </div>
      </RevealOnScroll>
      <div className="skillcols">
        {Object.entries(SKILLS).map(([group, items], i) => (
          <RevealOnScroll key={group} delay={i * 50}>
            <div className="glass skillgroup">
              <h4>{group}</h4>
              <div className="tags">
                {items.map((s) => (
                  <span className="tag2" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
