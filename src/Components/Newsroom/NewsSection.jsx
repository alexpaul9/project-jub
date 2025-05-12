import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import newsData from "../../data/newsroom/newsData";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const NewsSection = () => {
    const sliderRef = useRef(null);

    const topNews = newsData.slice(0, 2);
    const sliderNews = newsData.slice(2);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, // ✅ Disable default arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="">
            <div className="mx-auto space-y-6">
                {/* Top 2 News Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {topNews.map((news) => (
                        <div
                            key={news.id}
                            className="rounded-3xl overflow-hidden bg-[#03253E] text-white shadow-md flex flex-col"
                        >
                            <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-10 space-y-3 flex flex-col flex-1">
                                <span className="text-sm font-thin bg-[#001625] px-3 py-1 rounded-full inline-block">
                                    {news.date}, {news.location}
                                </span>
                                <h2 className="text-2xl text-[#49C8F5] font-thin leading-tight">
                                    {news.title}
                                </h2>
                                <p className="text-sm opacity-80 my-4 flex-1">{news.description}</p>
                                <a
                                    className="flex justify-center items-center gap-3 text-[#001625] bg-[#49C8F5] w-fit py-1 px-3 rounded-xl font-thin hover:bg-[#6caac1] duration-300"
                                    href="/"
                                >
                                    <span>Download</span>
                                    <img src="./newsroom/down-arrow.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slider Section */}
                <div className="relative">
                    <Slider ref={sliderRef} {...settings}>
                        {sliderNews.map((news) => (
                            <div key={news.id} className="px-2">
                                <div className="rounded-3xl overflow-hidden bg-[#03253E] text-white shadow-md flex flex-col h-full">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                                        <span className="text-xs w-fit bg-[#001625] px-2 py-1 rounded-full inline-block">
                                            {news.date}, {news.location}
                                        </span>
                                        <h3 className="text-xl font-thin text-[#49C8F5] leading-tight">
                                            {news.title}
                                        </h3>
                                        <p className="text-xs opacity-80 my-4 flex-1">{news.description}</p>
                                        <a
                                            className="flex justify-center items-center gap-3 text-[#001625] bg-[#49C8F5] w-fit py-1 px-3 rounded-xl font-thin hover:bg-[#6caac1] duration-300"
                                            href="/"
                                        >
                                            <span>Download</span>
                                            <img src="./newsroom/down-arrow.svg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    <div className="flex justify-center gap-6 mt-6">
                        <button
                            onClick={() => sliderRef.current?.slickPrev()}
                            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            onClick={() => sliderRef.current?.slickNext()}
                            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
