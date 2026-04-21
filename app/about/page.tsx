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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const basePath =
  process.env.NODE_ENV === "production"
    ? "/medical-imagers-shadcn"
    : "";

const teamMembers = [
  { name: "Ren", role: "Data Vis", img: "RenLagman.jpg" },
  { name: "Linh", role: "UX Design", img: "LinhPham.png" },
  { name: "Jasmine", role: "UX Design", img: "JasmineBui.jpg" },
  { name: "Mikaela", role: "Web Dev", img: "MikaelaThompson.png" },
  { name: "Elijah", role: "Game Dev", img: "elijah.png" },
  { name: "Anderson", role: "UX Design", img: "Anderson Tsan.jpg" },
  { name: "Kimberly", role: "UX Design", img: "kimberly.png" },
  { name: "Kaylee", role: "UX Design", img: "KayleeYoung.jpg" },
  { name: "Ethan", role: "Game Dev", img: "Ethan Baxter.png" },
  { name: "Macy", role: "UX Design", img: "MacyBosworth.jpg" },
  { name: "Erika", role: "UX Design", img: "ErikaShin.jpg" },
  { name: "Vito", role: "Web Dev", img: "VitoHerce.JPG" },
  { name: "Alex", role: "Game Dev", img: "alex.png" },
];

