import { div } from 'framer-motion/client';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const GlobalCover = ({ title, image, subNav, icon, theme, themeLine = [] }) => {
  const location = useLocation();

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-opacity- flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl manrope-thin">{title}</h1>
      </div>

      {/* Sub-Navigation */}
      {subNav.length > 0 && (
        <div className={`absolute bottom-0 left-0 w-full shadow-md`}
        style={{backgroundColor:theme}}
        >
          <div className="max-w-screen-xl mx-auto flex flex-wrap justify-evenly gap-6 px-4 py-4">
            {subNav.map(({ label, path, icon }) => (
              <div className='flex items-center'>
              <img src={icon} className='mr-2 h-5 w-5 text-white' alt="" />
              <Link
                key={label}
                to={path}
                className={`text-sm font-medium ${
                  location.pathname === path
                    ? 'text-[#096080] border-b-2 border-[#096080] '
                    : 'text-white hover:text-gray-300 duration-300'
                }`}
              >
                {label}
              </Link>
              </div>
            ))}
          </div>
          <div className='w-full h-1' style={{background:themeLine}}></div>
        </div>
      )}
    </div>
  );
};

export default GlobalCover;
