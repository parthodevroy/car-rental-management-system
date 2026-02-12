import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Send, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#161f2c] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* --- 1. Top Logo Section --- */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex flex-col items-center mb-8">
             {/* Replace with your actual 7CARS white logo */}
            <h1 className="text-5xl font-[1000] italic tracking-tighter text-white">
              <span className="text-[#E11D48]">7</span>CARS
            </h1>
            <p className="text-[11px] font-black tracking-[0.5em] uppercase mt-1 opacity-80">
              Rent A Car
            </p>
          </div>
          
          {/* Social Icons - As seen in image */}
          <div className="flex gap-4">
            <a href="#" className="w-11 h-11 flex items-center justify-center bg-white/5 rounded-full hover:bg-[#E11D48] transition-all duration-300 border border-white/10">
              <Facebook size={18} fill="currentColor" />
            </a>
            <a href="#" className="w-11 h-11 flex items-center justify-center bg-white/5 rounded-full hover:bg-[#E11D48] transition-all duration-300 border border-white/10">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-11 h-11 flex items-center justify-center bg-white/5 rounded-full hover:bg-[#E11D48] transition-all duration-300 border border-white/10">
              <span className="font-bold text-[14px]">Bē</span>
            </a>
          </div>
        </div>

        {/* --- 2. Main Footer Content (3 Columns) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/10 pt-16">
          
          {/* Column 1: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold uppercase tracking-tight">Contact Info</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="mt-1 p-1">
                   <MapPin size={22} className="text-[#E11D48]" />
                </div>
                <span className="text-gray-400 text-[15px] leading-relaxed group-hover:text-white transition-colors">
                  212, 2nd Floor - 2nd St - <br /> Al Garhoud - Dubai
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail size={22} className="text-[#E11D48]" />
                <a href="mailto:info@7cars.ae" className="text-gray-400 text-[15px] group-hover:text-white transition-colors">
                  info@7cars.ae
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone size={22} className="text-[#E11D48]" />
                <span className="text-gray-400 text-[15px]">
                  Phone: <a href="tel:+97148926777" className="text-white font-black ml-1 hover:text-[#E11D48] transition-colors tracking-tight text-lg">+971 48 926 777</a>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: Explore More (Split into two sub-columns like image) */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold uppercase tracking-tight">Explore More</h3>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-5">
                <li>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-[#E11D48] transition-all text-[15px] font-medium group">
                    <ChevronRight size={14} className="text-[#E11D48] opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-[#E11D48] transition-all text-[15px] font-medium group">
                    <ChevronRight size={14} className="text-[#E11D48] opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    About
                  </a>
                </li>
              </ul>
              <ul className="space-y-5">
                <li>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-[#E11D48] transition-all text-[15px] font-medium group">
                    <ChevronRight size={14} className="text-[#E11D48] opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    Our Fleet
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-[#E11D48] transition-all text-[15px] font-medium group">
                    <ChevronRight size={14} className="text-[#E11D48] opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Subscribe Newsletter */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold uppercase tracking-tight">Subscribe Newsletter</h3>
            <p className="text-gray-400 text-[15px] leading-relaxed">
              Get our weekly newsletter for latest car news exclusive offers and deals and more.
            </p>
            <div className="relative mt-6 group">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full bg-[#2A3544] border border-white/5 p-4 pr-14 text-sm focus:outline-none focus:border-[#E11D48] transition-all text-white placeholder:text-gray-500 rounded-sm"
              />
              <button className="absolute right-0 top-0 h-full w-14 bg-[#E11D48] flex items-center justify-center hover:bg-white hover:text-[#E11D48] transition-all duration-300 rounded-r-sm">
                <Send size={20} />
              </button>
            </div>
          </div>

        </div>

        {/* --- 3. Bottom Copyright Section --- */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-[13px] font-medium">
          <p>Copyrights © 2026 7Car Rental. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;