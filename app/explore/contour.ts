const img = document.getElementById('images');
let toggle = "default";
let anterior = null;
let sagittal = null;
let slice = null;

img?.addEventListener('click', function(){
   
    if(toggle === "gbm")
    {
        anterior = "/explore-assets/images/gbm/CoronalAnterior_Slice.png"
        sagittal = "/explore-assets/images/gbm/LeftSagittal_Slice.png"
        slice = "/explore-assets/images/gbm/UpperAxial_Slice.png"
    }
    else if(toggle === "glioma")
    {
        anterior = "/explore-assets/images/glioma/CoronalAnterior_Slice.png"
        sagittal = "/explore-assets/images/glioma/LeftSagittal_Slice.png"
        slice = "/explore-assets/images/glioma/UpperAxial_Slice.png"   
    }
    else if(toggle === "meta")
    {
        anterior = "/explore-assets/images/meta/CoronalAnterior_Slice.png"
        sagittal = "/explore-assets/images/meta/LeftSagittal_Slice.png"
        slice = "/explore-assets/images/meta/UpperAxial_Slice.png"
    }
    else{
        anterior = "/explore-assets/images/CoronalAnterior_Slice.png"
        sagittal = "/explore-assets/images/LeftSagittal_Slice.png"
        slice = "/explore-assets/images/UpperAxial_Slice.png"
    }

});