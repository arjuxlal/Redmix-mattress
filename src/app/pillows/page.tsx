"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const pillows = [
  {
    id: "cloudsoft-basic",
    name: "CloudSoft Basic (Soft Foam Pillow)",
    rating: 4.8,
    reviews: "12k",
    description: "Feel: Very soft. Use: Daily use. Soft feel, peaceful sleep.",
    image: "/images/pillows/cloudsoft-basic.png"
  },
  {
    id: "comfortrest-classic",
    name: "ComfortRest Classic (Medium Foam Pillow)",
    rating: 4.7,
    reviews: "8.5k",
    description: "Feel: Medium (not too soft / not too hard). Use: All sleepers. Perfect balance support.",
    image: "/images/pillows/comfortrest-classic.png"
  },
  {
    id: "orthosupport-plus",
    name: "OrthoSupport Plus (Hard Foam Pillow)",
    rating: 4.9,
    reviews: "15k",
    description: "Feel: Firm. Use: Neck & back support. Strong support for healthy sleep.",
    image: "/images/pillows/orthosupport-plus.png"
  },
  {
    id: "dreamflex-memory",
    name: "DreamFlex Memory (Memory Foam Pillow)",
    rating: 4.8,
    reviews: "22k",
    description: "Feel: Adjusts to shape. Use: Premium comfort. Adapts to your comfort.",
    image: "/images/pillows/dreamflex-memory.png"
  },
  {
    id: "coolrest-gel",
    name: "CoolRest Gel (Gel Memory Foam)",
    rating: 4.6,
    reviews: "9k",
    description: "Feel: Cooling + soft. Use: For hot sleepers. Stay cool, sleep better.",
    image: "/images/pillows/coolrest-gel.png"
  },
  {
    id: "strongbase-rebond",
    name: "StrongBase Rebond (Rebonded Foam)",
    rating: 4.5,
    reviews: "5k",
    description: "Feel: Very hard. Use: Long lasting. Built to last.",
    image: "/images/pillows/strongbase-rebond.png"
  },
  {
    id: "softlite-fiber",
    name: "SoftLite Fiber (Fiber Pillow)",
    rating: 4.7,
    reviews: "18k",
    description: "Feel: Light & fluffy. Use: Hotel feel. Light as air comfort.",
    image: "/images/pillows/softlite-fiber.png"
  }
];

const ITEMS_PER_PAGE = 4;

export default function PillowsPage() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalPages = Math.ceil(pillows.length / ITEMS_PER_PAGE);
  const visibleItems = pillows.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  const goNext = () => {
    if (page < totalPages - 1) {
      setDirection(1);
      setPage(page + 1);
    }
  };

  const goPrev = () => {
    if (page > 0) {
      setDirection(-1);
      setPage(page - 1);
    }
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-36 md:pt-48 pb-24">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-6">
            Our <span className="text-accent">Pillows</span> Collection
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Discover the perfect pillow for your sleep style. Each Redmix pillow is crafted for maximum comfort and lasting support.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {visibleItems.map((product) => (
                <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col group">
                  <div className="relative h-[300px] w-full bg-slate-100 overflow-hidden">
                    {product.image.startsWith("http") ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" className={i === 4 && product.rating < 5 ? "fill-amber-400/30 text-amber-400/30" : "fill-amber-400 text-amber-400"} />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-slate-700">{product.rating}</span>
                      <span className="text-sm text-slate-400">({product.reviews})</span>
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-3">{product.name}</h3>
                    <p className="text-slate-600 mb-8 flex-grow leading-relaxed text-sm">{product.description}</p>

                    <a
                      href={`https://wa.me/918606524578?text=${encodeURIComponent('Hi! I am interested in buying the ' + product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-primary hover:bg-slate-800 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 hover:shadow-lg mt-auto group/btn"
                    >
                      Buy on WhatsApp
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={goPrev}
                disabled={page === 0}
                className="p-4 rounded-full border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm bg-white active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <ChevronLeft size={22} />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > page ? 1 : -1); setPage(i); }}
                    className={`h-2.5 rounded-full transition-all ${i === page ? "bg-primary w-6" : "bg-slate-300 hover:bg-slate-400 w-2.5"}`}
                    aria-label={`Page ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                disabled={page === totalPages - 1}
                className="p-4 rounded-full border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm bg-white active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
