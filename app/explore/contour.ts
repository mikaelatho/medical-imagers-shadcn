export type Contour = "default" | "gbm" | "glioma" | "meta";

export type ContourViews = {
    anterior: string;
    sagittal: string;
    slice: string;
};

const ContourPaths: Record<Contour, ContourViews> = {
  default: {
    anterior: "/explore-assets/images/CoronalAnterior_Slice.png",
    sagittal: "/explore-assets/images/LeftSagittal_Slice.png",
    slice: "/explore-assets/images/UpperAxial_Slice.png",
  },
  gbm: {
    anterior: "/explore-assets/images/gbm/Glioblastoma_Anterior_Slice.png",
    sagittal: "/explore-assets/images/gbm/Glioblastoma_Sagittal_Slice.png",
    slice: "/explore-assets/images/gbm/Glioblastoma_Axial_Slice.png",
  },
  glioma: {
    anterior: "/explore-assets/images/glioma/Glioma_Anterior_Slice.png",
    sagittal: "/explore-assets/images/glioma/Glioma_Sagittal_Slice.png",
    slice: "/explore-assets/images/glioma/Glioma_Axial_Slice.png",
  },
  meta: {
    anterior: "/explore-assets/images/meta/Glioma_Anterior_Slice.png",
    sagittal: "/explore-assets/images/meta/Glioma_Sagittal_Slice.png",
    slice: "/explore-assets/images/meta/Glioma_Axial_Slice.png",
  },
};


export function getContourImages(toggle: Contour): ContourViews{
  return ContourPaths[toggle] ?? ContourPaths.default;
}
