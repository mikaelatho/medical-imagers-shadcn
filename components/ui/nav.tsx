// components/ui/nav.tsx
import * as React from "react"
import { forwardRef } from "react";
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
import { Menu } from "lucide-react"; // Import the icon
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from 'next/link';


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


export function Nav() {
  return (
    <nav className="flex w-full items-center justify-between px-6 md:px-20 py-4 border-b">
        {/* LEFT: Logo/Title */}
        <h1 className="text-lg font-bold"><a href="/">Brain MRI</a></h1>
        {/* RIGHT: Desktop Menu (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-10 relative">
        <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                  <NavigationMenuTrigger><Link href="/learn">Learn</Link></NavigationMenuTrigger>
                  <NavigationMenuContent>
                  <ul className="w-96">
                      <ListItem href="/learn" title="Learn stuff">
                      A description of the learn section
                      </ListItem>
                      <ListItem href="/learn" title="Learn stuff">
                      A description of the learn section
                      </ListItem>
                      <ListItem href="/learn" title="Learn stuff">
                      A description of the learn section
                      </ListItem>
                  </ul>
                  </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                  <NavigationMenuTrigger><Link href="/games">Games</Link></NavigationMenuTrigger>
                  <NavigationMenuContent>
                  <ul className="w-96">
                      <ListItem href="/games" title="Header title">
                      A description of the this section
                      </ListItem>
                  </ul>
                  </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                  <NavigationMenuTrigger><Link href="/explore">Explore</Link></NavigationMenuTrigger>
                  <NavigationMenuContent>
                  <ul className="w-96">
                      <ListItem href="/explore" title="Header title">
                      A description of the this section
                      </ListItem>
                  </ul>
                  </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                  <NavigationMenuTrigger><Link href="/about">About</Link></NavigationMenuTrigger>
                  <NavigationMenuContent>
                  <ul className="w-96">
                      <ListItem href="/about" title="Header title">
                      A description of the this section
                      </ListItem>
                  </ul>
                  </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        </div>
        {/* RIGHT: Mobile Hamburger (Hidden on desktop) */}
        <div className="md:hidden">
        <Sheet>
            <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6"/>
            </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-8 mx-6">
                {/* Mobile Links */}
                <Link href="/learn" className="text-lg font-medium">Learn</Link>
                <Link href="/games" className="text-lg font-medium">Games</Link>
                <Link href="/explore" className="text-lg font-medium">Explore</Link>
                <Link href="/about" className="text-lg font-medium">About</Link>
            </div>
            </SheetContent>
        </Sheet>
    </div>
    </nav>
  )
}