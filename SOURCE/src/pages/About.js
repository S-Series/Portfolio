import { useRef, useMemo } from "react";
import { LiquidGlass } from "@liquidglass/react";
import "./_page.css";

export default function About() {
  const glassStyle = {
    depth: 20,
    segments: 34,
    radius: 20,
    tint: null,
    reflectivity: 1,
    thickness: 20,
    dispersion: 4.9,
    roughness: 0,
  };

  return (
    <div id="page-body">
      <div style={{ width: "100%", height: "300px" }}>
        <LiquidGlass
          className="my-glass-container"
          blur={0.5}
          contrast={1}
          brightness={1.2}
          saturation={1.2}
          shadowIntensity={0.4}
          displacementScale={0.5}
          elasticity={0.8}>
          Hello Liquid Glass!
        </LiquidGlass>
      </div>
    </div>
  );
}
