"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
    {
        num: "01",
        title: "Upload and transcribe",
        description: "Upload your local video file or paste a YouTube or Zoom link. Clipped Ai will automatically transcribe your video with high accuracy.",
        image: "/images/workflow/Upload and transcribe.webp"
    },
    {
        num: "02",
        title: 'Click "Get AI clips"',
        description: "Click the 'Get AI clips' button, and our AI will instantly identify the most engaging parts of your video to generate 30+ viral clips.",
        image: '/images/workflow/Click “Get AI clips”.webp'
    },
    {
        num: "03",
        title: "Publish and share",
        description: "Review and customize your clips with brand templates and AI captions, then export or share them directly to TikTok, Shorts, and Reels.",
        image: "/images/workflow/Publish and share.webp"
    }
];

export default function ProcessWorkflow() {
    return (
        <section className="bg-white py-24 md:py-32 overflow-hidden relative">
            <div className="max-w-[1200px] mx-auto px-6">

                <div className="text-center max-w-[800px] mx-auto mb-20 md:mb-32">
                    <h3 className="text-[#ff9bbd] tracking-widest text-sm sm:text-base font-bold uppercase mb-6" style={{ color: "transparent", backgroundClip: "text", backgroundImage: "linear-gradient(90deg, #ff9bbd, #ffb52e)" }}>
                        How it works
                    </h3>
                    <h2 className="text-[#3c1d76] text-[36px] md:text-[56px] leading-[1.1] font-900 font-extrabold tracking-tight">
                        From raw footage to social-ready clips, a workflow that just works
                    </h2>
                </div>

                <div className="space-y-32 md:space-y-40">
                    {steps.map((step, index) => {
                        const isEven = index % 2 === 1;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col gap-12 lg:gap-24 items-center ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                            >
                                {/* Text Content */}
                                <div className="flex-1 space-y-6 w-full max-w-[500px]">
                                    <div className="text-[#e2caec] text-6xl md:text-8xl font-black font-serif opacity-50 drop-shadow-sm">
                                        {step.num}
                                    </div>
                                    <h3 className="text-[#151b28] text-3xl md:text-[40px] font-extrabold tracking-tight leading-[1.1]">
                                        {step.title}
                                    </h3>
                                    <p className="text-[#4e5666] text-lg md:text-xl leading-relaxed font-medium">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Image Frame */}
                                <div className="flex-1 w-full relative">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.4 }}
                                        className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/10 border border-black/5"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[#f3e8ff] to-[#fbcfe8] opacity-30" />
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </motion.div>

                                    {/* Decorative floating shapes */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
                                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
