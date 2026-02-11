/* MAIN HOME PAGE */

import Image from "next/image"
import { CircleFadingArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main>
      
          <div className="flex flex-wrap items-center gap-2 md:flex-row">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
            <Button variant="outline" size="icon">
                  <CircleFadingArrowUpIcon />
            </Button>
            <Button>default</Button>
          </div>
    </main>

  );
}
