"use client";

import { useEffect, useState } from "react";

const LINKS = [
  ["#about", "About"],
  ["#experience", "Experience"],
  ["#projects", "Projects"],
  ["#skills", "Skills"],
  ["#contact", "Contact"],
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="brand">
        TN<b>.</b>
      </div>
      <div className="navlinks" style={open ? { display: "flex" } : undefined}>
        {LINKS.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </div>
      <button className="menu-btn" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
        ☰
      </button>
    </nav>
  );
}
