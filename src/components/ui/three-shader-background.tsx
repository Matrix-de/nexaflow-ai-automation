import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeShaderBackgroundProps {
  className?: string;
}

const ThreeShaderBackground: React.FC<ThreeShaderBackgroundProps> = ({ 
  className = "" 
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Simple three.js scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(400, 300);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Simple animated geometry
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x4338ca, 
      transparent: true, 
      opacity: 0.1 
    });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 1;

    const animate = () => {
      requestAnimationFrame(animate);
      plane.rotation.z += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={className} />;
};

export default ThreeShaderBackground;