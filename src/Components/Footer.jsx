import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Company Profile</a></li>
            <li><a href="#" className="hover:text-white transition">Leadership</a></li>
            <li><a href="#" className="hover:text-white transition">Milestones</a></li>
            <li><a href="#" className="hover:text-white transition">Awards</a></li>
            <li><a href="#" className="hover:text-white transition">Jubilant Bhartia Group</a></li>
            <li><a href="#" className="hover:text-white transition">Professional Lighting</a></li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3 border-b border-gray-500 pb-1">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Contact Details</a></li>
            <li><a href="#" className="hover:text-white transition">Real Estate</a></li>
          </ul>
        </div>

        {/* Brands */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">Brands</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Domino’s Pizza</a></li>
            <li><a href="#" className="hover:text-white transition">Popeyes</a></li>
            <li><a href="#" className="hover:text-white transition">Coffy</a></li>
            <li><a href="#" className="hover:text-white transition">Dunkin'</a></li>
            <li><a href="#" className="hover:text-white transition">Hong’s Kitchen</a></li>
            <li><a href="#" className="hover:text-white transition">Franchise Information</a></li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3 border-b border-gray-500 pb-1">Newsroom</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Press Release</a></li>
          </ul>
        </div>

        {/* Sustainability */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">Sustainability</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Sustainability Progress</a></li>
            <li><a href="#" className="hover:text-white transition">Sustainability Targets</a></li>
            <li><a href="#" className="hover:text-white transition">Sustainability Profile</a></li>
            <li><a href="#" className="hover:text-white transition">Reports</a></li>
            <li><a href="#" className="hover:text-white transition">Key CSR Engagements</a></li>
            <li><a href="#" className="hover:text-white transition">Corporate Citizenship</a></li>
          </ul>
        </div>

        {/* Career */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">Career</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Overview</a></li>
            <li><a href="#" className="hover:text-white transition">Fraudulent Recruiting</a></li>
          </ul>
        </div>

        {/* Investor Relations */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b border-gray-500 pb-1">Investor Relations</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Overview</a></li>
            <li><a href="#" className="hover:text-white transition">Financial Information</a></li>
            <li><a href="#" className="hover:text-white transition">Company Reports</a></li>
            <li><a href="#" className="hover:text-white transition">Governance</a></li>
            <li><a href="#" className="hover:text-white transition">Shareholder Information</a></li>
            <li><a href="#" className="hover:text-white transition">Disclosure under Reg. 46 of LODR</a></li>
            <li><a href="#" className="hover:text-white transition">Investor’s Contact</a></li>
            <li><a href="#" className="hover:text-white transition">Online Dispute Resolution</a></li>
          </ul>
        </div>
      </div>

      {/* Logos and Apps */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <img src="/apple-store.png" alt="App Store" className="h-10" />
        <img src="/google-play.png" alt="Google Play" className="h-10" />
        <img src="/dominos.png" alt="Dominos" className="h-10" />
        <img src="/popeyes.png" alt="Popeyes" className="h-10" />
        <img src="/coffy.png" alt="Coffy" className="h-10" />
        <img src="/hongskitchen.png" alt="Hong's Kitchen" className="h-10" />
        <img src="/dunkin.png" alt="Dunkin'" className="h-10" />
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
