// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Phone, MessageCircle } from 'lucide-react';

// const CarDetails = () => {
//     const { id } = useParams();
//     const [car, setCar] = useState(null);
//     const [activeImg, setActiveImg] = useState("");

//     useEffect(() => {
//         fetch(`https://car-rental-management-system-server.vercel.app/cars/${id}`)
//             .then(res => res.json())
//             .then(data => {
//                 setCar(data);
//                 setActiveImg(data.images?.main);
//             });
//     }, [id]);

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     if (!car) return <div className="h-screen flex items-center justify-center font-bold italic">Loading...</div>;

//     return (
//         <div className="bg-white min-h-screen pt-32 pb-20">
//             <div className="max-w-[1400px] mx-auto px-6">
//                 <div className="flex flex-col lg:flex-row gap-10">

//                     {/* --- LEFT SIDE: IMAGES & SPECS --- */}
//                     <div className="flex-1">
//                         {/* Main Image */}
//                         <div className="relative h-[500px] mb-4 group">
//                             <img src={activeImg} alt={car.carName} className="w-full h-full object-cover shadow-sm" />
//                             <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 shadow-md">&gt;</button>
//                         </div>

//                         {/* Gallery Thumbnails */}
//                         <div className="flex gap-3 mb-10 overflow-x-auto">
//                             <img
//                                 src={car.images?.main}
//                                 onClick={() => setActiveImg(car.images?.main)}
//                                 className={`w-32 h-24 object-cover cursor-pointer border-2 ${activeImg === car.images?.main ? 'border-red-600' : 'border-transparent'}`}
//                             />
//                             {/* আপনার gallery অ্যারে চেক করে লুপ চালানো */}
//                             {Array.isArray(car.images?.gallery) && car.images.gallery.map((img, idx) => (
//                                 <img
//                                     key={idx}
//                                     src={img}
//                                     onClick={() => setActiveImg(img)}
//                                     className={`w-32 h-24 object-cover cursor-pointer border-2 ${activeImg === img ? 'border-red-600' : 'border-transparent'}`}
//                                 />
//                             ))}
//                         </div>

//                         {/* Vehicle Specifications */}
//                         <h2 className="text-2xl font-black text-[#1B2532] uppercase italic mb-6">Vehicle Specifications</h2>
//                         <div className="grid grid-cols-2 gap-y-4 border-t pt-6 text-sm font-bold italic">
//                             <div className="flex justify-between pr-10 border-r border-gray-100">
//                                 <span className="text-gray-400">Make:</span> <span>{car.make}</span>
//                             </div>
//                             <div className="flex justify-between pl-10">
//                                 <span className="text-gray-400">Model:</span> <span>{car.model}</span>
//                             </div>
//                             <div className="flex justify-between pr-10 border-r border-gray-100">
//                                 <span className="text-gray-400">Year:</span> <span>{car.year}</span>
//                             </div>
//                             <div className="flex justify-between pl-10">
//                                 <span className="text-gray-400">Engine, cm3:</span> <span>{car.engine_cm3}</span>
//                             </div>
//                             <div className="flex justify-between pr-10 border-r border-gray-100">
//                                 <span className="text-gray-400">Horsepower (hp):</span> <span>{car.horsepower_hp}</span>
//                             </div>
//                             <div className="flex justify-between pl-10">
//                                 <span className="text-gray-400">Seats:</span> <span>{car.seats}</span>
//                             </div>
//                             <div className="flex justify-between pr-10 border-r border-gray-100">
//                                 <span className="text-gray-400">Color:</span> <span className="capitalize">{car.color}</span>
//                             </div>
//                         </div>

//                         {/* Description Tab */}
//                         <div className="mt-12">
//                             <div className="flex gap-8 border-b mb-6">
//                                 <button className="pb-3 border-b-2 border-red-600 text-sm font-black italic uppercase">Vehicle Description</button>
//                                 <button className="pb-3 text-gray-400 text-sm font-black italic uppercase">Features & Options</button>
//                             </div>
//                             <p className="text-gray-600 leading-relaxed italic">{car.description}</p>
//                         </div>
//                     </div>

//                     {/* --- RIGHT SIDE: BOOKING FORM --- */}
//                     <aside className="w-full lg:w-[400px]">
//                         {/* Quick Contact Buttons */}
//                         <div className="bg-[#1B2532] p-6 text-white mb-6">
//                             <div className="flex items-center gap-4 mb-8">
//                                 <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
//                                 <div>
//                                     <p className="font-black italic uppercase text-sm">Yemenyi Cars Rental</p>
//                                     <p className="text-[10px] text-gray-400 italic">Member since: January 2026</p>
//                                 </div>
//                             </div>
//                             <button className="w-full bg-[#A33D52] hover:bg-[#8d3446] py-3 rounded-md font-bold mb-3 flex items-center justify-center gap-2">
//                                 <Phone size={18} /> Contact Us
//                             </button>
//                             <button className="w-full bg-[#25D366] hover:bg-[#1eb956] py-3 rounded-md font-bold flex items-center justify-center gap-2">
//                                 <MessageCircle size={18} /> WhatsApp
//                             </button>
//                         </div>

