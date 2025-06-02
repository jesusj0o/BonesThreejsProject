import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function SmoothCameraReset({ resetCount, orbitRef }) {
  const resetInProgress = useRef(false);
  const progress = useRef(0);
  const duration = 40;

  useEffect(() => {
    resetInProgress.current = true;
    progress.current = 0;
  }, [resetCount]);

  useFrame(({ camera }) => {
    if (!resetInProgress.current) return;

    if (progress.current >= 1) {
      resetInProgress.current = false;
      if (orbitRef.current) orbitRef.current.reset();
      return;
    }

    progress.current += 1 / duration;
    const targetPos = new THREE.Vector3(0, 1, 8);
    const lookAt = new THREE.Vector3(0, 0, 0);

    camera.position.lerp(targetPos, 0.1);
    camera.lookAt(lookAt);

    if (orbitRef.current) {
      orbitRef.current.target.lerp(lookAt, 0.1);
      orbitRef.current.update();
    }
  });

  return null;
}