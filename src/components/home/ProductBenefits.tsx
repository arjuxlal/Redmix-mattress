"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Activity, Wind, Repeat } from "lucide-react";
import Image from "next/image";
import { clsx } from "clsx";

const benefits = [
  {
    id: "comfort",
    title: "Comfort",
    description: "Our proprietary foam is designed with an open-cell structure that adapts to your body's unique shape.",
    icon: <Leaf size={24} />,
    image: "/images/comfort_bed.png"
  },
  {
    id: "ortho",
    title: "Ortho",
    description: "Advanced lumbar support keeps your spine perfectly aligned, no matter your sleeping position.",
    icon: <Activity size={24} />,
    image: "/images/ortho_bed.png"
  },
  {
    id: "cooling",
    title: "Cooling",
    description: "Experience sleep up to 4 degrees cooler with our advanced gel-infused breathable top layer.",
    icon: <Wind size={24} />,
    image: "/images/cooling_bed.png"
  },
  {
    id: "motion",
    title: "Motion Absorption",
    description: "Zero motion transfer means you won't feel your partner turning over in the middle of the night.",
    icon: <Repeat size={24} />,
    image: "/images/motion_bed.png"
  }
];

export default function ProductBenefits() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % benefits.length);
    }, 5000); // 5 seconds per tab
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Mobile Heading */}
        <div className="block lg:hidden mb-8">
          <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-2 block">Wake Up Winning</span>
          <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight leading-tight">
            Awaken Your Best<br />With Redmix!
          </h2>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Content Tabs */}
          <div className="w-full lg:w-1/2">
            <div className="hidden lg:block">
              <span className="text-secondary font-bold text-sm tracking-widest uppercase mb-4 block">Wake Up Winning</span>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-primary mb-12 tracking-tight leading-tight">
                Awaken Your Best<br />With Redmix!
              </h2>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const isActive = index === activeIndex;

                return (
                  <div 
                    key={benefit.id} 
                    className="relative cursor-pointer py-2 group"
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className={clsx(
                        "transition-colors duration-300",
                        isActive ? "text-primary" : "text-slate-400 group-hover:text-primary"
                      )}>
                        {benefit.icon}
                      </div>
                      <h3 className={clsx(
                        "text-2xl font-bold transition-colors duration-300",
                        isActive ? "text-primary" : "text-slate-500 group-hover:text-primary"
                      )}>
                        {benefit.title}
                      </h3>
                    </div>
                    
                    {/* Expandable Description */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-slate-500 mt-2 mb-4 leading-relaxed pr-4">
                            {benefit.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Progress Bar / Underline */}
                    <div className="h-[2px] w-full bg-slate-100 mt-4 rounded-full overflow-hidden relative">
                      {isActive ? (
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 5, ease: "linear" }}
                          className="absolute left-0 top-0 h-full bg-secondary"
                        />
                      ) : (
                        <div className="absolute left-0 top-0 h-full w-0 bg-secondary group-hover:w-[10%] transition-all duration-300" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Image Display */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 mb-8 lg:mb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={benefits[activeIndex].image}
                  alt={benefits[activeIndex].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
