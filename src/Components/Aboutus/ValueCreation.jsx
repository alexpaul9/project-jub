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
        <div className="relative md:w-1/2 rounded-xl overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="./Website Final Videos/AboutUS/BlueInfinity.webm" // or your correct video path
          />

          {/* Overlay Content */}
          <div className="relative z-10 flex flex-col justify-end text-white text-xl font-thin bg-black/50 p-6 h-full">
            {/* Your text or other content here */}
            Combinatorial virtuous cycle of <br /> operations and technology
            {/* Your content here... */}
          </div>
        </div>

        {/* </div> */}
      </div>

      {/* Infinity Loop Section */}
      <div className="bg-[#daebf1]  rounded-xl p-6 md:p-10 border border-[#a1c5d4] relative">
        <img src="./aboutus/vcd2.svg" alt="" />
      </div>
    </div>
  );
};

export default ValueCreation;
