"use client";

import { motion } from "framer-motion";
const clipTypes = [
    { title: "News", handle: "@wallstreetonline", icon: "instagram", video: "/videos/News.mp4", width: "w-[200px] sm:w-[220px]" },
    { title: "Coach", handle: "@neurospicyastrology", icon: "youtube", video: "/videos/Coach.mp4", width: "w-[260px] sm:w-[280px]" },
    { title: "Podcast", handle: "@sometherapist", icon: "youtube", video: "/videos/Podcast.mp4", width: "w-[340px] sm:w-[380px]" },
    { title: "Course", handle: "@GenfinityMedia", icon: "youtube", video: "/videos/Course.mp4", width: "w-[260px] sm:w-[280px]" },
    { title: "TV Show", handle: "@oscarsamayoar", icon: "instagram", video: "/videos/Tv show.mp4", width: "w-[200px] sm:w-[220px]" },
    { title: "Interview", handle: "@sandroforte", icon: "youtube", video: "/videos/Interview.mp4", width: "w-[260px] sm:w-[280px]" },
];

function SocialIcons() {
    return (
        <div className="flex gap-4 justify-center mt-10 mb-12 z-10 relative">
            {/* TikTok */}
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M19.589 6.686a4.793 4.793 0 01-3.97-1.587 4.908 4.908 0 01-1.282-3.877h-3.69v15.01a3.524 3.524 0 01-3.522 3.524 3.524 3.524 0 01-3.524-3.524 3.524 3.524 0 013.524-3.522c.28 0 .552.033.81.094v-3.79a7.252 7.252 0 00-.81-.045 7.284 7.284 0 00-7.282 7.282 7.284 7.284 0 007.282 7.284 7.284 7.284 0 007.283-7.284V10.224a8.67 8.67 0 005.183 1.706V8.169a4.897 4.897 0 01-3.21-1.483z" fill="#000" />
                    <path d="M8.016 19.761a3.524 3.524 0 01-3.524-3.524c0-1.94 1.583-3.524 3.524-3.524.28 0 .552.033.81.094v3.784a3.567 3.567 0 01-.81 3.17z" fill="#00f2fe" style={{ mixBlendMode: 'multiply' }} />
                    <path d="M19.589 8.169V11.93a8.67 8.67 0 01-5.183-1.706V19.76a7.284 7.284 0 01-7.283 7.284v-3.76a3.524 3.524 0 003.523-3.524V11.94c0-.03.003-.062.003-.093v-7.6h3.69a4.908 4.908 0 001.282 3.877 4.793 4.793 0 003.97 1.587z" fill="#fe2c55" style={{ mixBlendMode: 'multiply' }} />
                </svg>
            </div>
            {/* YouTube */}
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="red">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.087 0 12 0 12s0 3.913.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.913 24 12 24 12s0-3.913-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            </div>
            {/* X (Twitter) */}
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="black">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </div>
            {/* Instagram */}
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="url(#ig-grad)">
                    <defs>
                        <linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2">
                            <stop offset="0%" stopColor="#feda75" />
                            <stop offset="25%" stopColor="#fa7e1e" />
                            <stop offset="50%" stopColor="#d62976" />
                            <stop offset="75%" stopColor="#962fbf" />
                            <stop offset="100%" stopColor="#4f5bd5" />
                        </linearGradient>
                    </defs>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
            </div>
            {/* Facebook */}
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877f2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            </div>
            {/* LinkedIn */}
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0a66c2">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            </div>
        </div>
    );
}

const renderPlatformIcon = (iconName: string) => {
    if (iconName === "instagram") {
        return (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="url(#ig-grad-small)">
                <defs>
                    <linearGradient id="ig-grad-small" x1="2" y1="22" x2="22" y2="2">
                        <stop offset="0%" stopColor="#feda75" />
                        <stop offset="25%" stopColor="#fa7e1e" />
                        <stop offset="50%" stopColor="#d62976" />
                        <stop offset="75%" stopColor="#962fbf" />
                        <stop offset="100%" stopColor="#4f5bd5" />
                    </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        );
    }
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="red">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.087 0 12 0 12s0 3.913.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.913 24 12 24 12s0-3.913-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    );
};

export default function ShowcaseCarousel() {
    return (
        <section className="relative bg-[#FCFBFE] pt-20 pb-24 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">
                {/* Headers */}
                <h3 className="text-[#ff9bbd] tracking-[0.15em] text-sm font-bold uppercase mb-4" style={{ color: "transparent", backgroundClip: "text", backgroundImage: "linear-gradient(90deg, #ff9bbd, #ffb52e)" }}>
                    Social-Ready Clips with AI
                </h3>
                <h2 className="text-[#3c1d76] text-[40px] md:text-[56px] leading-[1.1] font-900 font-extrabold tracking-tight text-center max-w-[800px]">
                    Turn long video into 30+ clips, <br className="hidden sm:block" /> in one click.
                </h2>

                <SocialIcons />
            </div>

            {/* Scrolling Videos */}
            <div className="relative w-full overflow-hidden pb-10 pt-4">
                <motion.div
                    className="flex gap-6 sm:gap-10 px-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 35,
                        repeat: Infinity,
                    }}
                >
                    {[...clipTypes, ...clipTypes, ...clipTypes].map((clip, index) => (
                        <div key={index} className={`flex-shrink-0 flex flex-col gap-5 ${clip.width}`}>
                            <h4 className="text-[#512b9a] font-extrabold tracking-tight text-[22px] text-center">{clip.title}</h4>
                            <div className="w-full h-[320px] sm:h-[400px] rounded-[32px] overflow-hidden shadow-sm relative transition-transform duration-300 hover:-translate-y-2">
                                <video
                                    src={clip.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex justify-between items-center px-2">
                                <span className="text-[#3c1d76] text-[15px] font-bold">{clip.handle}</span>
                                {renderPlatformIcon(clip.icon)}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Get Clips Button */}
            <div className="flex justify-center mt-12 w-full">
                <button className="bg-[#EBE2FF] hover:bg-[#E0D4FF] text-[#3c1d76] font-bold text-[15px] py-4 px-8 rounded-full transition-colors">
                    GET CLIPS FOR FREE
                </button>
            </div>
        </section>
    );
}
