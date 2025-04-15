import React from 'react';

const JubilantForAll = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-stretch">
        {/* Left image box */}
        <div className="bg-[#030D11] rounded-[32px] w-full md:w-1/2 overflow-hidden md:h-[320px]">
          <img src="./placeholder.jpeg" className="object-cover w-full h-full" alt="" />
        </div>

        {/* Right text box */}
        <div className="bg-[#F1F7EF] rounded-[32px] p-6 md:p-10 w-full md:w-1/2 md:h-[320px]">
          <h2 className="text-3xl sm:text-4xl font-light mb-4">Jubilant for All</h2>
          <p className="text-[#3D3D3D] text-base sm:text-lg mb-6">
            symbolises how we work to create enduring value, which delights not only consumers but all the stakeholders in the process through sustained profitable growth.
          </p>
          <div className="inline-block bg-[#B9DC3A] text-black text-sm font-medium rounded-full px-4 py-1">
            Sustainability. Growth. Prosperity.
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

        {/* Left section: Light green on top, dark greens below */}
        <div className="col-span-2 flex flex-col gap-6">

          {/* Light Green Box */}
          <div className="bg-[#F1F7EF] border border-[#B9DC3A] rounded-[32px] p-6 flex items-center gap-4">
            <img src="./sustainability/jub_for_all.svg" alt="NAE Icon" className="w-10 h-10" />
            <p className="text-[#3D3D3D] text-sm sm:text-lg">
              Jubilant FoodWorks blazes a trail with India’s first <strong>"No Antibiotics Ever (NAE)"</strong> milestone in Poultry Sourcing
            </p>
          </div>

          {/* Two Dark Green Stat Boxes Side-by-Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Box 1 */}
            <div className="bg-[#0F322D] rounded-[32px] text-lime-400 p-6 flex flex-col justify-center h-full">
              <h3 className="text-4xl sm:text-5xl manrope-thin">469,000</h3>
              <p className="text-white text-sm sm:text-base mt-2">
                People Were Covered With Medical Health Care Access
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-[#0F322D] rounded-[32px] text-lime-400 p-8 flex flex-col justify-center h-full">
              <h3 className="text-4xl sm:text-5xl manrope-thin">100%</h3>
              <p className="text-white text-sm sm:text-base mt-2">
                Farm Traceability For Chicken, Oregano, Chili And Tomato Paste
              </p>
            </div>
          </div>

        </div>

        {/* Right section: Image */}
        <div className="rounded-[32px] overflow-hidden h-full">
          <img
            src="./sustainability/poultry-farm.png" // Replace with actual path
            alt="Poultry Farm"
            className="object-cover w-full h-full"
          />
        </div>

      </div>


      <div className="relative mt-16 bg-black rounded-[32px] overflow-hidden text-white max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
        {/* Background Image */}
        <img
          src="./sustainability/chairman_bg.png"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Left Text Box */}
        <div className="relative z-10 w-full md:w-2/3 p-6 md:p-12 flex flex-col justify-between">
          {/* Opening Quote */}
          <img src="./sustainability/quote1.svg" alt="quote" className="w-10 mb-4" />

          {/* Quote Text */}
          <p className="text-white text-lg sm:text-xl leading-relaxed">
            Sustainability is deeply embedded in our multi-stakeholder business model, as a key tenet of generating long-term value. We have shared the multi-year, time-bound goals, anchored around Food, Planet, People and Communities and Governance. The Sustainability and CSR Committee of the Board is responsible for overseeing and guiding our Company’s sustainability strategy, performance and its implementation.<span className="inline-block align-[0.2em] ml-1">
              <img src="./sustainability/quote2.svg" alt="quote" className="w-[20px] -mb-10 ml-4 h-[20px]" />
            </span>
          </p>

          {/* Line and Name */}
          <div className="mt-6">
            <div className="w-24 h-[2px] bg-lime-400 mb-3"></div>
            <h3 className="font-bold text-white text-lg">
              Shyam S. Bhartia & Hari S. Bhartia
            </h3>
            <p className="text-sm">Chairman</p>
          </div>
        </div>

        {/* Right Image Box */}
        <div className="relative z-10 w-full md:w-1/3 flex items-end justify-center">
          <img src="/sustainability/chairman.png" alt="men" className="w-full object-contain" />
        </div>
      </div>

    </div>
  );
};

export default JubilantForAll;
