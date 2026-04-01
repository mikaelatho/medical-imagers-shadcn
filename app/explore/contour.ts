import { useState } from "react";

export function contour () {

type View = {
  anterior: string;
  sagittal: string;
  axial: string;
};

type ViewDictionary = Record<"standard" | "glioblastoma" | "glioma" | "metastatic", View>

const contour: ViewDictionary = {
  standard: {
    anterior: "/explore-assets/images/default/CoronalAnterior_Slice.png",
    sagittal: "/explore-assets/images/default/LeftSagittal_Slice.png",
    axial: "/explore-assets/images/default/UpperAxial_Slice.png",
  },
  glioblastoma: {
    anterior: "/explore-assets/images/gbm/Glioblastoma_Coronal_Slice.png",
    sagittal: "/explore-assets/images/gbm/Glioblastoma_Sagittal_Slice.png",
    axial: "/explore-assets/images/gbm/Glioblastoma_Axial_Slice.png",
  },
  glioma: {
    anterior: "/explore-assets/images/glioma/Glioma_Coronal_Slice.png",
    sagittal: "/explore-assets/images/glioma/Glioma_Sagittal_Slice.png",
    axial: "/explore-assets/images/glioma/Glioma_Axial_Slice.png",
  },
  metastatic: {
    anterior: "/explore-assets/images/meta/Metastatic_Coronal_Slice.png",
    sagittal: "/explore-assets/images/meta/Metastatic_Sagittal_Slice.png",
    axial: "/explore-assets/images/meta/Metastatic_Axial_Slice.png",
  },
};

//defaults
  const [contourImages, getContourImages] = useState(contour.standard);

  //getters and setters
  const setContourImages = (type: keyof typeof contour) => {
    getContourImages(contour[type]);
  };

  return{contourImages, setContourImages};

};

