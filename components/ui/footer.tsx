// components/footer.tsx
import React from 'react'

export function Footer() {
  return (
    <div className="flex flex-col sm:flex-row w-full justify-between items-center bg-blue-900
     p-8 pb-20 text-white gap-8">
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
          <li className="hover:underline cursor-pointer font-bold">Home</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="pb-1 hover:underline cursor-pointer font-bold">Learn</li>
          <li className="pb-1 hover:underline cursor-pointer">Interactive Viewer</li>
          <li className="pb-1 hover:underline cursor-pointer">Brain Anatomy</li>
          <li className="pb-1 hover:underline cursor-pointer">Glossary</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="pb-1 hover:underline cursor-pointer font-bold">Explore</li>
          <li className="pb-1 hover:underline cursor-pointer">Quiz</li>
          <li className="pb-1 hover:underline cursor-pointer">Trivia</li>
          <li className="pb-1 hover:underline cursor-pointer">Progress</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="pb-1 hover:underline cursor-pointer font-bold">About</li>
          <li className="pb-1 hover:underline cursor-pointer">Team</li>
          <li className="pb-1 hover:underline cursor-pointer">Objectives</li>
          <li className="pb-1 hover:underline cursor-pointer">Sources</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="pb-1 hover:underline cursor-pointer font-bold">About</li>
          <li className="pb-1 hover:underline cursor-pointer">How do MRIs work?</li>
          <li className="pb-1 vhover:underline cursor-pointer">Brain Anatomy</li>
          <li className="pb-1 hover:underline cursor-pointer">Glossary</li>
        </ul>
      </div>
    </div>
  </div> 
  )
}