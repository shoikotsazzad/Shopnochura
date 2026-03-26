import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

// Floating glowing orb — represents warmth/food/rooftop ambiance
function GlowOrb({ position, color, scale = 1, speed = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed
    meshRef.current.rotation.x = t * 0.2
    meshRef.current.rotation.y = t * 0.3
  })

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          distort={0.35}
          speed={2}
          roughness={0}
          metalness={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  )
}

// Ring / dome shape inspired by the logo's food cloche
function FoodDome() {
  const groupRef = useRef()

  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
  })

  return (
    <Float speed={1.2} floatIntensity={0.6}>
      <group ref={groupRef} position={[0, 0, -2]}>
        {/* Dome top */}
        <mesh position={[0, 0.2, 0]}>
          <sphereGeometry args={[1.4, 48, 24, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial
            color="#2E7D32"
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.5}
          />
        </mesh>
        {/* Plate rim */}
        <mesh position={[0, -0.05, 0]}>
          <torusGeometry args={[1.45, 0.08, 16, 100]} />
          <meshStandardMaterial color="#4C8CE4" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Knob */}
        <mesh position={[0, 1.5, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#4C8CE4" emissive="#4C8CE4" emissiveIntensity={2} />
        </mesh>
      </group>
    </Float>
  )
}

// Particle ring orbiting in background
function ParticleRing() {
  const count = 80
  const positions = new Float32Array(count * 3)

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2
    const radius = 5 + Math.random() * 2
    positions[i * 3] = Math.cos(angle) * radius
    positions[i * 3 + 1] = (Math.random() - 0.5) * 3
    positions[i * 3 + 2] = Math.sin(angle) * radius - 5
  }

  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.08
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#4C8CE4" size={0.06} transparent opacity={0.6} />
    </points>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} color="#4C8CE4" intensity={3} />
      <pointLight position={[-5, -3, 3]} color="#2E7D32" intensity={2} />
      <pointLight position={[0, 0, 4]} color="#4C8CE4" intensity={1.5} />

      {/* Star field */}
      <Stars radius={80} depth={50} count={3000} factor={3} saturation={0.5} fade speed={0.5} />

      {/* Central food dome */}
      <FoodDome />

      {/* Floating orbs — red, green, flame */}
      <GlowOrb position={[-3.5, 1.5, -1]} color="#4C8CE4" scale={0.6} speed={0.8} />
      <GlowOrb position={[3.5, -1, -1.5]} color="#2E7D32" scale={0.5} speed={1.2} />
      <GlowOrb position={[2, 2.5, -2]} color="#4C8CE4" scale={0.35} speed={1.5} />
      <GlowOrb position={[-2, -2, -3]} color="#4C8CE4" scale={0.4} speed={0.6} />

      {/* Orbiting particles */}
      <ParticleRing />
    </Canvas>
  )
}
