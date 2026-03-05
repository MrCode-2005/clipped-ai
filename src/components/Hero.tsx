"use client";

import { motion } from "framer-motion";
import CTAInput from "./CTAInput";

function SparkleIcon({ className = "" }: { className?: string }) {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
            <path
                d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z"
                fill="currentColor"
            />
        </svg>
    );
}

function FloatingSnowflake({
    className = "",
    color = "#4822A5",
    size = 54,
}: {
    className?: string;
    color?: string;
    size?: number;
}) {
    return (
        <motion.div
            className={`absolute pointer-events-none ${className}`}
            animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M54 22.6H37.5L49.2 11L43 4.8L31.4 16.5V0H22.6V16.5L11 4.8L4.8 11L16.5 22.6H0V31.4H16.5L4.8 43L11 49.2L22.6 37.5V54H31.4V37.5L43 49.2L49.2 43L37.5 31.4H54V22.6ZM27 33.2L20.8 27L27 20.8L33.2 27L27 33.2Z"
                    fill={color}
                    opacity="0.15"
                />
            </svg>
        </motion.div>
    );
}

export default function Hero() {
    return (
        <section className="relative overflow-hidden flex flex-col items-center px-6 pt-[160px] pb-[120px]">
            {/* Decorative floating snowflakes */}
            <FloatingSnowflake
                className="top-[55%] left-[8%] hidden md:block"
                color="#3c1d76"
                size={70}
            />
            <FloatingSnowflake
                className="top-[35%] right-[10%] hidden md:block"
                color="#ffb52e"
                size={45}
            />
            <FloatingSnowflake
                className="bottom-[20%] right-[25%] hidden md:block"
                color="#ff9bbd"
                size={35}
            />
            <FloatingSnowflake
                className="top-[25%] left-[20%] hidden md:block"
                color="#FFFFFF"
                size={28}
            />

            {/* Announcement badge */}
            <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-1 py-1 pr-4 pl-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-[13px] sm:text-sm font-medium mb-8 hover:bg-white/15 transition-colors group"
            >
                <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full font-semibold">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    </svg>
                    NEW
                </span>
                <span>Try Veo 3, Sora 2, Nano Banana and more models on Clipped Ai</span>
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="group-hover:translate-x-0.5 transition-transform ml-1 opacity-70"
                >
                    <path
                        d="M5.25 3.5L8.75 7L5.25 10.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </motion.a>

            {/* Hero Heading */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-center max-w-[900px] mx-auto"
            >
                <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[72px] font-extrabold text-white leading-[1.1] tracking-tight">
                    Turn your long video into
                    <br />
                    <span className="relative inline-block">
                        <span className="relative z-10">viral clips </span>
                        {/* Purple asterisk near the text */}
                        <FloatingSnowflake
                            className="absolute -left-12 top-1/2 -translate-y-1/2 z-0"
                            color="#3c1d76"
                            size={40}
                        />
                    </span>
                    <span className="text-[#ffb52e] ml-2">with AI magic</span>
                </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center text-white/70 text-base sm:text-lg max-w-[720px] mx-auto mt-6 leading-relaxed"
            >
                Clipped Ai uses AI to turn your long-form videos into short clips ready for
                channels like TikTok, Instagram, YouTube Shorts, and more.
            </motion.p>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="w-full max-w-[800px] mx-auto mt-16"
            >
                <CTAInput />
            </motion.div>
        </section>
    );
}
