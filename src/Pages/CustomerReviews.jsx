import React from 'react';
import { motion } from 'framer-motion';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      text: "Very professional and friendly staff. They delivered the car on time and explained everything clearly. 7Cars Rental Dubai is the best place for car rentals.",
      author: "Marta Nash",
      image: "https://randomuser.me/api/portraits/women/65.jpg", // Replace with actual image
      isWhite: false,
    },
    {
      id: 2,
      text: "I had an amazing car rental experience with 7Cars! The process was smooth and hassle-free, thankfully! The staff was very friendly, accommodating and provided excellent customer service. I highly recommend 7cars for their exceptional service. Five stars, for sure!!",
      author: "Abdul Kareem",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      isWhite: true, 
    },
    {
      id: 3,
      text: "Excellent service! I rented a car for a week, and everything went smoothly. The prices are good, and the car was in perfect condition. I will rent again.",
      author: "Doreen Cobb",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      isWhite: false,
    },
    {
      id: 4,
      text: "Amazing service and comfortable cars. The whole process was quick, and the support team was always available. I had a great trip thanks to 7Cars Rental Dubai.",
      author: "Carol Reynolds",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      isWhite: false,
    }
  ];

  const loopReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="relative min-h-[850px] w-full flex flex-col items-center justify-start overflow-hidden pt-20">
      
      {/* --- Background Image with Dark Overlay (As seen in image) --- */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1550955295-77d6e18a24da?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }} 
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
      </div>

      {/* --- Section Header --- */}
      <div className="relative z-10 text-center mb-12">
        <p className="text-[11px] font-bold text-white uppercase tracking-[0.5em] mb-3 opacity-80">
          WHAT PEOPLE SAY ABOUT US
        </p>
        <h2 className="text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter italic">
          Customer <span className="text-[#E11D48]">Reviews</span>
        </h2>
        
        {/* Quote Icon in center */}
        <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-16 h-[1px] bg-white/20"></div>
            <span className="text-white text-4xl font-serif">“</span>
            <div className="w-16 h-[1px] bg-white/20"></div>
        </div>
      </div>

      {/* --- Scrolling Cards Container --- */}
      <div className="relative z-10 w-full mt-10 overflow-hidden">
        <motion.div 
          className="flex gap-10"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ 
            ease: "linear", 
            duration: 40, 
            repeat: Infinity 
          }}
        >
          {loopReviews.map((review, index) => (
            <div key={index} className="flex-shrink-0 w-[380px] lg:w-[480px] flex flex-col items-center">
              
              {/* Card Bubble */}
              <div className={`relative p-10 lg:p-14 shadow-2xl mb-12 min-h-[300px] flex items-center text-center transition-all duration-500 ${review.isWhite ? 'bg-white' : 'bg-[#2A3544]/95'}`}>
                
                <p className={`text-[15px] lg:text-[17px] leading-relaxed italic font-medium ${review.isWhite ? 'text-[#1B2532]' : 'text-white'}`}>
                  {review.text}
                </p>

                {/* Speech Bubble Arrow (Pointer) */}
                <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] ${review.isWhite ? 'border-t-white' : 'border-t-[#2A3544]/95'}`}></div>
              </div>

              {/* Author Section */}
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 mb-3 p-1 bg-white/10 rounded-full">
                    <img 
                        src={review.image} 
                        alt={review.author} 
                        className="w-full h-full rounded-full object-cover grayscale-[20%] border-2 border-[#E11D48]" 
                    />
                </div>
                <h4 className="text-white font-black uppercase tracking-widest text-[13px]">{review.author}</h4>
                <span className="text-[#E11D48] text-[10px] font-black tracking-widest mt-1">CUSTOMER</span>
              </div>

            </div>
          ))}
        </motion.div>
      </div>

      {/* --- Pagination Dots (Decorative) --- */}
      <div className="relative z-10 flex justify-center gap-3 mt-16">
          {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`w-3 h-3 rounded-full border border-white/30 transition-all ${i === 1 ? 'bg-[#E11D48] border-[#E11D48] scale-125' : 'bg-transparent'}`}></div>
          ))}
      </div>
      
    </section>
  );
};

export default CustomerReviews;