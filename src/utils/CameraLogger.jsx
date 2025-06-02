import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function CameraLogger({ debounce = 500 }) {
  const lastLogTime = useRef(0);
  const lastPos = useRef(new THREE.Vector3());
  const lastRot = useRef(new THREE.Euler());

  const EPSILON = 0.001;

  function isDifferent(a, b) {
    return Math.abs(a - b) > EPSILON;
  }

  function hasCameraMoved(position, rotation) {
    return (
      isDifferent(position.x, lastPos.current.x) ||
      isDifferent(position.y, lastPos.current.y) ||
      isDifferent(position.z, lastPos.current.z) ||
      isDifferent(rotation.x, lastRot.current.x) ||
      isDifferent(rotation.y, lastRot.current.y) ||
      isDifferent(rotation.z, lastRot.current.z)
    );
  }

  useFrame(({ camera }) => {
    const now = performance.now();
    if (now - lastLogTime.current < debounce) return;

    if (hasCameraMoved(camera.position, camera.rotation)) {
      const direction = new THREE.Vector3();
      camera.getWorldDirection(direction);

      console.log("Camera moved:", {
        position: camera.position.toArray(),
        direction: direction.toArray(),
        rotation: camera.rotation.toArray(),
      });

      lastPos.current.copy(camera.position);
      lastRot.current.copy(camera.rotation);
      lastLogTime.current = now;
    }
  });

  return null;
}

export default CameraLogger;
