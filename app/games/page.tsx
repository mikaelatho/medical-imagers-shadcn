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

const basePath =
  process.env.NODE_ENV === "production"
    ? "/medical-imagers-shadcn"
    : "";

// below is the page contents
export default function Games() {
  return (
    <main>
      {/*main page content (edit in div below)*/}
      <div className="items-center justify-center mx-auto max-w-7xl flex-auto min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-20 pt-20 pb-10">
          <div className="py-5">
            {/*Games*/}
            <h1 className="text-4xl sm:text-5xl font-bold font-source-serif-4 text-blue-700 my-5">Practice and Play</h1>
            <p className="font-inter text-slate-800 sm:text-lg py-5 font-bold max-w-7xl">
              Learn to interpret brain MRIs, think like a clinician, and solve  diagnostic cases through interactive practice.
            </p>
            <Button variant="default" size="lg" className="my-1 cursor-pointer"><PlayIcon /><Link href="/flashcards">Play Flashcards</Link></Button>
            <br></br>
            <br></br>
            <Button variant="outline" size="lg" className="my-1 cursor-pointer"><CircleQuestionMarkIcon /> <Link href="/games#how-it-works">How to play</Link></Button>
          </div>
          <div className="py-5">
            <div className="outline-2 outline-slate-200 sm:outline-offset-2 rounded-[0.5vw] px-2 py-2">
              <img src={`${basePath}/mri8.png`} alt="Practice and Play" className="inline-block align-middle w-full sm:max-w-7xl"></img>
            </div>
          </div>
        </div>
        {/* Progress Section
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
        </div> */}
        <div id="how-it-works" className="px-6 sm:px-20 py-5 pb-20">
          <h3  className="text-left text-2xl pt-5 sm:text-3xl font-medium font-source-serif-4 text-blue-600 scroll-smooth">How it Works</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 py-10 gap-5">
            <div>
              <div className="bg-white shadow-sm outline-2 outline-slate-200 sm:outline-offset-2 rounded-[0.5vw] px-5 py-5 min-h-[220]">
                <EyeIcon className="text-white bg-blue-600 rounded-full py-1 px-1 mb-2" size={32} />
                <p className="font-inter text-slate-600 text-sm my-2">Step 1</p>
                <h3 className="font-inter text-slate-800 my-2 font-medium">Identify Vocabulary</h3>
                <p className="font-inter text-slate-600 text-sm">Take a second to process the phrase. There is no problem if it feels unfamiliar to you. You can learn more as the game progresses.</p>
              </div>
            </div>
            <div>
              <div className="bg-white shadow-sm outline-2 outline-slate-200 sm:outline-offset-2 rounded-[0.5vw] px-5 py-5 min-h-[220]">
                <SearchIcon className="text-white bg-blue-600 rounded-full py-1 px-1 mb-2" size={32} />
                <p className="font-inter text-slate-600 text-sm my-2">Step 2</p>
                <h3 className="font-inter text-slate-800 my-2 font-medium">Define</h3>
                <p className="font-inter text-slate-600 text-sm">Flip a card to reveal the definition. Make sure to recall these definitions in each playthrough. </p>
              </div>
            </div>
            <div>
              <div className="bg-white shadow-sm outline-2 outline-slate-200 sm:outline-offset-2 rounded-[0.5vw] px-5 py-5 min-h-[220]">
                <ClipboardCheckIcon className="text-white bg-blue-600 rounded-full py-1 px-1 mb-2" size={32} />
                <p className="font-inter text-slate-600 text-sm my-2">Step 3</p>
                <h3 className="font-inter text-slate-800 my-2 font-medium">Practice and Play</h3>
                <p className="font-inter text-slate-600 text-sm">Each time you complete the game, you will find yourself more comfortable with imaging terminology. Practice and replay as often as you would like.
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
                <h2 className="text-xl sm:text-xl font-source-serif-4 font-medium text-blue-600">Medical Imaging Terminology</h2>
                <p className="font-inter text-sm text-slate-800 my-2">Master the fundamentals of imaging terminology. You'll learn how to define and identify scans and recall definitions with confidence.</p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-4">
              <div>
                <CheckIcon className="text-white bg-blue-800 rounded-full p-1" size={28} />
              </div>
              <div>
                <h2 className="text-xl sm:text-xl font-source-serif-4 font-medium text-blue-600">Personal Identification</h2>
                <p className="font-inter text-sm text-slate-800 my-2">Understand the functions of your brain. Learn how each region affects daily functions. </p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-4">
              <div>
                <CheckIcon className="text-white bg-blue-800 rounded-full p-1" size={28} />
              </div>
              <div>
                <h2 className="text-xl sm:text-xl font-source-serif-4 font-medium text-blue-600">Real World Applications</h2>
                <p className="font-inter  text-sm text-slate-800 my-2">Bridge the gap between imaging and reality. This module teaches you how to understand the parts of your brain and how they can be analyzed with real-world technologies. </p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-4">
              <div>
                <CheckIcon className="text-white bg-blue-800 rounded-full p-1" size={28} />
              </div>
              <div>
                <h2 className="text-xl sm:text-xl font-source-serif-4 font-medium text-blue-600">Diseases and Conditions</h2>
                <p className="font-inter  text-sm text-slate-800 my-2">Understand diagnoses. Learn how cancerous disease develop and progress. You'll learn basic definitions of illnesses as a foundation for future learning.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}
