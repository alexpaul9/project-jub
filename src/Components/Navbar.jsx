import React from 'react';
import { FaSearch, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const leftMenus = ['Home', 'About Us', 'Investor Relations'];
  const rightMenus = ['Sustainability', 'Career', 'Newsroom', 'Contact Us'];

  // Create route paths dynamically (you can replace these with real route strings)
  const getPath = (label) => {
    if (label === 'Home') return '/';
    return `/${label.toLowerCase().replace(/\s+/g, '-')}`;
  };

  const MenuBlock = ({ menus, align = 'left' }) => (
    <div className={`relative flex justify-${align} gap-6 text-sm font-medium pt-3`}>
      {/* Divider line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gray-200"></div>

      {menus.map((item) => {
        const path = getPath(item);
        const isActive = location.pathname === path;

        return (
          <div key={item} className="group relative">
            <Link
              to={path}
              className={`transition-colors duration-200 px-1 ${
                isActive ? 'text-[#096080]' : 'hover:text-[#096080]'
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
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-4 lg:px-8">
        {/* Left Column */}
        <div className="w-1/3 flex flex-col gap-3">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search Product Here"
              className="w-full px-4 py-2 pl-10 rounded-full bg-gray-100 text-sm border border-gray-200 focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>

          <MenuBlock menus={leftMenus} align="start" />
        </div>

        {/* Center Logo */}
        <div className="w-1/3 flex justify-center items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Logo"
            className="h-20 object-contain"
          />
        </div>

        {/* Right Column */}
        <div className="w-1/3 flex flex-col items-end gap-3">
          {/* Social Icons */}
          <div className="flex gap-4 text-sm text-gray-600 justify-end">
            <div className="flex items-center gap-1 py-2">
              <FaInstagram className="text-lg" />
              <span>Instagram</span>
            </div>
            <div className="flex items-center gap-1">
              <FaFacebook className="text-lg" />
              <span>Facebook</span>
            </div>
            <div className="flex items-center gap-1">
              <FaYoutube className="text-lg" />
              <span>Youtube</span>
            </div>
          </div>

          <MenuBlock menus={rightMenus} align="end" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
