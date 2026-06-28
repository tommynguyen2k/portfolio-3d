import RevealOnScroll from "@/components/reveal-on-scroll";

export default function AboutSection() {
  return (
    <section id="about" className="wrap">
      <RevealOnScroll>
        <div className="shead">
          <div className="tag">01 — About</div>
          <h2>Clean code, raised standards</h2>
        </div>
      </RevealOnScroll>
      <div className="about">
        <RevealOnScroll>
          <p className="hi">
            Results-driven Senior Frontend Developer passionate about clean code, mentoring, and
            continuously raising quality standards.
          </p>
          <p>
            I specialise in architecting reusable component libraries, leading frontend teams, and
            delivering accessible, optimised experiences. My work spans e-commerce, government
            platforms, and AI-driven enterprise products — from schema-driven submission workflows
            to drag-and-drop script builders and on-premise deployments.
          </p>
          <p>
            Currently building enterprise platforms at SmartDev including the Green Climate Fund and
            Long Son Petrochemicals.
          </p>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="glass infocard">
            <div className="row"><span className="k">Location</span><span className="v">Da Nang, Vietnam</span></div>
            <div className="row"><span className="k">Role</span><span className="v">Senior Frontend Dev</span></div>
            <div className="row"><span className="k">Education</span><span className="v">Duy Tan Univ. — SE</span></div>
            <div className="row"><span className="k">English</span><span className="v">TOEIC 750</span></div>
            <div className="row"><span className="k">Focus</span><span className="v">React · Next.js · TS</span></div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
