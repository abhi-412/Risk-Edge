import React, { useEffect, useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { ShaderMaterial, InstancedBufferGeometry, BufferAttribute, InstancedBufferAttribute } from 'three';
import glslify from 'glslify';
import * as THREE from 'three';
import { TextureLoader } from 'three';


const Particles = ({ textureUrl }) => {
    const numParticles = 57600; // 320x180
    const geometryRef = useRef();
    const materialRef = useRef();
    const offsets = new Float32Array(numParticles * 3);
    const angles = new Float32Array(numParticles);
    const [texture] = useLoader(TextureLoader, [textureUrl]);

    const shaderVert = `precision highp float;

attribute float pindex;
attribute vec3 position;
attribute vec3 offset;
attribute vec2 uv;
attribute float angle;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

uniform float uTime;
uniform float uRandom;
uniform float uDepth;
uniform float uSize;
uniform vec2 uTextureSize;
uniform sampler2D uTexture;
uniform sampler2D uTouch;

varying vec2 vPUv;
varying vec2 vUv;

#pragma glslify: snoise2 = require(glsl-noise/simplex/2d)

float random(float n) {
	return fract(sin(n) * 43758.5453123);
}

void main() {
	vUv = uv;

	// particle uv
	vec2 puv = offset.xy / uTextureSize;
	vPUv = puv;

	// pixel color
	vec4 colA = texture2D(uTexture, puv);
	float grey = colA.r * 0.21 + colA.g * 0.71 + colA.b * 0.07;

	// displacement
	vec3 displaced = offset;
	// randomise
	displaced.xy += vec2(random(pindex) - 0.5, random(offset.x + pindex) - 0.5) * uRandom;
	float rndz = (random(pindex) + snoise_1_2(vec2(pindex * 0.1, uTime * 0.1)));
	displaced.z += rndz * (random(pindex) * 2.0 * uDepth);
	// center
	displaced.xy -= uTextureSize * 0.5;

	// touch
	float t = texture2D(uTouch, puv).r;
	displaced.z += t * 20.0 * rndz;
	displaced.x += cos(angle) * t * 20.0 * rndz;
	displaced.y += sin(angle) * t * 20.0 * rndz;

	// particle size
	float psize = (snoise_1_2(vec2(uTime, pindex) * 0.5) + 2.0);
	psize *= max(grey, 0.2);
	psize *= uSize;

	// final position
	vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
	mvPosition.xyz += position * psize;
	vec4 finalPosition = projectionMatrix * mvPosition;

	gl_Position = finalPosition;
}`;


    const shaderFrag = `

    precision highp float;
    uniform sampler2D uTexture;
    in vec2 vPUv;
    in vec2 vUv;
    out vec4 fragColor;

    void main() {
        vec4 color = vec4(0.0);
    vec2 uv = vUv;
    vec2 puv = vPUv;

    // Pixel color
    vec4 colA = texture(uTexture, puv);

    // Greyscale
    float grey = colA.r * 0.21 + colA.g * 0.71 + colA.b * 0.07;
    vec4 colB = vec4(grey, grey, grey, 1.0);

    // Circle
    float border = 0.3;
    float radius = 0.5;
    float dist = radius - distance(uv, vec2(0.5));
    float t = smoothstep(0.0, border, dist);

    // Final color
    color = colB;
    color.a = t;

    fragColor = color; // Use out variable instead of gl_FragColor
    }
`;


    console.log(texture);
    

    // Set up instanced geometry and material
    useEffect(() => {
        if (!texture) return;
        console.log("Setting up geometry and material");

        const geometry = new InstancedBufferGeometry();

        // Quad vertices for each particle
        const positions = new Float32Array([
            -0.5, 0.5, 0.0,
            0.5, 0.5, 0.0,
            -0.5, -0.5, 0.0,
            0.5, -0.5, 0.0,
        ]);
        geometry.setAttribute('position', new BufferAttribute(positions, 3));

        // UV mapping for the texture
        const uvs = new Float32Array([
            0.0, 0.0,
            1.0, 0.0,
            0.0, 1.0,
            1.0, 1.0,
        ]);
        geometry.setAttribute('uv', new BufferAttribute(uvs, 2));
        geometry.setIndex(new Uint16Array([0, 2, 1, 2, 3, 1]));

        // Offsets and angles for each instance
        let j = 0;
        for (let i = 0; i < numParticles; i++) {
            offsets[j++] = i % 320; // x-offset for each particle
            offsets[j++] = Math.floor(i / 320); // y-offset for each particle
            offsets[j++] = 0; // z-offset for each particle
            angles[i] = Math.random() * Math.PI;
        }

        geometry.setAttribute('offset', new InstancedBufferAttribute(offsets, 3));
        geometry.setAttribute('angle', new InstancedBufferAttribute(angles, 1));
        geometryRef.current = geometry;

        // Uniforms for the shader material
        const uniforms = {
            uTime: { value: 0 },
            uTexture: { value: texture },
            uRandom: { value: 1.0 },
            uDepth: { value: 2.0 },
            uSize: { value: 0.5 },
        };

        const material = new ShaderMaterial({
            uniforms,
            vertexShader: glslify(shaderVert),
            fragmentShader: glslify(shaderFrag),
            transparent: true,
        });
        materialRef.current = material;

        console.log("Geometry and material are set:", {
            geometry: geometryRef.current,
            material: materialRef.current,
        });
    }, [texture]);

    // Update time uniform on every frame for shader animation
    useFrame(({ clock }) => {
        if (materialRef.current) {
            materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
        }
    });

    return geometryRef.current && materialRef.current ? (
        <instancedMesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[0.1, 0.1, 0.1]} args={[geometryRef.current, materialRef.current, numParticles]}>
            <bufferGeometry attach="geometry" ref={geometryRef} />
            <shaderMaterial attach="material" ref={materialRef} />
        </instancedMesh>
    ) : null;
};

export default Particles;
