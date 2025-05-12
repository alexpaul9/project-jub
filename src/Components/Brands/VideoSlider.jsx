import React, { useRef } from "react";
import Slider from "react-slick";
import videoData from "../../data/brands/hongs";
import { FaPlay, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false, // we'll use custom arrows
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-white text-5xl font-light">Watch the Wok</h2>
        <div className="flex gap-3">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="text-white hover:text-gray-300 p-2 cursor-pointer"
          >
            <FaArrowLeft size={18} />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="text-white hover:text-gray-300 p-2 cursor-pointer"
          >
            <FaArrowRight size={18} />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {videoData.map((video) => (
          <div key={video.id} className="px-2 py-4">
          <div className="group cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden transition-transform duration-300 transform group-hover:scale-105">
              <img
                src={video.thumbnail}
                alt={`Video ${video.id}`}
                className="w-full object-cover h-64 rounded-2xl"
              />
              <a
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/0"
              >
                <div className="bg-white p-4 rounded-full shadow-lg">
                  <FaPlay className="text-red-500 text-xl" />
                </div>
              </a>
            </div>
          </div>
        </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;
