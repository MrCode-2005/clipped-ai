"use client";

import { motion } from "framer-motion";

export default function SocialClips() {
    return (
        <section className="relative bg-[#f6f6f8] pt-20 pb-32 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center space-y-4 mb-20"
                >
                    <span className="text-[#ff9bbd] tracking-[0.15em] text-sm font-bold uppercase" style={{ color: "transparent", backgroundClip: "text", backgroundImage: "linear-gradient(90deg, #ff9bbd, #ffb52e)" }}>
                        SOCIAL-READY CLIPS
                    </span>
                    <h2 className="text-[#3c1d76] text-[40px] md:text-[56px] leading-[1.1] font-900 font-extrabold tracking-tight max-w-[800px]">
                        Turn long video into 30+ clips, <br className="hidden sm:block" /> in one click.
                    </h2>

                    {/* Social Icons row (optional static elements to match original) */}
                    <div className="flex gap-4 mt-8">
                        {['youtube', 'tiktok', 'instagram', 'linkedin'].map((social, i) => (
                            <div key={i} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                                {/* Placeholder dot for social icons */}
                                <div className="w-4 h-4 rounded-full bg-gray-200" />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Grid of Phones */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    {/* Phone 1: Original */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <span className="text-[#3c1d76] font-bold">16:9</span>
                        <img
                            src="/images/social_phone_1.webp"
                            alt="16:9 Aspect Ratio"
                            className="w-full max-w-[280px] drop-shadow-xl"
                        />
                    </motion.div>

                    {/* Phone 2: TikTok/Shorts (9:16) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <span className="text-[#3c1d76] font-bold">9:16</span>
                        <img
                            src="/images/social_phone_2.webp"
                            alt="9:16 Aspect Ratio"
                            className="w-full max-w-[280px] drop-shadow-xl rounded-[2.5rem]"
                        />
                    </motion.div>

                    {/* Phone 3: Instagram (1:1 or 4:5) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <span className="text-[#3c1d76] font-bold">1:1</span>
                        <img
                            src="/images/social_phone_3.webp"
                            alt="1:1 Aspect Ratio"
                            className="w-full max-w-[280px] drop-shadow-xl"
                        />
                    </motion.div>

                    {/* Phone 4: LinkedIn (landscape/square mix) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <span className="text-[#3c1d76] font-bold">4:5</span>
                        <img
                            src="/images/social_phone_4.webp"
                            alt="4:5 Aspect Ratio"
                            className="w-full max-w-[280px] drop-shadow-xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
