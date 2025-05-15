import React, { useState } from "react";
import Slider from "react-slick";
import { FaPlay, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import eventVideos from "../../data/Investors/events";
import VideoPlayer from "../Global/VideoPlayer";

const Arrow = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    className={`absolute -bottom-10 z-10 w-10 h-10 flex items-center justify-center text-gray-600 hover:text-gray-800 cursor-pointer duration-300 ${direction === "left"
      ? "left-[48%] -translate-x-[20px]"
      : "left-[49%] translate-x-[20px]"
      }`}
  >
    {direction === "left" ? <FaArrowLeft /> : <FaArrowRight />}
  </button>
);

const EventsSlider = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

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

  return (
    <div className="relative px-4 sm:px-8 md:px-0">
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

                {/* Video Title at Bottom */}
                <div className="absolute bottom-0 z-10 left-0 right-0  px-3 py-2">
                  <p className="text-white text-lg text-center font-medium leading-tight m-0">
                    {video.title}
                  </p>
                </div>

                {/* Play Button */}
                <div
                  onClick={() => setSelectedVideo(video.videoUrl)}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30 hover:bg-black/40 transition"
                >
                  <div className="group w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </Slider>
      </div>

      <VideoPlayer videoUrl={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
};

export default EventsSlider;
