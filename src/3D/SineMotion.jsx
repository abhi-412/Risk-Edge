import React, { useRef } from 'react';
import * as THREE from 'three';
import img from '../assets/img1.jpeg';
import { useFrame } from '@react-three/fiber';

const SineMotion = () => {
    const texture = new THREE.TextureLoader().load(img);
    const material = new THREE.MeshBasicMaterial({ map: texture, color: 'purple' });
    const meshRef = useRef();

    useFrame((state) => {
        let time = state.clock.getElapsedTime();
        
        // Access the geometry
        const geometry = meshRef.current.geometry;
        const positionAttribute = geometry.attributes.position;

        // Iterate through vertices
        for (let i = 0; i < positionAttribute.count; i++) {
            const x = positionAttribute.getX(i);
            const y = positionAttribute.getY(i);
            const anim1 = Math.sin(x + time * 0.7) * 0.25;
            const anim2 = Math.sin(x * 1 + time * 0.5) * 0.35;
            const anim3 = Math.sin(y * 15 + time * 0.5) * 0.1;
            positionAttribute.setZ(i, anim1 + anim2); // Set the z position based on the sine wave
        }

        positionAttribute.needsUpdate = true; // Inform Three.js that the position attribute needs to be updated
        geometry.computeVertexNormals(); // Recompute normals if necessary
    });

    return (
        <mesh material={material} ref={meshRef} position={[0, -1, window.innerWidth/window.innerHeight]}>
            <planeGeometry args={[14, 8, 15, 9]} />
        </mesh>
    );
};

export default SineMotion;
