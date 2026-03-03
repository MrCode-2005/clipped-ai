"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const audiences = [
    {
        title: "Vizard for creator & podcaster",
        description: "Clip long-form videos and 10x your viewership with zero effort.",
        image: "/images/audience/who_we_help_image1.webp"
    },
    {
        title: "Vizard for coach & business owners",
        description: "Clip webinar, client calls and interviews to build your personal brand.",
        image: "/images/audience/who_we_help_image2.webp"
    },
    {
        title: "Vizard for marketers",
        description: "Turn one webinar into a month worth of social media content. Supercharge your marketing team.",
        image: "/images/audience/who_we_help_image3.webp"
    },
    {
        title: "Vizard for agency and freelancer",
        description: "Increase your output tenfold at a fraction of the cost. Let Vizard be your editing co-pilot.",
        image: "/images/audience/who_we_help_image4.webp"
    }
];

export default function AudienceGrid() {
    return (
        <section className="bg-white py-24 md:py-32 relative overflow-hidden z-20">
            {/* Background subtle gradient / glow behind title */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#fff0f4] via-[#f7f3ff] to-transparent opacity-80 pointer-events-none -z-10" />

            <div className="max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-16 md:mb-24 relative z-10 w-full flex flex-col items-center">
                    <span className="text-[#f56e9f] tracking-[0.15em] text-[15px] font-bold uppercase mb-4">
                        WHO WE HELP
                    </span>
                    <h2 className="text-[#491c9c] text-[40px] md:text-[56px] leading-[1.1] font-800 font-extrabold tracking-tight">
                        Built for everyone, every team
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">
                    {audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col gap-6"
                        >
                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md group">
                                <Image
                                    src={audience.image}
                                    alt={audience.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div>
                                <h3 className="text-[#5a30b5] text-[28px] font-medium mb-3 leading-[1.25] tracking-tight">
                                    {audience.title}
                                </h3>
                                <p className="text-[#4c5567] text-[17px] leading-relaxed font-light">
                                    {audience.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center w-full relative z-10">
                    <button className="bg-[#512b9a] hover:bg-[#3c1d76] transition-colors text-white font-bold text-[15px] py-4 px-8 rounded-full shadow-lg shadow-[#512b9a]/20">
                        GET CLIPS FOR FREE
                    </button>
                </div>

            </div>
        </section>
    );
}
