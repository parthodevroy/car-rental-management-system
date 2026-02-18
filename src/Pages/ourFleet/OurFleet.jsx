import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OurFleet = () => {
  const [cars, setCars] = useState([]);
  const [priceRange, setPriceRange] = useState(9999);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 9;

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  // Pagination logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  return (
    <div className="bg-[#F8F9FB] min-h-screen">
      {/* --- HERO BANNER --- */}
      <div className="h-[420px] bg-[#1B2532] relative flex items-center justify-center">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1632441730372-d8509de481d1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
        <h1 className="text-white text-5xl pt-20 font-black italic uppercase tracking-tighter z-10">Vehicle Listings</h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-12">
        {/* --- FEATURED SECTION (Top 4) --- */}
        <h2 className="text-2xl font-black text-[#1B2532] uppercase italic mb-8 border-l-4 border-[#E11D48] pl-4">Featured Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cars.slice(0, 4).map((car) => (
            <CarCard key={car._id} car={car} />
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* --- SIDEBAR --- */}
          <aside className="w-full lg:w-[320px] shrink-0">
            <div className="bg-[#1B2532] text-white p-4 font-black uppercase italic tracking-widest text-sm flex items-center gap-2">
              <span className="w-1 h-4 bg-[#E11D48]"></span> Search A Car
            </div>
            <div className="bg-white p-6 shadow-md border-t-2 border-[#E11D48]">
              {/* Make & Model */}
              <div className="mb-6">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest block mb-2">By Make</label>
                <select className="w-full border border-gray-200 p-3 text-xs bg-gray-50 italic">
                  <option>All Makes</option>
                </select>
              </div>

              {/* Price Range Slider */}
              <div className="mb-8">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest block mb-4">Price Range</label>
                <input 
                  type="range" min="0" max="9999" value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#E11D48]"
                />
                <div className="flex justify-between mt-3">
                  <span className="bg-gray-100 px-3 py-1 text-[10px] font-bold border">0</span>
                  <span className="bg-gray-100 px-3 py-1 text-[10px] font-bold border">{priceRange}</span>
                </div>
              </div>

              {/* Body Type */}
              <div className="mb-8">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest block mb-4">Vehicle Body Type</label>
                <div className="grid grid-cols-2 gap-2">
                  {['CONVERTIBLE', 'SEDAN', 'SUV'].map(type => (
                    <button key={type} className="border p-2 text-[9px] font-black hover:bg-[#E11D48] hover:text-white transition-all">
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-[#E11D48] text-white font-black py-4 uppercase italic tracking-widest text-xs hover:shadow-lg transition-all">
                Reset Filter
              </button>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <div className="flex-1">
            {/* Sorting Bar */}
            <div className="bg-white p-4 mb-8 flex justify-between items-center shadow-sm border border-gray-100">
              <span className="text-sm font-bold italic text-gray-400">{cars.length} Autos</span>
              <div className="flex items-center gap-4">
                <select className="border border-gray-200 p-2 text-xs font-bold italic text-gray-500">
                  <option>Sort by Last Added</option>
                  <option>Price Low to High</option>
                </select>
                <div className="flex gap-1">
                  <div className="w-8 h-8 border flex items-center justify-center bg-gray-100 cursor-pointer">|||</div>
                  <div className="w-8 h-8 border flex items-center justify-center bg-[#1B2532] text-white cursor-pointer">::</div>
                </div>
              </div>
            </div>

            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCars.map((car) => (
                <CarCard key={car._id} car={car} />
              ))}
            </div>

            {/* --- PAGINATION --- */}
            <div className="mt-12 flex justify-center items-center gap-2">
              <button className="w-10 h-10 border-2 border-gray-200 flex items-center justify-center hover:bg-[#1B2532] hover:text-white font-bold">&laquo;</button>
              {[1, 2, 3].map(num => (
                <button key={num} onClick={() => setCurrentPage(num)} className={`w-10 h-10 border-2 font-black ${currentPage === num ? 'bg-[#E11D48] border-[#E11D48] text-white' : 'border-gray-200 text-gray-400'}`}>
                  {num}
                </button>
              ))}
              <button className="w-10 h-10 border-2 border-gray-200 flex items-center justify-center hover:bg-[#1B2532] hover:text-white font-bold">&raquo;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENT: CAR CARD ---
const CarCard = ({ car }) => (
  <div className="bg-[#1B2532] group cursor-pointer shadow-lg overflow-hidden flex flex-col h-full">
    <div className="relative h-52 overflow-hidden">
      <img src={car.images?.main} alt={car.carName} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute bottom-0 left-0 right-0 bg-[#16202B]/90 text-[10px] text-white font-black italic flex justify-between px-4 py-2 uppercase tracking-tighter">
        <span>AED {car.prices?.weekly} /WEEK</span>
        <span className="opacity-30">|</span>
        <span>AED {car.prices?.monthly} /MONTH</span>
      </div>
    </div>
    <div className="p-6 text-center flex-1 flex flex-col justify-between">
      <div>
        <h3 className="text-white text-[17px] font-black uppercase italic tracking-tighter mb-2 leading-tight">
          {car.carName || `${car.make} ${car.model}`} For Rent
        </h3>
        <div className="flex justify-center items-center gap-2 text-[10px] text-gray-400 font-bold mb-4 italic uppercase">
          <span>{car.year}</span> <span>|</span> <span>{car.horsepower_hp || '4-Cylender'}</span> <span>|</span> <span>{car.seats}</span> <span>|</span> <span>{car.color}</span>
        </div>
      </div>
      <div className="border-t border-white/10 pt-4">
        <p className="text-[#FFFFFF] text-xl font-[1000] italic uppercase tracking-tighter">
          AED {car.prices?.daily} <span className="text-[10px] font-normal opacity-50 italic">/DAY</span>
        </p>
      </div>
    </div>
  </div>
);

export default OurFleet;