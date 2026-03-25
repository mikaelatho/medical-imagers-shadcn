/* GAMES PAGE */
// below is where you import components and props/states to use
import { Button } from "@/components/ui/button";
import { ZapIcon } from "lucide-react";
import { CircleQuestionMarkIcon } from "lucide-react";
import { PlayIcon } from "lucide-react";
import Link from "next/link";

// below is the page contents
export default function Games() {
  return (
    <main>
      {/*main page content (edit in div below)*/}
      <div className="items-center justify-center mx-auto max-w-7xl flex-auto min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 sm:px-20 py-20">
          <div className="py-5">
            {/*Games*/}
            <h1 className="text-4xl sm:text-5xl font-bold font-source-serif-4 text-blue-700 my-5">MRI Diagnostic Trainer</h1>
            <p className="font-inter text-slate-800 sm:text-lg py-5 font-bold max-w-7xl">
              Learn to interpret brain MRIs, think like a clinician, and solve  diagnostic cases through interactive practice.
            </p>
            <Button variant="default" size="lg" className="my-1"><PlayIcon/>Play Now</Button>
            <br></br>
            <Button variant="outline" size="lg" className="my-1"><CircleQuestionMarkIcon/>How to play</Button>
          </div>
          <div className="py-5">
            <div className="outline-2 outline-slate-200 sm:outline-offset-2 rounded-[0.5vw] px-2 py-2">
              <img src="/mri8.png" alt="MRI Diagnostic Trainer" className="inline-block align-middle w-full sm:max-w-7xl"></img>
            </div>
          </div>
        </div>

        <div className="px-6 sm:px-20 py-5">
          <h3 className="text-left text-2xl pt-10 sm:text-3xl font-medium font-source-serif-4 text-blue-600">How it Works</h3>

        </div>
      </div>
    </main>
  );
}
