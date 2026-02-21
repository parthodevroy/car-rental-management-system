import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message sent successfully!");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* --- Header Area --- */}
        <div className="mb-10">
          <h2 className="text-4xl lg:text-5xl font-[1000] text-[#1B2532] tracking-tighter">
            Get In Touch With <span className="text-[#E11D48]">Yemenyi Rental Rent A Car</span>
          </h2>
          <p className="mt-6 text-gray-600 text-lg max-w-5xl leading-relaxed">
            Have questions or need help choosing the right car? Our team is here to assist you. 
            Fill out the form below, and we'll get back to you as soon as possible. Your smooth and 
            comfortable journey starts with us!
          </p>
        </div>

        {/* --- Form Start --- */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          
          {/* Full Name */}
          <div className="flex flex-col gap-3">
            <label className="text-[15px] font-bold text-[#1B2532]">Full Name</label>
            <input
              {...register("fullName", { required: "Full Name is required" })}
              placeholder="Full Name"
              className={`w-full p-4 bg-[#F8FAFC] border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:border-[#E11D48] text-gray-700 transition-all`}
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-3">
            <label className="text-[15px] font-bold text-[#1B2532]">Email Address</label>
            <input
              {...register("email", { 
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
              })}
              placeholder="Email Address"
              className="w-full p-4 bg-[#F8FAFC] border border-gray-200 rounded-lg focus:outline-none focus:border-[#E11D48] text-gray-700 transition-all"
            />
          </div>

          {/* Contact Number */}
          <div className="flex flex-col gap-3">
            <label className="text-[15px] font-bold text-[#1B2532]">Contact Number</label>
            <input
              {...register("phone", { required: true })}
              placeholder="Contact Number / WhatsApp Number"
              className="w-full p-4 bg-[#F8FAFC] border border-gray-200 rounded-lg focus:outline-none focus:border-[#E11D48] text-gray-700 transition-all"
            />
          </div>

          {/* Car Type (Dropdown/Select) */}
          <div className="flex flex-col gap-3">
            <label className="text-[15px] font-bold text-[#1B2532]">Car Type</label>
            <select
              {...register("carType")}
              className="w-full p-4 bg-[#F8FAFC] border border-gray-200 rounded-lg focus:outline-none focus:border-[#E11D48] text-gray-500 transition-all appearance-none"
            >
              <option value="Economy">Economy</option>
              <option value="Luxury">Luxury</option>
              <option value="SUV">SUV</option>
            </select>
          </div>

          {/* Dates (Pickup & Return) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label className="text-[15px] font-bold text-[#1B2532]">Pickup Date</label>
              <input
                type="date"
                {...register("pickupDate")}
                className="w-full p-4 bg-[#F8FAFC] border border-gray-200 rounded-lg focus:outline-none focus:border-[#E11D48] text-gray-400 transition-all"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[15px] font-bold text-[#1B2532]">Return Date</label>
              <input
                type="date"
                {...register("returnDate")}
                className="w-full p-4 bg-[#F8FAFC] border border-gray-200 rounded-lg focus:outline-none focus:border-[#E11D48] text-gray-400 transition-all"
              />
            </div>
          </div>

          {/* Additional Requirements */}
          <div className="flex flex-col gap-3">
            <label className="text-[15px] font-bold text-[#1B2532]">Additional Requirements</label>
            <textarea
              {...register("requirements")}
              rows="6"
              placeholder="Additional requirements"
              className="w-full p-6 bg-[#F8FAFC] border border-gray-200 rounded-[20px] focus:outline-none focus:border-[#E11D48] text-gray-700 transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-[#1B2532] text-white px-10 py-4 font-black uppercase text-sm tracking-widest hover:bg-[#E11D48] transition-all duration-300 rounded shadow-lg"
            >
              Send Message
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;