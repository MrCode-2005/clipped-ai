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
        </section >
    );
}
