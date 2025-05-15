import React from 'react'
import GlobalCover from '../../Components/GlobalCover';
import TVCs from '../../Components/Brands/TVCs';
import tvcData from '../../data/brands/dominos';
import ScrollSlider from '../../Components/Brands/ScrollSlider';

const Dominos = () => {
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
                title={<img src="./dominos/dominos-title.svg" alt="Dominos" className="h-24" />}
                video="./Website Final Videos/Dominos/Dominos_Banner.webm"
                subNav={subLinks}
                theme={"#227dde"}
                themeLine={"#e41837"}
            />
            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <section className="">
                        <div className="mx-auto flex flex-col md:flex-row items-stretch gap-6">
                            {/* Left Text Area */}
                            <div className="md:w-1/2 flex flex-col justify-between">
                                <h2 className="text-3xl md:text-5xl font-light leading-tight text-gray-900">
                                    It Happens Only with Pizza
                                </h2>

                                <div className="bg-[#deeaf5] border-[#a2c6e9] p-6 rounded-3xl border  mt-6 shadow-sm flex-1">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        At Domino’s, we know that no celebration is truly complete without pizza.
                                        Because let’s be real—what’s better than cheesy deliciousness, the toppings tumble, and the battle for the last slice?
                                        <br />
                                        Pizza isn’t just food; it’s the centerpiece of every hangout, the glue of every gathering,
                                        and the VIP guest at every party. Whether it’s a birthday bash, a family feast, or a spontaneous “let’s order pizza” moment,
                                        we’re here to turn cravings into celebrations and bites into memories.
                                    </p>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-full md:w-1/2 flex">
                                <img
                                    src="./dominos/dom2 1.png"
                                    alt="Domino's pizza"
                                    className="rounded-3xl w-full object-cover"
                                />
                                {/* <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover z-0"
                                    src="./Website Final Videos/AboutUS/BlueInfinity.webm" // or your correct video path
                                /> */}
                            </div>
                        </div>

                    </section>
                </div>
            </div>

            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <div className="md:flex justify-between items-stretch gap-6 mx-auto">
                        {/* Left Image */}
                        <div className="md:w-1/2 mb-4 md:mb-0 flex">
                            <img src="./Website Final Videos/Dominos/COUPLE ROMANCE WHOLE.jpg" className="w-full object-cover rounded-4xl" alt="" />
                        </div>

                        {/* Right Content */}
                        <div className="md:w-1/2 bg-[#E31837] pb-4 rounded-4xl">
                            <div className='bg-dominos-blue2 text-white flex items-center py-6 px-20 rounded-4xl w-full h-full'>

                                <p className="text-2xl leading-normal">
                                    From our first store in <b>1996</b> to over <b>2000+</b> stores in 2025, we've been serving up not just pizzas, but joy, nostalgia, and a whole lot of cheese.
                                    Because no matter the occasion, one thing is always true — <b>It Happens Only with Pizza</b>.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <div className="">
                        <h2 className="text-5xl font-normal text-gray-800 mb-10 ">
                            Key Highlights
                        </h2>
                        <div className="flex flex-wrap gap-6 mx-auto">
                            {/* Highlight 1 */}
                            <div className="flex items-center gap-2 bg-[#deeaf5] rounded-xl border border-[#a2c6e9] w-full sm:w-[48%] md:w-[32%] lg:w-[32%]">
                                <img src="./dominos/Icons1.png" alt="Biggest Market" className="w-32 h-32 object-contain flex-shrink-0" />
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-lg sm:text-xl font-semibold text-[#0074e4] mb-1">Biggest Market</h3>
                                    <p className="text-sm text-gray-700 leading-snug">
                                        India is currently the biggest market for Domino’s Pizza outside the United States.
                                    </p>
                                </div>
                            </div>

                            {/* Highlight 2 */}
                            <div className="flex items-center gap-2 bg-[#deeaf5] rounded-xl border border-[#a2c6e9] w-full sm:w-[48%] md:w-[32%] lg:w-[32%]">
                                <img src="./dominos/Icons2.png" alt="2000+ Stores" className="w-32 h-32 object-contain flex-shrink-0" />
                                <div className="flex flex-col justify-center text-sm">
                                    <h3 className="text-xl font-semibold text-[#0074e4] mb-0.5">2000+</h3>
                                    <p className="text-gray-700 leading-tight">
                                        Domino’s stores as of March 31, 2025
                                    </p>
                                </div>
                            </div>

                            {/* Highlight 3 */}
                            <div className="flex items-center gap-2 p-1 bg-[#deeaf5] rounded-xl border border-[#a2c6e9] w-full sm:w-[48%] md:w-[32%] lg:w-[32%]">
                                <img src="./dominos/Icons3.png" alt="Pioneering Innovation" className="w-32 h-32 object-contain flex-shrink-0" />
                                <div className="flex flex-col justify-center text-sm">
                                    <h3 className="text-xl font-normal text-[#0074e4] mb-0.5">Pioneering Innovation</h3>
                                    <p className="text-gray-700 leading-tight">
                                        First Food Service Company to successfully launch online & mobile ordering nationally in India
                                    </p>
                                </div>
                            </div>

                            {/* Highlight 4 */}
                            <div className="flex items-center gap-2 p-1 bg-[#deeaf5] rounded-xl border border-[#a2c6e9] w-full sm:w-[48%] md:w-[32%] lg:w-[32%]">
                                <img src="./dominos/Icons4.png" alt="Million’s of Pizza" className="w-32 h-32 object-contain flex-shrink-0" />
                                <div className="flex flex-col justify-center text-sm">
                                    <h3 className="text-xl font-semibold text-[#0074e4] mb-0.5">Million’s of Pizza</h3>
                                    <p className="text-gray-700 leading-tight">
                                        Sold every month across Domino’s Pizza India Restaurants. Every slice tells a story.
                                    </p>
                                </div>
                            </div>

                            {/* Highlight 5 */}
                            <div className="flex items-center gap-2 p-1 bg-[#deeaf5] rounded-xl border border-[#a2c6e9] w-full sm:w-[48%] md:w-[32%] lg:w-[32%]">
                                <img src="./dominos/Icons5.png" alt="6.6 M+ Strong Community" className="w-32 h-32 object-contain flex-shrink-0" />
                                <div className="flex flex-col justify-center text-sm">
                                    <h3 className="text-xl font-semibold text-[#0074e4] mb-0.5">6.6 M+ Strong Community</h3>
                                    <p className="text-gray-700 leading-tight">
                                        Domino’s has nurtured a vibrant community of pizza lovers
                                    </p>
                                </div>
                            </div>

                            {/* Highlight 6 */}
                            <div className="flex items-center gap-2 p-1 bg-[#deeaf5] rounded-xl border border-[#a2c6e9] w-full sm:w-[48%] md:w-[32%] lg:w-[32%]">
                                <img src="./dominos/Icons6.png" alt="Speed Delivery" className="w-32 h-32 object-contain flex-shrink-0" />
                                <div className="flex flex-col justify-center text-sm">
                                    <h3 className="text-xl font-semibold text-[#0074e4] mb-0.5">Speed Delivery</h3>
                                    <p className="text-gray-700 leading-tight">
                                        Fast, efficient delivery to your doorstep
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <section>
                        {/* First Row: Image + First Card */}
                        <div className="flex flex-col lg:flex-row items-start gap-8 mb-10">
                            {/* Did You Know Image */}
                            <img
                                src="./dominos/dyk-dominos.png"
                                alt="Did You Know?"
                                className="w-1/3 max-w-full"
                            />

                            {/* First Card */}
                            <div className="bg-[#deeaf5] border-[#a2c6e9] p-6 rounded-2xl flex items-start gap-6 border w-full">
                                <img
                                    src="./dominos/dom-card1.png"
                                    alt="12-Hour Marination"
                                    className="w-1/2 object-cover rounded-xl"
                                />
                                <div>
                                    <h3 className="text-4xl font-normal text-dominos-blue2 mb-4">12-Hour <br /> Marination</h3>
                                    <p className="text-gray-700 text-xl">
                                        Popeyes Chicken is marinated for at least 12 hours in bold Louisiana seasonings. You’ll relish the flavour till the last bite.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Second Row: Two Cards */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Card 2 */}
                            <div className="bg-[#deeaf5] border-[#a2c6e9] p-6 rounded-2xl flex items-start gap-6 border  w-full">
                                <img
                                    src="./dominos/dom-card2.png"
                                    alt="Signature Cajun Flavours"
                                    className="w-1/2 object-cover rounded-xl"
                                />
                                <div>
                                    <h3 className="text-4xl font-normal text-dominos-blue2 mb-4">Signature Bold <br /> Cajun Flavours</h3>
                                    <p className="text-gray-700 text-xl">
                                        Popeyes Chicken is expertly cooked, bursting with bold Cajun flavours that’s like a party in your mouth!
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#deeaf5] border-[#a2c6e9] p-6 rounded-2xl flex items-start gap-6 border w-full">
                                <img
                                    src="./dominos/dom-card3.png"
                                    alt="Shatter Crunch Texture"
                                    className="w-1/2 object-cover rounded-xl"
                                />
                                <div>
                                    <h3 className="text-4xl font-normal text-dominos-blue2 mb-4">Shatter Crunch Texture</h3>
                                    <p className="text-gray-700 text-xl">
                                        Extra crispy on the outside, juicy and bursting with flavour on the inside.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className='bg-[#217edf] py-10'>
                <div className="container-wrapper">
                    <div className="max-w-[1350px] mx-auto">
                        <h2 className='md:text-4xl text-white font-thin'>Domino’s journey of crafting <br />
                            crave-worthy moments</h2>
                    </div>
                </div>
                <ScrollSlider />
            </div>

            <div className="mx-auto mt-16 py-6 bg-dominos-blue2 ">
                <div className="container-wrapper">
                    <TVCs data={tvcData} />
                </div>
            </div>
        </div>
    )
}

export default Dominos