"use client";

import { navigator } from "./navigator";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { contour } from "./contour";
import Link from "next/link";

export default function Explore() {
  const { viewerRef, loadModel, setOpacity } = navigator();
  const {contourImages, updateContourImages} = contour();

  return (
    <main className="min-h-screen flex flex-col items-center justify-start" style={{scrollBehavior: "smooth"}}>
      <div style={{marginRight: "43%"}}>
        
        {/* ----------HEADER---------- */}
        
      <div>
        <br/> <br/>
          <h1 className="text-4xl sm:text-5xl font-bold font-source-serif-4 text-blue-700 my-5 text-left">
            Explore Brain MRI Visualizations
          </h1>
          <p className="text-wrap break-words sm:text-pretty">
            In the following sections, you can view, interact with, and discover more about MRIs.
          </p>
        </div>

        {/* ----------SUBTITLE---------- */}
        <div className="flex gap-4">
          <h2 className="text-4xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left">
            Interactive MRI Viewer
          </h2>
          <Button variant="explore" style={{marginBottom: "5%", marginTop: "22px"}} onClick={() => window.location.href="#explore"}>Exploration Guide</Button>
          <p></p>
        </div>

        {/* ----------FILTER BUTTONS---------- */}
        <div className="flex gap-4">
          <p> View type: </p>
          <Button variant="explore" style={{marginBottom: "5%"}} onClick={() => setOpacity(1)}>Volume Render</Button>
          <Button variant="explore" style={{marginBottom: "5%"}} onClick={() => setOpacity(0.15)}>Low Contrast</Button>
          <br/>
        </div>
    </div>

      <div
        id="float-container"
        style={{ display: "flex", justifyContent: "center", alignItems: "stretch", margin: "0 auto", width: "90%", gap: "20px" }}
      >
        {/* ----------NAVIGATOR CONTAINER---------- */}
        <div
          id="float-child"
          style={{ flex: "10", minHeight: "460px", overflow: "hidden" }}
        >
          <div style={{position: "relative", width: "100%", height: "75%", border: "5px solid black", borderRadius: "10px", boxSizing: "border-box", overflow: "hidden"}}>
            <div ref={viewerRef} style={{ position: "absolute", inset: 0 }} />
            <Button 
              variant="explore" 
              onClick={() => { loadModel("/explore-assets/models/standard/standard_scene.gltf"); updateContourImages("standard"); }}
              style={{marginBottom: "5%", position: "absolute", top: "0", left: "0"}}>
                Back to Default View
            </Button>
          </div>

          <div className="flex gap-4" style={{paddingTop: "5px"}}>
          <img
            src={contourImages.anterior}
            alt="Coronal Anterior Slice"
            style={{ width: "370px", height: "185px", borderLeft: "100px", borderRight: "100px", borderStyle: "solid", borderColor: "#0e0e78", borderRadius: "10px", marginRight: "9px"}}
          />
          <img
            src={contourImages.sagittal}
            alt="Left Sagittal Slice"
            style={{ width: "370px", height: "185px", borderLeft: "100px", borderRight: "100px", borderStyle: "solid", borderColor: "#0e0e78", borderRadius: "10px", marginRight: "9px"}}
          />
          <img
            src={contourImages.axial}
            alt="Upper Axial Slice"
            style={{ width: "370px", height: "185px", borderLeft: "100px", borderRight: "100px", borderStyle: "solid", borderColor: "#0e0e78", borderRadius: "10px", marginRight: "9px"}}
          />
        </div>
        </div>

        {/* ----------BUTTON CONTAINER---------- */}
        <div
          id="float-child"
          style={{ flex: "1", borderWidth: "2px solid black", borderRadius: "10px", padding: "5%", marginRight: "20px", width: "25%"}}
        >
    
          <div id="right">
            <h3 className="text-2xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left underline">
              Parts of the Brain
            </h3>

            <Button 
                variant="explore" 
                onClick={() => { loadModel("/explore-assets/models/standard/standard_scene.gltf"); updateContourImages("standard"); }}
                style={{marginBottom: "5%"}}>
                  Frontal Lobe
            </Button>

            <Button 
              variant="explore"
              onClick={() => { loadModel("/explore-assets/models/standard/standard_scene.gltf"); updateContourImages("standard"); }}
              style={{marginBottom: "5%"}}>
                Parietal Lobe
            </Button>

            <Button 
              variant="explore"
              onClick={() => { loadModel("/explore-assets/models/standard/standard_scene.gltf"); updateContourImages("standard"); }}
              style={{marginBottom: "5%"}}>
                Occipital Lobe
              </Button>

            <Button 
              variant="explore"
              onClick={() => { loadModel("/explore-assets/models/standard/standard_scene.gltf"); updateContourImages("standard"); }}
              style={{marginBottom: "5%"}}>
                Temporal Lobe
            </Button>
            
            <Button 
              variant="explore"
              onClick={() => { loadModel("/explore-assets/models/standard/standard_scene.gltf"); updateContourImages("standard"); }}
              style={{marginBottom: "5%"}}>
                Cerebellum
              </Button>
            
            <Button 
            variant="explore"
            onClick={() => { loadModel("/explore-assets/models/standard/standard_scene.gltf"); updateContourImages("standard"); }}
            style={{marginBottom: "5%"}}>
              Spinal Cord
            </Button>

            <br />
            <h3 className="text-2xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left underline">
              Types of Diseases
            </h3>

            <Button 
              variant="explore" 
              onClick={() => { loadModel("/explore-assets/models/glioblastoma/glioblastoma.gltf"); updateContourImages("glioblastoma"); }}
              style={{marginBottom: "5%"}}
              >
              Glioblastoma
            </Button>

            <Button 
              variant="explore"
              onClick={() => { loadModel("/explore-assets/models/glioma2/glioma2.gltf"); updateContourImages("glioma"); }}
              style={{marginBottom: "5%"}}>
                Glioma
            </Button>

            <Button 
              variant="explore"
              onClick={() => { loadModel("/explore-assets/models/meta2/meta2.gltf"); updateContourImages("metastatic"); }}
              style={{marginBottom: "5%"}}>
                Metastatic Disease
            </Button>

          </div>
        </div>
      </div>

      {/* ----------INFO LINKS---------- */}
      <br />

      <div className="px-6 sm:px-20 pb-20 items-center">
        <h2 className="text-center text-2xl py-5 sm:text-3xl font-bold font-source-serif-4 text-blue-700 my-5">
          <br/><br/>
          Want to learn more?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            {/* ----------CARD 1---------- */}
            <Card className="relative mx-auto w-full max-w-sm pt-0">
              <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
              <img
                src="/explore-assets/images/info/info1.jpg"
                alt="6-sided MRI visualization"
                className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
              />
              <CardFooter>
                <Link href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4632105/">
                <Button className="w-full">Advanced MRI Imaging</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div>
            {/* ----------CARD 2---------- */}
            <Card className="relative mx-auto w-full max-w-sm pt-0">
              <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
              <img
                src="/explore-assets/images/info/info2.png"
                alt="6-sided MRI visualization"
                className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
              />
              <CardFooter>
                <Link href="https://www.cancerimagingarchive.net/browse-collections/">
                <Button className="w-full">Data Sources</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div>
            {/* ----------CARD 3---------- */}
            <Card className="relative mx-auto w-full max-w-sm pt-0">
              <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
              <img
                src="/explore-assets/images/info/info3.jpg"
                alt="6-sided MRI visualization"
                className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
              />
              <CardFooter>
                <Link href="../games/page.tsx">
                <Button className="w-full">Check your Knowledge</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      {/* ----------WALK THROUGH---------- */}

          <div style={{marginLeft: "15%"}} id="explore">
            <br/><br/><br/>
          <h2 className="text-4xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left">
              How to Use the Interactive Viewer
          </h2>

      <div style={{display: "grid", gridTemplateColumns: "50% 50%", gap: "30px", alignItems: "start", marginLeft: "start"}}>

      {/* ----------LEFT COLUMN---------- */}

       {/* ---TITLE---*/}

          {/* ---STEP ONE---*/}
          <div>
          <h3 className="text-2xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left">
              1. Start With the Anatomical Planes
          </h3>
          <p>
            MRI scans are shown in different views (axial, sagittal, or coronal). Axial view shows upper and lower planes,
            sagittal view shows the scan's left and right planes, and axial view shows the scan's front and back planes. Take
            a moment to orient yourself before looking at details.
        </p>
        <br />
        <br />
        </div>

         {/* ---IMAGE ONE---*/}
        <div>
        <img
            src={"/explore-assets/images/walkthrough/wt1.png"}
            alt="Upper Axial Slice"
             style={{ width: "370px", height: "200px", borderLeft: "5px", borderRight: "5px", borderStyle: "solid", borderColor: "black", borderRadius: "10px", marginRight: "9px", marginTop: "40px"}}
          />
        </div>

        <div>
         {/* ---STEP TWO---*/}
        <h3 className="text-2xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left">
          2. Observe the Overall Structure
        </h3>
        <p>Focus on the big picture first. Notice the shape and volume before jumping into details.</p>
        <br />
        </div>

        {/* ---IMAGE TWO---*/}
        <div>
        <img
            src={"/explore-assets/images/walkthrough/wt2.png"}
            alt="Upper Axial Slice"
            style={{ width: "370px", height: "200px", borderLeft: "5px", borderRight: "5px", borderStyle: "solid", borderColor: "black", borderRadius: "10px", marginRight: "9px", marginTop: "40px"}}
          />
        </div>

        <div>
         {/* ---STEP THREE---*/}
        <h3 className="text-2xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left">
          3. Identify Key Brain Regions
        </h3>
        <p>
          Once you're comfortable, start recognizing major sections of the brain: the frontal lobe, parietal lobe, occipital
          lobe, temporal lobe, cerebellum, and spinal cord. The buttons in the interactive viewer can help you here.
        </p>
        <br />
        </div>

          {/* ---IMAGE THREE---*/}
        <div>
        <img
            src={"/explore-assets/images/walkthrough/wt2.png"}
            alt="Upper Axial Slice"
            style={{ width: "370px", height: "200px", borderLeft: "5px", borderRight: "5px", borderStyle: "solid", borderColor: "black", borderRadius: "10px", marginRight: "9px", marginTop: "40px"}}
          />
        </div>

         {/* ---STEP FOUR---*/}
         <div>
        <h3 className="text-2xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left">
          4. Understanding Scan Contrasts
        </h3>
        <p>
          MRI scans are shown in different views (axial, sagittal, or coronal). Certain matter, such as tumors appears on
          scans with brighter tones. This helps highlight differences between natural brain structures and areas of interest.
          In the contour view (three images at the bottom of the screen), areas of interest are typically a bright, light blue
          or orange.
        </p>
        <br />
        </div>

        {/* ---IMAGE FOUR---*/}
        <div>
        <img
            src={"/explore-assets/images/walkthrough/wt4.png"}
            alt="Upper Axial Slice"
            style={{ width: "370px", height: "200px", borderLeft: "5px", borderRight: "5px", borderStyle: "solid", borderColor: "black", borderRadius: "10px", marginRight: "9px", marginTop: "40px"}}
          />
        </div>

         {/* ---STEP FIVE---*/}
         <div>
        <h3 className="text-2xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left">
          5. Explore at Your Own Pace
        </h3>
        <p>
          MRI scans are shown in different views (axial, sagittal, or coronal). Educational navigation takes practice. Zoom in,
          switch views (volume render and low contrast), and revisit sections as needed. There is no "right speed." Learning
          visually is the main goal.
        </p>
        <br />
        </div>

                {/* ---IMAGE FIVE---*/}
        <div>
        <img
            src={"/explore-assets/images/walkthrough/wt5.png"}
            alt="Upper Axial Slice"
            style={{ width: "370px", height: "200px", borderWidth: "5px", borderStyle: "solid", borderColor: "#F5F5F5", borderRadius: "10px", marginRight: "9px", marginTop: "40px"}}
          />
        </div>
      </div>
        <br/><br/><br/>
        </div>
    </main>
  );
}