"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "1",
    name: "Medicated Mattress",
    description: "Our bestselling mattress. The perfect balance of cooling foam and responsive pocket springs.",
    rating: 4.9,
    reviews: 2451,
    badge: "Best Seller",
    imageColor: "bg-blue-100",
    image: "/images/1.png",
    category: "mattresses"
  },
  {
    id: "2",
    name: "Soft Mattress",
    description: "Advanced gel-infused memory foam for hot sleepers. Sleep 4 degrees cooler.",
    rating: 4.8,
    reviews: 1832,
    badge: "Save 20%",
    imageColor: "bg-cyan-100",
    image: "/images/2.png",
    category: "mattresses"
  },
  {
    id: "3",
    name: "Simple Mattress",
    description: "Extra firm design providing optimal spinal alignment and superior edge support.",
    rating: 4.7,
    reviews: 954,
    imageColor: "bg-indigo-100",
    image: "/images/3.png",
    category: "mattresses"
  },
  {
    id: "4",
    name: "Super Soft Mattress",
    description: "Adjustable shredded memory foam. Personalize your loft and support.",
    rating: 4.9,
    reviews: 4230,
    badge: "Popular",
    imageColor: "bg-slate-100",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop",
    category: "accessories"
  }
];

export default function FeaturedCollections() {
  const [activeTab, setActiveTab] = useState("bestsellers");

  return (
    <section id="collections" className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight">Top Rated Sleep Solutions</h2>
            <p className="text-slate-500 text-lg">Discover our most loved mattresses and accessories, engineered for your best night's sleep.</p>
          </div>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {products.map((product) => (
            <div key={product.id} className="w-[75vw] max-w-[320px] sm:w-auto sm:min-w-0 snap-center shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
