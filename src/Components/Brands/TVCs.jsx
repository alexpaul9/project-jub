import React from "react";

const TVCs = ({data = [] }) => {
  return (
    <div className={`text-center  px-4`}>
      <h2 className="text-5xl font-thin text-white">TVCs</h2>

      <div className="flex justify-center gap-6 py-10 overflow-x-auto">
        {data.map((video, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden w-[384px] shadow-lg transition-transform duration-300 hover:scale-105"
          >
            {/* Thumbnail Image */}
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-auto object-cover"
            />

            {/* Always-visible Overlay + Play Button */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </div>
            </div>

            {/* Clickable Link */}
            <a
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0"
            />

            {/* Title */}
            <div className="absolute bottom-4 left-4 right-4 text-white text-lg font-semibold drop-shadow-md">
              {video.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVCs;
