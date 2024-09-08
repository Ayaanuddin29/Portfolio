import { BrowserRouter } from "react-router-dom"
import {About,Contact,Hero,Navbar,Works,StarsCanvas, Tech, Feedbacks} from './components'
import Stars from "./components/canvas/Stars"
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BufferGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

camera.position.z = 5;

const animate = function () {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();

function App() {

  return (
    <div>
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

export default App
