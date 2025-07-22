import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const RotatingRing = () => {
  const ringRef = useRef<Mesh>(null);
  const hexagonRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x += 0.01;
      ringRef.current.rotation.y += 0.01;
    }
    if (hexagonRef.current) {
      hexagonRef.current.rotation.z += 0.005;
    }
  });

  return (
    <>
      {/* Transparent Hexagon */}
      <mesh ref={hexagonRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[2, 2, 0.1, 6]} />
        <meshBasicMaterial 
          color="#00ff88" 
          transparent 
          opacity={0.2} 
          wireframe={true}
        />
      </mesh>

      {/* Rotating Ring */}
      <mesh ref={ringRef} position={[0, 0, 0]}>
        <torusGeometry args={[1.5, 0.3, 16, 100]} />
        <meshBasicMaterial 
          color="#00ff88" 
          transparent 
          opacity={0.8}
        />
      </mesh>

      {/* Additional small rings for complexity */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1, 0.1, 8, 50]} />
        <meshBasicMaterial 
          color="#00ffaa" 
          transparent 
          opacity={0.4}
          wireframe={true}
        />
      </mesh>
    </>
  );
};

export const ThreeDScene = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingRing />
      </Canvas>
    </div>
  );
};