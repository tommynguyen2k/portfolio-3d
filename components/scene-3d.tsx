"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const PAL = ["#6c8cff", "#7af2c8", "#b388ff", "#9ab0ff"];
const GLYPHS = ["{", "}", "<", ">", "/", "( )", "[ ]", "=>", ";", "===", "const", "let",
  "async", "&&", "||", "...", "return", "</>", "React", "TS", "Next", "Vue", "Redux",
  "useState", "npm", "git", "{ }", "=>{}", "<T>", "01"];
const RG = 20;

// Client-only env probes (component renders client-side via ssr:false).
const isMobile = () => typeof window !== "undefined" && window.innerWidth < 768;
const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
const paused = () => reducedMotion() || document.hidden;

function glyphTexture(txt: string, color: string) {
  const s = 128;
  const cv = document.createElement("canvas");
  cv.width = cv.height = s;
  const x = cv.getContext("2d")!;
  x.fillStyle = color;
  x.font = "bold 56px ui-monospace,Menlo,Consolas,monospace";
  x.textAlign = "center";
  x.textBaseline = "middle";
  x.shadowColor = color;
  x.shadowBlur = 18;
  x.fillText(txt, s / 2, s / 2);
  const t = new THREE.CanvasTexture(cv);
  t.anisotropy = 2;
  return t;
}

function CodeGlyphs() {
  const group = useRef<THREE.Group>(null!);
  const items = useMemo(() => {
    const count = isMobile() ? 80 : 170;
    return Array.from({ length: count }, () => {
      const txt = GLYPHS[(Math.random() * GLYPHS.length) | 0];
      const color = PAL[(Math.random() * PAL.length) | 0];
      const r = Math.cbrt(Math.random()) * RG;
      const th = Math.random() * Math.PI * 2;
      const ph = Math.acos(2 * Math.random() - 1);
      return {
        tex: glyphTexture(txt, color),
        opacity: 0.18 + Math.random() * 0.5,
        scale: 0.6 + Math.random() * 1.6,
        pos: new THREE.Vector3(
          r * Math.sin(ph) * Math.cos(th),
          r * Math.sin(ph) * Math.sin(th),
          r * Math.cos(ph)
        ),
        vy: 0.4 + Math.random() * 0.9,
      };
    });
  }, []);

  useFrame((state, dt) => {
    if (paused()) return;
    const g = group.current;
    g.rotation.y = state.clock.elapsedTime * 0.03 + state.pointer.x * 0.4;
    g.rotation.x = -state.pointer.y * 0.25;
    g.children.forEach((c, i) => {
      c.position.y += items[i].vy * dt;
      if (c.position.y > RG) c.position.y = -RG;
    });
  });

  return (
    <group ref={group}>
      {items.map((it, i) => (
        <sprite key={i} position={it.pos} scale={[it.scale, it.scale, 1]}>
          <spriteMaterial
            map={it.tex}
            transparent
            opacity={it.opacity}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </sprite>
      ))}
    </group>
  );
}

function NodeGraph() {
  const ng = useRef<THREE.Group>(null!);
  const { nodes, edges } = useMemo(() => {
    const N = 46;
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < N; i++) {
      pts.push(
        new THREE.Vector3().setFromSphericalCoords(
          4 + Math.random() * 3,
          Math.acos(2 * Math.random() - 1),
          Math.random() * Math.PI * 2
        )
      );
    }
    const seg: THREE.Vector3[] = [];
    for (let i = 0; i < N; i++)
      for (let j = i + 1; j < N; j++)
        if (pts[i].distanceTo(pts[j]) < 3.0) seg.push(pts[i], pts[j]);
    return {
      nodes: new THREE.BufferGeometry().setFromPoints(pts),
      edges: new THREE.BufferGeometry().setFromPoints(seg),
    };
  }, []);

  useFrame((state) => {
    if (paused()) return;
    ng.current.rotation.y = state.clock.elapsedTime * 0.14;
    ng.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
  });

  return (
    <group ref={ng}>
      <points geometry={nodes}>
        <pointsMaterial color={0x7af2c8} size={0.18} transparent opacity={0.9} blending={THREE.AdditiveBlending} depthWrite={false} />
      </points>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color={0x6c8cff} transparent opacity={0.16} />
      </lineSegments>
    </group>
  );
}

function CameraRig() {
  const { camera } = useThree();
  const scroll = useRef(0);
  useFrame((state) => {
    if (document.hidden) return;
    scroll.current = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
    camera.position.x += (state.pointer.x * 2.4 - camera.position.x) * 0.05;
    camera.position.y += (-state.pointer.y * 2.0 - camera.position.y) * 0.05;
    camera.position.z = 14 - scroll.current * 9;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D() {
  return (
    <div className="scene">
      <Canvas
        camera={{ position: [0, 0, 14], fov: 60, near: 0.1, far: 100 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <fogExp2 attach="fog" args={[0x05060a, 0.055]} />
        <CodeGlyphs />
        <NodeGraph />
        <gridHelper
          args={[60, 40, 0x6c8cff, 0x1b2138]}
          position={[0, -9, 0]}
          material-transparent
          material-opacity={0.12}
        />
        <CameraRig />
      </Canvas>
    </div>
  );
}