//                         {/* Booking Form */}
//                         <div className="bg-[#F8F9FB] p-8 border border-gray-100">
//                             <h3 className="bg-[#1B2532] text-white p-3 text-xs font-black uppercase italic tracking-widest mb-6 -mx-8 -mt-8">
//                                 Reach Out To Us
//                             </h3>
//                             <form className="space-y-4">
//                                 <div className="flex gap-4">
//                                     <input type="text" placeholder="First Name" className="w-1/2 p-3 border text-xs focus:outline-none" />
//                                     <input type="text" placeholder="Last Name" className="w-1/2 p-3 border text-xs focus:outline-none" />
//                                 </div>
//                                 <input type="email" placeholder="Your Email" className="w-full p-3 border text-xs focus:outline-none" />
//                                 <div className="flex gap-4">
//                                     <input type="text" value="+971 (UAE)" readOnly className="w-1/3 p-3 border text-xs bg-gray-50 italic" />
//                                     <input type="text" placeholder="Mobile Number" className="w-2/3 p-3 border text-xs focus:outline-none" />
//                                 </div>
//                                 <div className="flex gap-4">
//                                     <input type="date" className="w-1/2 p-3 border text-xs text-gray-400" />
//                                     <input type="text" placeholder="Destination" className="w-1/2 p-3 border text-xs focus:outline-none" />
//                                 </div>
//                                 <button className="w-full bg-[#25D366] text-white font-black py-4 uppercase italic tracking-tighter hover:bg-[#1eb956] transition-all">
//                                     Submit Request
//                                 </button>
//                             </form>
//                         </div>
//                     </aside>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CarDetails;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [activeImg, setActiveImg] = useState("");

    // বায়ারের তথ্য
    const buyerPhone = "+12405396279";
    const buyerWhatsApp = "13014552730"; // WhatsApp লিঙ্কে '+' বা স্পেস ছাড়া নম্বর দিতে হয়
    const [countries, setCountries] = useState([]);
    const [selectedCode, setSelectedCode] = useState("+1"); // ডিফল্ট কোড

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,idd")
            .then(res => res.json())
            .then(data => {
                // কান্ট্রিগুলোকে নাম অনুযায়ী সাজিয়ে রাখা (Sort)
                const sortedCountries = data.sort((a, b) =>
                    a.name.common.localeCompare(b.name.common)
                );
                setCountries(sortedCountries);
            })
            .catch(err => console.error("Error fetching countries:", err));
    }, []);

    useEffect(() => {
        fetch(`https://car-rental-management-system-server.vercel.app/cars/${id}`)
            .then(res => res.json())
            .then(data => {
                setCar(data);
                setActiveImg(data.images?.main);
            });
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ১. ফোন কল লজিক
    const handleContactClick = () => {
        window.location.href = `tel:${buyerPhone}`;
    };

    // ২. হোয়াটসঅ্যাপ লজিক
    const handleWhatsAppClick = () => {
        const message = `Hello, I am interested in your ${car?.carName} (${car?.model})`;
        window.open(`https://wa.me/${buyerWhatsApp}?text=${encodeURIComponent(message)}`, '_blank');
    };

    // ৩. ফর্ম সাবমিট (ইমেইল) লজিক
   const handleFormSubmit = (e) => {
        e.preventDefault();

        // Ei IDs gulo pore dynamic vabe boshanoto jabe (Env file ba database theke)
        const serviceID = "YOUR_SERVICE_ID"; 
        const templateID = "YOUR_TEMPLATE_ID";
        const publicKey = "YOUR_PUBLIC_KEY";

        // Template er jonno data ready kora
        const templateParams = {
            from_name: `${e.target.firstName.value} ${e.target.lastName.value}`,
            from_email: e.target.email.value,
            mobile: `${selectedCode} ${e.target.mobile.value}`,
            date: e.target.date.value,
            destination: e.target.destination.value,
            car_name: car.carName,
            to_name: "Yemenyi Cars Rental", // Baierer name
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Email Sent Successfully to Buyer!");
                e.target.reset();
            }, (err) => {
                console.log('FAILED...', err);
                alert("Failed to send email. Check credentials.");
            });
    };

    if (!car) return <div className="h-screen flex items-center justify-center font-bold italic">Loading...</div>;

    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* --- LEFT SIDE: IMAGES & SPECS --- */}
                    <div className="flex-1">
                        <div className="relative h-[500px] mb-4 group">
                            <img src={activeImg} alt={car.carName} className="w-full h-full object-cover shadow-sm" />
                        </div>

                        <div className="flex gap-3 mb-10 overflow-x-auto">
                            <img
                                src={car.images?.main}
                                onClick={() => setActiveImg(car.images?.main)}
                                className={`w-32 h-24 object-cover cursor-pointer border-2 ${activeImg === car.images?.main ? 'border-red-600' : 'border-transparent'}`}
                            />
                            {Array.isArray(car.images?.gallery) && car.images.gallery.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    onClick={() => setActiveImg(img)}
                                    className={`w-32 h-24 object-cover cursor-pointer border-2 ${activeImg === img ? 'border-red-600' : 'border-transparent'}`}
                                />
                            ))}
                        </div>

                        <h2 className="text-2xl font-black text-[#1B2532] uppercase italic mb-6">Vehicle Specifications</h2>
                        <div className="grid grid-cols-2 gap-y-4 border-t pt-6 text-sm font-bold italic">
                            <div className="flex justify-between pr-10 border-r border-gray-100">
                                <span className="text-gray-400">Make:</span> <span>{car.make}</span>
                            </div>
                            <div className="flex justify-between pl-10">
                                <span className="text-gray-400">Model:</span> <span>{car.model}</span>
                            </div>
                            <div className="flex justify-between pr-10 border-r border-gray-100">
                                <span className="text-gray-400">Year:</span> <span>{car.year}</span>
                            </div>
                            <div className="flex justify-between pl-10">
                                <span className="text-gray-400">Engine, cm3:</span> <span>{car.engine_cm3}</span>
                            </div>
                            <div className="flex justify-between pr-10 border-r border-gray-100">
                                <span className="text-gray-400">Horsepower (hp):</span> <span>{car.horsepower_hp}</span>
                            </div>
                            <div className="flex justify-between pl-10">
                                <span className="text-gray-400">Seats:</span> <span>{car.seats}</span>
                            </div>
                            <div className="flex justify-between pr-10 border-r border-gray-100">
                                <span className="text-gray-400">Color:</span> <span className="capitalize">{car.color}</span>
                            </div>
                        </div>

                        <div className="mt-12">
                            <div className="flex gap-8 border-b mb-6">
                                <button className="pb-3 border-b-2 border-red-600 text-sm font-black italic uppercase">Vehicle Description</button>
                                <button className="pb-3 text-gray-400 text-sm font-black italic uppercase">Features & Options</button>
                            </div>
                            <p className="text-gray-600 leading-relaxed italic">{car.description}</p>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: BOOKING FORM --- */}
                    <aside className="w-full lg:w-[400px]">
                        <div className="bg-[#1B2532] p-6 text-white mb-6">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
                                <div>
                                    <p className="font-black italic uppercase text-sm">Yemenyi Cars Rental</p>
                                    <p className="text-[10px] text-gray-400 italic">Member since: January 2026</p>
                                </div>
                            </div>
                            {/* ফাংশন অ্যাড করা হয়েছে */}
                            <button onClick={handleContactClick} className="w-full bg-[#A33D52] hover:bg-[#8d3446] py-3 rounded-md font-bold mb-3 flex items-center justify-center gap-2">
                                <Phone size={18} /> Contact Us
                            </button>
                            <button onClick={handleWhatsAppClick} className="w-full bg-[#25D366] hover:bg-[#1eb956] py-3 rounded-md font-bold flex items-center justify-center gap-2">
                                <MessageCircle size={18} /> WhatsApp
                            </button>
                        </div>

                        <div className="bg-[#F8F9FB] p-8 border border-gray-100">
                            <h3 className="bg-[#1B2532] text-white p-3 text-xs font-black uppercase italic tracking-widest mb-6 -mx-8 -mt-8">
                                Reach Out To Us
                            </h3>
                            {/* onSubmit অ্যাড করা হয়েছে */}
                            <form onSubmit={handleFormSubmit} className="space-y-4">
                                <div className="flex gap-4">
                                    <input name="firstName" type="text" placeholder="First Name" required className="w-1/2 p-3 border text-xs focus:outline-none" />
                                    <input name="lastName" type="text" placeholder="Last Name" required className="w-1/2 p-3 border text-xs focus:outline-none" />
                                </div>
                                <input name="email" type="email" placeholder="Your Email" required className="w-full p-3 border text-xs focus:outline-none" />

                                <div className="flex gap-4">
                                    {/* ডাইনামিক ড্রপডাউন */}
                                    <select
                                        name="countryCode"
                                        className="w-1/3 p-3 border text-[10px] bg-white italic focus:outline-none"
                                        value={selectedCode}
                                        onChange={(e) => setSelectedCode(e.target.value)}
                                        required
                                    >
                                        {countries.map((country, index) => {
                                            const code = country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : "");
                                            return (
                                                <option key={index} value={code}>
                                                    {country.name.common} ({code})
                                                </option>
                                            );
                                        })}
                                    </select>

                                    <input
                                        name="mobile"
                                        type="text"
                                        placeholder="Mobile Number"
                                        required
                                        className="w-2/3 p-3 border text-xs focus:outline-none"
                                    />
                                </div>

                                <div className="flex gap-4">
                                    <input name="date" type="date" required className="w-1/2 p-3 border text-xs text-gray-400" />
                                    <input name="destination" type="text" placeholder="Destination" required className="w-1/2 p-3 border text-xs focus:outline-none" />
                                </div>
                                <button type="submit" className="w-full bg-[#25D366] text-white font-black py-4 uppercase italic tracking-tighter hover:bg-[#1eb956] transition-all">
                                    Submit Request
                                </button>
                            </form>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
};

export default CarDetails;