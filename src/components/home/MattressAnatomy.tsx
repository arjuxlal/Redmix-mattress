"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Wind, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { clsx } from "clsx";

const layers = [
  {
    id: "cooling",
    title: "Cooling Gel Memory Foam",
    description: "Our proprietary 2-inch top layer pulls heat away from your body, maintaining an optimal sleep temperature all night long.",
    icon: <Wind size={24} />,
    image: "/images/layer1.jpeg"
  },
  {
    id: "transition",
    title: "Adaptive Transition Foam",
    description: "A 3-inch responsive layer that provides targeted pressure relief and prevents the 'sinking' feeling while moving.",
    icon: <Layers size={24} />,
    image: "/images/layer2.jpeg"
  },
  {
    id: "base",
    title: "High-Density Support Base",
    description: "Engineered 7-inch foundation ensures structural integrity, edge support, and long-lasting durability for decades.",
    icon: <ShieldCheck size={24} />,
    image: "/images/layer3.jpeg"
  }
];

export default function MattressAnatomy() {
  const [activeLayer, setActiveLayer] = useState(layers[0].id);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveLayer((current) => {
        const currentIndex = layers.findIndex(l => l.id === current);
        const nextIndex = (currentIndex + 1) % layers.length;
        return layers[nextIndex].id;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 tracking-tight">The Science of Sleep</h2>
          <p className="text-slate-500 text-lg md:text-xl">Every Redmix mattress is precision-engineered with advanced materials to deliver the perfect balance of comfort, cooling, and support.</p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Interactive Tabs */}
          <div 
            className="w-full lg:w-1/2 space-y-4 relative z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {layers.map((layer) => {
              const isActive = activeLayer === layer.id;
              
              return (
                <div 
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  className={clsx(
                    "p-6 md:p-8 rounded-2xl cursor-pointer transition-all duration-300 border-2",
                    isActive 
                      ? "bg-white border-primary shadow-xl scale-100" 
                      : "bg-white/50 border-transparent hover:bg-white/80 hover:scale-[1.02] text-slate-500"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className={clsx(
                      "p-3 rounded-xl transition-colors",
                      isActive ? "bg-primary text-white" : "bg-slate-100 text-slate-400"
                    )}>
                      {layer.icon}
                    </div>
                    <div>
                      <h3 className={clsx(
                        "text-xl font-bold mb-2 transition-colors",
                        isActive ? "text-primary" : "text-slate-500"
                      )}>{layer.title}</h3>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.p 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-slate-500 leading-relaxed overflow-hidden"
                          >
                            {layer.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Visual Illustration */}
          <div 
            className="w-full lg:w-1/2 h-[400px] lg:h-[600px] relative rounded-[40px] shadow-2xl overflow-hidden border border-slate-100 mt-8 lg:mt-0 bg-slate-200"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence>
              {layers.map((layer) => (
                layer.id === activeLayer && (
                  <motion.div
                    key={layer.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image 
                      src={layer.image} 
                      alt={layer.title} 
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                      priority={layer.id === "cooling"}
                    />
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
