import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


export default function LearnPage() {
  return (
    <div className="w-full">
      {/* front */}
      <section className="px-6 md:px-20 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h1 className="font-source-serif-4 font-bold text-[48px] leading-[48px] tracking-[-0.012em] text-[#002BB3]">
              Learn MRI
            </h1>

            <p className="font-inter font-semibold text-[18px] leading-[28px] text-[#475569] max-w-md mx-auto md:mx-0 mt-4">
              Understand the basics of MRI and how it is used to visualize the inside of the body.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-xl overflow-hidden rounded-md">
              <Image
                src="/learn1.gif"
                alt="MRI scan"
                width={530}
                height={545}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>


      {/* WHAT IS MRI */}
      <section className="px-6 sm:px-20 py-20">
        <h2 className="font-source-serif-4 font-semibold text-[32px] leading-[36px] tracking-[-0.0075em] text-[#002BB3] text-center">
          What is an MRI?
        </h2>
        <div className="max-w-[1320px] mx-auto mt-10">
          <p className="font-inter font-semibold text-[20px] leading-[28px] tracking-[-0.005em] text-slate-800">
            An MRI (Magnetic Resonance Imaging) is a medical imaging technique used to visualize internal structures of the body in detail. Compared to X-rays or CT scans, MRI uses strong magnetic fields and radio waves to create detailed images of organs, tissues, and the nervous system.
          </p>
        </div>
      </section>



      {/* how mri works */}
      <div className="px-6 sm:px-20 py-20 items-center bg-blue-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-40 text-left">
          <div className="place-items-center self-center">
            <h2 className="text-3xl md:text-4xl font-bold font-source-serif-4 my-5 text-slate-900">
              How do <span className="text-blue-600">MRIs</span> Work?
            </h2>
          </div>

          <div className="items-start grid grid-cols-[2rem_1fr] sm:grid-cols-[2.5rem_1fr] gap-x-3 gap-y-6">
            <div className="flex justify-center">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#004FF1] text-white font-inter font-semibold text-[14px] sm:h-10 sm:w-10">
                ①
              </div>
            </div>
            <div>
              <h2 className="text-xl font-source-serif-4 font-medium text-blue-600">
                Step 1: Patient positioning and preparation
              </h2>
              <p className="font-inter text-slate-600 text-sm my-2">
                The patient is positioned inside the MRI scanner, and radiofrequency coils are placed near the area being examined. These coils help send and receive signals needed to create the image.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#004FF1] text-white font-inter font-semibold text-[14px] sm:h-10 sm:w-10">
                ②
              </div>
            </div>
            <div>
              <h2 className="text-xl font-source-serif-4 font-medium text-blue-600">
                Step 2: Magnetic field and signal excitation
              </h2>
              <p className="font-inter text-slate-600 text-sm my-2">
                A strong magnetic field aligns hydrogen atoms in the body. Radiofrequency pulses are then applied, temporarily disrupting this alignment and causing the atoms to emit signals.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#004FF1] text-white font-inter font-semibold text-[14px] sm:h-10 sm:w-10">
                ③
              </div>
            </div>
            <div>
              <h2 className="text-xl font-source-serif-4 font-medium text-blue-600">
                Step 3: Signal detection and image formation
              </h2>
              <p className="font-inter text-slate-600 text-sm my-2">
                The MRI system detects the signals released by the hydrogen atoms. A computer processes these signals to construct detailed cross-sectional images of internal structures.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#004FF1] text-white font-inter font-semibold text-[14px] sm:h-10 sm:w-10">
                ④
              </div>
            </div>
            <div>
              <h2 className="text-xl font-source-serif-4 font-medium text-blue-600">
                Step 4: Image analysis and interpretation
              </h2>
              <p className="font-inter text-slate-600 text-sm my-2">
                The resulting images are reviewed to identify anatomical structures or abnormalities. These images help clinicians understand conditions and support diagnosis or learning.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* mri vs others */}
      <section className="px-6 sm:px-20 py-[60px]">
        <h2 className="text-center font-source-serif-4 font-semibold text-[32px] leading-[36px] tracking-[-0.0075em] text-[#002BB3] mb-10">
          MRI vs. Other Imaging
        </h2>

        <div className="grid gap-6 md:grid-cols-3 max-w-[1320px] mx-auto">
          {[
            {
              title: "CT Scan",
              img: "/learn2.png",
              desc: "Fast cross-sectional imaging using X-rays",
              pills: [
                "Uses X-rays and computer processing",
                "Creates detailed cross-sectional images",
                "Good for detecting bleeding and fractures",
                "Fast, often used in emergencies",
                "Uses radiation",
                "Limited soft tissue detail compared to MRI",
              ],
              color: "bg-[#AFC3FF] hover:bg-[#9FB7FF]",
            },
            {
              title: "X Ray",
              img: "/learn3.jpg",
              desc: "Quick imaging for bones and dense structures",
              pills: [
                "Uses a small amount of radiation",
                "Best for detecting bone fractures",
                "Produces 2D images",
                "Low cost and widely available",
                "Very fast scanning time",
                "Cannot show soft tissues clearly",
              ],
              color: "bg-[#8EAAFF] hover:bg-[#7C9CFF]",
            },
            {
              title: "MRI",
              img: "/learn4.jpg",
              desc: "High-detail imaging for soft tissues and organs",
              pills: [
                "Uses magnetic fields and radio waves",
                "Does not use radiation",
                "Best for brain, muscles, and organs",
                "Provides high-resolution soft tissue images",
                "Takes longer than CT or X-ray",
                "Can be noisy and uncomfortable",
              ],
              color: "bg-[#004FF1] hover:bg-[#0046E7]",
            },
          ].map((c) => (
            <Card key={c.title} className="overflow-hidden border border-[#CBD5E1] rounded-xl shadow-none">
              <CardHeader className="text-center">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-lg">
                  <Image
                    src={c.img}
                    alt={c.title}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover rounded-md"
                  />
                </div>
                <CardTitle className="mt-4 font-inter font-semibold text-[20px] leading-[28px] tracking-[-0.005em] text-center text-[#1E3A8A]">
                  {c.title}
                </CardTitle>
                <p className="font-inter text-[14px] leading-[20px] text-[#64748B]">
                  {c.desc}
                </p>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 mt-4">
                {c.pills.map((p) => (
                  <Button
                    key={p}
                    className={`w-full h-auto whitespace-normal break-words text-center px-4 py-4 rounded-lg font-inter text-[14px] leading-[20px] font-medium text-white ${c.color}`}
                  >
                    {p}
                  </Button>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button className="bg-[#BCCFFF] hover:bg-[#AFC3FF] text-white px-8">
            Link to Video
          </Button>
        </div>
      </section>

      {/* brain anatomy basics */}
        <section className="bg-[#EFF6FF] px-6 sm:px-20 py-[80px]">
          <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="font-source-serif-4 font-bold text-[48px] leading-[52px] tracking-[-0.012em] text-black">
                Brain Anatomy Basics
              </h2>
            </div>
            <div className="flex-1 flex justify-center">
              <Image
                src="/learn5.png"
                alt="Brain anatomy labeled diagram"
                width={900}
                height={600}
                className="w-full max-w-[620px] h-auto object-contain"
              />
            </div>
          </div>
        </section>


      {/* glossary */}
      <div className="items-center justify-center mx-auto max-w-7xl flex-auto">
        <div className="px-6 sm:px-20 py-20 grid grid-row">
          <h3 className="font-inter text-left text-2xl pb-5 sm:text-3xl font-medium font-source-serif-4 text-[#0046E7]">
            MRI Terminology Glossary
          </h3>

          <Accordion type="single" collapsible className="max-w-6xl">

            <AccordionItem value="mri">
              <AccordionTrigger>
                MRI (Magnetic Resonance Imaging)
              </AccordionTrigger>
              <AccordionContent>
                A medical imaging technique that uses strong magnetic fields and radio waves to create detailed images of organs, tissues, and structures inside the body.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="magnetic-field">
              <AccordionTrigger>
                Magnetic Field
              </AccordionTrigger>
              <AccordionContent>
                The strong, constant magnetic field inside the MRI scanner that aligns hydrogen atoms in the body.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="rf-pulse">
              <AccordionTrigger>
                Radio Frequency (RF) Pulse
              </AccordionTrigger>
              <AccordionContent>
                A burst of energy sent into the body during a scan that temporarily disrupts hydrogen atom alignment, allowing signals to be measured.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="signal">
              <AccordionTrigger>
                Signal
              </AccordionTrigger>
              <AccordionContent>
                The energy released by hydrogen atoms as they return to alignment. These signals are processed by a computer to form an image.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="t1">
              <AccordionTrigger>
                T1 Weighted Image
              </AccordionTrigger>
              <AccordionContent>
                An MRI image type where fat appears bright and fluid appears dark. T1 images are useful for viewing anatomical detail.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="t2">
              <AccordionTrigger>
                T2 Weighted Image
              </AccordionTrigger>
              <AccordionContent>
                An MRI image type where fluid appears bright. T2 images are often used to detect inflammation, swelling, or abnormalities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="axial">
              <AccordionTrigger>
                Axial Plane
              </AccordionTrigger>
              <AccordionContent>
                A horizontal slice dividing the body into upper and lower portions. Commonly used in brain MRI scans.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sagittal">
              <AccordionTrigger>
                Sagittal Plane
              </AccordionTrigger>
              <AccordionContent>
                A vertical slice dividing the body into left and right portions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="coronal">
              <AccordionTrigger>
                Coronal Plane
              </AccordionTrigger>
              <AccordionContent>
                A vertical slice dividing the body into front and back portions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="gray">
              <AccordionTrigger>
                Gray Matter
              </AccordionTrigger>
              <AccordionContent>
                Brain tissue that contains nerve cell bodies and is involved in processing and cognition.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="white">
              <AccordionTrigger>
                White Matter
              </AccordionTrigger>
              <AccordionContent>
                Brain tissue made up of nerve fibers that connect different areas of the brain.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="csf">
              <AccordionTrigger>
                Cerebrospinal Fluid (CSF)
              </AccordionTrigger>
              <AccordionContent>
                A clear fluid that surrounds and cushions the brain and spinal cord. It appears dark on T1 images and bright on T2 images.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>

    </div>
  )
}
