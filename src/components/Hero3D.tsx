import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Sphere, Box, Cylinder, Line } from "@react-three/drei";
import * as THREE from "three";

// Data flow particles
const DataParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = [];
    for (let i = 0; i < 100; i++) {
      const angle = (i / 100) * Math.PI * 2;
      const radius = 2 + Math.random() * 1.5;
      positions.push(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 3,
        Math.sin(angle) * radius
      );
    }
    return new Float32Array(positions);
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#3b82f6" transparent opacity={0.6} />
    </points>
  );
};

// Industrial pipeline network
const IndustrialStructure = () => {
  const groupRef = useRef<THREE.Group>(null);
  const pipeRef1 = useRef<THREE.Mesh>(null);
  const pipeRef2 = useRef<THREE.Mesh>(null);
  const dataNodeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    
    // Simulate data processing pulses
    if (dataNodeRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1;
      dataNodeRef.current.scale.setScalar(pulse);
    }

    // Rotate pipes slightly
    if (pipeRef1.current) {
      pipeRef1.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (pipeRef2.current) {
      pipeRef2.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  // Connection lines between nodes
  const connections = [
    { start: [0, 0, 0] as [number, number, number], end: [2, 0.5, 0] as [number, number, number] },
    { start: [0, 0, 0] as [number, number, number], end: [-1.5, -1, 1] as [number, number, number] },
    { start: [0, 0, 0] as [number, number, number], end: [1, -1.5, -1] as [number, number, number] },
    { start: [0, 0, 0] as [number, number, number], end: [-1.5, 1, -0.5] as [number, number, number] },
  ];

  return (
    <group ref={groupRef}>
      {/* Central data processing hub */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
        <Sphere ref={dataNodeRef} args={[0.8, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color="#2563eb" 
            metalness={0.9} 
            roughness={0.1}
            emissive="#1e40af"
            emissiveIntensity={0.3}
          />
        </Sphere>
      </Float>

      {/* Industrial pipes/processes */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <Cylinder ref={pipeRef1} args={[0.15, 0.15, 3, 16]} position={[2, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#ea580c" metalness={0.95} roughness={0.05} />
        </Cylinder>
      </Float>

      <Float speed={1.7} rotationIntensity={0.2} floatIntensity={0.3}>
        <Cylinder ref={pipeRef2} args={[0.12, 0.12, 2.5, 16]} position={[-1.5, -1, 1]} rotation={[Math.PI / 4, 0, Math.PI / 3]}>
          <meshStandardMaterial color="#0891b2" metalness={0.95} roughness={0.05} />
        </Cylinder>
      </Float>

      {/* Process nodes - representing automation points */}
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.4}>
        <Box args={[0.5, 0.5, 0.5]} position={[1, -1.5, -1]}>
          <meshStandardMaterial 
            color="#6366f1" 
            metalness={0.8} 
            roughness={0.2}
            emissive="#4f46e5"
            emissiveIntensity={0.2}
          />
        </Box>
      </Float>

      <Float speed={2.1} rotationIntensity={0.3} floatIntensity={0.3}>
        <Box args={[0.4, 0.4, 0.4]} position={[-1.5, 1, -0.5]}>
          <meshStandardMaterial 
            color="#8b5cf6" 
            metalness={0.85} 
            roughness={0.15}
            emissive="#7c3aed"
            emissiveIntensity={0.2}
          />
        </Box>
      </Float>

      {/* Data connection lines */}
      {connections.map((connection, index) => (
        <Line
          key={index}
          points={[connection.start, connection.end]}
          color="#60a5fa"
          lineWidth={2}
          transparent
          opacity={0.4}
        />
      ))}

      {/* Orbital rings representing process cycles */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.04, 16, 100]} />
        <meshStandardMaterial 
          color="#94a3b8" 
          metalness={0.9} 
          roughness={0.1} 
          transparent 
          opacity={0.3}
          emissive="#64748b"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      <mesh rotation={[0, Math.PI / 2, Math.PI / 4]}>
        <torusGeometry args={[2.7, 0.04, 16, 100]} />
        <meshStandardMaterial 
          color="#64748b" 
          metalness={0.9} 
          roughness={0.1} 
          transparent 
          opacity={0.25}
          emissive="#475569"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Additional pipeline segments */}
      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.2}>
        <Cylinder args={[0.1, 0.1, 2, 16]} position={[0, 1.5, 1.5]} rotation={[Math.PI / 6, 0, 0]}>
          <meshStandardMaterial color="#f97316" metalness={0.9} roughness={0.1} />
        </Cylinder>
      </Float>
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
        <DataParticles />
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
