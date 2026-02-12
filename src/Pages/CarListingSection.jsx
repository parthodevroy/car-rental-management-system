
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/pagination';

const CarListingSection = () => {
    const cars = [
        { name: "Nissan Patrol For Rent", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1170&auto=format&fit=crop", engine: "6-Cylinder", seats: "7", year: "2024" },
        { name: "Mercedes G63 For Rent", image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1228&auto=format&fit=crop", year: "2020", engine: "8-Cylinder", seats: "5" },
        { name: "Nissan X-Trail for Rent", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1170&auto=format&fit=crop", year: "2025", engine: "4-Cylinder", seats: "5" },
        { name: "Porsche Macan for Rent", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1170&auto=format&fit=crop", year: "2023", engine: "4-Cylinder", seats: "5" },
        { name: "Range Rover Sport", image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1228&auto=format&fit=crop", year: "2024", engine: "6-Cylinder", seats: "5" },
    ];

    return (
        <section className="w-full py-24 px-4 lg:px-10 bg-[#0F172A] relative overflow-hidden">
            {/* Background Decor  */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E11D48] opacity-5 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600 opacity-5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* --- Animated Header --- */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <motion.span 
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-[#E11D48] text-[12px] font-black uppercase tracking-[0.5em] mb-4 block"
                    >
                        — Discover Luxury —
                    </motion.span>
                    <h2 className="text-white text-5xl lg:text-7xl font-[1000] italic tracking-tighter uppercase leading-none">
                        Our Elite <span className="text-[#E11D48] drop-shadow-[0_0_15px_rgba(225,29,72,0.5)]">Fleet</span>
                    </h2>
                </motion.div>

                {/* --- Swiper Slider --- */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 4000 }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-20 car-swiper"
                >
                    {cars.map((car, index) => (
                        <SwiperSlide key={index}>
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10, rotateX: 5, rotateY: -5 }} // 3D Tilt Effect
                                className="bg-[#1E293B] group relative overflow-hidden rounded-[30px] border border-white/10 flex flex-col h-full shadow-2xl"
                            >
                                {/* Image Container */}
                                <div className="relative h-[260px] overflow-hidden">
                                    <img 
                                        src={car.image} 
                                        alt={car.name} 
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125" 
                                    />
                                    {/* Glassmorphism Badge */}
                                    <div className="absolute top-5 right-5 backdrop-blur-md bg-white/10 border border-white/20 text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest">
                                        Model {car.year}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-grow">
                                    <h3 className="text-white text-center font-black text-2xl leading-tight uppercase italic group-hover:text-[#E11D48] transition-colors duration-300">
                                        {car.name}
                                    </h3>
                                    
                                    {/* Animated Divider */}
                                    <div className="flex justify-center my-6">
                                        <div className="w-12 h-1 bg-[#E11D48] group-hover:w-24 transition-all duration-500 rounded-full"></div>
                                    </div>

                                    {/* Specs with Neon Icons */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-[#0F172A]/50 p-3 rounded-2xl flex items-center gap-3 border border-white/5">
                                            <span className="text-xl">⚙️</span>
                                            <span className="text-gray-400 text-[10px] font-bold uppercase">{car.engine}</span>
                                        </div>
                                        <div className="bg-[#0F172A]/50 p-3 rounded-2xl flex items-center gap-3 border border-white/5">
                                            <span className="text-xl">👥</span>
                                            <span className="text-gray-400 text-[10px] font-bold uppercase">{car.seats} Seats</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Booking Button - Slides up on Hover */}
                                <div className="p-6 pt-0">
                                    <button className="w-full bg-[#E11D48] text-white py-4 rounded-2xl font-black uppercase italic tracking-widest transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_10px_30px_rgba(225,29,72,0.4)]">
                                        Rent Online Now
                                    </button>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* --- Glowing View All Button --- */}
                <div className="flex justify-center mt-10">
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-12 py-5 bg-transparent border-2 border-[#E11D48] text-white font-black uppercase italic tracking-[0.3em] overflow-hidden"
                    >
                        <span className="relative z-10 group-hover:text-white transition-colors">Explore All Cars</span>
                        <div className="absolute inset-0 bg-[#E11D48] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </motion.button>
                </div>
            </div>

            <style jsx global>{`
                .car-swiper .swiper-pagination-bullet { 
                    background: #E11D48 !important; 
                    opacity: 0.2; 
                    height: 8px; 
                    width: 8px;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .car-swiper .swiper-pagination-bullet-active { 
                    opacity: 1; 
                    width: 35px !important; 
                    border-radius: 20px !important; 
                    box-shadow: 0 0 15px rgba(225,29,72,0.6);
                }
                .car-swiper { padding-bottom: 80px !important; }
                
                /* 3D Perspective for parent container */
                section { perspective: 1000px; }
            `}</style>
        </section>
    );
};

export default CarListingSection;