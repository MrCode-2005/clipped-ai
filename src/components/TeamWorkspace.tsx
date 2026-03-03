"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamWorkspace() {
    return (
        <section className="bg-[#FCFBFE] py-24 md:py-32 relative overflow-hidden z-20">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Headers */}
                <div className="text-center mb-16 md:mb-24 relative z-10 w-full flex flex-col items-center">
                    <span className="text-[#f56e9f] tracking-[0.15em] text-[15px] font-bold uppercase mb-4">
                        TEAMS WE SERVE
                    </span>
                    <h2 className="text-[#491c9c] text-[40px] md:text-[56px] leading-[1.1] font-800 font-extrabold tracking-tight">
                        Introducing Teams for Collaboration
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    {/* Image Side (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full relative"
                    >
                        <div className="relative w-full aspect-[4/3] max-w-[650px] mx-auto drop-shadow-[0_20px_40px_rgba(81,43,154,0.15)] rounded-2xl overflow-hidden">
                            <Image
                                src="/images/teams/Introducing Teams for Collaboration.webp"
                                alt="Introducing Vizard.ai Team Workspace"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain"
                            />
                        </div>
                    </motion.div>

                    {/* Text Side (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full flex flex-col items-start max-w-[500px]"
                    >
                        <h3 className="text-[#5a30b5] text-[32px] md:text-[36px] font-medium mb-6 leading-[1.25] tracking-tight">
                            Team Workspace,<br />built for every team
                        </h3>
                        <p className="text-[#4c5567] text-[17px] leading-relaxed font-light mb-10">
                            Introducing Vizard.ai's Team Workspace: Revolutionizing collaboration with a centralized hub, allowing leaders to invite members for seamless project management, real-time viewing, and sharing previews with clients or external team members.
                        </p>

                        <button className="bg-[#512b9a] hover:bg-[#3c1d76] transition-colors text-white font-bold py-4 px-8 rounded-full text-[15px] tracking-wide shadow-lg shadow-[#512b9a]/20 flex items-center gap-3">
                            INVITE MEMBERS
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
