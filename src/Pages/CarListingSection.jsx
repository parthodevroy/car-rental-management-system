import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Navigation মডিউলটি যুক্ত করা হয়েছে
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; 
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CarListingSection = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://car-rental-management-system-server.vercel.app/cars")
            .then((res) => res.json())
            .then((data) => {
                setCars(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching cars:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="py-24 bg-[#0F172A] text-white text-center font-black italic">LOADING ELITE FLEET...</div>;

    return (
        <section className="w-full py-24 px-4 lg:px-10 bg-[#0F172A] relative overflow-hidden" style={{ perspective: '1200px' }}>
            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* --- Header --- */}
                <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16 text-center">
                    <h2 className="text-white text-5xl lg:text-7xl font-[1000] italic tracking-tighter uppercase leading-none">
                        Our Elite <span className="text-[#E11D48]">Fleet</span>
                    </h2>
                </motion.div>

                {/* --- Swiper Wrapper with Custom Navigation --- */}
                <div className="relative px-2 lg:px-12 group">
                    
                    {/* Navigation Arrows */}
                    <button className="nav-prev absolute left-0 top-1/2 -translate-y-1/2 z-50 bg-[#E11D48] p-3 rounded-full text-white shadow-[0_0_20px_rgba(225,29,72,0.5)] transition-all hover:bg-white hover:text-[#E11D48] disabled:opacity-0">
                        <ChevronLeft size={28} strokeWidth={3} />
                    </button>
                    
                    <button className="nav-next absolute right-0 top-1/2 -translate-y-1/2 z-50 bg-[#E11D48] p-3 rounded-full text-white shadow-[0_0_20px_rgba(225,29,72,0.5)] transition-all hover:bg-white hover:text-[#E11D48] disabled:opacity-0">
                        <ChevronRight size={28} strokeWidth={3} />
                    </button>

                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        navigation={{ prevEl: '.nav-prev', nextEl: '.nav-next' }}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 4000 }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="car-swiper !pb-20"
                    >
                        {cars.map((car, index) => (
                            <SwiperSlide key={car._id} className="h-full">
                                <Link to={`/cars/${car._id}`} className="block h-full">
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        // 3D Motion Effect on Hover
                                        whileHover={{ 
                                            rotateY: 10, 
                                            rotateX: 5, 
                                            y: -15,
                                            transition: { duration: 0.4 }
                                        }}
                                        className="bg-[#1E293B] border border-white/10 rounded-[30px] overflow-hidden flex flex-col h-[520px] shadow-2xl relative"
                                    >
                                        {/* Fixed Height Image */}
                                        <div className="relative h-[250px] min-h-[250px] overflow-hidden">
                                            <img 
                                                src={car.images?.main} 
                                                alt={car.carName} 
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                            />
                                            <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-bold uppercase border border-white/20">
                                                {car.year}
                                            </div>
                                        </div>

                                        {/* Content - Flex Grow ensures same button alignment */}
                                        <div className="p-6 flex flex-col flex-grow justify-between">
                                            <div>
                                                <h3 className="text-white text-xl font-black uppercase italic tracking-tight group-hover:text-[#E11D48] transition-colors line-clamp-1">
                                                    {car.carName}
                                                </h3>
                                                <div className="w-10 h-1 bg-[#E11D48] my-3 rounded-full"></div>
                                                
                                                <div className="grid grid-cols-2 gap-3 mt-4">
                                                    <div className="bg-[#0F172A] p-3 rounded-xl border border-white/5 flex flex-col items-center">
                                                        <span className="text-[10px] text-gray-500 uppercase font-bold">Power</span>
                                                        <span className="text-white text-xs font-black">{car.horsepower_hp} HP</span>
                                                    </div>
                                                    <div className="bg-[#0F172A] p-3 rounded-xl border border-white/5 flex flex-col items-center">
                                                        <span className="text-[10px] text-gray-500 uppercase font-bold">Capacity</span>
                                                        <span className="text-white text-xs font-black">{car.seats} SEATS</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Button always at bottom */}
                                            <button className="w-full bg-[#E11D48] text-white py-4 rounded-xl font-black uppercase italic tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300 shadow-[0_10px_20px_rgba(225,29,72,0.3)]">
                                                View Details
                                            </button>
                                        </div>
                                    </motion.div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style jsx="true" global="true">{`
                .car-swiper .swiper-pagination-bullet { background: #E11D48 !important; opacity: 0.3; }
                .car-swiper .swiper-pagination-bullet-active { width: 30px !important; border-radius: 10px !important; opacity: 1; }
                .nav-prev.swiper-button-disabled, .nav-next.swiper-button-disabled { opacity: 0.2; cursor: not-allowed; }
            `}</style>
        </section>
    );
};

export default CarListingSection;