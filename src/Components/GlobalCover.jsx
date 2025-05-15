import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AnimatedHeading from './Global/AnnimatedHeading';

const GlobalCover = ({ title, image, video, subNav, icon, theme, themeLine = [] }) => {
  const location = useLocation();

  return (
    <div className="relative">
      {/* COVER */}
      <div className="w-full relative overflow-hidden">
        {/* Background Media */}
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Title */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div>
            {typeof title === 'string' ? (
              <AnimatedHeading
                tag="h1"
                text={title}
                className="text-white text-xl md:text-5xl manrope-thin"
              />
            ) : (
              title
            )}
          </div>
        </div>

        {/* SUBNAV: Only position absolutely on md+ */}
        {React.isValidElement(subNav) ? (
          <div className="hidden md:block absolute bottom-0 left-0 w-full z-30">
            {subNav}
          </div>
        ) : Array.isArray(subNav) && subNav.length > 0 ? (
          <div
            className="hidden md:block absolute bottom-0 left-0 w-full z-30 shadow-md"
            style={{ backgroundColor: theme }}
          >
            <div className="max-w-[1350px] mx-auto flex justify-between gap-4 px-4 py-4">
              {subNav.map(({ label, path, icon }) => (
                <div className="flex items-center" key={label}>
                  <img src={icon} className="mr-2 h-5 w-5" alt={`${label} icon`} />
                  <Link
                    to={path}
                    className={`text-sm font-medium py-1 px-3 rounded-xl ${location.pathname === path
                        ? 'text-[#096080]'
                        : 'text-white hover:text-gray-300 duration-300'
                      }`}
                    style={location.pathname === path ? { backgroundColor: themeLine } : {}}
                  >
                    {label}
                  </Link>

                </div>
              ))}
            </div>
            <div className="w-full h-1" style={{ background: themeLine }} />
          </div>
        ) : null}
      </div>

      {/* SUBNAV for Mobile */}
      {React.isValidElement(subNav) ? (
        <div className="block md:hidden w-full z-30">
          {subNav}
        </div>
      ) : Array.isArray(subNav) && subNav.length > 0 ? (
        <div
          className="block md:hidden w-full z-30 shadow-md"
          style={{ backgroundColor: theme }}
        >
          <div className="max-w-[1350px] mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 px-4 py-4">
            {subNav.map(({ label, path, icon, themeLine }) => (
              <div className="flex items-center p-2 rounded-md" key={label}>
                <img src={icon} className="mr-2 h-5 w-5" alt={`${label} icon`} />
                <Link
                  to={path}
                  className={`text-sm font-medium py-1 px-3 rounded-xl ${location.pathname === path
                    ? 'text-white'
                    : 'text-white hover:text-gray-300 duration-300'
                    }`}
                  style={location.pathname === path ? { backgroundColor: themeLine } : {}}
                >
                  {label}
                </Link>


              </div>
            ))}
          </div>
          <div className="w-full h-1" style={{ background: themeLine }} />
        </div>
      ) : null}
    </div>
  );
};

export default GlobalCover;
