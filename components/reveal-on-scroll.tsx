"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

export default function RevealOnScroll({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.unobserve(e.target);
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  return (
    <div ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}
