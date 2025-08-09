"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Bounds } from "@react-three/drei";
import * as THREE from "three";
import AnimatedModel from "./AnimatedModel";

export default function ModelViewer({
  url,
  className = "",
  fov = 38,
  modelScale = 1.9,
}: {
  url: string;
  className?: string;
  fov?: number;
  modelScale?: number;
}) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], near: 0.01, far: 100, fov }}
        dpr={[1, 2]}
        style={{ width: "100%", height: "100%", background: "transparent" }}
        onCreated={({ gl }) => {
          const r: any = gl;
          if ("outputColorSpace" in r) r.outputColorSpace = (THREE as any).SRGBColorSpace;
          else r.outputEncoding = (THREE as any).sRGBEncoding;
        }}
      >
        <ambientLight intensity={0.25} />
        <directionalLight position={[2, 2, 2]} intensity={0.3} />
        <Environment preset="apartment" />

        <Bounds fit clip observe margin={1.1}>
          <AnimatedModel url={url} scale={modelScale} />
        </Bounds>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2 - 0.6}
          maxPolarAngle={Math.PI / 2 + 0.4}
        />
      </Canvas>
    </div>
  );
}
