// import React, { useState } from 'react';
// import { Phone, Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: 'HOME', href: '#', active: true },
//     { name: 'OUR FLEET', href: '#' },
//     { name: 'ABOUT', href: '#' },
//     { name: 'CONTACTS', href: '#' },
//   ];

//   return (
//     <header className="w-full font-sans sticky top-0 z-[100] bg-white">
//       {/* --- Top Bar (Dark Section) --- */}
//       <div className="relative hidden lg:block bg-[#1B2532] text-white h-[45px]">
//         {/* Left Slanted Shape (সাদা অংশটি বাঁকা করার জন্য) */}
//         <div className="absolute left-0 top-0 h-full w-[22%] bg-white skew-x-[-30deg] -translate-x-10 z-10"></div>
        
//         <div className="w-full h-full flex justify-end items-center px-10 relative z-20">
//           <div className="flex items-center gap-6 text-[12px] font-medium opacity-90 tracking-wide">
//             <span>info@7cars.ae</span>
//             <span className="opacity-30">|</span>
//             <span>Mon to Fri : 9:00am to 9:00pm</span>
//             <span className="opacity-30">|</span>
//             <span>212, 2nd Floor, 2nd St - Al Garhoud, Dubai</span>
//             <span className="opacity-30">|</span>
            
//             {/* Flags */}
//             <div className="flex items-center gap-2 ml-2">
//               <img src="https://flagcdn.com/w20/us.png" alt="US" className="h-3.5 w-5 object-cover rounded-sm border border-white/10" />
//               <img src="https://flagcdn.com/w20/de.png" alt="GER" className="h-3.5 w-5 object-cover rounded-sm border border-white/10" />
//               <img src="https://flagcdn.com/w20/fr.png" alt="FRA" className="h-3.5 w-5 object-cover rounded-sm border border-white/10" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* --- Main Navbar (White Section) --- */}
//       <nav className="relative h-[85px] lg:h-[100px] flex items-center bg-white px-6 lg:px-10 border-b border-gray-50">
//         <div className=" w-full flex justify-between items-center">
          
//           {/* Logo Section (একদম বামে) */}
//           <div className="z-30">
//             <div className="flex flex-col">
//               <h1 className="text-3xl lg:text-[42px] font-[900] italic text-[#1B2532] leading-none tracking-tighter">
//                 <span className="text-[#E11D48]">7</span>CARS
//               </h1>
//               <p className="text-[9px] lg:text-[11px] font-black tracking-[0.4em] text-[#1B2532] uppercase mt-1">
//                 Rent A Car
//               </p>
//             </div>
//           </div>

//           {/* Desktop Navigation (মাঝখানে) */}
//           <div className="hidden lg:flex items-center gap-8 ml-10">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className={`text-[13px] font-black tracking-widest transition-colors ${
//                   link.active ? 'text-[#E11D48]' : 'text-[#1B2532] hover:text-[#E11D48]'
//                 }`}
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/* Contact Section (ডানদিকে) */}
//           <div className="flex items-center gap-6">
//             <div className="hidden lg:flex items-center gap-4 border-l border-gray-200 pl-8 h-[50px]">
//               {/* Phone Icon Wrapper */}
//               <div className="relative">
//                  <Phone size={32} className="text-[#E11D48] transform -rotate-12" />
//                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#E11D48] rounded-full border-2 border-white"></div>
//               </div>
              
//               <div className="flex flex-col">
//                 <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter leading-none mb-1">Call Us Today!</span>
//                 <span className="text-[22px] font-[1000] text-[#1B2532] leading-none tracking-tight">+971 48 926 777</span>
//               </div>
//             </div>

