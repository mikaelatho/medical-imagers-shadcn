let imgBtn: HTMLButtonElement = document.getElementById("imgBtn") as HTMLButtonElement;
let contourAnt: HTMLImageElement = document.getElementById("contourAnterior") as HTMLImageElement;
let contourSag: HTMLImageElement = document.getElementById("contourSagittal") as HTMLImageElement;
let contourAx: HTMLImageElement = document.getElementById("contourAxial") as HTMLImageElement;

let standardAnterior = "/explore-assets/models/standard/CoronalAnterior_Slice.png";
let standardSagittal = "/explore-assets/models/standard/LeftSagittal_Slice.png";
let standardAxial = "/explore-assets/models/standard/UpperAxial_Slice.png"; 

let gbmAnterior = "/explore-assets/models/gbm/CoronalAnterior_Slice.png";
let gbmSagittal = "/explore-assets/models/gbm/LeftSagittal_Slice.png";
let gbmAxial =  "/explore-assets/models/gbm/UpperAxial_Slice.png";

let gliomaAnterior = "/explore-assets/models/glioma/CoronalAnterior_Slice.png";
let gliomaSagittal = "/explore-assets/models/glioma/LeftSagittal_Slice.png";
let gliomaAxial =  "/explore-assets/models/glioma/UpperAxial_Slice.png";  

let metaAnterior = "/explore-assets/models/metastasis/CoronalAnterior_Slice.png";
let metaSagittal = "/explore-assets/models/metastasis/LeftSagittal_Slice.png";
let metaAxial = "/explore-assets/models/metastasis/UpperAxial_Slice.png";  

imgBtn.addEventListener("click", function(event) {

  if(this.innerHTML === "Standard" || this.innerHTML === "Back to Default View") {
    contourAnt.setAttribute("src", standardAnterior);
    contourSag.setAttribute("src", standardSagittal);
    contourAx.setAttribute("src", standardAxial);
    this.innerHTML = "GBM";
  } 
  
  else if(this.innerHTML === "Glioblastoma") {
    contourAnt.setAttribute("src", gbmAnterior);
    contourSag.setAttribute("src", gbmSagittal);
    contourAx.setAttribute("src", gbmAxial);
    this.innerHTML = "Glioma";
  } 
  
  else if(this.innerHTML === "Glioma") {    
    contourAnt.setAttribute("src", gliomaAnterior);
    contourSag.setAttribute("src", gliomaSagittal);
    contourAx.setAttribute("src", gliomaAxial);
    this.innerHTML = "Metastasis";
  } 
  
  else if(this.innerHTML === "Metastasic Disease") {
    contourAnt.setAttribute("src", metaAnterior);
    contourSag.setAttribute("src", metaSagittal);
    contourAx.setAttribute("src", metaAxial);  
    this.innerHTML = "Standard";    
  }

});
