"use client";

import { motion } from "framer-motion";

// Legacy components removed mapped to single video design

export default function VideoPreview() {
    return (
        <section className="relative pb-20 -mt-[80px] z-10">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-[1024px] mx-auto px-6"
            >
                <div className="relative rounded-[32px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(76,29,149,0.5)] aspect-[16/9] bg-black">
                    {/* The entire contents (portrait/landscape/text) are already in the demo video! */}
                    <video
                        src="/videos/hero_demo.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>
        </section>
    );
}
