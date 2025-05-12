import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AnimatedHeading from './Global/AnnimatedHeading';

const GlobalCover = ({ title, image, video, subNav, icon, theme, themeLine = [] }) => {
  const location = useLocation();

  return (
    <div className="relative w-full h-[60vh] md:h-[60vh] overflow-hidden">
      {/* Background Media */}
      {video ? (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      ) : (
        image && (
          <img
            src={image}
            alt="cover"
            className="w-full h-full object-cover"
          />
        )
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 bg-opacity-50 z-10"></div>

      {/* Overlay with Title */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="">
          {typeof title === 'string' ? 
            <AnimatedHeading
            tag="h1"
            text={title}
            className="text-white text-xl md:text-5xl manrope-thin"
        />
          // <h1>{title}</h1> 
          
          : title}
        </div>
      </div>

      {/* Sub-Navigation */}
      {React.isValidElement(subNav) ? (
        <div className="absolute bottom-0 left-0 w-full z-30">
          {subNav}
        </div>
      ) : Array.isArray(subNav) && subNav.length > 0 ? (
        <div
          className="absolute bottom-0 left-0 w-full shadow-md z-30"
          style={{ backgroundColor: theme }}
        >
          <div className="max-w-screen-xl mx-auto flex flex-wrap justify-evenly gap-6 px-4 py-4">
            {subNav.map(({ label, path, icon }) => (
              <div className="flex items-center" key={label}>
                <img src={icon} className="mr-2 h-5 w-5" alt={`${label} icon`} />
                <Link
                  to={path}
                  className={`text-sm font-medium ${
                    location.pathname === path
                      ? 'text-[#096080] border-b-2 border-[#096080]'
                      : 'text-white hover:text-gray-300 duration-300'
                  }`}
                >
                  {label}
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full h-1" style={{ background: themeLine }}></div>
        </div>
      ) : null}
    </div>
  );
};

export default GlobalCover;
