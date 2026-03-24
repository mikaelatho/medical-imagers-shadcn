import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export function navigator() {

// ------REFERENCES------
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const loadModelRef = useRef<((path: string) => void) | null>(null);

  useEffect(() => {
    if (!viewerRef.current) {
      return;
    }

    // ------RENDERER------
    const viewer = viewerRef.current;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // ------SCENE------
    const scene = new THREE.Scene();

    // ------CAMERA------
    const camera = new THREE.PerspectiveCamera(45, 1, 1, 1000);
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

    const leftLight = new THREE.RectAreaLight(0xffffff, 1, 10, 10);
    leftLight.position.set(5, 5, 0);
    leftLight.lookAt(0, 0, 0);
    scene.add(leftLight);

    const rightLight = new THREE.RectAreaLight(0xffffff, 1, 10, 10);
    rightLight.position.set(-5, 5, 0);
    rightLight.lookAt(0, 0, 0);
    scene.add(rightLight);

    const backLight = new THREE.RectAreaLight(0xffffff, 1, 10, 10);
    backLight.position.set(0, 5, -5);
    backLight.lookAt(0, 0, 0);
    scene.add(backLight);

    const frontLight = new THREE.RectAreaLight(0xffffff, 1, 10, 10);
    frontLight.position.set(0, 5, 5);
    frontLight.lookAt(0, 0, 0);
    scene.add(frontLight);

    // ------LOADER------
    const loader = new GLTFLoader();
    let mesh: THREE.Group | null = null;

    // ------RESIZE------
    const resize = () => {
      const width = viewer.clientWidth;
      const height = viewer.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    // ------MODEL------
    const loadModel = (path: string) => {
      loader.load(
        path,
        (gltf: { scene: THREE.Group }) => {
          if (mesh) {
            scene.remove(mesh);
          }

          mesh = gltf.scene;
          mesh.traverse((child: THREE.Object3D) => {
            if (child instanceof THREE.Mesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          mesh.position.set(0, 1.0, -1);
          scene.add(mesh);
        },
        undefined,
        (error: unknown) => {
          console.error(error);
        }
      );
    };

    viewer.appendChild(renderer.domElement);
    resize();
    window.addEventListener("resize", resize);

    // ------ACCESSORS------
    loadModelRef.current = loadModel;
    loadModel("/explore-assets/models/standard/standard_scene.gltf");

    // ------UPDATE AND RENDER------
    let animationFrame = 0;
    const animate = () => {
      animationFrame = window.requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // ------EXPORT------
    return () => {
      window.removeEventListener("resize", resize);
      loadModelRef.current = null;
      window.cancelAnimationFrame(animationFrame);
      controls.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  const loadModel = (path: string) => {
    loadModelRef.current?.(path);
  };

  return { viewerRef, loadModel };
}