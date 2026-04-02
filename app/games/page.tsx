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

// below is the page contents
export default function Games() {
  return (
    <main>
      {/*main page content (edit in div below)*/}
      <div className="items-center justify-center mx-auto max-w-7xl flex-auto min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-20 pt-20 pb-10">
          <div className="py-5">
            {/*Games*/}
            <h1 className="text-4xl sm:text-5xl font-bold font-source-serif-4 text-blue-700 my-5">MRI Diagnostic Trainer</h1>
            <p className="font-inter text-slate-800 sm:text-lg py-5 font-bold max-w-7xl">
              Learn to interpret brain MRIs, think like a clinician, and solve  diagnostic cases through interactive practice.
            </p>
            <Button variant="default" size="lg" className="my-1"><PlayIcon />Play Now</Button>
            <br></br>
            <Button variant="outline" size="lg" className="my-1"><CircleQuestionMarkIcon />How to play</Button>
          </div>
          <div className="py-5">
            <div className="outline-2 outline-slate-200 sm:outline-offset-2 rounded-[0.5vw] px-2 py-2">
              <img src="/mri8.png" alt="MRI Diagnostic Trainer" className="inline-block align-middle w-full sm:max-w-7xl"></img>
            </div>
          </div>
        </div>
        {/* Progress Section*/}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 px-6 sm:px-20 py-5 pb-20 items-stretch justify-center">
          <div className="rounded-[1vw] bg-linear-to-t from-blue-600 to-blue-400 py-10 px-2">
            <h3 className="font-inter font-medium text-xl text-white text-center py-2 ">Games Completed</h3>
            <p className="font-inter text-white text-xl text-center sm:text-3xl font-bold">
              23
            </p>
          </div>
          <div className="rounded-[1vw] bg-linear-to-t from-blue-600 to-blue-400 py-10 px-2">
            <h3 className="font-inter font-medium text-xl text-white text-center py-2 ">Highest Score</h3>
            <p className="font-inter text-white text-xl text-center sm:text-3xl font-bold">
              100
            </p>
          </div>
          <div className="rounded-[1vw] bg-linear-to-t from-blue-600 to-blue-400 py-10 px-6 flex flex-col items-center justify-center">
            <Field className="w-full">
              <div className="flex justify-between items-baseline mb-3">
                <FieldLabel htmlFor="progress-upload" className="text-white font-inter text-xl font-medium">
                  Your Progress
                </FieldLabel>
                <span className="text-white text-xl sm:text-2xl font-bold font-inter">66%</span>
              </div>
              <Progress value={66} id="progress-upload" className="h-3 w-full bg-white/20" />
            </Field>
          </div>


        </div>
        <div className="px-6 sm:px-20 py-5 pb-20">
          <h3 className="text-left text-2xl pt-10 sm:text-3xl font-medium font-source-serif-4 text-blue-600">How it Works</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 py-10 gap-5">
            <div>
              <div className="bg-white shadow-sm outline-2 outline-slate-200 sm:outline-offset-2 rounded-[0.5vw] px-5 py-5 min-h-[220]">
                <EyeIcon className="text-white bg-blue-600 rounded-full py-1 px-1 mb-2" size={32} />
                <p className="font-inter text-slate-600 text-sm my-2">Step 1</p>
                <h3 className="font-inter text-slate-800 my-2 font-medium">Observe</h3>
                <p className="font-inter text-slate-600 text-sm">Carefully examine the MRI scan. Look at different slices and imaging sequences.</p>
              </div>
            </div>
            <div>
              <div className="bg-white shadow-sm outline-2 outline-slate-200 sm:outline-offset-2 rounded-[0.5vw] px-5 py-5 min-h-[220]">
                <SearchIcon className="text-white bg-blue-600 rounded-full py-1 px-1 mb-2" size={32} />
                <p className="font-inter text-slate-600 text-sm my-2">Step 2</p>
                <h3 className="font-inter text-slate-800 my-2 font-medium">Identify and Analyze</h3>
                <p className="font-inter text-slate-600 text-sm">Pinpoint locations of abnormalities, structural changes, or lesions from the brain scans. Mark key findings to build your diagnostic evidence.</p>
              </div>
            </div>
            <div>
              <div className="bg-white shadow-sm outline-2 outline-slate-200 sm:outline-offset-2 rounded-[0.5vw] px-5 py-5 min-h-[220]">
                <ClipboardCheckIcon className="text-white bg-blue-600 rounded-full py-1 px-1 mb-2" size={32} />
                <p className="font-inter text-slate-600 text-sm my-2">Step 3</p>
                <h3 className="font-inter text-slate-800 my-2 font-medium">Diagnose</h3>
                <p className="font-inter text-slate-600 text-sm">Make your diagnosis based on the evidence. Get instant feedback and learn from each case.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-left text-2xl pt-10 sm:text-3xl font-medium font-source-serif-4 text-blue-600">What you will learn</h3>
          <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 py-10 gap-2 sm:gap-6">
            <div className="grid grid-cols-[auto_1fr] gap-4">
              <div>
                <CheckIcon className="text-white bg-blue-800 rounded-full p-1" size={28} />
              </div>
              <div>
                <h2 className="text-xl sm:text-xl font-source-serif-4 font-medium text-blue-600">Reading MRI</h2>
                <p className="font-inter text-sm text-slate-800 my-2">Master the fundamentals of neuroimaging. You'll learn how to navigate different planes—axial, sagittal, and coronal—and understand the significance of various imaging sequences like T1, T2, and FLAIR to see the brain in a whole new light.</p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-4">
              <div>
                <CheckIcon className="text-white bg-blue-800 rounded-full p-1" size={28} />
              </div>
              <div>
                <h2 className="text-xl sm:text-xl font-source-serif-4 font-medium text-blue-600">Identifying Abnormalities</h2>
                <p className="font-inter text-sm text-slate-800 my-2">Develop a keen eye for detail. Learn to distinguish between healthy tissue and pathological changes, including identifying lesions, tumors, hemorrhages, and structural shifts that indicate underlying neurological conditions.</p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-4">
              <div>
                <CheckIcon className="text-white bg-blue-800 rounded-full p-1" size={28} />
              </div>
              <div>
                <h2 className="text-xl sm:text-xl font-source-serif-4 font-medium text-blue-600">Clinical Correlation</h2>
                <p className="font-inter  text-sm text-slate-800 my-2">Bridge the gap between imaging and reality. This module teaches you how to map visual findings on an MRI to a patient's actual physical symptoms, ensuring your diagnostic practice is grounded in real-world clinical context.</p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-4">
              <div>
                <CheckIcon className="text-white bg-blue-800 rounded-full p-1" size={28} />
              </div>
              <div>
                <h2 className="text-xl sm:text-xl font-source-serif-4 font-medium text-blue-600">Differential Diagnosis</h2>
                <p className="font-inter  text-sm text-slate-800 my-2">Think like a specialist. Learn to weigh competing possibilities by analyzing specific imaging "signatures." You'll practice narrowing down a list of potential conditions to reach the most accurate and evidence-based diagnosis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}
