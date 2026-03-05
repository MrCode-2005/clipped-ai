"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const features = [
    {
        num: "01",
        title: "AI Clipping",
        subtitle: "Let AI find highlights and reframe\nfor TikTok, Reels and Shorts",
        description: "Clipped Ai automatically identify engaging\nmoments, cut them with one click, and\ncenter key subjects in vertical format, no\nmanual resizing needed.",
        image: "/images/features/AI Clipping.webp"
    },
    {
        num: "02",
        title: "AI Captions + AI Emoji",
        subtitle: "Captions with personality, in 50+ languages",
        description: "Add dynamic, creator-style captions and auto-generated emojis to make your videos more expressive and engaging.",
        image: "/images/features/AI Captions + AI Emoji.webp"
    },
    {
        num: "03",
        title: "AI B-roll",
        subtitle: "Keep viewers hooked with visual context",
        description: "Automatically source and insert relevant B-roll footage and images based on your video's content to keep audience retention high.",
        image: "/images/features/AI B-roll.webp"
    },
    {
        num: "04",
        title: "AI Social Caption and hashtag",
        subtitle: "Ready-to-post copy for every platform",
        description: "Generate tailored social media captions, titles, and hashtags optimized for TikTok, Instagram, YouTube, and LinkedIn in one click.",
        image: "/images/features/AI Social Caption and hashtag.webp"
    }
];

export default function AIFeatures() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Determine which feature is active based on scroll progress
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            // Divide the scroll progress into 4 equal segments
            if (latest < 0.25) setActiveIndex(0);
            else if (latest >= 0.25 && latest < 0.5) setActiveIndex(1);
            else if (latest >= 0.5 && latest < 0.75) setActiveIndex(2);
            else setActiveIndex(3);
        });
    }, [scrollYProgress]);

    return (
        <section ref={containerRef} className="relative bg-gradient-to-br from-[#4b27aa] via-[#6e3baa] to-[#a16bb5] text-white">
            {/* The scrollable height container - large enough to require scrolling */}
            <div className="h-[400vh] w-full relative">

                {/* The sticky content that stays on screen */}
                <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">

                    {/* Top Centered Header */}
                    <div className="text-center mb-16 relative z-20 w-full flex flex-col items-center">
                        <span className="text-[#ffc107] tracking-[0.15em] text-[15px] font-bold uppercase mb-4">
                            WHAT MAKES CLIPPED AI DIFFERENT?
                        </span>
                        <h2 className="text-white text-[40px] md:text-[56px] leading-[1.1] font-bold tracking-tight">
                            AI features that actually work
                        </h2>
                    </div>

                    <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12 md:gap-20 flex-1 pb-10">

                        {/* Left Side: Text Content that updates on scroll */}
                        <div className="flex-1 w-full flex items-center pl-0 md:pl-10 relative">

                            {/* Dynamic Text Box Container */}
                            <div className="flex w-full items-start gap-6 h-[300px]">

                                {/* Number Indicator */}
                                <div className="h-full pt-1 w-10 text-right">
                                    <span className="text-white font-bold text-[15px] tracking-widest">
                                        {features[activeIndex].num}
                                    </span>
                                </div>

                                {/* Vertical Line Indicator */}
                                <div className="relative w-[1px] h-[260px] bg-white/20 mt-2">
                                    <motion.div
                                        className="absolute top-0 left-0 w-[2px] -ml-[0.5px] bg-[#ff9bbd] rounded-full transition-all duration-300"
                                        style={{
                                            top: `${(activeIndex / 3) * 100}%`,
                                            height: "33%",
                                        }}
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 relative h-full pl-8">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="space-y-5 pt-0"
                                    >
                                        <h2 className="text-white text-3xl md:text-[34px] leading-tight font-medium tracking-tight">
                                            {features[activeIndex].title}
                                        </h2>
                                        <h4 className="text-white text-xl md:text-[23px] leading-[1.35] font-normal opacity-100 whitespace-pre-line">
                                            {features[activeIndex].subtitle}
                                        </h4>
                                        <p className="text-white/80 text-lg md:text-[17px] leading-[1.65] font-light max-w-[420px] whitespace-pre-line mt-6">
                                            {features[activeIndex].description}
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Sticky Image that crossfades */}
                        <div className="flex-[1.2] w-full relative flex justify-center md:justify-end pr-0 md:pr-4">
                            <div className="w-full max-w-[700px] aspect-[4/3] sm:aspect-[1.4/1] relative rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(30,10,60,0.5)]">
                                {features.map((feature, idx) => (
                                    <Image
                                        key={idx}
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className={`object-cover object-center absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                                            }`}
                                        priority={idx === 0}
                                    />
                                ))}
                            </div>

                            {/* Decorative lighting */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-pink-500/20 to-purple-400/20 mix-blend-screen filter blur-3xl pointer-events-none -z-10" />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
