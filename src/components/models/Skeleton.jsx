import React, {
  useRef,
  useLayoutEffect,
  useMemo,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const SkeletonModel = forwardRef(({ onBoneClick, selectedBone }, ref) => {
  const group = useRef();
  const { scene } = useGLTF("/models/skeleton.glb");

  useImperativeHandle(ref, () => ({
    ...group.current,
    resetView: () => {
      if (group.current) {
        group.current.position.set(0, -4.5, 0);
        group.current.rotation.set(0, Math.PI / -20, 0);
      }
    },
  }));

  const meshes = useMemo(() => {
    const cloned = scene.clone(true);
    const meshList = [];
    cloned.traverse((child) => {
      if (child.isMesh) {
        meshList.push(child.clone());
      }
    });
    return meshList;
  }, [scene]);

  useLayoutEffect(() => {
    meshes.forEach((mesh) => {
      const box = new THREE.Box3().setFromObject(mesh);
      const center = new THREE.Vector3();
      box.getCenter(center);
      mesh.position.sub(center);
      mesh.position.x -= 0.5;
    });
  }, [meshes]);

  return (
    <group ref={group} position={[0, -4.5, 0]} rotation={[0, Math.PI / -20, 0]}>
      {meshes.map((mesh, index) => {
        const material = mesh.material.clone();

        if (mesh.name === selectedBone) {
          material.emissive = new THREE.Color(0xff5500);
          material.emissiveIntensity = 1;
        } else {
          material.emissive = new THREE.Color(0x000000);
          material.emissiveIntensity = 0;
        }

        return (
          <mesh
            key={index}
            geometry={mesh.geometry}
            material={material}
            position={mesh.position}
            rotation={mesh.rotation}
            scale={mesh.scale}
            onPointerOver={(e) => {
              e.stopPropagation();
              if (mesh.name !== selectedBone) {
                e.object.material.emissive = new THREE.Color(0x0783c0);
                e.object.material.emissiveIntensity = 0.9;
              }
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              if (mesh.name !== selectedBone) {
                e.object.material.emissive = new THREE.Color(0x000000);
                e.object.material.emissiveIntensity = 0;
              }
              document.body.style.cursor = "default";
            }}
            onClick={(e) => {
              e.stopPropagation();
              onBoneClick?.(mesh.name);
            }}
          />
        );
      })}
    </group>
  );
});

export default SkeletonModel;
