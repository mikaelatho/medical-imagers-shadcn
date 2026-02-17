/* MAIN HOME PAGE */

import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";
import { CircleFadingArrowUpIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const ListItem = forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

// below is start of the home page
export default function Home() {
  return (
    <main>
      {/* NAV BAR */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                <ListItem href="/learn" title="Learn stuff">
                  A description of the learn section
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex min-h-screen w-full items-center justify-center">
        <Button>Default</Button>
       
      </div>

      {/*FOOTER*/}
      <div className="flex flex-col sm:flex-row w-full justify-between items-center bg-blue-900 p-8 pb-20 text-white gap-8">
        {/* Left Side */}
        <div className="sm:text-left">
          <h3 className="scroll-m-20 text-xl font-bold">Brain MRI</h3>
          <p className="text-sm">A visual learning resource for MRI.</p>
          <p className="text-sm">© 2026 Team Medical Imagers</p>
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
              <li className="hover:underline cursor-pointer font-bold">Learn</li>
              <li className="hover:underline cursor-pointer">Interactive Viewer</li>
              <li className="hover:underline cursor-pointer">Brain Anatomy</li>
              <li className="hover:underline cursor-pointer">Glossary</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="hover:underline cursor-pointer font-bold">Explore</li>
              <li className="hover:underline cursor-pointer">Quiz</li>
              <li className="hover:underline cursor-pointer">Trivia</li>
              <li className="hover:underline cursor-pointer">Progress</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="hover:underline cursor-pointer font-bold">About</li>
              <li className="hover:underline cursor-pointer">Team</li>
              <li className="hover:underline cursor-pointer">Objectives</li>
              <li className="hover:underline cursor-pointer">Sources</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="hover:underline cursor-pointer font-bold">About</li>
              <li className="hover:underline cursor-pointer">How do MRIs work?</li>
              <li className="hover:underline cursor-pointer">Brain Anatomy</li>
              <li className="hover:underline cursor-pointer">Glossary</li>
            </ul>
          </div>
        </div>
      </div> 

    </main>
  );
}
