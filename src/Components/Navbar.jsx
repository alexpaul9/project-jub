import { FaSearch, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const leftMenus = ['Home', 'About Us', 'Investors', 'Brands', 'Governance'];
  const rightMenus = ['Sustainability', 'Career', 'Newsroom', 'Contact'];

  const getPath = (label) => {
    if (label === 'Home') return '/';
    return `/${label.toLowerCase().replace(/\s+/g, '-')}`;
  };

  const MenuBlock = ({ menus, align = 'left', onClick }) => (
    <div className={`relative w-full flex justify-${align} gap-4 text-[14px] font-medium pt-3`}>
    {/* Green divider spanning full width */}
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gray-200"></div>
      {menus.map((item) => {
        const path = getPath(item);
        const isActive = location.pathname === path;

        return (
          <div key={item} className="group relative ">
            <Link
              to={path}
              onClick={onClick}
              className={`transition-colors text-[#7f7f8a] duration-200 px-1 ${
                isActive ? 'text-[#096080] font-semibold' : 'hover:text-[#096080]'
              }`}
            >
              {item}
            </Link>
            <span
              className={`absolute -top-[12px] left-0 w-full h-[2px] transition-all duration-300 ${
                isActive ? 'bg-[#096080]' : 'group-hover:bg-[#096080]'
              }`}
            ></span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      {/* Top Nav */}
      <div className="max-w-[1350px] mx-auto flex justify-between items-center py-4">
        {/* Hamburger for mobile */}
        <div className="lg:hidden block">
          <GiHamburgerMenu
            className="text-2xl text-[#096080]"
            onClick={() => setIsMobileMenuOpen(true)}
          />
        </div>

        {/* Left */}
        <div className="w-full hidden lg:flex flex-col gap-3">
          <div className="relative w-[70%]">
            <input
              type="text"
              placeholder="Search Product Here"
              className="md:w-full px-4 py-2 rounded-[15px] bg-gray-100 text-xs focus:outline-none"
            />
            <img src="./search.svg" className='absolute right-3 top-2.5 w-3' alt="" />
          </div>
          <MenuBlock menus={leftMenus} align="start" />
        </div>

        {/* Center Logo */}
        <div className="w-1/4 mx-8 flex justify-center items-center">
          <img
            // src="./jfl-logo.svg"
            src="./vite.svg"
            alt="Logo"
            className="h-20 object-contain"
          />
        </div>

        {/* Right */}
        <div className="w-full hidden lg:flex flex-col items-end gap-3">
          <div className="flex gap-4 text-sm text-gray-600 justify-end">
            <div className="flex items-center gap-1 py-2">
              <img src="/instaico.svg" alt="" />
              <span>Instagram</span>
            </div>
            <div className="flex items-center gap-1">
            <img src="/fbico.svg" alt="" />
              <span>Facebook</span>
            </div>
            <div className="flex items-center gap-1">
            <img src="/ytico.svg" alt="" />
              <span>Youtube</span>
            </div>
          </div>
          <MenuBlock menus={rightMenus} align="end" />
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg px-6 py-5"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-[#096080]">Menu</h2>
                <IoClose
                  className="text-2xl text-[#096080]"
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              </div>

              <div className="flex flex-col gap-6">
                <div className="text-sm font-medium">
                  <p className="text-[#444] mb-2">Explore</p>
                  {leftMenus.map((item) => (
                    <Link
                      key={item}
                      to={getPath(item)}
                      className="block py-1 text-[#096080]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>

                <div className="text-sm font-medium">
                  <p className="text-[#444] mb-2">More</p>
                  {rightMenus.map((item) => (
                    <Link
                      key={item}
                      to={getPath(item)}
                      className="block py-1 text-[#096080]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                </div>

                <div className="pt-4 border-t border-gray-200 flex gap-4 text-[#096080]">
                  <FaInstagram />
                  <FaFacebook />
                  <FaYoutube />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
