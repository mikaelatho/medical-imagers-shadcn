"use client"

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, RotateCcw } from "lucide-react";
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const flashcards = [
    { question: "What is an X-ray?", answer: "Also known as a radiograph, X-rays are the fastest form of scanning but best used for bones and alignments. While unable to scan soft tissues and smaller areas of the body, X-rays are used for fractures, misalignment, or other bone related injuries." },
    { question: "What is a CT Scan?", answer: "CT scans are much higher detailed scans of the body. They show bones and strucutre better than X-rays but use more radiation. Used best when a more detailed view is needed." },
    { question: "What is a MRI?", answer: 'An imaging technique used obtain high-detailed visuals of internal body structure. Used best for soft tissues, nerves, and other areas of the body X-rays & CT Scans do not pick up.' },
    { question: "What does the Frontal Lobe of the brain impact?", answer: 'The front area of the brain that controls function of executive functions such as planning, decision-making, and personality characteristics.' },
    { question: "What does the Parietal Lobe of the brain impact?", answer: 'The middle area behind the frontal lobe that primarly controls sense of touch and spatial awareness. This includes things such as pain, temperature, and pressure.' },
    { question: "What does the Temporal Lobe of the brain impact?", answer: 'The somewhwat lower middle area of the brain that controls hearing, language recognition, and storage of memories.' },
    { question: "What does the Occipital Lobe of the brain impact?", answer: 'The back of the brain that controls visual function and recognition of such factors such as distance, depth, and other visual vactors.' },
    { question: "What is the Cerebellum?", answer: 'Located very back of the head above the spinal cord, the Cerebellum coordinates movement, balance, and posture along with helping with motor learning like walking, running, and other things.' },
    { question: "What is the Brain Stem?", answer: 'A stalk-like structure that connects the brain to the spinal cord. It maintains important functions that you do not think about such as heart rate and breathing.' },
    { question: "What is Metastatic Disease?", answer: 'A disease when cancer cells spread from their original location, also referred to as metastasis. This is also signs of stage 4 cancer.' },
    { question: "What is Glioma?", answer: 'A tumor caused by glial cells in the brain growing out of control. Spread into 4 types, glioma can either be non-cancerous or cacnerous depending on many factors such as growth and location.' },
    { question: "What is Glioblastoma?", answer: 'The most common and aggressive type of brain cancer, Glioblastoma starts within the brain tissue itself and starts as a grade 4 tumor. It grows fast and may result in death in less than 6 months if untreated.' },
];

export default function FlashcardApp() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleNext = () => {
        setIsFlipped(false);
        // reset before changing
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % flashcards.length);
        }, 150);
    };
    const handleFlip = () => setIsFlipped(!isFlipped);

    return (
        <main>
            <div className='flex items-left justify-left px-6 sm:px-20 py-2 bg-slate-50'>
                <Button variant="outline"> <ArrowLeft className='text-slate-600'/><Link href="/games">Back to Games</Link></Button>
            </div>
            <div className='flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6'>
                <div className="flex flex-col items-center justify-center  bg-slate-50 p-4">
                    <h1 className="text-4xl sm:text-5xl font-bold font-source-serif-4 text-blue-700 mb-5">Flashcards</h1>
                    <p className="font-inter text-slate-800 sm:text-lg py-5 font-medium max-w-7xl"> Card <span className='font-bold'>{currentIndex + 1} </span> of {flashcards.length}</p>
                </div>
                {/* Flashcard Container */}
                <div className="relative w-full max-w-lg cursor-pointer h-80 perspective-1000 my-2" onClick={handleFlip}>
                    <div className={`relative w-full h-full transition-all duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                        {/* Front of Card */}
                        <Card className='absolute inset-0 backface-hidden flex items-center justify-center p-6 text-center bg-white border-2 border-slate-200 shadow-lg'>
                            <CardContent>
                                <p className="font-inter text-blue-600 text-sm pb-5 uppercase tracking-wider">Question</p>
                                <h2 className="text-2xl font-inter font-bold text-slate-800">
                                    {flashcards[currentIndex].question}
                                </h2>
                            </CardContent>
                        </Card>
                        {/* Back of Card */}
                        <Card className='absolute inset-0 backface-hidden flex items-center justify-center p-6 text-center bg-white border-2 border-blue-600 shadow-lg rotate-y-180 overflow-y-auto'>
                            <CardContent>
                                <p className="font-inter text-blue-600 text-sm mb-5 uppercase tracking-wider"></p>
                                <p className="font-inter font-medium text-slate-800 text-lg leading-relaxed">
                                    {flashcards[currentIndex].answer}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                {/* Controls */}
                <div className='flex gap-5 my-10'>
                    <Button size="lg" variant="outline" onClick={() => { setIsFlipped(false); setCurrentIndex(0); }} className="flex gap-2">
                        <RotateCcw className="text-white bg-blue-600 rounded-full p-1" size={28} /> Reset
                    </Button>
                    <Button size="lg" onClick={handleNext} className="flex gap-2" variant="default"
                    >
                        Next Card <ChevronRight className="text-white rounded-full p-1" size={28} />
                    </Button>
                </div>
            </div>
        </main>
    )

}
