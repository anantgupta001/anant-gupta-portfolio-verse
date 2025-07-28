import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useEffect, useState } from 'react';
import { Mesh } from 'three';
import { OrbitControls, Environment } from '@react-three/drei';

const Bubble = () => {
  const meshRef = useRef<Mesh>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Listen to mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Floating effect
      const t = state.clock.getElapsedTime();
      meshRef.current.position.y = Math.sin(t) * 0.5;
      // Smoothly interpolate rotation based on mouse
      meshRef.current.rotation.y += ((mouse.x * 0.5) - meshRef.current.rotation.y) * 0.08;
      meshRef.current.rotation.x += ((mouse.y * 0.3) - meshRef.current.rotation.x) * 0.08;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
      <sphereGeometry args={[2.8, 64, 64]} />
      <meshPhysicalMaterial
        color="#ffe066"
        roughness={0.12}
        metalness={0.25}
        transmission={0.92}
        thickness={1.3}
        clearcoat={1}
        clearcoatRoughness={0.08}
        ior={1.15}
        reflectivity={0.45}
        transparent
        emissive="#fff9c4"
        emissiveIntensity={0.12}
      />
    </mesh>
  );
};

export const ThreeDBubble = () => (
  <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 7], fov: 50 }} style={{ background: 'transparent' }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />
      <Bubble />
      <Environment preset="sunset" />
      {/* No OrbitControls for user drag, just mouse hover effect */}
    </Canvas>
  </div>
); 