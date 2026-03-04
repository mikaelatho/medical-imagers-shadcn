import * as THREE from 'three';
import { GLTFLoader } from '../local-libs/GLTFLoader';
import { OrbitControls } from '../local-libs/OrbitControls';

const scene = new THREE.scene;
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const controls = new OrbitControls(camera, renderer.domElemet);
controls.enableDamping = true;

const renderer = new THREE.WebGLRender();
renderer.setSize(window.innerWidth, window.innerHeight);

const loader = new GLTFLoader();

loader.load('../assets/models/standard.glb', function(gltf) {

    scene.add(gltf.scene);

}, undefined, function(error)
{
    console.error(error);
});

document.body.appendChild(rendererd.domElemet);