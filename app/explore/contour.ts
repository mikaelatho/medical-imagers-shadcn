export function contour () {

const  imgBtn = document.getElementById("imgBtn") as HTMLButtonElement;
const contourAnt = document.getElementById("contourAnterior") as HTMLImageElement;
const contourSag = document.getElementById("contourSagittal") as HTMLImageElement;
const contourAx = document.getElementById("contourAxial") as HTMLImageElement;

imgBtn?.addEventListener("click", () => {
    if(  imgBtn.innerHTML === "Occipital Lobe" || 
      imgBtn.innerHTML === "Temporal Lobe" || 
      imgBtn.innerHTML === "Cerebellum" || 
      imgBtn.innerHTML === "Spinal Cord") {
    contourAnt.src = '/explore-assets/models/standard/CoronalAnterior_Slice.png';
    contourSag.src = '/explore-assets/models/standard/LeftSagittal_Slice.png';
    contourAx.src = '/explore-assets/models/standard/UpperAxial_Slice.png';
    imgBtn.innerHTML = "GBM";
  } 
  
  else if(imgBtn.innerHTML === "Glioblastoma") {
    contourAnt.src = '/explore-assets/models/gbm/CoronalAnterior_Slice.png';
    contourSag.src = '/explore-assets/models/gbm/LeftSagittal_Slice.png';
    contourAx.src = '/explore-assets/models/gbm/UpperAxial_Slice.png';
    imgBtn.innerHTML = "Glioma";
  } 
  
  else if(imgBtn.innerHTML === "Glioma") {    
    contourAnt.src = '/explore-assets/models/glioma/CoronalAnterior_Slice.png';
    contourSag.src = '/explore-assets/models/glioma/LeftSagittal_Slice.png';
    contourAx.src = '/explore-assets/models/glioma/UpperAxial_Slice.png';
    imgBtn.innerHTML = "Metastasis";
  } 
  
  else if(imgBtn.innerHTML === "Metastasic Disease") {
    contourAnt.src = '/explore-assets/models/metastasis/CoronalAnterior_Slice.png';
    contourSag.src = '/explore-assets/models/metastasis/LeftSagittal_Slice.png';
    contourAx.src = '/explore-assets/models/metastasis/UpperAxial_Slice.png';
    imgBtn.innerHTML = "Standard";    
  }

  else{

    contourAnt.src = '/explore-assets/models/standard/CoronalAnterior_Slice.png';
    contourSag.src = '/explore-assets/models/standard/LeftSagittal_Slice.png';
    contourAx.src = '/explore-assets/models/standard/UpperAxial_Slice.png';
    imgBtn.innerHTML = "GBM";

  }

})

};

