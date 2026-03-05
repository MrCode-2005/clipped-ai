"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
    Tools: [
        "API", "AI podcast clip generator", "AI video editor", "AI video generator",
        "Auto subtitle generator", "Auto video editor", "Instagram video editor",
        "TikTok video editor", "Video translator", "YouTube clip maker",
        "YouTube shorts maker", "Transcribe Audio to Text", "All tools"
    ],
    "Who we help": [
        "Social media marketer", "Content marketer", "Performance marketer",
        "Event marketer", "Podcaster", "Coach", "Consultant", "Agency"
    ],
    Blog: [
        "All You Need to Know about LinkedIn's New Short-Form Video Beta Feature",
        "How to Start a Podcast on YouTube: 10 Easy and Effective Strategies",
        "YouTube Shorts Hashtags: everything you need to know (2024 updated)",
        "Ultimate Guide to Create YouTube Clips",
        "TikTok Tips to Maximize Your Success (2024 Guide)",
        "Mastering Social Media Growth: How SEO Can Unlock Rapid Success Across Platforms",
        "6 Essential Tips to Grow Your Podcast Audience: A New Podcaster's Guide"
    ],
    Resources: [
        "Blog", "Knowledge Base", "Video tutorials", "Help center",
        "Clipped Ai vs Opus", "Clipped Ai vs Capcut", "Clipped Ai vs Vidyo",
        "Clipped Ai vs Getmunch", "Clipped Ai vs Captions", "Clipped Ai vs Submagic", "Clipped Ai vs Veed"
    ],
    Company: [
        "About", "Contact us", "Affiliate", "Roadmap"
    ]
};

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#3c1d76] text-white pt-24 pb-8 relative overflow-hidden">
            {/* Decorative Stars */}
            <svg className="absolute top-10 right-1/3 opacity-20 w-12 h-12" viewBox="0 0 46 46" fill="currentColor"><path d="M23 0v46M0 23h46M6.7 6.7l32.6 32.6M6.7 39.3L39.3 6.7" stroke="currentColor" strokeWidth="4" /></svg>
            <svg className="absolute bottom-32 right-32 opacity-20 w-16 h-16" viewBox="0 0 46 46" fill="currentColor"><path d="M23 0v46M0 23h46M6.7 6.7l32.6 32.6M6.7 39.3L39.3 6.7" stroke="currentColor" strokeWidth="4" /></svg>
            <svg className="absolute bottom-20 left-20 opacity-20 w-24 h-24" viewBox="0 0 46 46" fill="currentColor"><path d="M23 0v46M0 23h46M6.7 6.7l32.6 32.6M6.7 39.3L39.3 6.7" stroke="currentColor" strokeWidth="4" /></svg>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 justify-between">

                    {/* Left Column: Logo & Socials */}
                    <div className="flex flex-col gap-6 w-full lg:w-[280px] shrink-0">
                        <Link href="/" className="flex items-center gap-2">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 0V32M0 16H32M4.68629 4.68629L27.3137 27.3137M4.68629 27.3137L27.3137 4.68629" stroke="#ff9bbd" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                            <span className="text-3xl font-black tracking-tight text-white mb-1">Clipped Ai</span>
                        </Link>

                        <div className="bg-white rounded-2xl p-3 w-[150px] aspect-square flex items-center justify-center">
                            {/* QR Code Placeholder */}
                            <div className="w-full h-full bg-gray-200 border-4 border-gray-300 rounded-md grid grid-cols-4 grid-rows-4 gap-1 p-1">
                                {[...Array(16)].map((_, i) => <div key={i} className="bg-gray-800 rounded-sm" style={{ opacity: Math.random() > 0.3 ? 1 : 0 }} />)}
                            </div>
                        </div>
                        <p className="text-sm font-medium">Get the iOS App</p>

                        {/* Social Icons (Yellow) */}
                        <div className="flex gap-4 text-[#ffb52e] flex-wrap w-[150px]">
                            {/* X */}
                            <svg className="w-6 h-6 fill-current hover:text-white transition-colors cursor-pointer" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            {/* IG */}
                            <svg className="w-6 h-6 fill-current hover:text-white transition-colors cursor-pointer" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                            {/* TikTok */}
                            <svg className="w-6 h-6 fill-current hover:text-white transition-colors cursor-pointer" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                            {/* LinkedIn */}
                            <svg className="w-6 h-6 fill-current hover:text-white transition-colors cursor-pointer" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            {/* YouTube */}
                            <svg className="w-6 h-6 fill-current hover:text-white transition-colors cursor-pointer" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </div>
                    </div>

                    {/* Columns of links */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category} className="flex flex-col gap-5">
                                <h4 className="text-[#ffb52e] font-bold text-base">{category}</h4>
                                <ul className="flex flex-col gap-3">
                                    {links.map((link, idx) => (
                                        <li key={idx}>
                                            <Link href="#" className="text-gray-300 hover:text-white text-sm transition-colors block">
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
                    <p>© Clipped Ai, Corp. All rights reserved</p>
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                        <Link href="#" className="hover:text-white transition-colors">Terms of service</Link>
                        <span>|</span>
                        <Link href="#" className="hover:text-white transition-colors">Privacy policy</Link>
                        <span>|</span>
                        <Link href="#" className="hover:text-white transition-colors">Cookie policy</Link>
                        <span>|</span>
                        <Link href="#" className="hover:text-white transition-colors">Google API services usage disclosure</Link>
                        <span>|</span>
                        <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>

                {/* Back to top button */}
                <button
                    onClick={scrollToTop}
                    className="absolute right-0 bottom-4 w-12 h-12 bg-[#ffbfde] hover:bg-[#ff9bbd] text-[#3c1d76] rounded-full flex items-center justify-center transition-colors shadow-lg"
                    aria-label="Scroll to top"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
                </button>
            </div>
        </footer>
    );
}
