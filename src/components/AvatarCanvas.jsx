import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AvatarScene = () => {
    const sphereRef = useRef();

    useFrame((state) => {
        if (sphereRef.current) {
            // Gentle floating animation
            sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
            // Rotation
            sphereRef.current.rotation.y += 0.005;
        }
    });

    return (
        <group>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="cyan" />

            {/* Cyber Sphere Placeholder */}
            <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.2}>
                <MeshDistortMaterial
                    color="#4db5ff"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    wireframe={true} // Tech look
                />
            </Sphere>
        </group>
    );
};

const AvatarCanvas = () => {
    return (
        <div style={{ width: '100%', height: '500px', cursor: 'grab' }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <AvatarScene />
                <OrbitControls enableZoom={false} autoRotate={false} />
            </Canvas>
        </div>
    );
};

export default AvatarCanvas;
