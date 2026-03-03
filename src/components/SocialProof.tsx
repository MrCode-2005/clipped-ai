"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
    { src: "/logos/index_logo_ubisoft.4df99d97.png", alt: "Ubisoft", width: 140 },
    { src: "/logos/index_logo_hopper.a4b61c87.png", alt: "Hopper", width: 130 },
    { src: "/logos/index_logo_hivery.a61e74fa.png", alt: "Hivery", width: 140 },
    { src: "/logos/index_logo_stanford.74c3cd70.png", alt: "Stanford University", width: 160 },
    { src: "/logos/index_logo_britco.727e6a9b.png", alt: "Brit+Co", width: 140 },
    { src: "/logos/index_logo_oneteam.05b6ce92.png", alt: "Oneteam", width: 160 },
    { src: "/logos/index_logo_everflow.1ff119f0.png", alt: "Everflow", width: 150 },
    { src: "/logos/index_logo_google.57cb4343.png", alt: "Google", width: 120 },
];

export default function SocialProof() {
    return (
        <section className="relative bg-[#f6f6f8] pt-32 pb-24 overflow-hidden">
            {/* Top gradient fade from Hero section */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#1a0a3e] to-transparent z-10 opacity-10 pointer-events-none" />

            {/* Scrolling Marquee */}
            <div className="relative flex overflow-hidden w-full group py-8">
                {/* Gradient Masks */}
                <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#f6f6f8] to-transparent z-10" />
                <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#f6f6f8] to-transparent z-10" />

                <motion.div
                    className="flex whitespace-nowrap items-center gap-16 px-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 35,
                        repeat: Infinity,
                    }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 min-w-[120px] sm:min-w-[150px] md:min-w-[180px]">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={80}
                                className="object-contain h-8 sm:h-10 md:h-12 w-auto"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="max-w-[1200px] mx-auto px-6 mt-20 flex flex-col md:flex-row gap-12 sm:gap-16 items-start md:items-center justify-between">
                {/* Left side text */}
                <div className="max-w-[400px]">
                    <h2 className="text-[#151b28] text-[36px] md:text-[44px] leading-[1.1] font-bold tracking-tight">
                        Trusted by 10 million+ creators & businesses
                    </h2>
                </div>

                {/* Right side Rating info */}
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 justify-items-center md:justify-items-end w-full">
                    {/* G2 */}
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-[40px] font-black text-[#151b28] leading-none">4.8</span>
                        <div className="flex text-[#ff4c29] text-sm">
                            ★<span className="text-[#ff4c29]">★</span><span className="text-[#ff4c29]">★</span><span className="text-[#ff4c29]">★</span><span className="text-[#ff4c29]">★</span>
                        </div>
                        <span className="font-bold text-[#151b28] flex items-center gap-1 mt-1">
                            <span className="text-[#ff4c29] text-xl leading-none font-black block">G</span>
                            G2
                        </span>
                    </div>

                    {/* Capterra */}
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-[40px] font-black text-[#151b28] leading-none">4.9</span>
                        <div className="flex text-[#ffb52e] text-sm">
                            ★<span className="text-[#ffb52e]">★</span><span className="text-[#ffb52e]">★</span><span className="text-[#ffb52e]">★</span><span className="text-[#ffb52e]">★</span>
                        </div>
                        <span className="font-bold text-[#151b28] flex items-center gap-1 mt-1">
                            {/* Simple simulated Capterra logo */}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L2 22h20L12 2z" fill="#0066cc" />
                                <path d="M12 2L2 22h10V2z" fill="#0052a3" />
                            </svg>
                            Capterra
                        </span>
                    </div>

                    {/* Software Advice */}
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-[40px] font-black text-[#151b28] leading-none">4.9</span>
                        <div className="flex text-[#ffb52e] text-sm">
                            ★<span className="text-[#ffb52e]">★</span><span className="text-[#ffb52e]">★</span><span className="text-[#ffb52e]">★</span><span className="text-[#ffb52e]">★</span>
                        </div>
                        <span className="font-bold text-[#151b28] text-sm text-center leading-tight mt-1 flex flex-col">
                            <span>Software</span>
                            <span>Advice</span>
                        </span>
                    </div>

                    {/* GetApp */}
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-[40px] font-black text-[#151b28] leading-none">4.9</span>
                        <div className="flex text-[#ffb52e] text-sm">
                            ★<span className="text-[#ffb52e]">★</span><span className="text-[#ffb52e]">★</span><span className="text-[#ffb52e]">★</span><span className="text-[#ffb52e]">★</span>
                        </div>
                        <span className="font-bold text-[#151b28] flex items-center gap-1 mt-1">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <rect x="4" y="4" width="16" height="16" transform="rotate(45 12 12)" fill="#00d1b2" />
                            </svg>
                            GetApp
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
