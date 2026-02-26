/* MAIN HOME PAGE */

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";


// below is start of the home page
export default function Home() {
  return (
    <main>
      {/*main page content (edit in div below)*/}
      <div className="items-center justify-center mx-6 sm:mx-25 my-20 flex-auto min-h-screen">
        <div  className="flex flex-col md:flex-row gap-2 items-center">
          <div className="flex-1 text-center md:text-left">
            {/* left */}
            <h1 className="text-4xl sm:text-5xl font-bold font-source-serif-4 text-blue-700 my-5">A visual learning resource for MRI</h1>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-5">
              <div>
                <p className="text-bold max-w-xs sm:max-w-md">Learn about MRI technique through our interactive data.</p>
              </div>
              <div>
                <Button variant="default">Explore Data</Button>
              </div>
            </div>
            {/* search bar */}
            <Field orientation="horizontal" className="flex gap-2 max-w-lg">
              <Input type="search" placeholder="E.g. Field of View, slice, T1-Weighted" />
              <Button variant="outline" size="icon" aria-label="Search"><SearchIcon/></Button>
            </Field>
            <p className="font-inter text-slate-600 text-sm my-2">MRI games | Interactive brain viewer | Brain anatomy explanation</p>
          </div>
          <div className="flex-1 flex justify-center">
            {/* right */}
            <img src="/mri6.png" alt="MRI Visualization" className="w-full max-w-sm h-auto object-contain"></img>
          </div>
        </div>
      </div>
    </main>
  );
}
