"use client";

import { useState } from "react";
import { Star, Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import { clsx } from "clsx";
import { motion } from "framer-motion";

const products = {
  pillows: [
    {
      id: "cloudsoft-basic",
      name: "CloudSoft Basic (Soft Foam Pillow)",
      rating: 4.8,
      reviews: "12k",
      features: [
        "Feel: Very soft",
        "Use: Daily use",
        "Soft feel, peaceful sleep"
      ],
      image: "/images/pillows/cloudsoft-basic.png"
    },
    {
      id: "comfortrest-classic",
      name: "ComfortRest Classic (Medium Foam Pillow)",
      rating: 4.7,
      reviews: "8.5k",
      features: [
        "Feel: Medium (not too soft / not too hard)",
        "Use: All sleepers",
        "Perfect balance support"
      ],
      image: "/images/pillows/comfortrest-classic.png"
    },
    {
      id: "orthosupport-plus",
      name: "OrthoSupport Plus (Hard Foam Pillow)",
      rating: 4.9,
      reviews: "15k",
      features: [
        "Feel: Firm",
        "Use: Neck & back support",
        "Strong support for healthy sleep"
      ],
      image: "/images/pillows/orthosupport-plus.png"
    },
    {
      id: "dreamflex-memory",
      name: "DreamFlex Memory (Memory Foam Pillow)",
      rating: 4.8,
      reviews: "22k",
      features: [
        "Feel: Adjusts to shape",
        "Use: Premium comfort",
        "Adapts to your comfort"
      ],
      image: "/images/pillows/dreamflex-memory.png"
    },
    {
      id: "coolrest-gel",
      name: "CoolRest Gel (Gel Memory Foam)",
      rating: 4.6,
      reviews: "9k",
      features: [
        "Feel: Cooling + soft",
        "Use: For hot sleepers",
        "Stay cool, sleep better"
      ],
      image: "/images/pillows/coolrest-gel.png"
    },
    {
      id: "strongbase-rebond",
      name: "StrongBase Rebond (Rebonded Foam)",
      rating: 4.5,
      reviews: "5k",
      features: [
        "Feel: Very hard",
        "Use: Long lasting",
        "Built to last"
      ],
      image: "/images/pillows/strongbase-rebond.png"
    },
    {
      id: "softlite-fiber",
      name: "SoftLite Fiber (Fiber Pillow)",
      rating: 4.7,
      reviews: "18k",
      features: [
        "Feel: Light & fluffy",
        "Use: Hotel feel",
        "Light as air comfort"
      ],
      image: "/images/pillows/softlite-fiber.png"
    }
  ],
  mattresses: [
    {
      id: "1",
      name: "Medicated Mattress",
      description: "Our bestselling mattress. The perfect balance of cooling foam and responsive pocket springs.",
      rating: 4.9,
      reviews: 2451,
      badge: "Best Seller",
      image: "/images/1.png"
    },
    {
      id: "2",
      name: "Soft Mattress",
      description: "Advanced gel-infused memory foam for hot sleepers. Sleep 4 degrees cooler.",
      rating: 4.8,
      reviews: 1832,
      badge: "Save 20%",
      image: "/images/2.png"
    },
    {
      id: "3",
      name: "Simple Mattress",
      description: "Extra firm design providing optimal spinal alignment and superior edge support.",
      rating: 4.7,
      reviews: 954,
      image: "/images/3.png"
    },
    {
      id: "4",
      name: "Super Soft Mattress",
      description: "Adjustable shredded memory foam. Personalize your loft and support.",
      rating: 4.9,
      reviews: 4230,
      badge: "Popular",
      image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop"
    }
  ]
};

export default function ProductRecommendation() {
  const [activeTab, setActiveTab] = useState<"pillows" | "mattresses">("pillows");

  const currentProducts = products[activeTab];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 tracking-tight">Redmix's Advanced Sleep Range</h2>

          {/* Tabs */}
          <div className="flex justify-center border-b border-slate-200">
            <button
              className={clsx(
                "pb-4 px-6 text-lg font-bold transition-all duration-300 relative",
                activeTab === "pillows" ? "text-secondary" : "text-slate-400 hover:text-slate-600"
              )}
              onClick={() => setActiveTab("pillows")}
            >
              Pillows
              {activeTab === "pillows" && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-secondary" />
              )}
            </button>
            <button
              className={clsx(
                "pb-4 px-6 text-lg font-bold transition-all duration-300 relative",
                activeTab === "mattresses" ? "text-secondary" : "text-slate-400 hover:text-slate-600"
              )}
              onClick={() => setActiveTab("mattresses")}
            >
              Mattresses
              {activeTab === "mattresses" && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-secondary" />
              )}
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full mt-8 md:mt-12 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar scroll-px-4 md:scroll-px-0">
            {currentProducts.map((product) => (
              <div key={product.id} className="w-[85vw] max-w-[85vw] sm:w-[350px] sm:max-w-[350px] md:w-auto md:max-w-none shrink-0 snap-start md:snap-none bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 flex flex-col">
                {/* Product Image */}
                <div className="relative h-[250px] w-full bg-slate-100">
                  {product.image.startsWith("http") ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" className={i === 4 && product.rating < 5 ? "fill-amber-400/30 text-amber-400/30" : "fill-amber-400 text-amber-400"} />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-slate-700">{product.rating}</span>
                    <span className="text-sm text-slate-400">({product.reviews})</span>
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-4">{product.name}</h3>

                  {/* Features / Description */}
                  {product.features ? (
                    <ul className="mb-6 space-y-2 flex-grow">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 justify-start text-slate-600 text-sm">
                          <Check size={16} className="text-slate-300 mt-0.5 flex-shrink-0" strokeWidth={3} />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-slate-600 mb-6 flex-grow">{product.description}</p>
                  )}

                  <a
                    href={`https://wa.me/918606524578?text=${encodeURIComponent('Hi! I am interested in buying the ' + product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 hover:shadow-lg mt-auto group"
                  >
                    Buy on WhatsApp
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
