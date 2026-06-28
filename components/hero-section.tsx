import { PROFILE } from "@/lib/portfolio-data";

export default function HeroSection() {
  return (
    <header className="hero wrap" id="top">
      <div className="eyebrow">
        <span className="dot" /> Available for opportunities
      </div>
      <h1>
        Truong&nbsp;Nguyen
        <br />
        <span className="grad">Senior Frontend Developer</span>
      </h1>
      <p className="subtitle">
        5+ years architecting scalable, high-performance web apps with React, Next.js,
        Angular &amp; TypeScript — for e-commerce, government &amp; AI-driven enterprise products.
      </p>
      <div className="cta">
        <a className="btn primary" href="#projects">
          View Projects →
        </a>
        <a className="btn ghost" href={`mailto:${PROFILE.email}`}>
          Get in touch
        </a>
      </div>
      <div className="stats">
        {PROFILE.stats.map((s) => (
          <div className="stat" key={s.l}>
            <div className="n">{s.n}</div>
            <div className="l">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="scrollcue">Scroll ↓</div>
    </header>
  );
}
