"use client";

import Logo from "@/components/ui/Logo";
import Link from "next/link";
const FacebookIcon = ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const TwitterIcon = ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>;
const InstagramIcon = ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const YoutubeIcon = ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.18 1 12 1 12s0 3.82.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.82 23 12 23 12s0-3.82-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>;

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-8 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:pr-8">
            <a href="/" className="inline-block text-primary mb-6 transition-transform hover:scale-[1.02]">
              <Logo className="w-48 md:w-56 h-auto text-primary" />
            </a>
            <p className="text-slate-600 mb-8 max-w-sm leading-relaxed">
              Premium sleep science delivered directly to your door. Experience the ultimate in comfort, engineering, and support.
            </p>
            <div className="flex items-center space-x-5 text-slate-400">
              <a href="https://www.facebook.com/p/Redmix-Mattress-61577751285915/" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:-translate-y-1 transition-all"><FacebookIcon size={22} /></a>
              <a href="https://www.instagram.com/redmix___?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:-translate-y-1 transition-all"><InstagramIcon size={22} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-sm">Shop Products</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 font-medium hover:text-secondary transition-colors">All Mattresses</a></li>
              <li><a href="#" className="text-slate-600 font-medium hover:text-secondary transition-colors">Premium Pillows</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-sm">Customer Support</h4>
            <ul className="space-y-4">
              <li><a href="https://wa.me/918606524578" target="_blank" rel="noopener noreferrer" className="text-slate-600 font-medium hover:text-secondary transition-colors">Contact Us</a></li>
              <li><Link href="/faq" className="text-slate-600 font-medium hover:text-secondary transition-colors">FAQ & Guides</Link></li>
              <li><a href="#" className="text-slate-600 font-medium hover:text-secondary transition-colors">5-Year Warranty</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-primary mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="shrink-0 mt-0.5">📍</span>
                <span>Adivaram, N. A. D,<br />imam cheeppungal road,<br />COMBARA, Kochi, Kerala 683563</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0 mt-0.5">📞</span>
                <span><a href="tel:+918606524578" className="hover:text-secondary transition-colors">+91 8606524578</a></span>
              </li>
              <li className="flex items-center gap-3">
                <span className="shrink-0">✉️</span>
                <a href="mailto:redmixmattress@gmail.com" className="hover:text-secondary transition-colors">redmixmattress@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="shrink-0">🕒</span>
                <span>Open 24 hours, 7 days a week</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Redmix Mattress. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm font-medium">
            <a href="#" className="text-slate-500 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
