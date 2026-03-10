"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Explore() {
  useEffect(() => {
    import("./local-components/navigator.js")
      .catch((err) => console.error("Failed to load navigator:", err));
  }, []);


  return (

<main className="min-h-screen flex flex-col items-center justify-start">
<div className="text-left">

{/* ----------HEADER---------- */}

      <div id="heading" >
        <h1 className="text-4xl sm:text-5xl font-bold font-source-serif-4 text-black-700 my-5"> Explore Brain MRI Visualizations</h1>
        <p className="text-wrap break-words sm:text-pretty">
            In the following sections, you can view, interact with, and discover more about MRIs.
        </p>
      </div>

{/* ----------SUBTITLE---------- */}
        <div>
          <h2 className="text-4xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left">Interactive MRI Viewer</h2>
          <p></p>
        </div>

<div className="flex gap-4">

    <Button variant="explore"> Volume Render </Button> 
    <Button variant="explore">Low Contrast </Button>

</div>
</div>

  <div id="float-container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: ' 0 auto', width: '25%'}}>
  
  <div id="float-child" style={{flex: '1', padding: '100%'}}>
    <div>NAVIGATOR.JS HERE  currently at bottom of page</div>
  </div>
  
  <div id="float-child" style={{flex: '1', border: '2px solid black', borderRadius: '10px', padding: '10%', marginRight: '20px'}}>
    <Button variant="secondary"> Exploration Guide </Button> 
  <div id="right">
        
    <h3 className="text-2xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left underline">Parts of the Brain</h3>


              <Button variant="explore">Frontal Lobe </Button> 
              <Button variant="explore">Parietal Lobe </Button>
              <Button variant="explore">Occipital Lobe </Button>
              <Button variant="explore">Temporal Lobe </Button>
              <Button variant="explore">Cerebellum </Button>
              <Button variant="explore">Spinal Cord </Button>

      <br/>
      <h3 className="text-2xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left underline">Types of Diseases</h3>
            
            <Button variant="explore"> Glioblastoma </Button>
            <Button variant="explore"> Glioma </Button>
            <Button variant="explore"> Metastatic Disease </Button>

    </div>
  </div>
  
</div>

<br/>
<div  style={{background: '#E7E7E7', width: '100%', height: '300px'}}></div>

{/* WALK THROUGH */}

<div className="text-left" style={{padding: '10%'}}>

<h3 className="text-2xl sm:text-3xl font-bold font-source-serif-4 text-black-700 my-5 text-left"> 1. Start With the Anatomical Planes </h3>
<p> MRI scans are shown in different views (axial, sagittal, or coronal). 
        Axial view shows upper and lower planes, 
        sagittal view shows the scan's left and right planes, 
        and axial view shows the scan's front and back planes.
        Take a moment to orient yourself before looking at details. 
</p>
<br/>

    <div className="flex gap-4"> 
        <img src={'local-assets/images/CoronalAnterior_Slice.png'} alt="Coronal Anterior Slice"/>
        <img src={'local-assets/images/LeftSagittal_Slice.png'} alt="Left Sagittal Slice"/>
        <img src={'local-assets/images/UpperAxial_Slice.png'} alt="Upper  Axial Slice"/>
        
    </div>

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