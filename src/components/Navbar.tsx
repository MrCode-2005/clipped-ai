"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "AI Studio", href: "#", badge: "SORA" },
    { label: "Our AI", href: "#" },
    { label: "Use Cases", href: "#", hasDropdown: true },
    { label: "Tools", href: "#", hasDropdown: true },
    { label: "Resources", href: "#", hasDropdown: true },
    { label: "Pricing", href: "#" },
    { label: "API", href: "#" },
];

function LogoIcon() {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5 0H14.81V35.3H20.5V0Z" fill="#FF9BBD" />
            <path d="M35.3 20.5V14.81H0V20.5H35.3Z" fill="#FF9BBD" />
            <path d="M17.65 21.68L13.63 17.66L0 31.28L4.03 35.31L17.65 21.68Z" fill="white" />
            <path d="M32.15 7.18L28.12 3.16L13.63 17.65L17.65 21.68L32.15 7.18Z" fill="#FF9BBD" />
            <path d="M28.12 32.15L32.14 28.12L7.18 3.16L3.15 7.18L28.12 32.15Z" fill="#FF9BBD" />
            <path d="M17.66 13.62L13.63 17.65L17.66 21.67L21.69 17.65L17.66 13.62Z" fill="#4822A5" />
        </svg>
    );
}

function ChevronDown() {
    return (
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="ml-1 opacity-60">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function HamburgerIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-b border-gray-100"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex items-center justify-between h-[80px]">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 group">
                    <LogoIcon />
                    <span className={`font-bold text-[26px] tracking-tight ml-1 transition-colors duration-300 ${scrolled ? "text-[#3c1d76]" : "text-white"}`}>
                        Clipped Ai
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`nav-link relative flex items-center gap-0.5 px-3 py-2 text-sm transition-colors duration-200 ${scrolled ? "text-[#3c1d76] hover:text-[#5a32a3]" : "text-white/80 hover:text-white"
                                }`}
                        >
                            {link.label}
                            {link.badge && (
                                <span className="ml-1 text-[10px] font-bold bg-[#e2dee9] text-[#3c1d76] px-1.5 py-0.5 rounded-sm leading-none">
                                    {link.badge}
                                </span>
                            )}
                            {link.hasDropdown && <ChevronDown />}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href="#"
                        className={`text-sm font-semibold tracking-wider transition-colors px-4 py-2 ${scrolled ? "text-[#3c1d76] hover:text-[#5a32a3]" : "text-white hover:text-white/80"}`}
                    >
                        SIGN IN
                    </a>
                    <a
                        href="#"
                        className="text-sm font-bold text-[#3c1d76] bg-[#ffb52e] px-6 py-2.5 rounded-full hover:bg-yellow-400 transition-colors duration-200 shadow-[0_4px_14px_0_rgba(255,181,46,0.39)]"
                    >
                        SIGN UP FOR FREE
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className={`lg:hidden p-2 transition-colors duration-300 ${scrolled ? "text-[#3c1d76]" : "text-white"}`}
                >
                    {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`lg:hidden overflow-hidden ${scrolled ? "bg-white border-t border-gray-100 shadow-xl" : "bg-vizard-deep/95 backdrop-blur-xl border-t border-white/10"}`}
                    >
                        <div className="px-6 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${scrolled ? "text-[#3c1d76] hover:bg-gray-50" : "text-white/80 hover:text-white hover:bg-white/5"}`}
                                >
                                    {link.label}
                                    {link.badge && (
                                        <span className="text-[10px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded-sm">
                                            {link.badge}
                                        </span>
                                    )}
                                </a>
                            ))}
                            <div className="pt-4 space-y-3 border-t border-white/10 mt-2">
                                <a
                                    href="#"
                                    className="block text-center text-sm font-semibold text-white py-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
                                >
                                    SIGN IN
                                </a>
                                <a
                                    href="#"
                                    className="block text-center text-sm font-bold text-[#3c1d76] bg-[#ffb52e] py-3 rounded-full hover:bg-yellow-400 transition-colors"
                                >
                                    SIGN UP FOR FREE
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
