import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

import SkeletonModel from "./models/Skeleton";

import { SmoothCameraFocus } from "../utils/SmothCameraFocus";
import { SmoothCameraReset } from "../utils/SmothCameraReset";





export default function ModelViewer({
  selectedModel,
  selectedBone,
  onBoneClick,
  mode,
  resetCount,
}) {
  const modelRef = useRef();
  const orbitRef = useRef();

  return (
    <div className="w-full h-full relative z-0">
      <Canvas className="w-full h-full" camera={{ position: [0, 1, 8], fov: 35 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Environment preset="studio" />

        {selectedModel === "skeleton" && (
          <SkeletonModel
            ref={modelRef}
            onBoneClick={onBoneClick}
            selectedBone={selectedBone}
          />
        )}

        <OrbitControls
          ref={orbitRef}
          enableRotate={mode === "rotate"}
          enablePan={mode === "pan"}
          enableZoom={mode === "zoom"}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />

        {/* Aquí los dos componentes juntos */}
        <SmoothCameraFocus targetBone={selectedBone} orbitRef={orbitRef} />
        <SmoothCameraReset resetCount={resetCount} orbitRef={orbitRef} />
      </Canvas>
    </div>
  );
}
