import {
  Environment,
  Float,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PerformanceMonitor,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { FC, useLayoutEffect, useState } from "react";
import * as THREE from "three";
import { useViewportSize } from "../hooks/useViewportSize";
import { Atom } from "./Atom";
import { Emberist } from "./Emberist";

const Content: FC<{ debug?: boolean }> = ({ debug }) => {
  const { camera } = useThree();

  const tl = gsap.timeline();

  const { viewportIsSmallOnly } = useViewportSize();

  useLayoutEffect(() => {
    tl.to(camera.position, {
      x: 5,
      y: 10,
      z: viewportIsSmallOnly ? 1 : 5,
      duration: 1.5,
      onUpdate: function () {
        camera.lookAt(new THREE.Vector3(0, 0, 0));
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewportIsSmallOnly]);

  // const animate = () => {
  //   tl.to(camera.position, {
  //     x: -0.5,
  //     y: 12,
  //     z: -0.6,
  //     duration: 5,
  //     onUpdate: function () {
  //       camera.lookAt(new THREE.Vector3(-3, -1, 0));
  //     },
  //   });
  // };

  return (
    <>
      <color attach="background" args={["rgb(10,10,13)"]} />

      <ambientLight intensity={0.6} />

      <pointLight position={[5, 10, 5]} />

      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <Html position={viewportIsSmallOnly ? [1, 0.5, 1] : [0, 0.5, 0]}>
          <Emberist onComplete={() => {}} />

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 2,
                duration: 0.6,
              },
            }}
          >
            <div className="flex gap-2 text-white text-xl">DEV</div>
          </motion.div> */}
        </Html>
      </Float>

      <Atom />

      <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />

        <MeshReflectorMaterial
          mirror={0}
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={50}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.5}
        />
      </mesh>

      <Environment preset="city" />

      {debug && <axesHelper args={[5]} />}

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

export const AppCanvas = () => {
  const [perfSucks, degrade] = useState(false);

  return (
    <Canvas
      shadows
      dpr={[1, perfSucks ? 1.5 : 2]}
      camera={{ position: [5, 10, 5], fov: 26 }}
    >
      <PerformanceMonitor onDecline={() => degrade(true)} />

      <Content />
    </Canvas>
  );
};
