import React from 'react';
// Swiper React components এবং styles ইমপোর্ট করা হচ্ছে
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const CarListingSection = () => {
    const cars = [
        { name: "Nissan Patrol For Rent", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", engine: "6-Cylinder", seats: "7", year: "2024" },
        { name: "Mercedes G63 For Rent", image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", year: "2020", engine: "8-Cylinder", seats: "5" },
        { name: "Nissan X-Trail for Rent", image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", year: "2025", engine: "4-Cylinder", seats: "5" },
        { name: "Porsche Macan for Rent", image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", year: "2023", engine: "4-Cylinder", seats: "5" },
        { name: "Range Rover Sport", image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", year: "2024", engine: "6-Cylinder", seats: "5" },
    ];

    return (
        <section className="w-full py-16 px-4 lg:px-10 bg-gradient-to-r from-[#8B0000] via-[#1B2532] to-[#00008B]">
            <div className="max-w-7xl mx-auto">
                {/* --- Header --- */}
                <div className="mb-10 text-left">
                    <p className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-1 opacity-80">
                        HELPS YOU TO FIND YOUR NEXT CAR EASILY
                    </p>
                    <h2 className="text-white text-4xl lg:text-5xl font-black italic tracking-tight">
                        Luxury Car Rental
                    </h2>
                </div>

                {/* --- Swiper Slider (3 Cards Display) --- */}
                <div className="mb-12">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={25}
                        slidesPerView={1} // Mobile এ ১টি দেখাবে
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            640: { slidesPerView: 2 }, // Tablet এ ২টি
                            1024: { slidesPerView: 3 }, // Desktop এ ৩টি (আপনার রিকোয়েস্ট অনুযায়ী)
                        }}
                        className="pb-14"
                    >
                        {cars.map((car, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white group overflow-hidden shadow-2xl h-full flex flex-col">
                                    {/* Car Image */}
                                    <div className="h-[340px] overflow-hidden bg-gray-100 flex items-center justify-center">
                                        <img 
                                            src={car.image} 
                                            alt={car.name} 
                                            className="w-full h-full " 
                                        />
                                    </div>

                                    {/* Car Info */}
                                    <div className="p-6 flex-grow border-b border-gray-50">
                                        <h3 className="text-[#1B2532] text-center font-black text-[18px] leading-tight uppercase italic">
                                            {car.name}
                                        </h3>
                                    </div>

                                    {/* Specs Footer */}
                                    <div className="flex justify-around items-center py-4 bg-white text-[11px] text-gray-500 font-bold uppercase">
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-lg">📅</span>
                                            <span>{car.year}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-lg">⚙️</span>
                                            <span>{car.engine}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-lg">👥</span>
                                            <span>{car.seats} Seats</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* --- View All Button --- */}
                <div className="flex justify-center">
                    <button className="bg-[#E11D48] text-white px-10 py-4 text-[13px] font-black uppercase tracking-widest hover:bg-black transition-all duration-300 shadow-xl active:scale-95">
                        View All Cars Listings
                    </button>
                </div>
            </div>

            {/* Pagination Bullet কালার কাস্টমাইজেশন (Global CSS এ দিলেও হবে) */}
            <style jsx global>{`
                .swiper-pagination-bullet { background: white !important; opacity: 0.5; }
                .swiper-pagination-bullet-active { background: #E11D48 !important; width: 30px !important; border-radius: 5px !important; opacity: 1; }
            `}</style>
        </section>
    );
};

export default CarListingSection;