import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 34,
          fontWeight: 800,
          color: "#05060a",
          background: "linear-gradient(135deg,#6c8cff,#7af2c8)",
          borderRadius: 14,
        }}
      >
        TN
      </div>
    ),
    { ...size }
  );
}
