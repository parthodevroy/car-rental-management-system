
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            make: "NISSAN",
            model: "PATROL",
            year: "2026",
            tag: "LUXURY UNLEASHED",
            carImage: "https://i.ibb.co.com/5ghGzWc7/dan-gold-N7-Ri-Dzf-F2iw-unsplash-removebg-preview.png",
            bgImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop"
        },
        {
            make: "MERCEDES",
            model: "AMG G 63",
            year: "2026",
            tag: "BORN TO CAPTIVATE",
            carImage: "https://i.ibb.co.com/5ghGzWc7/dan-gold-N7-Ri-Dzf-F2iw-unsplash-removebg-preview.png",
            bgImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1983&auto=format&fit=crop"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <>
            <section className="relative w-full font-sans">
                {/* --- Hero Slider --- */}
                <div className="relative h-[650px] lg:h-[850px] w-full overflow-hidden bg-[#1B2532]">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `linear-gradient(to right, rgba(27, 37, 50, 0.9), rgba(27, 37, 50, 0.4)), url(${slides[currentSlide].bgImage})`,
                            }}
                        />
                    </AnimatePresence>

                    <div className="relative max-w-7xl mx-auto h-full flex items-center px-6 lg:px-10 text-white">
                        <motion.div 
                            key={`content-${currentSlide}`}
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="z-10 lg:w-2/3"
                        >
                            <span className="bg-[#E11D48] text-white px-4 py-1 text-[11px] font-black uppercase tracking-widest mb-6 inline-block">
                                {slides[currentSlide].tag}
                            </span>
                            <h2 className="text-6xl lg:text-[110px] font-[1000] italic leading-[0.85] tracking-tighter mb-10 uppercase">
                                {slides[currentSlide].make} <br />
                                <span className="text-[#E11D48]">{slides[currentSlide].model}</span>
                            </h2>
                            <Link to={"/our-fleet"}><button className="bg-white text-[#1B2532] hover:bg-[#E11D48] hover:text-white px-12 py-5 font-black text-lg italic uppercase transition-all duration-300 shadow-2xl">
                                Rent Now
                            </button></Link>
                        </motion.div>
                    </div>

                    {/* Navigation */}
                    <div className="absolute bottom-10 right-10 flex gap-4 z-30">
                        <button onClick={prevSlide} className="p-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all">
                            <ChevronLeft />
                        </button>
                        <button onClick={nextSlide} className="p-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all">
                            <ChevronRight />
                        </button>
                    </div>
                </div>

                {/* --- Search Bar --- */}
                <div className="relative -mt-16 z-40 px-4">
                    <div className="max-w-6xl mx-auto bg-white shadow-2xl p-6 lg:p-10 flex flex-col lg:flex-row gap-6 items-end">
                        <div className="flex-1 w-full">
                            <label className="text-[10px] font-bold text-gray-400 uppercase mb-2 block">Pick Up Date</label>
                            <div className="bg-gray-50 p-4 flex items-center gap-3 text-sm font-bold"><Calendar size={18}/> Select Date</div>
                        </div>
                        <div className="flex-1 w-full">
                            <label className="text-[10px] font-bold text-gray-400 uppercase mb-2 block">Car Brand</label>
                            <select className="w-full bg-gray-50 p-4 text-sm font-bold outline-none"><option>All Brands</option></select>
                        </div>
                        <button className="w-full lg:w-auto bg-[#E11D48] text-white px-12 py-4 font-black uppercase italic tracking-widest">Search</button>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto py-24 px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-20">
         
               <div className="lg:w-1/2">
                   <h4 className="text-[12px] font-bold text-[#E11D48] uppercase tracking-[0.4em] mb-4 italic">Helps you to find your next car easily</h4>
                   <h3 className="text-4xl lg:text-6xl font-black text-[#1B2532] mb-8 leading-[1.1]">
                       Welcome to <span className="text-[#E11D48] italic">Yemenyi Rental</span> <br /> Rent A Car
                   </h3>
                   <p className="text-gray-500 text-lg leading-relaxed mb-10 italic">
                       Rent a car that fits your budget at an incredibly affordable price. Our selection includes Exotic Car, Luxury Car & Sports Car.
                   </p>

                    <div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-10">                        {[
                            { title: "Fast & Easy Booking", icon: "🚀" },
                            { title: "Many Pickup Locations", icon: "📍" },
                            { title: "No Hidden Charges", icon: "💎" }
                        ].map((item, i) => (
                            <div key={i} className="text-center group cursor-default">
                                <div className="text-4xl mb-3 transform group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                                <p className="text-[11px] font-black uppercase leading-tight text-[#1B2532]">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2 relative">
                    <div className="absolute -inset-4 bg-[#E11D48]/5 rounded-full blur-3xl"></div>
                    <img
                        src="https://i.ibb.co/YFL8Xhhw/hamza-younas-d-Lj744-XVa2s-unsplash-removebg-preview.png"
                        className="w-full relative z-10 hover:translate-y-[-10px] transition-transform duration-700"
                        alt="Welcome Car"
                    />
                </div>
            </div>
            </section>

            {/* --- ULTIMATE FIXED WHATSAPP (এটি সেকশনের বাইরে থাকবে) --- */}
            <div 
                className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[99999]" 
                style={{ position: 'fixed', isolation: 'isolate' }}
            >
                <motion.a
                    href="https://wa.me/97148926777"
                    target="_blank"
                    rel="noreferrer"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="relative flex items-center justify-center bg-[#25D366] w-16 h-16 lg:w-20 lg:h-20 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.5)]"
                >
                    {/* Glowing Pulse Effect */}
                    <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
                    
                    {/* Tooltip for User Experience */}
                    {/* <span className="absolute right-full mr-4 bg-[#1B2532] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded shadow-xl hidden lg:block whitespace-nowrap">
                        Online Support
                    </span> */}

                    <img
                        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                        className="h-8 w-8 lg:h-10 lg:w-10 invert pointer-events-none"
                        alt="WhatsApp"
                    />

                    {/* Small Status Dot */}
                    <span className="absolute top-1 right-1 h-4 w-4 bg-white rounded-full border-4 border-[#25D366]"></span>
                </motion.a>
            </div>
        </>
    );
};

export default HeroSection;