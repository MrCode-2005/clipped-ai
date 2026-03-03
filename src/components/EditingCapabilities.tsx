"use client";

import { motion } from "framer-motion";

const capabilities = [
    {
        title: "Edit by text",
        description: "Edit your video just like you edit a text document.",
        image: "/images/editing/edit_by_text.webp",
    },
    {
        title: "Change ratio",
        description: "Resize any video into Shorts, Reels, TikToks, and more.",
        image: "/images/editing/change_ratio.webp",
    },
    {
        title: "Timeline editing",
        description: "Fine-tune your video and add B-roll, images, and text.",
        image: "/images/editing/timeline_editing.webp",
    },
    {
        title: "Caption translation",
        description: "Auto-translate your captions into 30+ languages.",
        image: "/images/editing/caption_translation.webp",
    },
    {
        title: "Brand template",
        description: "Save customized settings and styles for your brand.",
        image: "/images/editing/brand_template.webp",
    },
    {
        title: "Link share",
        description: "Share your video with a single link for easy collaboration.",
        image: "/images/editing/link_share.webp",
    },
];

export default function EditingCapabilities() {
    return (
        <section className="bg-white py-24 md:py-32">
            <div className="max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#3c1d76] tracking-[0.15em] text-sm font-bold uppercase block mb-4">
                        EDITING CAPABILITIES
                    </span>
                    <h2 className="text-[#3c1d76] text-[40px] md:text-[56px] leading-[1.1] font-900 font-extrabold tracking-tight">
                        Edit with AI or manual tools
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-[#f6f6f8] rounded-3xl p-8 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
                        >
                            <h3 className="text-[#3c1d76] text-2xl font-bold mb-3">{item.title}</h3>
                            <p className="text-[#3c1d76]/70 mb-8">{item.description}</p>
                            <div className="w-full mt-auto">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
