import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import PDFModal from "../Global/PDFModal";
import DocModal from "../Global/DocModal";
import policies from "../../data/Investors/policies";

const governanceCards = [
  {
    title: "Philosophy",
    description: "The Corporate Governance philosophy...",
    blackIcon: "./investors/book.svg",
    whiteIcon: "./investors/book-white.svg",
    bannerImage: "/banners/philosophy.jpg", // Add proper path
    documents: [],
  },
  {
    title: "Board Structure",
    description: "The Board Structure of the Company...",
    blackIcon: "./investors/chart-success.svg",
    whiteIcon: "./investors/chart-success-white.svg",
    bannerImage: "/banners/board.jpg",
    documents: [],
  },
  {
    title: "Policies and Codes",
    description: "The Corporate Governance philosophy...",
    blackIcon: "./investors/pad.svg",
    whiteIcon: "./investors/pad-white.svg",
    bannerImage: "/banners/policies.jpg",
    documents: policies,
  },
  {
    title: "Newspaper Publications",
    description: "The Newspaper Publications section...",
    blackIcon: "./investors/book-saved.svg",
    whiteIcon: "./investors/book-saved-white.svg",
    bannerImage: "/banners/newspaper.jpg",
    documents: [],
  },
];

const otherResources = [
  { label: "Disclosures under Reg 46", link: "#" },
  { label: "IR Contact", link: "#" },
  { label: "Online Dispute Resolution", link: "#" },
];

export default function Governance() {
  const [activeCard, setActiveCard] = useState(null);
  const [showDocModal, setShowDocModal] = useState(false);
  const [showPDFModal, setShowPDFModal] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState(null);

  const handleCardClick = (card) => {
    setActiveCard(card);
    setShowDocModal(true);
  };


  return (
    <div>
      {/* Doc Modal */}
      <DocModal
        open={showDocModal}
        onClose={() => setShowDocModal(false)}
        title={activeCard?.title}
        bannerImage={activeCard?.bannerImage}
        documents={activeCard?.documents}
      />

      {/* PDF Modal */}
      {showPDFModal && (
        <PDFModal
          pdf={selectedPDF}
          onClose={() => setShowPDFModal(false)}
        />
      )}

      <div className="container-wrapper">
        <div className="max-w-[1350px] mx-auto my-16">
          <div className="md:px-0 font-sans">
            <h2 className="text-3xl md:text-4xl font-thin text-[#122241] mb-8">Governance</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
              {governanceCards.map((card, i) => (
                <button
                  key={i}
                  onClick={() => handleCardClick(card)}
                  className="group relative rounded-2xl p-6 bg-[#eaf7fd] text-[#122241] transition-all duration-500 ease-in-out hover:bg-gradient-to-b hover:from-[#0b2641] hover:to-[#2180a8] hover:text-white text-left"
                >
                  <div className="text-3xl mb-4 relative">
                    <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                      <img src={card.blackIcon} alt="" />
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <img src={card.whiteIcon} alt="" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm mb-4">{card.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium group-hover:translate-x-1 transition-all duration-500">
                    Learn more <ArrowUpRight size={14} />
                  </span>

                  <div className="absolute -top-2 -right-2 w-14 h-14 border-4 border-black bg-gradient-to-b from-gray-800 to-[#01C7F3] rounded-full flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                    <ArrowUpRight size={21} className="text-white" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Other Resources */}
      <div className="bg-[#eff5ff] py-4">
        <div className="container-wrapper">
          <div className="max-w-[1350px] mx-auto my-16">
            <h2 className="text-3xl md:text-4xl font-thin text-[#122241] mb-8">Other resources</h2>
            <div className="flex md:flex-row flex-col gap-4">
              {otherResources.map((res, i) => (
                <button
                  key={i}
                  onClick={() => setShowDocModal(true)} // optional: implement custom doc modal for this too
                  className="flex-col gap-6 md:w-[32%] p-4 rounded-xl text-sm font-medium shadow-sm transition-all duration-300 bg-white text-[#122241] hover:bg-[#0b2641] hover:text-white hover:scale-105 group"
                >
                  <p className="mb-4">{res.label}</p>
                  <div className="w-fit p-1 rounded-[6px] transition-all duration-300 bg-black group-hover:bg-sky-400 group-hover:text-black">
                    <ArrowUpRight size={14} className="transition-all duration-300 text-white group-hover:text-black" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
