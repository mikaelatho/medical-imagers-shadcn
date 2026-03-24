"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";

export default function Explore() {
const viewerRef = useRef<HTMLDivElement | null>(null);
const loadModelRef = useRef<((path: string) => void) | null>(null);

// ------FILE 1------
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

  // ------FILE 2------
  return (

<main className="min-h-screen flex flex-col items-center justify-start">
<div className="text-left">

{/* ----------HEADER---------- */}

      <div id="heading" >
        <h1 className="text-4xl sm:text-5xl font-bold font-source-serif-4 text-blue-700 my-5"> Explore Brain MRI Visualizations</h1>
        <p className="text-wrap break-words sm:text-pretty">
            In the following sections, you can view, interact with, and discover more about MRIs.
        </p>
      </div>

{/* ----------SUBTITLE---------- */}
        <div>
          <h2 className="text-4xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left">Interactive MRI Viewer</h2>
          <p></p>
        </div>

{/* ----------FILTER BUTTONS---------- */}
<div className="flex gap-4">
    <Button variant="explore"> Volume Render </Button> 
    <Button variant="explore">Low Contrast </Button>
</div>

</div>

  <div id="float-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'stretch', margin: '0 auto', width: '90%', gap: '20px'}}>
  
  {/* ----------NAVIGATOR CONTAINER---------- */}
  <div id="float-child" style={{flex: '2', minHeight: '460px', border: '2px solid black', borderRadius: '10px', overflow: 'hidden'}}>
    <div ref={viewerRef} style={{width: '100%', height: '100%'}} />
  </div>
  
  {/* ----------BUTTON CONTAINER---------- */}
  <div id="float-child" style={{flex: '1', border: '2px solid black', borderRadius: '10px', padding: '10%', marginRight: '20px'}}>
    <Button variant="secondary"> Exploration Guide </Button> 
  <div id="right">
        
    <h3 className="text-2xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left underline">Parts of the Brain</h3>

              <Button variant="explore" onClick={() =>loadModel('/explore-assets/models/standard/standard_scene.gltf')}>Frontal Lobe </Button> 
              <Button variant="explore">Parietal Lobe </Button>
              <Button variant="explore">Occipital Lobe </Button>
              <Button variant="explore">Temporal Lobe </Button>
              <Button variant="explore">Cerebellum </Button>
              <Button variant="explore">Spinal Cord </Button>

      <br/>
      <h3 className="text-2xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left underline">Types of Diseases</h3>
            
            <Button variant="explore" onClick={() => loadModel('/explore-assets/models/standard/glioblastoma.gltf')}> Glioblastoma </Button>
            <Button variant="explore"> Glioma </Button>
            <Button variant="explore"> Metastatic Disease </Button>

    </div>
  </div>
  
</div>

{/* ----------INFO LINKS---------- */}
<br/>

        <div className="px-6 sm:px-20 pb-20 items-center">
          <h2 className="text-center text-2xl py-5 sm:text-3xl font-bold font-source-serif-4 text-blue-700 my-5"> Want to learn more? </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>

              {/* ----------CARD 1---------- */}
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
                <img
                  src="/mri2.png"
                  alt="6-sided MRI visualization"
                  className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
                />
                <CardFooter>
                  <Button className="w-full">Advanced MRI Imaging</Button>
                </CardFooter>
              </Card>
            </div>
            <div>

              {/* ----------CARD 2---------- */}
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
                <img
                  src="/mri3.png"
                  alt="6-sided MRI visualization"
                  className="rounded-t-lg relative z-20 aspect-video w-full object-cover  brightness-80 dark:brightness-40"
                />
                <CardFooter>
                  <Button className="w-full">Data Sources </Button>
                </CardFooter>
              </Card>
            </div>
            <div>

               {/* ----------CARD 3---------- */}
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
                <img
                  src="/mri4.png"
                  alt="6-sided MRI visualization"
                  className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
                />
                <CardFooter>
                  <Button className="w-full">Check your Knowledge</Button>
                </CardFooter>
              </Card>

            </div>
          </div>
          </div>

{/* ----------WALK THROUGH---------- */}

<div className="text-left" style={{paddingLeft: '10%', paddingRight: '10%', paddingBottom: '10%'}}>
<h2 className="text-4xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left">How to Use the Interactive Viewer</h2>
<h3 className="text-2xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left"> 1. Start With the Anatomical Planes </h3>
<p> MRI scans are shown in different views (axial, sagittal, or coronal). 
        Axial view shows upper and lower planes, 
        sagittal view shows the scan's left and right planes, 
        and axial view shows the scan's front and back planes.
        Take a moment to orient yourself before looking at details. 
</p>
<br/>

    <div className="flex gap-4"> 
        <img src={'/explore-assets/images/CoronalAnterior_Slice.png'} alt="Coronal Anterior Slice" style={{width: '200px', height: '200px'}}/>
        <img src={'/explore-assets/images/LeftSagittal_Slice.png'} alt="Left Sagittal Slice" style={{width: '200px', height: '200px'}}/>
        <img src={'/explore-assets/images/UpperAxial_Slice.png'} alt="Upper  Axial Slice" style={{width: '200px', height: '200px'}}/>
    </div>

<br/>
  <h3 className="text-2xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left"> 2. Observe the Overall Structure </h3>
<p>
        Focus on the big picture first. Notice the shape and volume before jumping into details. 
</p>
<br/>

  <h3 className="text-2xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left"> 3. Identify Key Brain Regions </h3>
<p> Once you're comfortable, start recognizing major sections of the brain: 
        the frontal lobe, parietal lobe, occipital lobe, temporal lobe, cerebellum, and spinal cord. 
        The buttons in the interactive viewer can help you here. 
</p>
<br/>

  <h3 className="text-2xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left"> 4.  Understanding Scan Contrasts </h3>
<p> MRI scans are shown in different views (axial, sagittal, or coronal). 
        Certain matter, such as tumors appears on scans with brighter tones. 
        This helps highlight differences between natural brain structures and areas of interest.
        In the contour view (three images at the bottom of the screen), 
        areas of interest are typically a bright, light blue or orange. 
  </p>
  <br/>

  <h3 className="text-2xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left"> 5. Explore at Your Own Pace </h3>
<p> 
        MRI scans are shown in different views (axial, sagittal, or coronal). 
        Educational navigation takes practice. Zoom in, switch views (volume render and low contrast), and revisit sections as needed. 
        There is no "right speed." Learning visually is the main goal.
</p>
<br/>

</div>

</main>
  );
}