import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Truong Nguyen — Senior Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(1200px 800px at 70% -10%, #13203f 0%, transparent 60%), #05060a",
          color: "#e8ecf4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 4, color: "#7af2c8", textTransform: "uppercase" }}>
          Portfolio
        </div>
        <div style={{ fontSize: 92, fontWeight: 800, marginTop: 16, lineHeight: 1.05 }}>
          Truong Nguyen
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            marginTop: 8,
            backgroundImage: "linear-gradient(110deg,#6c8cff,#b388ff,#7af2c8)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Senior Frontend Developer
        </div>
        <div style={{ fontSize: 30, color: "#8a93a8", marginTop: 28 }}>
          React · Next.js · TypeScript · Angular · Vue.js — 5+ years
        </div>
      </div>
    ),
    { ...size }
  );
}
