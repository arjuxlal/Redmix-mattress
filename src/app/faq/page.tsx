"use client";

import { motion } from "framer-motion";
import { MessageSquare, User, CheckCircle2 } from "lucide-react";
import Logo from "@/components/ui/Logo";

const chatData = [
  {
    id: 1,
    type: "question",
    text: "Hi! How long does delivery take for a new mattress?",
  },
  {
    id: 2,
    type: "answer",
    text: "Hello there! 👋 Most orders are processed within 24 hours. Depending on your location, free standard shipping takes between 3 to 7 business days.",
  },
  {
    id: 3,
    type: "question",
    text: "That's great. What about the warranty on the mattress?",
  },
  {
    id: 4,
    type: "answer",
    text: "We stand by our quality! Every Redmix mattress comes with a comprehensive 5 years warranty, ensuring you sleep peacefully knowing your investment is protected. 🛡️",
  },
  {
    id: 5,
    type: "question",
    text: "What kind of base or bed frame do I need?",
  },
  {
    id: 6,
    type: "answer",
    text: "Redmix mattresses are designed to work on any firm, flat surface. This includes platform beds, slatted bases (with slats no more than 3 inches apart), or box springs.",
  },
  {
    id: 7,
    type: "question",
    text: "Do I have to keep the mattress in the box when it arrives?",
  },
  {
    id: 8,
    type: "answer",
    text: "You can keep your mattress in its box for up to 30 days after delivery. After that, we highly recommend unboxing it so the premium foams can fully expand and decompress properly for your best sleep. 🛏️",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-36 md:pt-48 pb-24">
      <div className="container-custom max-w-3xl">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-4 flex items-center justify-center gap-3">
            <MessageSquare className="text-secondary" size={40} />
            FAQ Support
          </h1>
          <p className="text-slate-500 text-lg">
            Got questions? We've got answers.
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
          
          {/* Chat Header */}
          <div className="bg-primary px-6 py-4 flex items-center gap-4 text-white">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-primary-light">
              <Logo className="h-6 w-auto text-primary scale-125" />
            </div>
            <div>
              <h2 className="font-bold text-lg leading-tight">Redmix Support</h2>
              <div className="flex items-center gap-1.5 text-sm text-primary-foreground/80">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Typically replies instantly
              </div>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-6 md:p-8 space-y-6 md:space-y-8 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
            {chatData.map((message, index) => {
              const isUser = message.type === "question";
              
              return (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className={`flex w-full ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div className={`flex max-w-[85%] md:max-w-[75%] gap-3 md:gap-4 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
                    
                    {/* Avatar */}
                    <div className="flex-shrink-0 mt-auto">
                      {isUser ? (
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                          <User size={18} />
                        </div>
                      ) : (
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-md">
                          <Logo className="h-4 w-auto" />
                        </div>
                      )}
                    </div>

                    {/* Message Bubble */}
                    <div
                      className={`relative px-5 py-4 rounded-2xl text-[15px] md:text-base leading-relaxed shadow-sm ${
                        isUser
                          ? "bg-slate-100 text-slate-800 rounded-br-sm"
                          : "bg-primary text-white rounded-bl-sm"
                      }`}
                    >
                      {message.text}
                      
                      {/* Timestamp/Read Receipt (Mock) */}
                      <div 
                        className={`text-[10px] md:text-xs mt-2 flex items-center gap-1 justify-end ${
                          isUser ? "text-slate-400" : "text-primary-foreground/70"
                        }`}
                      >
                        {isUser ? (
                          <>Sent <CheckCircle2 size={12} /></>
                        ) : (
                          "Redmix Team"
                        )}
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Chat Input Area (Mock) */}
          <div className="bg-slate-50 p-4 border-t border-slate-100 flex items-center gap-3">
            <div className="w-full bg-white border border-slate-200 rounded-full px-6 py-3 text-slate-400 text-sm md:text-base cursor-not-allowed">
              Type a message...
            </div>
            <button disabled className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-secondary/90 transition-colors opacity-80 cursor-not-allowed flex-shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
