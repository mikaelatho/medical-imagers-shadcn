// components/footer.tsx
import * as React from "react";
import Link from 'next/link';

export function Footer() {
  return (
    <div className="flex flex-col sm:flex-row w-full justify-between items-center bg-blue-900
     p-8 pt-10 pb-30 text-white gap-8 sm:px-25 font-inter">
    {/* Left Side */}
    <div className="items-center text-center sm:text-left">
      <h3 className="scroll-m-20 text-xl font-bold">LearnMRI</h3>
      <p className="text-sm">A visual learning resource for MRI.</p>
      <p className="text-sm mt-10">© 2026 Team Medical Imagers</p>
    </div>
    {/* Right Side */}
    <div className="flex flex-col sm:flex-row gap-10 text-center text-sm sm:text-left font-inter">
      <div>
        <ul>
          <li className="hover:underline cursor-pointer font-bold"><Link href="/">Home</Link></li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="pb-1 hover:underline cursor-pointer font-bold"><Link href="/learn">Learn</Link></li>
          <li className="pb-1 hover:underline cursor-pointer"><Link href="/learn#how-mri-works">Comparison</Link></li>
          <li className="pb-1 hover:underline cursor-pointer"><Link href="/learn#compare-imaging">Brain Anatomy</Link></li>
          <li className="pb-1 hover:underline cursor-pointer"><Link href="/learn#glossary">Glossary</Link></li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="pb-1 hover:underline cursor-pointer font-bold"><Link href="/explore">Explore</Link></li>
          <li className="pb-1 hover:underline cursor-pointer"><Link href="/explore">Interactive Viewer</Link></li>
          <li className="pb-1 hover:underline cursor-pointer"><Link href="/explore">Anatomy</Link></li>
          <li className="pb-1 hover:underline cursor-pointer"><Link href="/explore">Instructions</Link></li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="pb-1 hover:underline cursor-pointer font-bold"><Link href="/games">Games</Link></li>
          <li className="pb-1 hover:underline cursor-pointer"><Link href="/games">Diagnostic Trainer</Link></li>
          <li className="pb-1 hover:underline cursor-pointer"><Link href="/games">Progress</Link></li>
          <li className="pb-1 hover:underline cursor-pointer"><Link href="/games">Goals</Link></li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="pb-1 hover:underline cursor-pointer font-bold"><Link href="/about">About</Link></li>
          <li className="pb-1 hover:underline cursor-pointer"><Link href="/about#meet-the-team">Meet the Team</Link></li>
          <li className="pb-1 hover:underline cursor-pointer"><Link href="/about#data-sources">Data Sources</Link></li>
          <li className="pb-1 hover:underline cursor-pointer"><Link href="/about#faq">FAQ</Link></li>
          <li className="pb-1 hover:underline cursor-pointer"><Link href="/about">Contact</Link></li>
        </ul>
      </div>
    </div>
  </div> 
  )
}