// below is the page contents
export default function About() {
  return (
    <main>
      {/*main page content (edit in div below)*/}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 items-center justify-center max-w-7xl flex-auto"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/6 rotate-[40deg] bg-gradient-to-tr from-[#9089fc] to-[#BFFFF6] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="items-center justify-center mx-auto max-w-7xl flex-auto min-h-screen">
        <div className="px-6 sm:px-20 py-20">
          <h1 className="text-4xl sm:text-5xl font-bold font-source-serif-4 text-blue-700 my-5">About</h1>
          <p className="font-inter text-slate-800 py-5 max-w-7xl">BrainMRI was created to allow medical terms to be accessible for learners of all ages.  We collaborated with professors from Purdue University to input data from real MRI scans, and our team worked to create this website from scratch as well as implement fun games to encourage the quest for knowledge.</p>
          <h3 className="text-center text-2xl pt-10 sm:text-3xl font-medium font-source-serif-4 text-blue-600">Meet the Team</h3>
          
          {/* meet the team */}
          <div id="meet-the-team" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 py-8">
            {teamMembers.map((member) => (
              <div key={member.name}>
                <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden">
                  <div className="rounded-t-lg absolute inset-0 z-30 aspect-[3/4] bg-black/5" />
                  <img
                    src={`${basePath}/${member.img}`}
                    alt={`${member.name} profile photo`}
                    className="rounded-t-lg relative z-20 aspect-[3/4] w-full object-cover object-top brightness-100 dark:brightness-40"
                  />
                  <CardHeader className="p-3">
                    <CardAction />
                    <CardTitle className="text-center text-base leading-tight">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-center text-xs mt-1">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6 sm:px-20 lg:px-40 py-20 bg-blue-50">
        <h3 className="text-left text-2xl pb-5 sm:text-3xl font-medium font-source-serif-4 text-blue-600">Learning Objectives</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-15 med:gap-20">
          <div className="flex flex-col items-center text-center">
            <HandHelpingIcon className="text-white bg-blue-800 rounded-full p-2" size={40}></HandHelpingIcon>
            <h4 className="py-5 text-xl sm:text-xl font-source-serif-4 font-medium text-blue-600">Accessibility</h4>
            <p className="font=inter text-slate-800 text-sm">BrainMRI was created to allow medical terms to be accessible for learners of all ages.  We collaborated with professors from Purdue University to input data from real MRI scans, and our team worked to create this website from scratch as well as implement fun games to encourage the quest for knowledge.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <LaptopMinimalIcon className="text-white bg-blue-800 rounded-full p-2" size={40}></LaptopMinimalIcon>
            <h4 className="py-5 text-xl sm:text-xl font-source-serif-4 font-medium text-blue-600">Ease of Learning</h4>
            <p className="font=inter text-slate-800 text-sm">BrainMRI was designed to make real MRI data and medical terms understandable to a wide audience. Our team made sure throughout development that our website remained worded in a way that ensures learners could comprehend more complex medical terms and images surrounding MRIs without feeling frustrated.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <ZapIcon className="text-white bg-blue-800 rounded-full p-2" size={40}></ZapIcon>
            <h4 className="py-5 text-xl sm:text-xl font-source-serif-4 font-medium text-blue-600">Engaging Experience</h4>
            <p className="font=inter text-slate-800 text-sm">Our team believes that one of the best way to learn material is to engage with it. That’s why we made sure to implement games into our website- to make sure MRI images and terms could be interacted with in a fun and meaningful way that helps learners learn without it feeling like a burden.</p>
          </div>
        </div>
      </div>
      {/* data sources */}
      <div id="data-sources" className="px-6 sm:px-20 py-20 mx-auto max-w-7xl flex-auto min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <h3 className="text-left text-2xl pb-5 sm:text-3xl font-medium font-source-serif-4 text-blue-600">
              Data Sources
            </h3>
            <h4 className="text-left text-lg pb-5 sm:text-xl font-bold font-source-serif-4 text-blue-400 py-5">1. Medical Journals<br />
              2. Focus Groups<br />
              3. Advisor-Guided Process</h4>
            <p className="font=inter text-slate-800">
              Our data comes from trusted medical journals. We conducted thorough literature review and user testing to ensure that our website achieves our goals.
            </p>
          </div>
          <div className="flex justify-center items-center">
            {/* scrollable List of sources go here */}
            <ScrollArea className="bg-[#fcfcfc] shadow-sm h-72 w-full max-w-md lg:max-w-lg rounded-md border p-4">
              <p className="py-4">Centers for Disease Control and Prevention (U.S). Facts About Computed Tomography (CT) Scans (<Link className='underline' href='https://www.cdc.gov/radiation-health/data-research/facts-stats/ct-scans.html?CDC_AAref_Val=https://www.cdc.gov/nceh/radiation/ct_scans.html'>https://www.cdc.gov/radiation-health/data-research/facts-stats/ct-scans.html?CDC_AAref_Val=https://www.cdc.gov/nceh/radiation/ct_scans.html</Link>). Last updated 2/2024.
              </p>
              <Separator></Separator>
              <p className="py-4">X-Rays. (2026). Medlineplus.gov; National Library of Medicine. <Link className='underline' href='https://medlineplus.gov/xrays.html'>https://medlineplus.gov/xrays.html</Link>
              </p>
              <Separator></Separator>
              <p className="py-4">Magnetic Resonance Imaging (MRI). (2026). National Institute of Biomedical Imaging and Bioengineering. <Link className='underline' href='https://www.nibib.nih.gov/science-education/science-topics/magnetic-resonance-imaging-mri'>https://www.nibib.nih.gov/science-education/science-topics/magnetic-resonance-imaging-mri</Link></p>
              <ScrollBar />
              <Separator></Separator>
              <p className="py-4">Brain Basics: Know Your Brain. (2025). National Institute of Neurological Disorders and Stroke. <Link className='underline' href='https://www.ninds.nih.gov/health-information/public-education/brain-basics/brain-basics-know-your-brain'>https://www.ninds.nih.gov/health-information/public-education/brain-basics/brain-basics-know-your-brain</Link>
              </p>
              <Separator></Separator>
              <p className="py-4">Decoding the Language of MRI Technicians - CNI College. Cnicollege.edu. <Link className='underline' href='https://cnicollege.edu/blog/mri-technology/decoding-language-mri-technicians/'>https://cnicollege.edu/blog/mri-technology/decoding-language-mri-technicians/</Link>
              </p>
              <Separator></Separator>
              <p className="py-4">Brain Anatomy and How the Brain Works. (2025, April 4). Hopkinsmedicine.org. <Link className='underline' href='https://www.hopkinsmedicine.org/health/conditions-and-diseases/anatomy-of-the-brain'>https://www.hopkinsmedicine.org/health/conditions-and-diseases/anatomy-of-the-brain</Link>
              </p>
              <Separator></Separator>
              <p className="py-4">MRI Procedure - What to Do Before, During & After an MRI | UH Cleveland | University Hospitals. (2026). Uhhospitals.org.<Link className='underline' href='https://www.uhhospitals.org/services/radiology-services/radiology-procedures/magnetic-resonance-imaging-mri/what-to-expect'> https://www.uhhospitals.org/services/radiology-services/radiology-procedures/magnetic-resonance-imaging-mri/what-to-expect</Link>
              </p>
              <Separator></Separator>
              <p className="py-4">RadiologyInfo.org. Head MRI (<Link className="underline" href='https://www.radiologyinfo.org/en/info/headmr'>https://www.radiologyinfo.org/en/info/headmr</Link>). </p>
              <Separator></Separator>
              <p className="py-4">U.S. Food and Drug Administration. MRI (Magnetic Resonance Imaging) (<Link className="underline" href='https://www.fda.gov/radiation-emitting-products/medical-imaging/mri-magnetic-resonance-imaging'>https://www.fda.gov/radiation-emitting-products/medical-imaging/mri-magnetic-resonance-imaging</Link>).
              </p>
            </ScrollArea>

          </div>
        </div>

        {/* FAQ */}
        <h3 id="faq" className="text-left text-2xl pt-20 pb-5 sm:text-3xl font-medium font-source-serif-4 text-blue-600">
          Frequently Asked Questions
        </h3>
        <Accordion type="single" collapsible defaultValue="shipping" className="max-w-6xl">
          <AccordionItem value="q1">
            <AccordionTrigger>What are some of the key terms?</AccordionTrigger>
            <AccordionContent>
              Key Terms, like MRI, T1, T2 and more can be found on the Learn and Explore pages.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>Is the information on LearnMRI from credible sources?</AccordionTrigger>
            <AccordionContent>
              Yes. All information comes from trusted, medical sources and a professor at renowned higher education institutions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>Where can I learn more information?</AccordionTrigger>
            <AccordionContent>
              Visiting the sources listed above is a great way to dive deeper into MRI information that interests you.
              You can also contact our team with any questions at medicalimagers@gmail.com
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q4">
            <AccordionTrigger> Has this site been reviewed?</AccordionTrigger>
            <AccordionContent>
              Yes, the creation of this website at each release update has been reviewed by Professor Danvi Simhardi at Purdue University.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main >
  );
}
