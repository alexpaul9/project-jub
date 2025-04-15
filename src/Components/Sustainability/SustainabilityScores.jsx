import React from "react";

const scores = [
  {
    name: "S&P Global",
    score: "42",
    logo: "/logos/sp-global.png", // use actual image paths
    textColor: "text-[#c8102e]",
  },
  {
    name: "Sustainalytics",
    score: "22.4",
    logo: "/logos/sustainalytics.png",
    textColor: "text-[#000]",
  },
  {
    name: "MSCI",
    score: "B",
    logo: "/logos/msci.png",
    textColor: "text-[#000]",
  },
  {
    name: "CRISIL",
    score: "49",
    logo: "/logos/crisil.png",
    textColor: "text-[#c8102e]",
  },
];

const SustainabilityScores = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-light text-[#0b3932] mb-8">
        Sustainability Ratings/Scores
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {scores.map((item, idx) => (
          <div
            key={idx}
          className="bg-[#b2d235] pb-2 rounded-3xl"
          >
          <div
          className="bg-[#0b3932] rounded-3xl">
          <div
            className="bg-[#edf3eb] rounded-3xl shadow-md overflow-hidden"
          >
            {/* Top light box with logo */}
            <div className="flex items-center justify-center h-28 px-4">
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-10 object-contain"
              />
            </div>
            </div>
            {/* Bottom green box with score */}
            <div className="relative bg-[#0b3932] text-white text-center py-4 text-4xl manrope-thin rounded-b-3xl">
              {item.score}
              {/* Lime green accent strip */}
              {/* <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#b2d235] rounded-b-4xl" /> */}
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default SustainabilityScores;
