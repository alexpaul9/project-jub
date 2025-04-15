import React from "react";

const SustainabilityGovernance = () => {
  return (
    <section className="bg-[#0b3932] px-6 py-16 md:py-10 md:px-0 text-white">
      <div className="mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-light mb-6">
          Sustainability Governance
        </h2>

        {/* Green capsule text */}
        <div className="inline-block bg-[#b2d235] text-[#0b3932] font-medium px-4 py-2 text-sm rounded-full mb-10">
          Every Business Decision need to be viewed from Sustainability lens
        </div>

        {/* Grid content */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
  {/* ESG Image */}
  <div className="rounded-3xl h-full flex">
    <img
      src="./sustainability/sus-gov.svg" // replace with your actual image path
      alt="ESG Structure"
      className="rounded-2xl w-full h-full object-cover"
    />
  </div>

  {/* Text block with bordered box */}
  <div className="border border-[#b2d235] rounded-3xl p-6 md:p-8 text-white leading-relaxed backdrop-blur-sm bg-white/5 h-full flex items-center">
    <p>
      Sustainability is deeply embedded in our organization’s performance, enhancing effectiveness across all departments. A dedicated committee at the Board level reviews our progress on sustainability goals every six months. Furthermore, these sustainability objectives are integrated into the performance of individual functions, with monthly evaluations to ensure accountability and continuous improvement. This structured approach underlines our commitment to sustainability as a fundamental driver of organizational success.
    </p>
  </div>
{/* </div> */}

        </div>
      </div>
    </section>
  );
};

export default SustainabilityGovernance;
