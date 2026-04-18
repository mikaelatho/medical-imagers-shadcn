/* GAMES PAGE */
// below is where you import components and props/states to use
"use client"
import { Button } from "@/components/ui/button";
import { ZapIcon } from "lucide-react";
import { CircleQuestionMarkIcon } from "lucide-react";
import { PlayIcon } from "lucide-react";
import { EyeIcon } from "lucide-react";
import { SearchIcon } from "lucide-react";
import { ClipboardCheckIcon } from "lucide-react";
import { CheckIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Field } from "@/components/ui/field";
import { FieldLabel } from "@/components/ui/field";
import Link from "next/link";

import { contour } from "./contour";

const basePath =
  process.env.NODE_ENV === "production"
    ? "/medical-imagers-shadcn"
    : "";

// below is the page contents
export default function Games() {
  //const { viewerRef, loadModel, setOpacity } = navigator();
  const {contourImages, setContourImages} = contour();
  const basePath = process.env.NODE_ENV === "production" ? "/medical-imagers-shadcn" : "";

  return (
    <main>
      <img src={contourImages.anterior}></img>
    </main >
  );
}
