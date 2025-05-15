import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ratings from "../../data/sustainnability/ratings";

const SustainabilityScores = () => {
  const years = Object.keys(ratings).sort().reverse(); // latest year first
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [open, setOpen] = useState(false);

  const handleSelect = (year) => {
    setSelectedYear(year);
    setOpen(false);
  };

  const scores = ratings[selectedYear] || [];

  return (
    <div className="py-12">
      {/* Title and Year Selector */}
      <div className="flex justify-between items-center flex-wrap mb-6">
      <h2 className="text-4xl font-thin text-[#0b3932]">
        Sustainability Ratings/Scores
      </h2>

        {/* Custom Dropdown */}
        <div className="relative min-w-[100px]">
          <button
            onClick={() => setOpen(!open)}
            className="bg-[#b2d235] text-black font-thin rounded-2xl px-4 py-2 flex items-center justify-between w-full shadow-md focus:outline-none transition"
          >
            {selectedYear}
            <FaChevronDown className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>

          {open && (
            <ul className="absolute top-full left-0 mt-2 w-full bg-white border border-[#cde0bc] rounded-xl shadow-lg z-20 overflow-hidden">
              {years.map((year) => (
                <li
                  key={year}
                  onClick={() => handleSelect(year)}
                  className="px-6 py-2 text-[#0b3932] cursor-pointer hover:bg-[#e3f2d2] transition font-medium"
                >
                  {year}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Scores Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {scores.map((item, idx) => (
          <div key={idx} className="bg-[#b2d235] pb-2 rounded-3xl">
            <div className="bg-[#0b3932] rounded-3xl">
              <div className="bg-[#edf3eb] rounded-3xl shadow-md overflow-hidden">
                <div className="flex items-center justify-center h-40 px-4">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-20 max-w-[200px] object-contain"
                  />
                </div>
              </div>
              <div className="bg-[#0b3932] text-white text-center py-4 text-4xl manrope-thin rounded-b-3xl">
                {item.score}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SustainabilityScores;
