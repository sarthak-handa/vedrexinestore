'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box, Octahedron, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingOrb({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    meshRef.current.rotation.y += 0.008;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function RotatingTorus({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * 0.5;
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={ref} position={position}>
        <torusGeometry args={[1.2, 0.3, 16, 64]} />
        <meshStandardMaterial
          color="#f59e0b"
          metalness={0.9}
          roughness={0.1}
          emissive="#b45309"
          emissiveIntensity={0.3}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  const particleCount = 300;

  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    
    const gold = Math.random();
    colors[i * 3] = 0.96 * gold;
    colors[i * 3 + 1] = 0.62 * gold;
    colors[i * 3 + 2] = 0.04 * gold;
  }

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.elapsedTime * 0.02;
    points.current.rotation.x = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.8} />
    </points>
  );
}

function CenterMesh() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref} scale={1.5}>
        <octahedronGeometry args={[1.2, 0]} />
        <MeshWobbleMaterial
          color="#f59e0b"
          factor={0.2}
          speed={1.5}
          metalness={1}
          roughness={0.1}
          emissive="#78350f"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={2} color="#f59e0b" />
          <pointLight position={[-5, -5, 5]} intensity={1} color="#b45309" />
          <pointLight position={[0, 0, 3]} intensity={1.5} color="#fcd34d" />

          <ParticleField />

          <FloatingOrb position={[-3.5, 1.5, -2]} color="#f59e0b" scale={0.8} />
          <FloatingOrb position={[3.5, -1.5, -1]} color="#b45309" scale={0.6} />
          <FloatingOrb position={[-2, -2, -3]} color="#fbbf24" scale={0.4} />

          <RotatingTorus position={[2.5, 2, -1]} />
          
          <CenterMesh />

          <mesh position={[0, 0, -5]} rotation={[0.2, 0.3, 0]}>
            <torusGeometry args={[5, 0.05, 8, 64]} />
            <meshStandardMaterial color="#f59e0b" metalness={1} roughness={0} transparent opacity={0.15} />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
