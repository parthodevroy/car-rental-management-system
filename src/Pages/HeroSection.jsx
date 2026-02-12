// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

// const HeroSection = () => {
//    const [currentSlide, setCurrentSlide] = useState(0);

//     const slides = [
//         {
//             make: "NISSAN",
//             model: "PATROL",
//             year: "2026",
//             tag: "LUXURY UNLEASHED",
//             // Image link placeholders - replace with your local assets if needed
//             image: "https://i.ibb.co.com/5ghGzWc7/dan-gold-N7-Ri-Dzf-F2iw-unsplash-removebg-preview.png", 
//             bgStyle: "bg-gradient-to-r from-[#1B2532] via-[#2D1B4E] to-[#E11D48]"
//         },
//         {
//             make: "MERCEDES",
//             model: "AMG G 63",
//             year: "2026",
//             tag: "LUXURY UNLEASHED",
//             image: "https://i.ibb.co.com/5ghGzWc7/dan-gold-N7-Ri-Dzf-F2iw-unsplash-removebg-preview.png",
//             bgStyle: "bg-[#1B2532]"
//         }
//     ];

//     // Auto change slide every 5 seconds
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//         }, 5000);
//         return () => clearInterval(timer);
//     }, []);

//     const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

//     return (
//         <section className="relative w-full font-sans overflow-x-hidden">
//             {/* --- Main Slider Area --- */}
//             <div className={`relative h-[550px] lg:h-[700px] w-full transition-all duration-1000 ${slides[currentSlide].bgStyle}`}>
                
//                 {/* Content Overlay */}
//                 <div className="relative max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 text-white pt-10">
                    
//                     {/* Text Section with Animation */}
//                     <div key={`text-${currentSlide}`} className="animate-fadeInLeft z-10 lg:w-1/2">
//                         <div className="flex items-center gap-2 mb-4">
//                             <span className="bg-white text-black px-3 py-1 text-[10px] font-black uppercase tracking-widest">
//                                 {slides[currentSlide].tag}
//                             </span>
//                             <div className="w-4 h-4 bg-white/20 rounded-sm"></div>
//                         </div>
                        
//                         <h2 className="text-6xl lg:text-[110px] font-[900] italic leading-[0.85] tracking-tighter mb-8">
//                             {slides[currentSlide].make} <br /> 
//                             <span className="flex items-center gap-6">
//                                 {slides[currentSlide].model} 
//                                 <span className="text-3xl lg:text-5xl not-italic font-bold opacity-60 mt-4">
//                                     {slides[currentSlide].year}
//                                 </span>
//                             </span>
//                         </h2>
                        
//                         <button className="bg-white text-[#1B2532] hover:bg-[#E11D48] hover:text-white transition-all duration-500 px-12 py-5 rounded-full font-[900] text-xl italic uppercase shadow-2xl transform hover:scale-105">
//                             Rent Now
//                         </button>
//                     </div>

//                     {/* Car Image with Animation */}
//                     <div key={`image-${currentSlide}`} className="relative lg:w-1/2 flex justify-end animate-fadeInRight">
//                         <img 
//                             src={slides[currentSlide].image} 
//                             alt={slides[currentSlide].model}
//                             className="w-full max-w-[800px] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
//                         />
//                     </div>
//                 </div>

//                 {/* Slider Arrows */}
//                 <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 lg:px-10 z-30">
//                     <button onClick={prevSlide} className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all backdrop-blur-sm">
//                         <ChevronLeft size={30} />
//                     </button>
//                     <button onClick={nextSlide} className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all backdrop-blur-sm">
//                         <ChevronRight size={30} />
//                     </button>
//                 </div>

//                 {/* Slider Dots */}
//                 <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3 z-30">
//                     {slides.map((_, idx) => (
//                         <div 
//                             key={idx}
//                             className={`h-1 transition-all duration-500 rounded-full ${currentSlide === idx ? 'w-12 bg-[#E11D48]' : 'w-6 bg-white/30'}`}
//                         />
//                     ))}
//                 </div>
//             </div>

