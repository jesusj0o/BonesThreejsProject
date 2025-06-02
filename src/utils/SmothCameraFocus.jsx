import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { boneCameraPositions } from "./cameraPositions";

export function SmoothCameraFocus({ targetBone, orbitRef }) {
  const focusInProgress = useRef(false);
  const progress = useRef(0);
  const duration = 40;
  const targetPos = useRef(new THREE.Vector3());
  const lookAt = useRef(new THREE.Vector3());

  useEffect(() => {
    if (targetBone && boneCameraPositions[targetBone]) {
      const { position, target } = boneCameraPositions[targetBone];
      targetPos.current.set(...position);
      lookAt.current.set(...target);
      focusInProgress.current = true;
      progress.current = 0;
    }
  }, [targetBone]);

  useFrame(({ camera }) => {
    if (!focusInProgress.current) return;

    if (progress.current >= 1) {
      focusInProgress.current = false;
      return;
    }

    progress.current += 1 / duration;
    camera.position.lerp(targetPos.current, 0.1);
    camera.lookAt(lookAt.current);

    if (orbitRef.current) {
      orbitRef.current.target.lerp(lookAt.current, 0.1);
      orbitRef.current.update();
    }
  });

  return null;
}