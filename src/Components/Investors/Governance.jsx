import React from "react";
import { ArrowUpRight } from "lucide-react";

const governanceCards = [
    {
        title: "Philosophy",
        description:
            "The Corporate Governance philosophy of the Company is driven by the interest of stakeholders and business nee...",
        link: "#",
        blackIcon: "./investors/book.svg",  // Black icon
        whiteIcon: "./investors/book-white.svg",  // White icon (or you can use a different emoji for a white version)
    },
    {
        title: "Board Structure",
        description:
            "The Board Structure of the Company is designed to ensure effective governance and accountability.",
        link: "#",
        blackIcon: "./investors/chart-success.svg",  // Black icon
        whiteIcon: "./investors/chart-success-white.svg",  // White icon (or different emoji for white version)
    },
    {
        title: "Policies and Codes",
        description:
            "The Corporate Governance philosophy of the Company is driven by the interest of stakeholders and business nee...",
        link: "#",
        blackIcon: "./investors/pad.svg",  // Black icon
        whiteIcon: "./investors/pad-white.svg",  // White icon (or different emoji for white version)
    },
    {
        title: "Newspaper Publications",
        description:
            "The Newspaper Publications section includes important notices and financial results published in various newspaper...",
        link: "#",
        blackIcon: "./investors/book-saved.svg",  // Black icon
        whiteIcon: "./investors/book-saved-white.svg",  // White icon (or different emoji for white version)
    },
];


const otherResources = [
    { label: "Disclosures under Reg 46", link: "#" },
    { label: "IR Contact", link: "#" },
    { label: "Online Dispute Resolution", link: "#" },
];

export default function Governance() {
    return (
        <div>
            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <div className="md:px-0 font-sans">
                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl font-thin text-[#122241] mb-8">
                            Governance
                        </h2>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                            {governanceCards.map((card, i) => (
                                <a
                                    key={i}
                                    href={card.link}
                                    className="group relative rounded-2xl p-6 bg-[#eaf7fd] text-[#122241] transition-all duration-500 ease-in-out hover:bg-gradient-to-b hover:from-[#0b2641] hover:to-[#2180a8] hover:text-white"
                                >
                                    <div className="text-3xl mb-4 transform transition-transform duration-500 relative">
                                        {/* Black Icon (Default) */}
                                        <div className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                            <img src={card.blackIcon} alt="" />
                                        </div>

                                        {/* White Icon (On Hover) */}
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <img src={card.whiteIcon} alt="" />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-2 transition-colors duration-500">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm mb-4 transition-colors duration-500">
                                        {card.description}
                                    </p>
                                    <span className="inline-flex items-center gap-1 text-sm font-medium transition-all duration-500 group-hover:translate-x-1">
                                        Learn more <ArrowUpRight size={14} />
                                    </span>

                                    {/* Floating arrow icon on top right */}
                                    <div className="absolute -top-2 -right-2 w-14 h-14 border-4 border-black bg-gradient-to-b from-gray-800 to-[#01C7F3] rounded-full flex items-center justify-center opacity-0 transform scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                                        <ArrowUpRight size={21} className="text-white" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Other Resources */}

            <div className="bg-[#eff5ff] py-4">
                <div className="container-wrapper">
                    <div className="max-w-[1350px] mx-auto my-16">

                        <h2 className="text-3xl md:text-4xl font-thin text-[#122241] mb-8">
                            Other resources
                        </h2>


                        <div className="flex md:flex-row flex-col gap-4">
                            {otherResources.map((res, i) => (
                                <a
                                    key={i}
                                    href={res.link}
                                    className={`flex-col gap-6 md:w-[32%] p-4 rounded-xl text-sm font-medium shadow-sm transition-all duration-300 
                ${res.dark
                                            ? "bg-[#0b2641] text-white"
                                            : "bg-white text-[#122241]"
                                        } 
                hover:bg-[#0b2641] hover:text-white hover:scale-105 group`}
                                >
                                    <p className="mb-4">{res.label}</p>
                                    <div className="w-fit p-1 rounded-[6px] transition-all duration-300 bg-black
                group-hover:bg-sky-400 group-hover:text-black"> {/* Applied group hover */}
                                        <ArrowUpRight size={14} className="transition-all duration-300 text-white group-hover:text-black" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
