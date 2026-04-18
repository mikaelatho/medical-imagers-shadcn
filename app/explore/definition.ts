import { useState } from "react";

export function definition () {

const defDictionary = {
standard: "Brain [brān] -  A complex organ that that integrates sensory information from inside and outside the body.",
cerebellum: "Cerebellum [ˌser-ə-ˈbel-əm] - Maintains balance, posture, coordination, and fine motor skills.",
frontal: "Frontal Lobe [ˈfrən-təl lōb] - The largest lobe; controls voluntary movement, social understanding, thinking, and learning.",
parietal: "Parietal Lobe [ˈper-ē-ə-təl lōb] - Interprets signals from other parts of the body to understand your environment and bodily state.",  
temporal: "Temporal Lobe [ˈtem-pər-əl lōb] - Helps retrieve memories and understand language and emotions.",
occipital: "Occipital Lobe [äk-ˈsip-ə-təl lōb] - Allows you to process and interpret visual information from your eyes.",
stem: "Brainstem [ˈbrān-ˌstem] - Regulates bodily functions (ex.) heart rate, breathing sleep cycles, swallowing)",
metastatic: "Metastatic [me-tas-ˈta-tik] - Cancer that has spread from its original site to distant parts of the body.",
glioma: "Glioma [glī-ˈō-mə] - A cancerous tumor that can form in the brain or spinal cord, arising from changes in a cell's DNA.",
glioblastoma: "Glioblastoma [glī-ō-blas-ˈtō-mə] (GBM) - The most agressive cancer starting in a type of glial cell. GBM cells can grow and multiply at extreme rates."
};

//defaults
  const [defs, getDefs] = useState(defDictionary.standard);

  //getters and setters
  const setDefs = (type: keyof typeof defDictionary) => {
    getDefs(defDictionary[type]);
  };

  return{defs, setDefs};

};

