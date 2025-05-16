import React from 'react';
import GlobalCover from '../Components/GlobalCover';
import AnimationWrapper from '../Components/Global/AnimationWrapper';

const brands = [
    {
        name: "./dominos.svg",
        website: "dominos.co.in",
        email: "guestcaredominos@jublfood.com",
        logo: ".public/aboutus/Dominos.svg",
    },
    {
        name: "./popeyes.svg",
        website: "popeyes.in",
        email: "guestcaredominos@jublfood.com",
    },
    {
        name: "./coffy.svg",
        website: "coffy.in",
        email: "guestcarecoffy@jublfood.com",
    },
    {
        name: "./hongs.svg",
        website: "hongskitchen.in",
        email: "guestservices@hongskitchen.in",
    },
    {
        name: "./dunkin.svg",
        website: "dunkinindia.com",
        email: "customercaredunkin@jublfood.com",
    },
];

export default function Contact() {
    const subLinks = [
        { icon: './investors/financial-info.svg', label: 'Financial Information', path: '/' },
        { icon: './investors/company-reports.svg', label: 'Company Reports', path: '/' },
        { icon: './investors/governance.svg', label: 'Governance', path: '/' },
        { icon: "./investors/sh-info.svg", label: "Shareholder Information", path: '/' },
        { icon: './investors/reg-46.svg', label: "Investor's Contact", path: '/' },
    ];
    return (
        <AnimationWrapper>
            <GlobalCover
                title={"Contact Us"}
                video="./Website Final Videos/Contact/Contact_Banner.webm"
                subNav={subLinks}
                theme={"#03253E"}
                themeLine={"#49C8F5"}
            />
            
            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <div className="space-y-12">
                        {/* Contact Info and Form */}
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Left Info Box */}
                            <div className="bg-[#e1f2f8] border border-[#a1c5d4] rounded-3xl p-6 w-full lg:w-1/3 space-y-6 shadow">
                                <h2 className="md:text-4xl font-thin">Contact</h2>

                                <div>
                                    <span className="bg-[#49C8F5] text-sm px-3 py-1 rounded-full">Corporate Office</span>
                                    <p className="mt-2 font-semibold">Jubilant FoodWorks Limited</p>
                                    <p className="text-sm mt-1">
                                        15th Floor, Tower E, SkyMark One, Plot No. H – 10/A Sector 98, Noida – 201301, U.P., India <br />
                                        Phone: +91 120 6927500, +91 120 6935400 <br />
                                        CIN: L74899UP1995PLC043677 <br />
                                        E-mail: investor@jublfood.com
                                    </p>
                                </div>

                                <div>
                                    <span className="bg-[#49C8F5] text-sm px-3 py-1 rounded-full">Registered Office</span>
                                    <p className="mt-2 font-semibold">Jubilant FoodWorks Limited</p>
                                    <p className="text-sm mt-1">
                                        Plot No. 1A, Sector - 16A, Noida - 201301, U.P., India <br />
                                        Phone: +91 0120 4090500 <br />
                                        FAX: +91 0120 4090599 <br />
                                        E-mail: investor@jublfood.com
                                    </p>
                                </div>
                            </div>

                            {/* Right Form Box */}
                            <form className="bg-[#e1f2f8] border border-[#a1c5d4] rounded-3xl p-6 w-full lg:w-2/3 shadow space-y-4">
                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-1/2 p-2 rounded-2xl border bg-[#EAF0F5] border-gray-300"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        className="w-1/2 p-2 rounded-2xl border bg-[#EAF0F5] border-gray-300"
                                    />
                                </div>
                                <div className="flex gap-4">
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-1/2 p-2 rounded-2xl border bg-[#EAF0F5] border-gray-300"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Product Details"
                                        className="w-1/2 p-2 rounded-2xl border bg-[#EAF0F5] border-gray-300"
                                    />
                                </div>
                                <textarea
                                    placeholder="Please write any note here..."
                                    className="w-full p-2 rounded-2xl border bg-[#EAF0F5] border-gray-300"
                                    rows="4"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="bg-[#49C8F5] text-black px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-[#82c9ea]"
                                >
                                    <span><img src="./send.svg" alt="" /></span> Send
                                </button>
                            </form>
                        </div>

                        {/* Brand Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {brands.map((brand, idx) => (
                                <div key={idx} className='bg-[#49C8F5] pb-2 rounded-3xl'>
                                    <div
                                        className="bg-[#001c38] text-white p-4 rounded-3xl shadow-md flex flex-col justify-between"
                                    >
                                        <img src={brand.name} className='w-44 h-20 mb-4' alt="" />
                                        <div className='p-6 rounded-2xl bg-[#001625]'>
                                            <div className="text-sm font-thin md:text-[16px] gap-3 mb-2 flex justify-start items-center">
                                                <img src="./global.svg" alt="" />
                                                <p>{brand.website}</p>
                                            </div>
                                            <div className="text-sm font-thin md:text-[16px] gap-3 mb-2 flex justify-start items-center">
                                                <img src="./sms-edit.svg" alt="" />
                                                <p>{brand.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AnimationWrapper>
    );
}