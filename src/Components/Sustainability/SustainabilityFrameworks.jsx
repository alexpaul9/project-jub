import React, { useState } from "react";
import sustainabilityFrameworks from "@data/sustainnability/sustainabilityFrameworks";
import Slider from "react-slick";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = (props) => (
  <button
    onClick={props.onClick}
    className="absolute left-[47%] cursor-pointer -bottom-10 z-10 text-[#0b3932] text-xl"
  >
    <FaArrowLeft />
  </button>
);

const CustomNextArrow = (props) => (
  <button
    onClick={props.onClick}
    className="absolute right-[47%] cursor-pointer -bottom-10 z-10 text-[#0b3932] text-xl"
  >
    <FaArrowRight />
  </button>
);

const SustainabilityFrameworks = ({title}) => {
  const years = Object.keys(sustainabilityFrameworks).sort().reverse();
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [open, setOpen] = useState(false);

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

  const handleSelect = (year) => {
    setSelectedYear(year);
    setOpen(false);
  };

  return (
    <div className="py-6">
      <div className="flex justify-between items-center flex-wrap mb-6">
      <h2 className="text-3xl manrope-thin text-[#0b3932]">
          {title}
        </h2>

        {/* Custom Dropdown */}
        <div className="relative min-w-[140px]">
          <button
            onClick={() => setOpen(!open)}
            className="bg-[#b2d235] text-[#0b3932] font-semibold rounded-full px-6 py-2 flex items-center justify-between w-full shadow-md focus:outline-none transition"
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

      <Slider {...settings}>
        {sustainabilityFrameworks[selectedYear].map((item, idx) => (
          <div key={idx} className="px-2">
            <div className="bg-[#edf3eb] rounded-2xl border border-[#d6e7d5] h-40 flex flex-col justify-between p-6">
              <h3 className="text-[#0b3932] text-2xl font-medium">{item.title}</h3>
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