//             {/* --- Floating Search Bar --- */}
//             <div className="relative -mt-24 z-40 px-4 lg:px-0">
//                 <div className="max-w-6xl mx-auto bg-white shadow-[0_30px_60px_rgba(0,0,0,0.12)] p-4 lg:p-10 flex flex-col lg:flex-row items-center border border-gray-50 rounded-sm">
//                     {/* 01 When */}
//                     <div className="w-full lg:w-1/3 lg:border-r border-gray-100 px-6 py-2">
//                         <label className="text-[11px] font-[900] text-gray-300 uppercase tracking-[0.2em] block mb-3">01 When</label>
//                         <div className="flex items-center gap-4 bg-gray-50/80 p-4 rounded-sm text-gray-400 font-bold text-sm border border-transparent hover:border-gray-200 transition-all cursor-pointer">
//                             <Calendar size={18} />
//                             <span>02/11/2026 - 02/11/2026</span>
//                         </div>
//                     </div>

//                     {/* 02 Select Make */}
//                     <div className="w-full lg:w-1/3 lg:border-r border-gray-100 px-6 py-2">
//                         <label className="text-[11px] font-[900] text-gray-300 uppercase tracking-[0.2em] block mb-3">02 Select Make</label>
//                         <div className="relative">
//                             <select className="w-full bg-gray-50/80 p-4 rounded-sm text-gray-700 font-bold text-sm outline-none appearance-none cursor-pointer border border-transparent hover:border-gray-200">
//                                 <option>All Makes</option>
//                             </select>
//                             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">▼</div>
//                         </div>
//                     </div>

//                     {/* 03 Select a Model */}
//                     <div className="w-full lg:w-1/3 px-6 py-2 flex flex-col lg:flex-row items-end gap-4">
//                         <div className="w-full">
//                             <label className="text-[11px] font-[900] text-gray-300 uppercase tracking-[0.2em] block mb-3">03 Select a Model</label>
//                             <div className="relative">
//                                 <select className="w-full bg-gray-50/80 p-4 rounded-sm text-gray-700 font-bold text-sm outline-none appearance-none cursor-pointer border border-transparent hover:border-gray-200">
//                                     <option>All Models</option>
//                                 </select>
//                                 <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">▼</div>
//                             </div>
//                         </div>
//                         <button className="w-full lg:w-auto bg-[#E11D48] hover:bg-[#1B2532] text-white px-12 py-[18px] font-black text-xs tracking-[0.2em] transition-all duration-300 uppercase rounded-sm shadow-lg active:scale-95">
//                             Search
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* --- Welcome Section --- */}
//             <div className="max-w-7xl mx-auto py-20 px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-12">
//                 <div className="lg:w-1/2">
//                     <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4 italic">Helps you to find your next car easily</h4>
//                     <h3 className="text-4xl lg:text-5xl font-black text-[#1B2532] mb-6 leading-tight">
//                         Welcome to <span className="text-[#E11D48]">7Cars Rent A Car</span>
//                     </h3>
//                     <p className="text-gray-500 text-sm leading-relaxed mb-8">
//                         Rent a car that fits your budget at an incredibly affordable price. Our selection includes Exotic Car, Luxury Car & Sports Car.
//                     </p>
                    
//                     <div className="grid grid-cols-3 gap-6">
//                         <div className="text-center">
//                             <img src="https://i.ibb.co.com/5ghGzWc7/dan-gold-N7-Ri-Dzf-F2iw-unsplash-removebg-preview.png" className="h-10 mx-auto mb-2 opacity-80" alt="" />
//                             <p className="text-[10px] font-black uppercase leading-tight">Fast & Easy<br/>Booking</p>
//                         </div>
//                         <div className="text-center">
//                             <img src="https://i.ibb.co.com/5ghGzWc7/dan-gold-N7-Ri-Dzf-F2iw-unsplash-removebg-preview.png" className="h-10 mx-auto mb-2 opacity-80" alt="" />
//                             <p className="text-[10px] font-black uppercase leading-tight">Many Pickup<br/>Locations</p>
//                         </div>
//                         <div className="text-center">
//                             <img src="https://i.ibb.co.com/5ghGzWc7/dan-gold-N7-Ri-Dzf-F2iw-unsplash-removebg-preview.png" className="h-10 mx-auto mb-2 opacity-80" alt="" />
//                             <p className="text-[10px] font-black uppercase leading-tight">No Hidden<br/>Charges</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="lg:w-1/2">
//                     <img src="https://i.ibb.co.com/5ghGzWc7/dan-gold-N7-Ri-Dzf-F2iw-unsplash-removebg-preview.png" className="w-full object-contain" alt="Toyota" />
//                 </div>
//             </div>

