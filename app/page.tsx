/* MAIN HOME PAGE */
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { CheckIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const basePath =
  process.env.NODE_ENV === "production"
    ? "/medical-imagers-shadcn"
    : "";

// below is start of the home page
export default function Home() {
  return (
    <main>
      {/*main page content*/}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 items-center justify-center max-w-7xl flex-auto"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/4 rotate-[35deg] bg-gradient-to-tr from-[#BFFFF6] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="items-center justify-center mx-auto max-w-7xl flex-auto min-h-screen relative isolate overflow-hidden">
        <div className="px-6 sm:px-20 py-20 flex flex-col md:flex-row gap-2 items-center">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold font-source-serif-4 text-blue-700 my-5">A visual learning resource for MRI</h1>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-5">
              <div>
                <p className="font-inter text-slate-600 text-lg font-bold max-w-xs sm:max-w-md">Learn about MRI technique through our interactive data.</p>
              </div>
              <div>
                <Button variant="default" asChild><Link href="/explore">Explore Data</Link></Button>
              </div>
            </div>            
          </div>
          <div className="flex-1 flex justify-center">
            <img src={`${basePath}/mri_home.png`} alt="MRI Visualization" className="w-sm sm:w-full max-w-md h-auto object-contain"></img>
          </div>
        </div>

        {/* card section */}
        <div className="px-6 sm:px-20 pb-20 items-center">
          <h2 className="text-center text-2xl py-5 sm:text-3xl font-medium font-source-serif-4 text-blue-700 my-5">What you can do with our website</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
                <img
                  src={`${basePath}/mri2.png`}
                  alt="6-sided MRI visualization"
                  className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                    <Badge variant="secondary">Explore</Badge>
                  </CardAction>
                  <CardTitle>Explore MRI Visualizations</CardTitle>
                  <CardDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus tellus arcu sit nibh consectetur.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full"><Link href="/explore">Explore Now</Link></Button>
                </CardFooter>
              </Card>
            </div>
            <div>
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
                <img
                  src={`${basePath}/mri3.png`}
                  alt="6-sided MRI visualization"
                  className="rounded-t-lg relative z-20 aspect-video w-full object-cover  brightness-80 dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                    <Badge variant="secondary">Learn</Badge>
                  </CardAction>
                  <CardTitle>Learn MRI terminology</CardTitle>
                  <CardDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus tellus arcu sit nibh consectetur.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">Dive into Learning</Button>
                </CardFooter>
              </Card>
            </div>
            <div>
              <Card className="relative mx-auto w-full max-w-sm pt-0">
                <div className="rounded-t-lg absolute inset-0 z-30 aspect-video bg-black/5" />
                <img
                  src={`${basePath}/mri4.png`} alt="6-sided MRI visualization"
                  className="rounded-t-lg relative z-20 aspect-video w-full object-cover brightness-80 dark:brightness-40"
                />
                <CardHeader>
                  <CardAction>
                    <Badge variant="secondary">Games</Badge>
                  </CardAction>
                  <CardTitle>Check your knowledge</CardTitle>
                  <CardDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At purus tellus arcu sit nibh consectetur.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full">Play our Game</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* information section */}
      <div className="px-6 sm:px-20 py-20 items-center bg-blue-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-40 text-left">
          <div className="place-items-center self-center">
            <h2 className="text-3xl md:text-4xl font-bold font-source-serif-4 my-5">
              Our information comes from all <span className="text-blue-600">trusted sources</span>
            </h2>
          </div>
          <div className="items-center grid grid-cols-[2rem_1fr] sm:grid-cols-[2.5rem_1fr] gap-x-3 gap-y-5">
            <div className="flex justify-center">
              <CheckIcon className="text-white bg-blue-800 rounded-full p-1" size={32} />
            </div>
            <div>
              <h2 className="text-xl sm:text-xl font-source-serif-4 font-medium text-blue-600">100% peer reviewed papers</h2>
              <p className="font-inter text-slate-600 text-sm my-2">Our content is based on information from peer-reviewed studies, with source to the original paper.</p>
            </div>
            <div className="flex justify-center">
              <CheckIcon className="text-white bg-blue-800 rounded-full p-1" size={32} />
            </div>
            <div>
              <h2 className="text-xl sm:text-xl font-source-serif-4 font-medium text-blue-600">Up to date glossary</h2>
              <p className="font-inter text-slate-600 text-sm my-2">Our glossary is updated regularly to make sure definitions stay clear, accurate, and easy to understand.</p>
            </div>
            <div className="flex justify-center">
              <CheckIcon className="text-white bg-blue-800 rounded-full p-1" size={32} />
            </div>
            <div>
              <h2 className="text-xl sm:text-xl font-source-serif-4 font-medium text-blue-600">Advised by Professor Danvi Simhardi</h2>
              <p className="font-inter text-slate-600 text-sm my-2">This platform is created with guidance from an experienced researcher at Purdue University to help ensure quality and accuracy.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center justify-center mx-auto max-w-7xl flex-auto">
        <div className="px-6 sm:px-20 py-20 grid grid-row">
          <h3 className="text-left text-2xl pb-5 sm:text-3xl font-medium font-source-serif-4 text-blue-600">Frequently asked questions</h3>
          <Accordion type="single" collapsible defaultValue="shipping" className="max-w-6xl">
            <AccordionItem value="definition">
              <AccordionTrigger>What is LearnMRI?</AccordionTrigger>
              <AccordionContent>
                LearnMRI is a visual learning platform designed to help students and beginners understand brain MRI scans through interactive visuals,
                clear explanations, and practice activities. It breaks down complex medical imaging concepts into approachable, visual content.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="usecase">
              <AccordionTrigger>Who can benefit from using LearnMRI?</AccordionTrigger>
              <AccordionContent>
                BrainMRI is made for:
                <ul className="list-disc pl-5 mt-2">
                  <li className="marker:text-blue-600">Students learning neuroscience, psychology, or medical imaging
                  </li>
                  <li className="marker:text-blue-600">
                    Beginners without a medical background that are curious about how MRI scans work
                  </li>
                  <li className="marker:text-blue-600">
                    Anyone who wants a visual, non-intimidating way to learn brain anatomy
                    No prior medical or imaging knowledge is required.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="actions">
              <AccordionTrigger>What can I do on LearnMRI?</AccordionTrigger>
              <AccordionContent>
                You can:
                <ul className="list-disc pl-5 mt-2">
                  <li className="marker:text-blue-600">
                    Explore interactive brain MRI visualizations
                  </li>
                  <li className="marker:text-blue-600">
                    Learn key MRI and brain anatomy terms
                  </li>
                  <li className="marker:text-blue-600">
                    Test your understanding through games and quizzes
                  </li>
                  <li className="marker:text-blue-600">
                    Review concepts at your own pace and return anytime
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sources">
              <AccordionTrigger> Where does the information come from?</AccordionTrigger>
              <AccordionContent>
                All educational content is based on peer-reviewed research and trusted medical sources. Definitions and explanations are reviewed and updated regularly, with guidance from academic and research professionals at Purdue University.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
}
