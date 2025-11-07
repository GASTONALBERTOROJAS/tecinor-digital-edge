import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line, Sphere } from "@react-three/drei";
import * as THREE from "three";

// Data network visualization
const DataNetwork = () => {
  const groupRef = useRef<THREE.Group>(null);
  const nodeRefs = useRef<THREE.Mesh[]>([]);

  // Generate data nodes in 3D space
  const nodes = useMemo(() => {
    const nodePositions = [];
    const radius = 3;
    for (let i = 0; i < 12; i++) {
      const theta = (i / 12) * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      nodePositions.push({ position: [x, y, z] as [number, number, number], size: 0.1 + Math.random() * 0.15 });
    }
    return nodePositions;
  }, []);

  // Generate connections between nearby nodes
  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.sqrt(
          Math.pow(nodes[i].position[0] - nodes[j].position[0], 2) +
          Math.pow(nodes[i].position[1] - nodes[j].position[1], 2) +
          Math.pow(nodes[i].position[2] - nodes[j].position[2], 2)
        );
        if (dist < 3.5) {
          lines.push({
            start: nodes[i].position,
            end: nodes[j].position,
          });
        }
      }
    }
    return lines;
  }, [nodes]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }

    // Animate node sizes (data pulses)
    nodeRefs.current.forEach((node, i) => {
      if (node) {
        const pulse = Math.sin(state.clock.elapsedTime * 2 + i * 0.5) * 0.15 + 1;
        node.scale.setScalar(pulse);
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Data connections */}
      {connections.map((connection, index) => (
        <Line
          key={`connection-${index}`}
          points={[connection.start, connection.end]}
          color="#60a5fa"
          lineWidth={1.5}
          transparent
          opacity={0.25}
        />
      ))}

      {/* Data nodes */}
      {nodes.map((node, index) => (
        <Sphere
          key={`node-${index}`}
          ref={(el) => {
            if (el) nodeRefs.current[index] = el;
          }}
          args={[node.size, 16, 16]}
          position={node.position}
        >
          <meshStandardMaterial
            color={index % 3 === 0 ? "#3b82f6" : index % 3 === 1 ? "#8b5cf6" : "#06b6d4"}
            metalness={0.8}
            roughness={0.2}
            emissive={index % 3 === 0 ? "#2563eb" : index % 3 === 1 ? "#7c3aed" : "#0891b2"}
            emissiveIntensity={0.5}
          />
        </Sphere>
      ))}
    </group>
  );
};

// Flowing data particles
const DataParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const velocities = useRef<Float32Array>();

  const { positions, colors } = useMemo(() => {
    const posArray = [];
    const colArray = [];
    const velArray = [];
    
    for (let i = 0; i < 200; i++) {
      // Random position in a sphere
      const radius = 2 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      posArray.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );

      // Random velocities
      velArray.push(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      );

      // Color variation (blue/cyan/purple data)
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colArray.push(0.23, 0.51, 0.96); // Blue
      } else if (colorChoice < 0.66) {
        colArray.push(0.38, 0.71, 0.83); // Cyan
      } else {
        colArray.push(0.54, 0.36, 0.96); // Purple
      }
    }
    
    velocities.current = new Float32Array(velArray);
    return {
      positions: new Float32Array(posArray),
      colors: new Float32Array(colArray)
    };
  }, []);

  useFrame(() => {
    if (particlesRef.current && velocities.current) {
      const pos = particlesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < pos.length; i += 3) {
        pos[i] += velocities.current[i];
        pos[i + 1] += velocities.current[i + 1];
        pos[i + 2] += velocities.current[i + 2];

        // Reset if too far
        const dist = Math.sqrt(pos[i] ** 2 + pos[i + 1] ** 2 + pos[i + 2] ** 2);
        if (dist > 5) {
          const radius = 2;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos((Math.random() * 2) - 1);
          pos[i] = radius * Math.sin(phi) * Math.cos(theta);
          pos[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
          pos[i + 2] = radius * Math.cos(phi);
        }
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.08} vertexColors transparent opacity={0.7} />
    </points>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-70 lg:opacity-90">
      <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#60a5fa" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
        <DataNetwork />
        <DataParticles />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
};

export default Hero3D;
