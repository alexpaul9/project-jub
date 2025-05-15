import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaChevronDown } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

// Custom Arrows
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute md:left-[47%] cursor-pointer -bottom-10 z-10 text-[#0b3932] text-xl"
  >
    <FaArrowLeft />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute md:right-[47%] cursor-pointer -bottom-10 z-10 text-[#0b3932] text-xl"
  >
    <FaArrowRight />
  </button>
);

// Reusable Component
const SustainabilityFrameworks = ({ title, data }) => {
  // Safely get years
  const years = data ? Object.keys(data).sort().reverse() : [];
  const [selectedYear, setSelectedYear] = useState(years[0] || "");
  const [open, setOpen] = useState(false);

  const handleSelect = (year) => {
    setSelectedYear(year);
    setOpen(false);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Don't render if data is missing or empty
  if (!data || years.length === 0) {
    return (
      <div className="py-6 text-center text-[#0b3932] text-lg">
        No data available for this selection
      </div>
    );
  }

  return (
    <div className="py-6">
      {/* Title and Dropdown */}
      <div className="flex justify-between items-center flex-wrap mb-6">
        <h2 className="text-4xl manrope-thin text-[#0b3932]">{title}</h2>

        <div className="relative min-w-[100px]">
          <button
            onClick={() => setOpen(!open)}
            className="bg-[#b2d235] text-black font-thin rounded-2xl px-4 py-2 flex items-center justify-between w-full shadow-md focus:outline-none transition"
          >
            {selectedYear}
            <FaChevronDown
              className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`}
            />
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

      {/* Slider */}
      <Slider {...settings}>
        {(data[selectedYear] || []).map((item, idx) => (
          <div key={idx} className="px-2">
            <div className="bg-[#edf3eb] rounded-2xl border border-[#d6e7d5] h-46 flex flex-col gap-1 justify-between p-6">
              <h3 className="text-[#0b3932] text-2xl font-normal mb-2">{item.title}</h3>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0b3932] font-medium inline-flex items-center gap-2"
              >
                Learn more{" "}
                <GoArrowUpRight className="bg-[#1c1c1c] text-white text-xs p-1 rounded-md w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SustainabilityFrameworks;
