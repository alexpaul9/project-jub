import React from "react";

const ShareholderInfo = () => (
  <div className="py-16 ">
    <h1 className="text-4xl text-white font-thin mb-12">Shareholder Information</h1>
    <div className="md:flex justify-between items-start gap-12">
      {/* Stock Information */}
      <div>
        
        <h2 className="text-xl text-white font-semibold mb-4">Stock Information</h2>
        <ul className="space-y-3">
          <li>
            <a href="#" className="text-[#49C8F5] underline hover:text-[#a3d4f7]">
              Stock Exchange Filings
            </a>
          </li>
          <li>
            <a href="#" className="text-[#49C8F5] underline hover:text-[#a3d4f7]">
              Shareholding Pattern
            </a>
          </li>
          <li>
            <a href="#" className="text-[#49C8F5] underline hover:text-[#a3d4f7]">
              Stock Information
            </a>
          </li>
          <li>
            <a href="#" className="text-[#49C8F5] underline hover:text-[#a3d4f7]">
              Credit Ratings
            </a>
          </li>
        </ul>
      </div>
      {/* Dividends & IEPF Related */}
      <div>
        <h2 className="text-xl text-white font-semibold mb-4">Dividends & IEPF Related</h2>
        <ul className="space-y-3">
          <li>
            <a href="#" className="text-[#49C8F5] underline hover:text-[#a3d4f7]">
              Dividend
            </a>
          </li>
          <li>
            <a href="#" className="text-[#49C8F5] underline hover:text-[#a3d4f7]">
              Shares Transferred to IEPF
            </a>
          </li>
          <li>
            <a href="#" className="text-[#49C8F5] underline hover:text-[#a3d4f7]">
              Unclaimed Dividend & Shares<br />Liable to be Transferred to IEPF
            </a>
          </li>
        </ul>
      </div>
      {/* Investor Services & Support */}
      <div>
        <h2 className="text-xl text-white font-semibold mb-4">Investor Services & Support</h2>
        <ul className="space-y-3">
          <li>
            <a href="#" className="text-[#49C8F5] underline hover:text-[#a3d4f7]">
              Investor Information & Forms
            </a>
          </li>
          <li>
            <a href="#" className="text-[#49C8F5] underline hover:text-[#a3d4f7]">
              Online Dispute Resolution
            </a>
          </li>
          <li>
            <a href="#" className="text-[#49C8F5] underline hover:text-[#a3d4f7]">
              FAQs
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default ShareholderInfo;