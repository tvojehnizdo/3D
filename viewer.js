import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.158.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.158.0/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, controls, currentModel;
const container = document.getElementById('canvas-container');

init();
animate();

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xe0e0e0);

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / (window.innerHeight * 0.9), 0.1, 1000);
  camera.position.set(4, 3, 5);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight * 0.9);
  container.appendChild(renderer.domElement);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 10, 7.5);
  scene.add(light);
  scene.add(new THREE.AmbientLight(0xffffff, 0.6));

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  window.addEventListener('resize', onWindowResize, false);

  document.getElementById('roofColor').addEventListener('change', updateRoofColor);
  document.getElementById('houseType').addEventListener('change', loadModel);

  loadModel(); // initial load
}

function onWindowResize() {
  camera.aspect = window.innerWidth / (window.innerHeight * 0.9);
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight * 0.9);
}

function loadModel() {
  const loader = new GLTFLoader();
  const modelPath = './models/' + document.getElementById('houseType').value;

  if (currentModel) {
    scene.remove(currentModel);
  }

  loader.load(modelPath, function (gltf) {
    currentModel = gltf.scene;
    scene.add(currentModel);
    updateRoofColor(); // apply initial roof color
  });
}

function updateRoofColor() {
  const color = document.getElementById('roofColor').value;
  if (!currentModel) return;

  currentModel.traverse((child) => {
    if (child.isMesh && child.name.toLowerCase().includes('roof')) {
      child.material.color.set(color);
    }
  });
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}