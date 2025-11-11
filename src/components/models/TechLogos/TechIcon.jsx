import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const TechIcon = ({model}) => {
  const cena = useGLTF(model.modelPath);

    useEffect(() => {
    if (model.nome === "Desenvolvedor Interativo") {
      cena.scene.traverse((child) => {
        if (child.isMesh) {
          if (child.name === "Object_5") {
            child.material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [cena]);

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
    <Environment preset="city" />
      <Float speed={5.5} rotationIntensity={6} floatIntensity={0.9}>
        <group scale={model.escala} rotation={model.rotacao}>
          <primitive object={cena.scene} />
        </group>
      </Float>
     <OrbitControls enableZoom={false} />

    </Canvas>
  )
}

export default TechIcon