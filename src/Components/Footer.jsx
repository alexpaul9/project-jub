import React, { useState } from 'react';

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Section data with actual URLs (example structure)
  const aboutSection = {
    title: 'About Us',
    links: [
      { label: 'Company Profile', url: '/company-profile' },
      { label: 'Leadership', url: '/leadership' },
      { label: 'Milestones', url: '/milestones' },
      { label: 'Awards', url: '/awards' },
      { label: 'Jubilant Bhartia Group', url: '/jubilant-bhartia' },
      { label: 'Professional Lighting', url: '/professional-lighting' },
    ],
  };

  const contactSection = {
    title: 'Contact Us',
    links: [
      { label: 'Contact Details', url: '/contact' },
      { label: 'Real Estate', url: '/real-estate' },
    ],
  };

  const brandsSection = {
    title: 'Brands',
    links: [
      { label: 'Domino’s Pizza', url: '/brands/dominos' },
      { label: 'Popeyes', url: '/brands/popeyes' },
      { label: 'Coffy', url: '/brands/coffy' },
      { label: "Dunkin'", url: '/brands/dunkin' },
      { label: 'Hong’s Kitchen', url: '/brands/hongs-kitchen' },
      { label: 'Franchise Information', url: '/franchise' },
    ],
  };

  const newsroomSection = {
    title: 'Newsroom',
    links: [
      { label: 'Press Release', url: '/press-release' },
    ],
  };

  const sustainabilitySection = {
    title: 'Sustainability',
    links: [
      { label: 'Sustainability Progress', url: '/sustainability/progress' },
      { label: 'Sustainability Targets', url: '/sustainability/targets' },
      { label: 'Sustainability Profile', url: '/sustainability/profile' },
      { label: 'Reports', url: '/sustainability/reports' },
      { label: 'Key CSR Engagements', url: '/csr' },
      { label: 'Corporate Citizenship', url: '/sustainability/citizenship' },
    ],
  };

  const careerSection = {
    title: 'Career',
    links: [
      { label: 'Overview', url: '/career' },
      { label: 'Fraudulent Recruiting', url: '/career/fraud-warning' },
    ],
  };

  const investorSection = {
    title: 'Investor Relations',
    links: [
      { label: 'Overview', url: '/investors' },
      { label: 'Financial Information', url: '/investors/financials' },
      { label: 'Company Reports', url: '/investors/reports' },
      { label: 'Governance', url: '/investors/governance' },
      { label: 'Shareholder Information', url: '/investors/shareholders' },
      { label: 'Disclosure under Reg. 46 of LODR', url: '/investors/disclosures' },
      { label: 'Investor’s Contact', url: '/investors/contact' },
      { label: 'Online Dispute Resolution', url: '/investors/dispute-resolution' },
    ],
  };

  const mobileSections = [
    aboutSection,
    contactSection,
    brandsSection,
    newsroomSection,
    sustainabilitySection,
    careerSection,
    investorSection,
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <footer className="bg-black text-gray-300 px-4 md:px-8 py-12">
      <div className="max-w-[1350px] mx-auto">
        <div className="hidden md:grid grid-cols-4 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">{aboutSection.title}</h3>
            <ul className="space-y-2 text-sm mb-6">
              {aboutSection.links.map(({ label, url }) => (
                <li key={label}>
                  <a href={url} className="hover:text-white transition block">{label}</a>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">{contactSection.title}</h3>
            <ul className="space-y-2 text-sm">
              {contactSection.links.map(({ label, url }) => (
                <li key={label}>
                  <a href={url} className="hover:text-white transition block">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">{brandsSection.title}</h3>
            <ul className="space-y-2 text-sm mb-6">
              {brandsSection.links.map(({ label, url }) => (
                <li key={label}>
                  <a href={url} className="hover:text-white transition block">{label}</a>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">{newsroomSection.title}</h3>
            <ul className="space-y-2 text-sm">
              {newsroomSection.links.map(({ label, url }) => (
                <li key={label}>
                  <a href={url} className="hover:text-white transition block">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">{sustainabilitySection.title}</h3>
            <ul className="space-y-2 text-sm mb-6">
              {sustainabilitySection.links.map(({ label, url }) => (
                <li key={label}>
                  <a href={url} className="hover:text-white transition block">{label}</a>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">{careerSection.title}</h3>
            <ul className="space-y-2 text-sm">
              {careerSection.links.map(({ label, url }) => (
                <li key={label}>
                  <a href={url} className="hover:text-white transition block">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">{investorSection.title}</h3>
            <ul className="space-y-2 text-sm">
              {investorSection.links.map(({ label, url }) => (
                <li key={label}>
                  <a href={url} className="hover:text-white transition block">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Accordion */}
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
                {section.links.map(({ label, url }) => (
                  <li key={label}>
                    <a href={url} className="hover:text-white transition block">
                      {label}
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
        <div>
          <img src="./app-store.svg" alt="App Store" className="h-10 mb-2" />
          <img src="./play-store.svg" alt="Google Play" className="h-10" />
        </div>
        {['dominos', 'popeyes', 'coffy', 'hongs', 'dunkin'].map(brand => (
          <div key={brand} className="bg-[#F1F1F1] rounded-xl flex-col flex justify-center">
            <img src={`./${brand}.svg`} alt={brand} className="h-10" />
          </div>
        ))}
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
