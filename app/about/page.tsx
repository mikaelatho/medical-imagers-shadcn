/* ABOUT PAGE */

// below is where you import components and props/states to use
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HandHelpingIcon } from "lucide-react";
import { LaptopMinimalIcon } from "lucide-react";
import { ZapIcon } from "lucide-react";

// below is the page contents
export default function About() {
  return (
    <main>
      {/*main page content (edit in div below)*/}
      <div className="items-center justify-center mx-auto max-w-7xl flex-auto min-h-screen">
        <div className="px-6 sm:px-20 py-20">
          {/* meet the team */}
          <h1 className="text-4xl sm:text-5xl font-bold font-source-serif-4 text-blue-700 my-5">About</h1>
          <p className="font-inter text-slate-800 my-2">BrainMRI was created to allow medical terms to be accessible for learners of all ages.  We collaborated with professors from Purdue University to input data from real MRI scans, and our team worked to create this website from scratch as well as implement fun games to encourage the quest for knowledge.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
            <div>
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
                <img
                  src=""
                  alt="Profile photo"
                  className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                  </CardAction>
                  <CardTitle>Ren</CardTitle>
                  <CardDescription>
                    Data Vis
                    <Button variant="link" asChild><Link href="">Portfolio</Link></Button>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div>
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
                <img
                  src=""
                  alt="Profile photo"
                  className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                  </CardAction>
                  <CardTitle>Linh</CardTitle>
                  <CardDescription>
                    UX Design
                    <Button variant="link" asChild><Link href="">Portfolio</Link></Button>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div>
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
                <img
                  src=""
                  alt="Profile photo"
                  className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                  </CardAction>
                  <CardTitle>Jasmine</CardTitle>
                  <CardDescription>
                    UX Design
                    <Button variant="link" asChild><Link href="">Portfolio</Link></Button>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div>
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
                <img
                  src=""
                  alt="Profile photo"
                  className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                  </CardAction>
                  <CardTitle>Mikaela</CardTitle>
                  <CardDescription>
                    Web Dev
                    <Button variant="link" asChild><Link href="">Portfolio</Link></Button>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div>
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
                <img
                  src=""
                  alt="Profile photo"
                  className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                  </CardAction>
                  <CardTitle>Elijah</CardTitle>
                  <CardDescription>
                    Game Dev
                    <Button variant="link" asChild><Link href="">Portfolio</Link></Button>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div>
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
                <img
                  src=""
                  alt="Profile photo"
                  className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                  </CardAction>
                  <CardTitle>Anderson</CardTitle>
                  <CardDescription>
                    UX Design
                    <Button variant="link" asChild><Link href="">Portfolio</Link></Button>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div>
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
                <img
                  src=""
                  alt="Profile photo"
                  className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                  </CardAction>
                  <CardTitle>Kimberly</CardTitle>
                  <CardDescription>
                    UX Design
                    <Button variant="link" asChild><Link href="">Portfolio</Link></Button>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div>
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
                <img
                  src=""
                  alt="Profile photo"
                  className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                  </CardAction>
                  <CardTitle>Kaylee</CardTitle>
                  <CardDescription>
                    UX Design
                    <Button variant="link" asChild><Link href="">Portfolio</Link></Button>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div>
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
                <img
                  src=""
                  alt="Profile photo"
                  className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                  </CardAction>
                  <CardTitle>Ethan</CardTitle>
                  <CardDescription>
                    Game Dev
                    <Button variant="link" asChild><Link href="">Portfolio</Link></Button>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div>
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
                <img
                  src=""
                  alt="Profile photo"
                  className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                  </CardAction>
                  <CardTitle>Macy</CardTitle>
                  <CardDescription>
                    UX Design
                    <Button variant="link" asChild><Link href="">Portfolio</Link></Button>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div>
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
                <img
                  src=""
                  alt="Profile photo"
                  className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                  </CardAction>
                  <CardTitle>Erica</CardTitle>
                  <CardDescription>
                    UX Design
                    <Button variant="link" asChild><Link href="">Portfolio</Link></Button>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div>
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
                <img
                  src=""
                  alt="Profile photo"
                  className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                  </CardAction>
                  <CardTitle>Vito</CardTitle>
                  <CardDescription>
                    Web Dev
                    <Button variant="link" asChild><Link href="">Portfolio</Link></Button>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div>
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
                <img
                  src=""
                  alt="Profile photo"
                  className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                  </CardAction>
                  <CardTitle>Alex</CardTitle>
                  <CardDescription>
                    Game Dev
                    <Button variant="link" asChild><Link href="">Portfolio</Link></Button>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
        
      </div>
      <div className="px-6 sm:px-20 lg:px-40 py-20 bg-blue-50">
          <h3 className="text-left text-2xl pb-5 sm:text-3xl font-medium font-source-serif-4 text-blue-600">Learning Objectives</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-10">
            <div className="flex flex-col items-center text-center">
              <HandHelpingIcon className="text-white bg-blue-800 rounded-full p-2" size={40}></HandHelpingIcon>
              <h4 className="font-inter text-xl text-slate-800 font-bold py-5">Accessibility</h4>
              <p className="font=inter text-slate-800">BrainMRI was created to allow medical terms to be accessible for learners of all ages.  We collaborated with professors from Purdue University to input data from real MRI scans, and our team worked to create this website from scratch as well as implement fun games to encourage the quest for knowledge.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <LaptopMinimalIcon className="text-white bg-blue-800 rounded-full p-2" size={40}></LaptopMinimalIcon>
              <h4 className="font-inter text-xl text-slate-800 font-bold py-5">Ease of Learning</h4>
              <p className="font=inter text-slate-800">BrainMRI was created to allow medical terms to be accessible for learners of all ages.  We collaborated with professors from Purdue University to input data from real MRI scans, and our team worked to create this website from scratch as well as implement fun games to encourage the quest for knowledge.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <ZapIcon className="text-white bg-blue-800 rounded-full p-2" size={40}></ZapIcon>
              <h4 className="font-inter text-xl text-slate-800 font-bold py-5">Engaging Experience</h4>
              <p className="font=inter text-slate-800">BrainMRI was created to allow medical terms to be accessible for learners of all ages.  We collaborated with professors from Purdue University to input data from real MRI scans, and our team worked to create this website from scratch as well as implement fun games to encourage the quest for knowledge.</p>
            </div>
          </div>
        </div>
    </main>
  );
}
