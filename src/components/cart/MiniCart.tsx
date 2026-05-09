"use client";

import { X, ShoppingBag, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function MiniCart({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={onClose}
      />
      <div 
        className={`fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-[70] transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-primary flex items-center gap-2">
            <ShoppingBag size={20} /> Your Cart
          </h2>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-primary transition-colors rounded-full hover:bg-slate-100">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4 bg-slate-50 border-b border-slate-100">
          <p className="text-sm text-slate-600 font-medium mb-2 text-center">
            You're $150 away from <strong>FREE Shipping!</strong>
          </p>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full w-[60%]" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-center items-center text-slate-500">
          <ShoppingBag size={48} className="mb-4 text-slate-300" strokeWidth={1} />
          <p className="font-medium text-primary mb-2">Your cart is empty</p>
          <button onClick={onClose} className="text-secondary font-medium hover:underline">
            Continue Shopping
          </button>
        </div>

        <div className="p-6 border-t border-slate-100 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
          <div className="flex justify-between mb-4 font-medium text-primary text-lg">
            <span>Subtotal</span>
            <span>$0.00</span>
          </div>
          <p className="text-xs text-slate-500 mb-4 text-center">Shipping & taxes calculated at checkout</p>
          <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 hover:bg-slate-800 transition-colors shadow-lg shadow-primary/20">
            Checkout <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </>
  );
}
