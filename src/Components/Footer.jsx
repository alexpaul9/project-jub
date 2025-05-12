import React, { useState } from 'react';

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Section data (order matches your request)
  const aboutSection = {
    title: 'About Us',
    links: [
      'Company Profile',
      'Leadership',
      'Milestones',
      'Awards',
      'Jubilant Bhartia Group',
      'Professional Lighting',
    ],
  };
  const contactSection = {
    title: 'Contact Us',
    links: ['Contact Details', 'Real Estate'],
  };
  const brandsSection = {
    title: 'Brands',
    links: [
      'Domino’s Pizza',
      'Popeyes',
      'Coffy',
      "Dunkin'",
      'Hong’s Kitchen',
      'Franchise Information',
    ],
  };
  const newsroomSection = {
    title: 'Newsroom',
    links: ['Press Release'],
  };
  const sustainabilitySection = {
    title: 'Sustainability',
    links: [
      'Sustainability Progress',
      'Sustainability Targets',
      'Sustainability Profile',
      'Reports',
      'Key CSR Engagements',
      'Corporate Citizenship',
    ],
  };
  const careerSection = {
    title: 'Career',
    links: ['Overview', 'Fraudulent Recruiting'],
  };
  const investorSection = {
    title: 'Investor Relations',
    links: [
      'Overview',
      'Financial Information',
      'Company Reports',
      'Governance',
      'Shareholder Information',
      'Disclosure under Reg. 46 of LODR',
      'Investor’s Contact',
      'Online Dispute Resolution',
    ],
  };

  // For mobile accordion: flatten all sections in order
  const mobileSections = [
    aboutSection,
    contactSection,
    brandsSection,
    newsroomSection,
    sustainabilitySection,
    careerSection,
    investorSection,
  ];

  // Accordion toggle handler
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="bg-black text-gray-300 px-4 md:px-8 py-12">
      {/* Desktop: Custom columns, Mobile: Accordion */}
      <div className="max-w-7xl mx-auto">
        <div className="hidden md:grid grid-cols-4 gap-10">
          {/* 1st Column: About Us (above), Contact Us (below) */}
          <div>
            {/* About Us */}
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">{aboutSection.title}</h3>
            <ul className="space-y-2 text-sm mb-6">
              {aboutSection.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition block">{link}</a>
                </li>
              ))}
            </ul>
            {/* Contact Us */}
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">{contactSection.title}</h3>
            <ul className="space-y-2 text-sm">
              {contactSection.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition block">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* 2nd Column: Brands (above), Newsroom (below) */}
          <div>
            {/* Brands */}
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">{brandsSection.title}</h3>
            <ul className="space-y-2 text-sm mb-6">
              {brandsSection.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition block">{link}</a>
                </li>
              ))}
            </ul>
            {/* Newsroom */}
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">{newsroomSection.title}</h3>
            <ul className="space-y-2 text-sm">
              {newsroomSection.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition block">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* 3rd Column: Sustainability (above), Career (below) */}
          <div>
            {/* Sustainability */}
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">{sustainabilitySection.title}</h3>
            <ul className="space-y-2 text-sm mb-6">
              {sustainabilitySection.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition block">{link}</a>
                </li>
              ))}
            </ul>
            {/* Career */}
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">{careerSection.title}</h3>
            <ul className="space-y-2 text-sm">
              {careerSection.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition block">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* 4th Column: Investor Relations */}
          <div>
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">{investorSection.title}</h3>
            <ul className="space-y-2 text-sm">
              {investorSection.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition block">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Mobile: Accordion */}
        <div className="md:hidden">
          {mobileSections.map((section, index) => (
            <div key={section.title} className="mb-4">
              <h3
                className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1 cursor-pointer flex items-center justify-between"
                onClick={() => toggleAccordion(index)}
              >
                {section.title}
                <span className="ml-2">
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </h3>
              <ul
                className={`space-y-2 text-sm overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
              >
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition block">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Logos and Apps */}
      <div className="mt-12 flex bg-white w-fit mx-auto p-2 rounded-2xl items-stretch flex-wrap justify-center gap-4">
        <div className=''>
          <img src="./app-store.svg" alt="App Store" className="h-10 mb-2" />
          <img src="./play-store.svg" alt="Google Play" className="h-10" />
        </div>
        <div className='bg-[#F1F1F1] rounded-xl flex-col flex justify-center'>
          <img src="./dominos.svg" alt="Dominos" className="h-10" />
        </div>
        <div className='bg-[#F1F1F1] rounded-xl flex-col flex justify-center'>
          <img src="./popeyes.svg" alt="Popeyes" className="h-10" />
        </div>
        <div className='bg-[#F1F1F1] rounded-xl flex-col flex justify-center'>
          <img src="./coffy.svg" alt="Coffy" className="h-10" />
        </div>
        <div className='bg-[#F1F1F1] rounded-xl flex-col flex justify-center'>
          <img src="./hongs.svg" alt="Hong's Kitchen" className="h-10" />
        </div>
        <div className='bg-[#F1F1F1] rounded-xl flex-col flex justify-center'>
          <img src="./dunkin.svg" alt="Dunkin'" className="h-10" />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-xs text-gray-400">
        <p>
          Privacy Policy | Disclaimer | Terms and Condition | Sitemap | © Jubilant FoodWorks All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
