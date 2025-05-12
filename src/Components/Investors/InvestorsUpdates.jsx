import React from "react";
import { TbClipboardText } from "react-icons/tb";
const reports = [
  { title: "Shareholder Meetings", href: "#" },
  { title: "AGM Notices", href: "#" },
  { title: "Subsidiary Companies", href: "#" },
  { title: "Secretarial Compliance Report", href: "#" },
  { title: "Annual Returns", href: "#" },
  { title: "ESOP Disclosures", href: "#" },
  { title: "BRSR", href: "#" },
];

export default function InvestorsUpdates() {
  return (
    <div className="font-sans">
      <h2 className="text-3xl md:text-4xl font-thin text-[#122241] mb-8">Investors Updates</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section */}
        <div className="bg-[#e1f2f8] border border-[#a1c5d4] rounded-2xl p-6 w-full md:w-1/2 shadow-sm">
          <h3 className="text-2xl font-thin mb-10 text-[#122241]">Company Reports</h3>
          <ul className="space-y-4">
            {reports.map((item, index) => (
              <li key={index} className="border-b border-[#c3e2f0] pb-2">
                <a
                  href={item.href}
                  className="flex text-base items-center gap-2 text-[#122241] hover:text-[#007acc] transition-colors duration-200"
                >
                  <TbClipboardText size={24} color="#333" /> {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          {/* Stock Widget */}
          <div className="bg-[#0b2641] text-white rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <p className="text-sm text-gray-300">Jubilant FoodWorks Ltd</p>
              <h2 className="text-4xl font-bold">632.10 <span className="text-xl font-light">INR</span></h2>
              <p className="text-xs mt-1 text-gray-400">3 MAR, 3:30 PM IST</p>
              <div className="mt-4 space-x-2">
                <button className="px-4 py-1 rounded-md bg-white text-[#0b2641] font-medium">NSE</button>
                <button className="px-4 py-1 rounded-md bg-[#55b8e1] text-[#0b2641] font-medium">BSE</button>
              </div>
            </div>
            <button className="mt-4 md:mt-0 bg-white text-[#0b2641] text-base flex items-center gap-2 rounded-xl">
              <span className="mx-2 my-1">View details</span>
              <span className="bg-[#55b8e1] py-3 px-4 rounded-xl text-white">↗</span>
            </button>
          </div>

          {/* Stock Image */}
          <img
            src="./investors/Rectangle 6139.png"
            alt="stock visual"
            className="rounded-2xl w-full object-cover h-56 md:h-64 shadow"
          />
        </div>
      </div>
    </div>
  );
}
