"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Muhammad Manzoor KN",
    location: "Kerala",
    rating: 5,
    text: "I like it. The one of the best mattress in Kerala.",
    image: "bg-blue-100 text-blue-700"
  },
  {
    id: 2,
    name: "Umar Mukthar",
    location: "Customer",
    rating: 5,
    text: "Medicated bed is useful product. Highly recommended for back support.",
    image: "bg-emerald-100 text-emerald-700"
  },
  {
    id: 3,
    name: "Abnoos bin yasir vm",
    location: "Customer",
    rating: 5,
    text: "Emma model mattress is very nice.",
    image: "bg-amber-100 text-amber-700"
  },
  {
    id: 4,
    name: "Hashim Ff",
    location: "Customer",
    rating: 5,
    text: "Good mattress. I like it. The best choice.",
    image: "bg-rose-100 text-rose-700"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrentIndex((current) => (current + 1) % testimonials.length);
  };
  const prev = () => {
    setDirection(-1);
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-slate-50 rounded-tl-[100px] -z-10" />

      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">Don't just take our word for it.</h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <span className="font-bold text-lg text-primary">4.9/5 Average Rating</span>
          </div>
          <p className="text-slate-500 text-lg">
            Join thousands of well-rested customers who have upgraded their sleep experience with Redmix.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side: Image */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/images/girl_on_mattress.png" 
                alt="Woman relaxing on Redmix Mattress" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Side: Testimonials Slider */}
          <div className="w-full lg:w-1/2 relative h-[350px] md:h-[400px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={{
                  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60, scale: 0.97 }),
                  center: { opacity: 1, x: 0, scale: 1 },
                  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60, scale: 0.97 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.38, ease: "easeInOut" }}
                className="absolute inset-0 bg-white border border-slate-100 rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col justify-center overflow-hidden"
              >
                {/* Decorative floating stars in background */}
                <motion.div
                  key={`deco-${currentIndex}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15, duration: 0.5, ease: "backOut" }}
                  className="absolute top-5 right-6 flex gap-1 opacity-10"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                    >
                      <Star size={28} fill="#f59e0b" className="text-amber-400" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Animated quote mark */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 0.07, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="absolute -top-2 left-8 text-[120px] font-black text-primary leading-none select-none pointer-events-none"
                >
                  &ldquo;
                </motion.div>

                <div className="flex text-amber-400 mb-6 md:mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.3, ease: "backOut" }}
                    >
                      <Star size={20} fill="currentColor" />
                    </motion.div>
                  ))}
                </div>

                <motion.blockquote
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.4 }}
                  className="text-lg md:text-xl lg:text-2xl font-medium text-primary leading-relaxed mb-6 md:mb-8 flex-grow relative z-10"
                >
                  "{testimonials[currentIndex].text}"
                </motion.blockquote>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.4 }}
                  className="flex items-center justify-between mt-auto"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${testimonials[currentIndex].image} flex items-center justify-center font-bold text-lg md:text-xl shrink-0`}>
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-base md:text-lg">{testimonials[currentIndex].name}</h4>
                      <div className="flex items-center gap-1 text-xs md:text-sm text-slate-500">
                        <BadgeCheck size={16} className="text-secondary shrink-0" />
                        <span className="truncate">Verified Buyer &bull; {testimonials[currentIndex].location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls placed outside the animated div to remain static */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:bottom-8 md:left-auto md:right-8 md:translate-x-0 flex gap-3 z-10">
              <button 
                onClick={prev}
                className="p-3 md:p-4 rounded-full border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm bg-white active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={next}
                className="p-3 md:p-4 rounded-full border border-slate-200 text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm bg-white active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
