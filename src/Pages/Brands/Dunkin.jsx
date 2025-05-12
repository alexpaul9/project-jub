import React from 'react'
import GlobalCover from '../../Components/GlobalCover';
import TVCs from '../../Components/Brands/TVCs';
import tvcData from "../../data/brands/popeye";

const Dunkin = () => {
    const subLinks = [
        { icon: './pizza.svg', label: 'Dominos', path: '/dominos' },
        { icon: './meat.svg', label: 'Popeyes', path: '/popeyes' },
        { icon: './donut.svg', label: 'Dunkin', path: '/dunkin' },
        { icon: "./noodles.svg", label: "Hong's Kitchen", path: '/hongs-kitchen' },
        { icon: './cup-of-tea.svg', label: 'Coffy', path: '/coffy' },
        { icon: './note-2.svg', label: 'Franchise Information', path: '/franchise-info' },
    ];
    return (
        <div>
            <GlobalCover
                title={<img src="./dunkin/dunkin-title.svg" alt="Dominos" className="h-24" />}
                image="./popeyes/popeyes-banner.png"
                subNav={subLinks}
                theme={"#F30A9B"}
                themeLine={"#FF7A0A"}
            />
            <div className="container-wrapper">
                <div className="max-w-screen-xl mx-auto my-16">
                    <section className="my-16">
                        <div className="mx-auto flex flex-col md:flex-row items-center gap-10">
                            {/* Left Text Area */}
                            <div className="md:w-1/2">
                                <h2 className="text-3xl md:text-5xl font-light leading-tight text-gray-900">
                                    Serving Since 1950 <br />
                                    World’s oldest & one of the <br />
                                    largest coffee chains
                                </h2>
                                <div className="flex justify-center gap-4 items-stretch">
                                    {/* Left Box */}
                                    <div className="bg-[#f2ebf4] border-[#f6c1db] p-6 rounded-3xl border  mt-6 shadow-sm flex-1">
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Dunkin is the world's second-largest Coffee and Bakery Chain. Fueling smiles and earning
                                            consumer love.
                                        </p>
                                    </div>

                                    {/* Right Box */}
                                    <div className="flex flex-col bg-[#FF60A3] rounded-3xl gap-4 px-6 py-4 mt-6 w-1/3">
                                        <h2 className="text-white font-normal text-5xl">200+</h2>
                                        <p className="text-white">Beverages <br /> Innovation <br />Every Yearr</p>
                                    </div>
                                </div>

                            </div>

                            {/* Right Image */}
                            <div className="w-full md:w-1/2 flex">
                                <img
                                    src="./dunkin/dunkin-sub.png"
                                    alt="Domino's pizza"
                                    className="rounded-3xl w-full object-cover"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className="mx-auto my-16 py-4">
                <div className="container-wrapper">
                    <div className="">
                        <h2 className="text-5xl font-light text-gray-800 mb-10 ">
                            Customers We Serve Globaly
                        </h2>
                        <div className="flex flex-wrap gap-6 mx-auto">
                            {/* Highlight 1 */}
                            <div className="flex items-center gap-2 bg-[#f2ebf4] border-[#f6c1db] rounded-xl border  w-full sm:w-[48%] md:w-[32%] lg:w-[32%]">
                                <img src="./dunkin/Icons1.png" alt="Biggest Market" className="w-32 h-32 object-contain flex-shrink-0" />
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-4xl font-normal text-[#F30A9B] mb-1">52</h3>
                                    <p className="text-sm text-gray-700 leading-snug">
                                        Countries
                                    </p>
                                </div>
                            </div>

                            {/* Highlight 2 */}
                            <div className="flex items-center gap-2 bg-[#f2ebf4] border-[#f6c1db] rounded-xl border w-full sm:w-[48%] md:w-[32%] lg:w-[32%]">
                                <img src="./dunkin/Icons2.png" alt="2000+ Stores" className="w-32 h-32 object-contain flex-shrink-0" />
                                <div className="flex flex-col justify-center text-sm">
                                    <h3 className="text-4xl font-normal text-[#FF7A0A] mb-0.5">14000+</h3>
                                    <p className="text-gray-700 leading-tight">
                                        Locations
                                    </p>
                                </div>
                            </div>

                            {/* Highlight 3 */}
                            <div className="flex items-center gap-2 p-1 bg-[#f2ebf4] border-[#f6c1db] rounded-xl border w-full sm:w-[48%] md:w-[32%] lg:w-[32%]">
                                <img src="./dunkin/Icons3.png" alt="Pioneering Innovation" className="w-32 h-32 object-contain flex-shrink-0" />
                                <div className="flex flex-col justify-center text-sm">
                                    <h3 className="text-4xl font-normal text-[#F30A9B] mb-0.5">82+</h3>
                                    <p className="text-gray-700 leading-tight">
                                        Cups Sold Every Second
                                    </p>
                                </div>
                            </div>

                            {/* Highlight 4 */}
                            <div className="flex items-center gap-2 p-1 bg-[#f2ebf4] border-[#f6c1db] rounded-xl border w-full sm:w-[48%] md:w-[32%] lg:w-[32%]">
                                <img src="./dunkin/Icons4.png" alt="Million’s of Pizza" className="w-32 h-32 object-contain flex-shrink-0" />
                                <div className="flex flex-col justify-center text-sm">
                                    <h3 className="text-4xl font-normal text-[#FF7A0A] mb-0.5">60+</h3>
                                    <p className="text-gray-700 leading-tight">
                                        Donuts Sold Every Second
                                    </p>
                                </div>
                            </div>

                            {/* Highlight 5 */}
                            <div className="flex items-center gap-2 p-1 bg-[#f2ebf4] border-[#f6c1db] rounded-xl border w-full sm:w-[48%] md:w-[32%] lg:w-[32%]">
                                <img src="./dunkin/Icons5.png" alt="6.6 M+ Strong Community" className="w-32 h-32 object-contain flex-shrink-0" />
                                <div className="flex flex-col justify-center text-sm">
                                    <h3 className="text-4xl font-normal text-[#F30A9B] mb-0.5">1100+</h3>
                                    <p className="text-gray-700 leading-tight">
                                        Donuts Varieties
                                    </p>
                                </div>
                            </div>

                            {/* Highlight 6 */}
                            <div className="flex items-center gap-2 p-1 bg-[#f2ebf4] border-[#f6c1db] rounded-xl border w-full sm:w-[48%] md:w-[32%] lg:w-[32%]">
                                <img src="./dunkin/Icons6.png" alt="Speed Delivery" className="w-32 h-32 object-contain flex-shrink-0" />
                                <div className="flex flex-col justify-center text-sm">
                                    <h3 className="text-4xl font-normal text-[#FF7A0A] mb-0.5">4 Mn</h3>
                                    <p className="text-gray-700 leading-tight">
                                        Customers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto my-16 py-4">
                <div className="container-wrapper">
                    <h2 className="text-5xl font-light text-gray-800 mb-10 ">
                        Brand Purpose
                    </h2>
                    <div className="max-w-screen-xl md:flex  justify-between items-stretch gap-6 mx-auto">
                        {/* Right Content */}
                        <div className="md:w-1/2 ounded-4xl">
                            <div className='bg-[#f2ebf4] border border-[#f6c1db] text-black flex items-center py-6 px-20 rounded-4xl w-full h-full mb-4 md:mb-0'>
                                <p className="text-4xl font-light leading-normal">
                                    To recharge the world <br />
                                    with great tasting <br />
                                    <span className='font-semibold text-[#F30A9B]'>Coffee and Bakery</span> <br />
                                    which pours positivity <br />
                                    into people’s lives
                                </p>
                            </div>
                        </div>
                        {/* Left Image */}
                        <div className="md:w-1/2 mb-4 md:mb-0 flex">
                            <img src="./dunkin/donuts-feature.png" className="w-full object-cover rounded-lg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto my-16 py-4">
                <div className="container-wrapper">
                    <h2 className="text-5xl font-light text-gray-800 mb-10 ">
                        Brand Promise
                    </h2>
                    <div className="max-w-screen-xl md:flex  justify-between items-stretch gap-6 mx-auto">
                        {/* Left Image */}
                        <div className="md:w-1/2 mb-4 md:mb-0 flex">
                            <img src="./dunkin/donuts-feature2.png" className="w-full object-cover rounded-lg" alt="" />
                        </div>
                        {/* Right Content */}
                        <div className="md:w-1/2 ounded-4xl">
                            <div className='bg-[#f4f0ed] border border-[#f8cda8] text-black flex items-center py-6 px-20 rounded-4xl w-full h-full mb-4 md:mb-0'>
                                <div>
                                    <h2 className='font-semibold text-5xl mb-3 text-[#ff7a0b]'>We Refill Optimist</h2> <br />
                                    <p className="text-2xl font-light leading-normal">
                                        It's that simple. No matter the guest. Regardless of the occasion.
                                        We refill unapologetic optimism by Pouring Positivity,
                                        Sweetening Lives, and Cultivating Connections.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto my-16 py-4 bg-[#FF60A3]">
                <div className="container-wrapper">
                    <div className="max-w-screen-xl flex justify-between items-center gap-6 mx-auto my-16">
                        <div className='md:w-1/2 mx-auto text-white'>
                            <h2 className="text-3xl md:text-5xl mb-4 font-light leading-tight">
                                Dunkin' Footprint in India
                            </h2>
                            <p className='mb-4 text-2xl bg-white rounded-3xl p-6 text-black'>
                                Re-launched in November 2022 and
                                since then opened 12 stores.
                            </p>
                            <div className="flex mt-4 w-full gap-4 mx-auto">
                                {/* Highlight 1 */}
                                <div className="flex items-center gap-8 bg-[#F30A9B] rounded-3xl w-full md:w-1/2 p-4 gap-4">
                                    <img src="./dunkin/Icons7.png" alt="Biggest Market" className="w-32 h-32 object-contain flex-shrink-0" />
                                    <div className="flex flex-col justify-center">
                                        <h3 className="text-4xl font-normal text-white mb-1">10+</h3>
                                        <p className="text-sm text-whiteleading-snug">
                                            Cities
                                        </p>
                                    </div>
                                </div>

                                {/* Highlight 2 */}
                                <div className="flex items-center gap-2 bg-[#F30A9B]  rounded-3xl w-full md:w-1/2 p-4 gap-4">
                                    <img src="./dunkin/Icons8.png" alt="2000+ Stores" className="w-32 h-32 object-contain flex-shrink-0" />
                                    <div className="flex flex-col justify-center text-sm">
                                        <h3 className="text-4xl font-normal text-white mb-0.5">31</h3>
                                        <p className="text-white leading-tight">
                                            Locations
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:w-1/2 mx-auto text-white'>
                            <img src="./dunkin/dunkin-feature3.png" className='w-full' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-wrapper">
                <div className="max-w-screen-xl mx-auto my-16">
                    <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center items-stretch">
                        {/* Card 1 */}
                        <div className="flex flex-col w-full md:w-1/3 bg-[#f2ebf4] border border-[#f6c1db] rounded-3xl p-4">
                            <img src="./dunkin/dunkin-bg1.png" alt="" className="mb-2 mx-auto" />
                            <div className="text-center overflow-visible">
                                <h3 className="text-2xl text-[#FF60A3] mb-4">
                                    Pouring Positivity & <br /> Sweetening Lives
                                </h3>
                                <p className="text-xl">
                                    is our specialty. From energetic coffee to sweet donuts, there’s something to satisfy every taste, every mood and, recharge or sweeten any moment.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col w-full md:w-1/3 bg-[#f4f0ed] border border-[#f8cda8] rounded-3xl p-4">
                            <img src="./dunkin/dunkin-bg2.png" alt="" className="mb-4 mx-auto" />
                            <div className="text-center overflow-visible">
                                <h3 className="text-2xl text-[#FF7A0A] mb-4">
                                    Cultivating <br /> Connections
                                </h3>
                                <p className="text-xl">
                                    We are playful and energetic, and invite guests of all backgrounds to join in the fun. We value authenticity and comfort and believe the world is a better place when we all take the time to laugh, and savor life’s moments.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col w-full md:w-1/3 bg-[#f2ebf4] border border-[#f6c1db] rounded-3xl p-4">
                            <img src="./dunkin/dunkin-bg3.png" alt="" className="mb-2 mx-auto" />
                            <div className="text-center overflow-visible">
                                <h3 className="text-2xl text-[#FF60A3] mb-4">
                                    Delivering <br /> Every-day value
                                </h3>
                                <p className="text-xl">
                                    to our customers With top-quality products and service.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-16 py-4 bg-[#FF60A3]">
                <div className="container-wrapper">
                    <div className="max-w-screen-xl flex justify-between items-center gap-6 mx-auto my-16">
                        <div className='md:w-[40%] mx-auto text-white'>
                            <h2 className="text-3xl md:text-5xl mb-4 font-light leading-tight">
                                Pivoted To Become <br /> A Coffee-First Brand.
                            </h2>
                            <p className='mb-4 text-2xl text-white'>
                                Maintain dominance in Donuts <br /> and Build bakery & RTE to cater <br /> to all day-parts
                            </p>

                        </div>
                        <div className='md:w-[60%] md:flex justify-center items-center gap-4 mx-auto text-white'>
                            {/* Image 1 */}
                            <div className="relative w-[33%] overflow-hidden rounded-2xl">
                                <img src="./dunkin/c-first1.png" className="w-full h-full object-cover" alt="" />
                                <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                    <p className="text-white w-full text-lg text-center">Build Frequency & <br /> habit Drive Volume</p>
                                </div>
                            </div>

                            {/* Image 2 */}
                            <div className="relative w-[33%] overflow-hidden rounded-2xl">
                                <img src="./dunkin/c-first2.png" className="w-full h-full object-cover" alt="" />
                                <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                    <p className="text-white text-lg w-full text-center">Grow in Core & <br />
                                    Stretch to Premium</p>
                                </div>
                            </div>

                            {/* Image 3 */}
                            <div className="relative w-[33%] overflow-hidden rounded-2xl">
                                <img src="./dunkin/c-first3.png" className="w-full h-full object-cover" alt="" />
                                <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                    <p className="text-white text-lg w-full text-center">Food that compliments <br />
                                    Coffee Experiences</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dunkin