"use client";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function AnimatedModel({ url, scale = 1.9 }: { url: string; scale?: number }) {
  const { scene, animations } = useGLTF(url);
  const mixer = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    // ปิดการคัดทิ้งด้วย frustum สำหรับทุก mesh (กันชิ้นส่วนหายตอนอนิเมชัน/หมุน)
    scene.traverse((o: any) => {
      if (o.isMesh) o.frustumCulled = false;
    });

    if (animations?.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => mixer.current!.clipAction(clip, scene).play());
    }
    return () => {
      mixer.current?.stopAllAction();
      mixer.current = null;
    };
  }, [scene, animations]);

  useFrame((_, delta) => mixer.current?.update(delta));
  return <primitive object={scene} scale={scale} />;
}
