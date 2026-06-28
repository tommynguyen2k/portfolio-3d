"use client";

import dynamic from "next/dynamic";

// 3D scene touches `document`/WebGL — load client-side only.
const Scene3D = dynamic(() => import("@/components/scene-3d"), { ssr: false });

export default function SceneMount() {
  return <Scene3D />;
}
