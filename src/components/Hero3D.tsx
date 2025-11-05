import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial, Float, Sphere, Box, Cylinder } from "@react-three/drei";
import * as THREE from "three";

const IndustrialStructure = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central sphere - core technology */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[1, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#2563eb"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Orbiting elements - representing different tech solutions */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        <Box args={[0.4, 0.4, 0.4]} position={[2.5, 0.5, 0]}>
          <meshStandardMaterial color="#ea580c" metalness={0.9} roughness={0.1} />
        </Box>
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.4}>
        <Cylinder args={[0.3, 0.3, 0.6, 32]} position={[-2, -0.8, 1]}>
          <meshStandardMaterial color="#0891b2" metalness={0.8} roughness={0.2} />
        </Cylinder>
      </Float>

      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.5}>
        <Box args={[0.5, 0.5, 0.5]} position={[1.5, -1.5, -1]}>
          <meshStandardMaterial color="#6366f1" metalness={0.7} roughness={0.3} />
        </Box>
      </Float>

      <Float speed={2.2} rotationIntensity={0.3} floatIntensity={0.3}>
        <Sphere args={[0.35, 32, 32]} position={[-1.8, 1.2, -0.5]}>
          <meshStandardMaterial color="#8b5cf6" metalness={0.9} roughness={0.1} />
        </Sphere>
      </Float>

      {/* Connection rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.05, 16, 100]} />
        <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.2} transparent opacity={0.4} />
      </mesh>
      
      <mesh rotation={[0, Math.PI / 2, Math.PI / 4]}>
        <torusGeometry args={[2.2, 0.05, 16, 100]} />
        <meshStandardMaterial color="#64748b" metalness={0.8} roughness={0.2} transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-60 lg:opacity-100">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <IndustrialStructure />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Hero3D;