//             {/* Mobile Menu Button */}
//             <button onClick={() => setIsOpen(true)} className="lg:hidden p-2 text-[#1B2532]">
//               <Menu size={32} />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* --- Mobile Sidebar --- */}
//       <div 
//         className={`fixed inset-0 bg-black/50 z-[110] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
//         onClick={() => setIsOpen(false)}
//       />
//       <div className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[120] shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//         <div className="p-6 flex justify-between items-center border-b">
//           <span className="font-black italic text-xl">7CARS</span>
//           <button onClick={() => setIsOpen(false)} className="text-gray-500"><X size={30} /></button>
//         </div>
//         <div className="flex flex-col mt-4">
//           {navLinks.map((link) => (
//             <a key={link.name} href={link.href} className="px-8 py-4 text-sm font-bold border-b border-gray-50 text-[#1B2532] hover:bg-gray-50 transition-all uppercase tracking-widest">
//               {link.name}
//             </a>
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // স্ক্রোল হ্যান্ডলার ফাংশন
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 100) { 
        // যদি নিচে স্ক্রোল করে, তাহলে হাইড করো
        setShow(false);
      } else { 
        // যদি উপরে স্ক্রোল করে, তাহলে শো করো
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const navLinks = [
    { name: 'HOME', href: '#', active: true },
    { name: 'OUR FLEET', href: '#' },
    { name: 'ABOUT', href: '#' },
    { name: 'CONTACTS', href: '#' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-transform duration-500 ease-in-out shadow-md ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* --- Top Bar (Dark Section) --- */}
      <div className="relative hidden lg:block bg-[#1B2532] text-white h-[45px]">
        <div className="absolute left-0 top-0 h-full w-[22%] bg-white skew-x-[-30deg] -translate-x-10 z-10"></div>
        <div className="w-full h-full flex justify-end items-center px-10 relative z-20">
          <div className="flex items-center gap-6 text-[12px] font-medium opacity-90 tracking-wide">
            <span>info@7cars.ae</span>
            <span className="opacity-30">|</span>
            <span>Mon to Fri : 9:00am to 9:00pm</span>
            <span className="opacity-30">|</span>
            <span>212, 2nd Floor, Dubai</span>
            <span className="opacity-30">|</span>
            <div className="flex items-center gap-2 ml-2">
              <img src="https://flagcdn.com/w20/us.png" alt="US" className="h-3.5 w-5 object-cover rounded-sm" />
              <img src="https://flagcdn.com/w20/ae.png" alt="UAE" className="h-3.5 w-5 object-cover rounded-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Navbar (White Section) --- */}
      <nav className="relative h-[85px] lg:h-[100px] flex items-center bg-white px-6 lg:px-10 border-b border-gray-50">
        <div className="w-full flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="z-30">
            <div className="flex flex-col">
              <h1 className="text-3xl lg:text-[42px] font-[900] italic text-[#1B2532] leading-none tracking-tighter">
                <span className="text-[#E11D48]">7</span>CARS
              </h1>
              <p className="text-[9px] lg:text-[11px] font-black tracking-[0.4em] text-[#1B2532] uppercase mt-1">
                Rent A Car
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 ml-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[13px] font-black tracking-widest transition-colors ${
                  link.active ? 'text-[#E11D48]' : 'text-[#1B2532] hover:text-[#E11D48]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Section */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-4 border-l border-gray-200 pl-8 h-[50px]">
              <div className="relative">
                 <Phone size={32} className="text-[#E11D48] transform -rotate-12" />
                 <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#E11D48] rounded-full border-2 border-white"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter leading-none mb-1">Call Us Today!</span>
                <span className="text-[22px] font-[1000] text-[#1B2532] leading-none tracking-tight">+971 48 926 777</span>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(true)} className="lg:hidden p-2 text-[#1B2532]">
              <Menu size={32} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- Mobile Sidebar --- */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[110] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />
      <div className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[120] shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex justify-between items-center border-b">
          <span className="font-black italic text-xl">7CARS</span>
          <button onClick={() => setIsOpen(false)} className="text-gray-500"><X size={30} /></button>
        </div>
        <div className="flex flex-col mt-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="px-8 py-4 text-sm font-bold border-b border-gray-50 text-[#1B2532] hover:bg-[#E11D48] hover:text-white transition-all uppercase tracking-widest">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;