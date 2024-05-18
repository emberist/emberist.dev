import { Float, Trail } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Mesh } from "three";

export const Atom = () => {
  const [isHover, setHover] = useState(false);

  useEffect(() => {
    if (isHover) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "auto";
    }
  }, [isHover]);

  return (
    <group scale={0.5} position={[-3, -1, 0]}>
      <Electron position={[0, 0, 0]} speed={5} />

      <Electron
        position={[0, 0, 0]}
        rotation={[0, -Math.PI / 3, -Math.PI / 8]}
        speed={5.5}
      />

      <Electron
        position={[0, 0, 0]}
        rotation={[0, Math.PI / 3, Math.PI / 8]}
        speed={6}
      />

      <Float speed={4} rotationIntensity={1} floatIntensity={3}>
        <mesh
          onPointerLeave={() => setHover(false)}
          onPointerEnter={() => setHover(true)}
        >
          <sphereGeometry args={[0.6, 32]} />

          <meshStandardMaterial color="red" />
        </mesh>
      </Float>
    </group>
  );
};

function Electron({ radius = 2.75, speed = 6, ...props }) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) {
      return;
    }

    const t = state.clock.getElapsedTime() * speed;

    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI,
      0
    );
  });

  return (
    <group {...props}>
      <Trail
        width={2}
        length={15}
        color={new THREE.Color(2, 1, 10)}
        attenuation={(t) => t * t}
      >
        <mesh ref={ref}>
          <sphereGeometry args={[0.2]} />
          <meshBasicMaterial color={[2, 1, 10]} toneMapped={false} />
        </mesh>
      </Trail>
    </group>
  );
}
