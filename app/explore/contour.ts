const img = document.getElementById('images');
let toggle = "default";
let anterior = null;
let sagittal = null;
let slice = null;

img?.addEventListener('click', function(){
   
    if(toggle === "gbm")
    {
        anterior = "/explore-assets/images/gbm/Glioblastoma_Anterior_Slice.png"
        sagittal = "/explore-assets/images/gbm/Glioblastoma_Sagittal_Slice.png"
        slice = "/explore-assets/images/gbm/Glioblastoma_Axial_Slice.png"
    }
    else if(toggle === "glioma")
    {
        anterior = "/explore-assets/images/glioma/Glioma_lAnterior_Slice.png"
        sagittal = "/explore-assets/images/glioma/Glioma_Sagittal_Slice.png"
        slice = "/explore-assets/images/glioma/Glioma_Axial_Slice.png"   
    }
    else if(toggle === "meta")
    {
        anterior = "/explore-assets/images/meta/Glioma_Anterior_Slice.png"
        sagittal = "/explore-assets/images/meta/Glioma_Sagittal_Slice.png"
        slice = "/explore-assets/images/meta/Glioma_Axial_Slice.png"
    }
    else{
        anterior = "/explore-assets/images/CoronalAnterior_Slice.png"
        sagittal = "/explore-assets/images/LeftSagittal_Slice.png"
        slice = "/explore-assets/images/UpperAxial_Slice.png"
    }

});