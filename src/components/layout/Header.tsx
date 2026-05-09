"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const announcements = [
  "Sale is live",
  "5 year warranty",
  "Free Delivery"
];
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Logo from "@/components/ui/Logo";
import Link from "next/link";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed header wrapper */}
      <div className="fixed top-0 left-0 right-0 w-full z-[100] flex flex-col items-center pointer-events-none">
        {/* Announcement bar */}
        <div className={cn(
          "bg-primary text-white text-sm font-medium flex justify-center items-center transition-all duration-300 w-full tracking-wide pointer-events-auto overflow-hidden",
          isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"
        )}>
          <AnimatePresence mode="wait">
            <motion.div
              key={announcementIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {announcements[announcementIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pill header */}
        <div className={cn(
          "w-full px-4 transition-all duration-300 flex justify-center pointer-events-none",
          isScrolled ? "mt-4" : "mt-4 md:mt-6"
        )}>
          <header
            className={cn(
              "pointer-events-auto transition-all duration-300 w-full max-w-5xl rounded-full",
              isScrolled ? "h-16" : "h-16 md:h-20",
              mobileMenuOpen
                ? "bg-transparent shadow-none border-transparent"
                : cn("border border-slate-200/50 glassmorphism shadow-lg", isScrolled ? "bg-white/95" : "bg-white/90")
            )}
          >
            <div className="px-6 md:px-10 h-full flex items-center justify-center md:justify-between relative">
              {/* Mobile hamburger - absolutely positioned left */}
              <button
                className="md:hidden absolute left-6 p-2 text-primary z-50 transition-transform active:scale-95"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Logo — centered on mobile, left on desktop */}
              <a href="/" className="flex items-center text-primary group transition-transform hover:scale-[1.02]">
                <Logo className="h-8 md:h-10 w-auto text-primary" />
              </a>

              {/* Desktop nav */}
              <nav className="hidden md:flex items-center space-x-10 h-full">
                <Link href="/mattresses" className="font-semibold text-primary hover:text-secondary transition-colors">Mattresses</Link>
                <Link href="/pillows" className="font-semibold text-primary hover:text-secondary transition-colors">Pillows</Link>
                <Link href="/faq" className="font-semibold text-primary hover:text-secondary transition-colors">FAQ</Link>
                <Link href="/#reviews" className="font-semibold text-primary hover:text-secondary transition-colors">Reviews</Link>
              </nav>
            </div>
          </header>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-white z-[90] flex flex-col pt-[120px] px-8 transition-all duration-300 md:hidden",
        mobileMenuOpen
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-4"
      )}>
        <nav className="flex flex-col gap-4 text-xl font-bold text-primary">
          <Link href="/mattresses" className="block px-8 py-4 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors" onClick={() => setMobileMenuOpen(false)}>Mattresses</Link>
          <Link href="/pillows" className="block px-8 py-4 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors" onClick={() => setMobileMenuOpen(false)}>Pillows</Link>
          <Link href="/faq" className="block px-8 py-4 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
          <Link href="/#reviews" className="block px-8 py-4 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors" onClick={() => setMobileMenuOpen(false)}>Reviews</Link>
        </nav>
      </div>

    </>
  );
}
