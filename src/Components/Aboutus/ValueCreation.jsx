import React from 'react';

const ValueCreation = () => {
  return (
    <div className=" rounded-lg text-gray-800 space-y-8">
      {/* Title & Description */}
     

      {/* Hero + Loop Image */}
      <div className="flex flex-col md:flex-row gap-6">
      <div>
        <h2 className="text-3xl md:text-4xl font-light mb-4">Our Value-creation Approach:</h2>
        <div className="p-4 md:p-6 rounded-xl border border-[#a1c5d4] bg-[#e2f1f9] max-w-3xl text-base leading-relaxed">
          We’re driving value-creation by combining smart technology with efficient operations. By focusing on our customers, innovation, and sustainability, we ensure seamless service and growth, building infinite value every step of the way.
        </div>
      </div>
      <div 
  className="flex flex-col  justify-end text-white text-xl font-thin bg-black rounded-xl p-6 md:w-1/2"
  style={{ 
    backgroundImage: `url("./aboutus/infinity.png")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
          Combinatorial virtuous cycle of <br /> operations and technology
        </div>
      </div>

      {/* Infinity Loop Section */}
      <div className="bg-[#daebf1]  rounded-xl p-6 md:p-10 border border-[#a1c5d4] relative">
        <img src="./aboutus/vcd2.svg" alt="" />
      </div>
    </div>
  );
};

export default ValueCreation;
