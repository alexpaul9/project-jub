import React from "react";
import Slider from "react-slick";
import { FaPlay, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import eventVideos from "../../data/Investors/events"; // Ensure this file has valid thumbnail URLs

const Arrow = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    className={`absolute -bottom-10 z-10 w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-800 cursor-pointer duration-300 ${
      direction === "left"
        ? "left-[48%] -translate-x-[40px]"
        : "left-[48%] translate-x-[20px]"
    }`}
  >
    {direction === "left" ? <FaArrowLeft /> : <FaArrowRight />}
  </button>
);

const EventsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  console.log("eventVideos:", eventVideos); // Debug thumbnail paths

  return (
    <div className="relative py-10 px-4 sm:px-8 md:px-0">
      <h2 className="text-3xl sm:text-4xl font-thin mb-8">Investor Day 2025</h2>
      <div className="relative">
        <Slider {...settings}>
          {eventVideos.map((video) => (
            <div key={video.id} className="px-2">
              <div className="relative rounded-xl overflow-hidden border-2 border-transparent hover:border-[#1a6ca8] transition">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover"
                />
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center  bg-opacity-30 hover:bg-opacity-50 transition"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-b from-white to-gray-300 shadow-lg flex items-center justify-center relative">
                    <FaPlay className="text-[#1a6ca8] text-2xl" />
                    <div className="absolute w-20 h-20 rounded-full border-2 border-white opacity-20 animate-ping" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default EventsSlider;
