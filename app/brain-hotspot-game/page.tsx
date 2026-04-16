"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const basePath =
  process.env.NODE_ENV === "production"
    ? "/medical-imagers-shadcn"
    : "";

export default function BrainHotspotPage() {
  return (
    <main>
      <div className="flex items-left justify-left px-6 sm:px-20 py-2 bg-slate-50">
        <Button variant="outline" asChild>
          <Link href="/games">
            <ArrowLeft className="text-slate-600" />
            Back to Games
          </Link>
        </Button>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6">
        <div className="flex flex-col items-center justify-center bg-slate-50 p-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-source-serif-4 text-blue-700 mb-5">
            Brain Hotspot Game
          </h1>
          <p className="font-inter text-slate-800 sm:text-lg py-2 font-medium max-w-3xl">
            Hover over the highlighted regions and use the arrows to explore the scan.
          </p>
        </div>

        <div className="w-full max-w-5xl my-6 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">
          <iframe
            src={`${basePath}/brain-hotspot/index.html`}
            title="Brain Hotspot Game"
            className="w-full h-[850px] border-0"
          />
        </div>
      </div>
    </main>
  );
}