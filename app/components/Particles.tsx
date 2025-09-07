'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Particles({
  particleCount = 200,
  particleSpread = 15,
  speed = 0.2,
  particleColors = ['#111827', '#060010'],
  alphaParticles = true,
  particleBaseSize = 100,
  cameraDistance = 20,
}) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // 🎨 Geometry
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const color = new THREE.Color();

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * particleSpread * 2;
      const y = (Math.random() - 0.5) * particleSpread * 2;
      const z = (Math.random() - 0.5) * particleSpread * 2;
      positions.push(x, y, z);

      const chosenColor = particleColors[Math.floor(Math.random() * particleColors.length)];
      color.set(chosenColor);
      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    // 🎇 Create a circular texture for particles
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, 'white');
    gradient.addColorStop(0.5, 'rgba(255,255,255,0.6)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);

    // 🌌 Circle particle material
    const material = new THREE.PointsMaterial({
      size: particleBaseSize / 1000,
      vertexColors: true,
      transparent: true,
      opacity: alphaParticles ? 0.9 : 1,
      map: texture,
      alphaTest: 0.01,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = cameraDistance;

    // 🎥 Animate
    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.001 * speed;
      particles.rotation.x += 0.0005 * speed;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, [particleCount, particleSpread, speed, particleColors, alphaParticles, particleBaseSize, cameraDistance]);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />;
}
