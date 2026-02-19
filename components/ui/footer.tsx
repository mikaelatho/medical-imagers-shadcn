// components/footer.tsx
import * as React from "react";
import Link from 'next/link';

export function Footer() {
  return (
    <div className="flex flex-col sm:flex-row w-full justify-between items-center bg-blue-900
     p-8 pb-20 text-white gap-8 sm:px-25">
    {/* Left Side */}
    <div className="items-center text-center sm:text-left">
      <h3 className="scroll-m-20 text-xl font-bold">Brain MRI</h3>
      <p className="text-sm">A visual learning resource for MRI.</p>
      <p className="text-sm mt-4">© 2026 Team Medical Imagers</p>
    </div>
    {/* Right Side */}
    <div className="flex flex-col sm:flex-row gap-10 text-center text-sm sm:text-left">
      <div>
        <ul>
          <li className="hover:underline cursor-pointer font-bold"><Link href="/">Home</Link></li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="pb-1 hover:underline cursor-pointer font-bold"><Link href="/learn">Learn</Link></li>
          <li className="pb-1 hover:underline cursor-pointer">Interactive Viewer</li>
          <li className="pb-1 hover:underline cursor-pointer">Brain Anatomy</li>
          <li className="pb-1 hover:underline cursor-pointer">Glossary</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="pb-1 hover:underline cursor-pointer font-bold"><Link href="/explore">Explore</Link></li>
          <li className="pb-1 hover:underline cursor-pointer">Quiz</li>
          <li className="pb-1 hover:underline cursor-pointer">Trivia</li>
          <li className="pb-1 hover:underline cursor-pointer">Progress</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="pb-1 hover:underline cursor-pointer font-bold"><Link href="/games">Games</Link></li>
          <li className="pb-1 hover:underline cursor-pointer">Team</li>
          <li className="pb-1 hover:underline cursor-pointer">Objectives</li>
          <li className="pb-1 hover:underline cursor-pointer">Sources</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="pb-1 hover:underline cursor-pointer font-bold"><Link href="/about">About</Link></li>
          <li className="pb-1 hover:underline cursor-pointer">How do MRIs work?</li>
          <li className="pb-1 vhover:underline cursor-pointer">Brain Anatomy</li>
          <li className="pb-1 hover:underline cursor-pointer">Glossary</li>
        </ul>
      </div>
    </div>
  </div> 
  )
}