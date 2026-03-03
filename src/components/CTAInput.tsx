"use client";

import { useState } from "react";

function LinkIcon() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-white/50 shrink-0"
        >
            <path
                d="M8.33 11.67a4.17 4.17 0 005.83.46l2.5-2.5a4.17 4.17 0 00-5.9-5.9l-1.43 1.43"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11.67 8.33a4.17 4.17 0 00-5.83-.46l-2.5 2.5a4.17 4.17 0 005.9 5.9l1.42-1.43"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function UploadIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
                d="M2 10v2a2 2 0 002 2h8a2 2 0 002-2v-2M8 2v8M5 5l3-3 3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function CTAInput() {
    const [url, setUrl] = useState("");

    return (
        <div className="w-full relative flex flex-col items-center">
            {/* Desktop layout */}
            <div className="hidden md:flex items-center w-full gap-4 relative">

                {/* Tooltip Badge */}
                <div className="absolute -top-[42px] left-4 drop-shadow-md z-10 pointer-events-none">
                    <div className="bg-[#ff9bbd] text-[#3c1d76] text-xs font-bold px-3 py-1.5 rounded-md relative shadow-sm">
                        Try it free. No sign up needed
                        {/* Tooltip triangle */}
                        <div className="absolute -bottom-1 left-4 w-2.5 h-2.5 bg-[#ff9bbd] rotate-45 transform origin-center rounded-sm"></div>
                    </div>
                </div>

                {/* White Input Box */}
                <div className="flex-1 flex items-center bg-white rounded-full h-[60px] pl-6 pr-1.5 shadow-xl transition-shadow focus-within:ring-2 focus-within:ring-[#ff9bbd] focus-within:shadow-[0_0_20px_rgba(255,155,189,0.4)]">
                    <div className="flex items-center gap-3 flex-1 border-none focus-within:ring-0 h-full">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-400 shrink-0">
                            <path d="M8.33 11.67a4.17 4.17 0 005.83.46l2.5-2.5a4.17 4.17 0 00-5.9-5.9l-1.43 1.43" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.67 8.33a4.17 4.17 0 00-5.83-.46l-2.5 2.5a4.17 4.17 0 005.9 5.9l1.42-1.43" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Paste a YouTube link here"
                            className="w-full bg-transparent text-gray-800 placeholder-gray-500 text-[15px] outline-none h-full"
                        />
                    </div>
                    {/* Inner Button */}
                    <button className="shrink-0 bg-[#3c1d76] hover:bg-[#2e155b] text-white font-bold text-sm tracking-wide px-7 h-[48px] rounded-full transition-colors duration-200">
                        GET CLIPS FOR FREE
                    </button>
                </div>

                <span className="text-white/90 text-sm font-medium">or</span>

                {/* Upload Button */}
                <button className="shrink-0 flex items-center gap-2 border-[1.5px] border-white text-white font-bold text-sm tracking-wide px-7 h-[60px] rounded-full hover:bg-white/10 transition-colors duration-200">
                    <UploadIcon />
                    UPLOAD
                </button>
            </div>

            {/* Mobile layout */}
            <div className="md:hidden space-y-3 w-full relative">
                <div className="absolute -top-[38px] left-2 drop-shadow-md z-10 pointer-events-none">
                    <div className="bg-[#ff9bbd] text-[#3c1d76] text-xs font-bold px-3 py-1.5 rounded-md relative shadow-sm">
                        Try it free. No sign up needed
                        <div className="absolute -bottom-1 left-4 w-2.5 h-2.5 bg-[#ff9bbd] rotate-45 transform origin-center rounded-sm"></div>
                    </div>
                </div>

                <div className="flex items-center gap-3 bg-white rounded-full h-[56px] px-5 shadow-lg focus-within:ring-2 focus-within:ring-[#ff9bbd]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-400 shrink-0">
                        <path d="M8.33 11.67a4.17 4.17 0 005.83.46l2.5-2.5a4.17 4.17 0 00-5.9-5.9l-1.43 1.43" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.67 8.33a4.17 4.17 0 00-5.83-.46l-2.5 2.5a4.17 4.17 0 005.9 5.9l1.42-1.43" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Paste a YouTube link here"
                        className="w-full bg-transparent text-gray-800 placeholder-gray-500 text-sm outline-none h-full"
                    />
                </div>

                <button className="w-full bg-[#3c1d76] hover:bg-[#2e155b] text-white font-bold text-sm tracking-wide h-[52px] rounded-full transition-colors duration-200 shadow-md">
                    GET CLIPS FOR FREE
                </button>

                <div className="flex items-center justify-center gap-4 my-2">
                    <div className="h-px bg-white/20 flex-1"></div>
                    <span className="text-white/80 text-sm">or</span>
                    <div className="h-px bg-white/20 flex-1"></div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 border-[1.5px] border-white text-white font-bold text-sm tracking-wide h-[52px] rounded-full hover:bg-white/10 transition-colors duration-200">
                    <UploadIcon />
                    UPLOAD
                </button>
            </div>
        </div>
    );
}
