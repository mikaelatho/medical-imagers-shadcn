import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ------RENDERER------
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);

// ------SCENE------
const scene = new THREE.Scene();

// ------CAMERA------
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(4, 5, 11);

// ------CONTROLS------
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.minAzimuthAngle = -Infinity;
controls.maxAzimuthAngle = Infinity;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

// ------LIGHTS------
const spotLight = new THREE.SpotLight(0xffffff, 500, 100, 0.38, 1);
spotLight.position.set(0, 25, 0);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
scene.add(spotLight);

const leftLight = new THREE.RectAreaLight( 0xffffff, 1, 10, 10 );
leftLight.position.set( 5, 5, 0 );
leftLight.lookAt( 0, 0, 0 );
scene.add( leftLight )

const rightLight = new THREE.RectAreaLight( 0xffffff, 1, 10, 10 );
rightLight.position.set( -5, 5, 0 );
rightLight.lookAt( 0, 0, 0 );
scene.add( rightLight )

const backLight = new THREE.RectAreaLight( 0xffffff, 1, 10, 10 );
backLight.position.set( 0, 5, -5 );
backLight.lookAt( 0, 0, 0 );
scene.add( backLight )

const frontLight = new THREE.RectAreaLight( 0xffffff, 1, 10, 10 );
frontLight.position.set( 0, 5, 5 );
frontLight.lookAt( 0, 0, 0 );
scene.add( frontLight )

// ------MODEL------
let mesh = null;
const loader = new GLTFLoader();

function loadModel(path){
 
loader.load(path, (gltf) => {
  console.log('loading model');

if(mesh){

  mesh.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
}

mesh = gltf.scene;

  mesh.traverse((child) => {
    scene.remove(mesh);
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  mesh.position.set(0, 4.00, -1);
  scene.add(mesh);

  // document.getElementById('progress-container').style.display = 'none';
});
}

// ------ACCESSORS------
export default loadModel;
loadModel('/explore-assets/models/standard/standard_scene.gltf');

// ------WINDOW------
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ------UPDATE AND RENDER------
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