//             {/* Floating WhatsApp */}
//             <div className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-3 rounded-full shadow-2xl cursor-pointer hover:scale-110 transition-transform">
//                 <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="h-8 w-8 invert" alt="WhatsApp" />
//             </div>
//         </section>
//     );
// };

// export default HeroSection;
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

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
            tag: "LUXURY UNLEASHED",
            carImage: "https://i.ibb.co.com/5ghGzWc7/dan-gold-N7-Ri-Dzf-F2iw-unsplash-removebg-preview.png",
            bgImage: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1983&auto=format&fit=crop"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <section className="relative w-full font-sans overflow-x-hidden">
            {/* --- Main Slider Area --- */}
            <div className="relative h-[650px] lg:h-[850px] w-full overflow-hidden">
                {/* Background Image Layer */}
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
                    style={{ 
                        backgroundImage: `linear-gradient(to right, rgba(27, 37, 50, 0.85), rgba(27, 37, 50, 0.3)), url(${slides[currentSlide].bgImage})`,
                        transform: 'scale(1.05)' // হালকা জুম ইফেক্ট
                    }}
                />

                {/* Content Overlay */}
                <div className="relative max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 text-white pt-20">
                    
                    {/* Text Section with Animation */}
                    <div key={`text-${currentSlide}`} className="animate-fadeInLeft z-10 lg:w-1/2">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="bg-[#E11D48] text-white px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em]">
                                {slides[currentSlide].tag}
                            </span>
                            <div className="w-3 h-3 bg-white/30 rotate-45"></div>
                        </div>
                        
                        <h2 className="text-6xl lg:text-[120px] font-[900] italic leading-[0.8] tracking-tighter mb-10 drop-shadow-2xl">
                            {slides[currentSlide].make} <br /> 
                            <span className="flex items-center gap-6">
                                {slides[currentSlide].model} 
                                <span className="text-3xl lg:text-5xl not-italic font-bold opacity-40 mt-6">
                                    {slides[currentSlide].year}
                                </span>
                            </span>
                        </h2>
                        
                        <button className="bg-[#E11D48] text-white hover:bg-white hover:text-[#1B2532] transition-all duration-500 px-14 py-5 rounded-none font-black text-xl italic uppercase shadow-[0_20px_50px_rgba(225,29,72,0.3)]">
                            Rent Now
                        </button>
                    </div>

                    {/* Car PNG Image with Animation */}
                    <div key={`image-${currentSlide}`} className="relative lg:w-1/2 flex justify-end animate-fadeInRight z-20">
                        {/* <img 
                            src={slides[currentSlide].carImage} 
                            alt={slides[currentSlide].model}
                            className="w-full max-w-[850px] object-contain drop-shadow-[0_50px_60px_rgba(0,0,0,0.6)]"
                        /> */}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 lg:px-10 z-30">
                    <button onClick={prevSlide} className="group p-4 rounded-full border border-white/10 text-white hover:bg-[#E11D48] transition-all backdrop-blur-md">
                        <ChevronLeft size={35} className="group-hover:scale-110 transition-transform" />
                    </button>
                    <button onClick={nextSlide} className="group p-4 rounded-full border border-white/10 text-white hover:bg-[#E11D48] transition-all backdrop-blur-md">
                        <ChevronRight size={35} className="group-hover:scale-110 transition-transform" />
                    </button>
                </div>

                {/* Bottom Slider Indicators */}
                <div className="absolute bottom-40 left-1/2 -translate-x-1/2 flex gap-4 z-30">
                    {slides.map((_, idx) => (
                        <div 
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-1.5 transition-all duration-500 cursor-pointer rounded-full ${currentSlide === idx ? 'w-16 bg-[#E11D48]' : 'w-8 bg-white/20 hover:bg-white/40'}`}
                        />
                    ))}
                </div>
            </div>

            {/* --- Floating Search Bar Section --- */}
            <div className="relative -mt-24 z-40 px-4 lg:px-0">
                <div className="max-w-6xl mx-auto bg-white shadow-[0_40px_80px_rgba(0,0,0,0.15)] p-6 lg:p-12 flex flex-col lg:flex-row items-center border border-gray-100">
                    {/* 01 When */}
                    <div className="w-full lg:w-1/3 lg:border-r border-gray-100 px-6 py-4">
                        <label className="text-[11px] font-black text-gray-300 uppercase tracking-[0.3em] block mb-4 italic">01 When</label>
                        <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-none text-gray-700 font-bold text-sm hover:bg-gray-100 transition-all cursor-pointer">
                            <Calendar size={20} className="text-[#E11D48]" />
                            <span>02/11/2026 - 02/11/2026</span>
                        </div>
                    </div>

                    {/* 02 Select Make */}
                    <div className="w-full lg:w-1/3 lg:border-r border-gray-100 px-6 py-4">
                        <label className="text-[11px] font-black text-gray-300 uppercase tracking-[0.3em] block mb-4 italic">02 Select Make</label>
                        <div className="relative">
                            <select className="w-full bg-gray-50 p-4 rounded-none text-gray-700 font-bold text-sm outline-none appearance-none hover:bg-gray-100 transition-all cursor-pointer">
                                <option>All Makes</option>
                                <option>Nissan</option>
                                <option>Mercedes</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#E11D48]">▼</div>
                        </div>
                    </div>

                    {/* 03 Select a Model */}
                    <div className="w-full lg:w-1/3 px-6 py-4 flex flex-col lg:flex-row items-end gap-6">
                        <div className="w-full">
                            <label className="text-[11px] font-black text-gray-300 uppercase tracking-[0.3em] block mb-4 italic">03 Select a Model</label>
                            <div className="relative">
                                <select className="w-full bg-gray-50 p-4 rounded-none text-gray-700 font-bold text-sm outline-none appearance-none hover:bg-gray-100 transition-all cursor-pointer">
                                    <option>All Models</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#E11D48]">▼</div>
                            </div>
                        </div>
                        <button className="w-full lg:w-auto bg-[#E11D48] hover:bg-[#1B2532] text-white px-14 py-4 font-black text-sm tracking-[0.2em] transition-all duration-300 uppercase shadow-[0_15px_30px_rgba(225,29,72,0.2)]">
                            Search
                        </button>
                    </div>
                </div>
            </div>

            {/* --- Welcome Section --- */}
            <div className="max-w-7xl mx-auto py-24 px-6 lg:px-10 flex flex-col lg:flex-row items-center gap-20">
                <div className="lg:w-1/2">
                    <h4 className="text-[12px] font-bold text-[#E11D48] uppercase tracking-[0.4em] mb-4 italic">Helps you to find your next car easily</h4>
                    <h3 className="text-4xl lg:text-6xl font-black text-[#1B2532] mb-8 leading-[1.1]">
                        Welcome to <span className="text-[#E11D48] italic">7Cars</span> <br /> Rent A Car
                    </h3>
                    <p className="text-gray-500 text-lg leading-relaxed mb-10 italic">
                        Rent a car that fits your budget at an incredibly affordable price. Our selection includes Exotic Car, Luxury Car & Sports Car.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-8 border-t border-gray-100 pt-10">
                        {[
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
                        src="https://i.ibb.co.com/5ghGzWc7/dan-gold-N7-Ri-Dzf-F2iw-unsplash-removebg-preview.png" 
                        className="w-full relative z-10 hover:translate-y-[-10px] transition-transform duration-700" 
                        alt="Welcome Car" 
                    />
                </div>
            </div>

            {/* Floating WhatsApp */}
            <a 
                href="https://wa.me/97148926777" 
                target="_blank" 
                rel="noreferrer"
                className="fixed bottom-8 right-8 z-50 bg-[#25D366] p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] cursor-pointer hover:scale-110 transition-transform active:scale-90"
            >
                <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="h-8 w-8 invert" alt="WhatsApp" />
            </a>

            {/* Global Animations - Add this to your index.css or a style tag */}
            <style jsx global>{`
                @keyframes fadeInLeft {
                    from { opacity: 0; transform: translateX(-50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes fadeInRight {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-fadeInLeft { animation: fadeInLeft 1s ease-out forwards; }
                .animate-fadeInRight { animation: fadeInRight 1s ease-out forwards; }
            `}</style>
        </section>
    );
};

export default HeroSection;