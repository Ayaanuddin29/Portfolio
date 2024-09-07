import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { BrowserRouter } from "react-router-dom"
import {About,Contact,Hero,Navbar,Works,StarsCanvas, Tech, Feedbacks} from './components'
import Stars from "./components/canvas/Stars"
import useWebGLContext from './useWebGLContext';
function App() {
  const canvasRef = useRef();
  useWebGLContext('myCanvas');

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const positions = new Float32Array([
      // Your vertex positions here
    ]);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    if (checkForNaN(geometry)) {
      console.error('Geometry contains NaN values');
      return;
    }

    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
    };
  }, []);
  // useWebGLContext('myCanvas');
  return (
    <div>
      <canvas className="mt-[-100px]" id="myCanvas" ref={canvasRef}></canvas>
     <BrowserRouter>
     <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
     <About/>
      <Tech/>
     <Works/>
      <div className="relative z-0">
            <Contact/>
            <Stars/>
      </div>
      </div>
     </BrowserRouter>
    </div>
  )
}
const checkForNaN = (geometry) => {
  const positions = geometry.attributes.position.array;
  for (let i = 0; i < positions.length; i++) {
    if (isNaN(positions[i])) {
      console.error('NaN value found in geometry data at index', i);
      return true;
    }
  }
  return false;
};

export default App
