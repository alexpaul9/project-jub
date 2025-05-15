import React from 'react'
import GlobalCover from '../../Components/GlobalCover';
import TVCs from '../../Components/Brands/TVCs';
import tvcData from "../../data/brands/popeye";

const Popeyes = () => {
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
                title={<img src="./popeyes/popeyes-title.svg" alt="Dominos" className="h-24" />}
                video="./Website Final Videos/popeyes/Popeyes.webm"
                subNav={subLinks}
                theme={"#f25a22"}
                themeLine={"#02b3aa"}
            />
            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <section className="my-16">
                        <div className="mx-auto flex flex-col md:flex-row items-center gap-10">
                            {/* Left Text Area */}
                            <div className="flex-1">
                                <h2 className="text-3xl md:text-5xl font-light leading-tight text-gray-900">
                                    Popeyes was founded in New <br />
                                    Orleans, Louisiana, in 1972.
                                </h2>

                                <div className="bg-[#fbeee6] p-6 rounded-xl border border-[#f2bfa9] mt-6 shadow-sm">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        With over 50 years of history, we are proud to share our love for flavorful and delicious food.
                                        People around the world enjoy our unique New Orleans-style menu, which includes fan favorites like the
                                        iconic Chicken Sandwich, our Signature Chicken, Boneless Wings, and Chicken Tenders. Our passion
                                        for Louisiana’s flavors has helped make Popeyes one of the biggest chicken brands in the world, with
                                        more than 4,100 restaurants in various countries.
                                    </p>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-1/3">
                                <img
                                    src="./popeyes/Feature Image.png"
                                    alt="Popeyes chicken"
                                    className="rounded-3xl w-full object-cover"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className="mx-auto my-16 py-4 bg-[#f25a22]">
                <div className="container-wrapper">
                    <div className="max-w-[1350px] flex justify-between items-stretch gap-6 mx-auto my-16">
                        <div className='md:w-1/2 mx-auto text-white'>
                            <h2 className="text-3xl md:text-5xl mb-4 font-light leading-tight">
                                We brought<br />Popeyes to India
                            </h2>
                            <p className='mb-4 text-lg'>
                                in January 2022, starting in Bengaluru. Now, we serve customers in over 23 cities across 9 states and continue to grow.  Join us in savoring the bold flavors and spirited culture that make Popeyes a beloved choice for chicken lovers everywhere.
                            </p>
                            <img src="./popeyes/23-cities.svg" alt="" />
                        </div>
                        <div className='md:w-1/2 rounded-4xl overflow-hidden mx-auto text-white'>
                            {/* <img src="./popeyes/we-bought.png" className='w-full' alt="" /> */}
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className=" inset-0 w-full h-full object-cover z-0"
                                src="./Website Final Videos/popeyes/C4550.webm" // or your correct video path
                            />
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
                                src="./popeyes/dyk.svg"
                                alt="Did You Know?"
                                className="w-1/3 max-w-full"
                            />

                            {/* First Card */}
                            <div className="bg-[#fdf4ee] p-6 rounded-2xl flex items-start gap-6 border border-[#f2bea9] w-full">
                                <img
                                    src="./popeyes/p-card1.png"
                                    alt="12-Hour Marination"
                                    className="w-1/2 object-cover rounded-xl"
                                />
                                <div>
                                    <h3 className="text-4xl font-normal text-[#e35c26] mb-4">12-Hour <br /> Marination</h3>
                                    <p className="text-gray-700 text-xl">
                                        Popeyes Chicken is marinated for at least 12 hours in bold Louisiana seasonings. You’ll relish the flavour till the last bite.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Second Row: Two Cards */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Card 2 */}
                            <div className="bg-[#fdf4ee] p-6 rounded-2xl flex items-start gap-6 border border-[#f2bea9] w-full">
                                <img
                                    src="./popeyes/p-card2.png"
                                    alt="Signature Cajun Flavours"
                                    className="w-1/2 object-cover rounded-xl"
                                />
                                <div>
                                    <h3 className="text-4xl font-normal text-[#e35c26] mb-4">Signature Bold <br /> Cajun Flavours</h3>
                                    <p className="text-gray-700 text-xl">
                                        Popeyes Chicken is expertly cooked, bursting with bold Cajun flavours that’s like a party in your mouth!
                                    </p>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#fdf4ee] p-6 rounded-2xl flex items-start gap-6 border border-[#f2bea9] w-full">
                                <img
                                    src="./popeyes/p-card3.png"
                                    alt="Shatter Crunch Texture"
                                    className="w-1/2 object-cover rounded-xl"
                                />
                                <div>
                                    <h3 className="text-4xl font-normal text-[#e35c26] mb-4">Shatter Crunch Texture</h3>
                                    <p className="text-gray-700 text-xl">
                                        Extra crispy on the outside, juicy and bursting with flavour on the inside.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className="mx-auto mt-16 py-6 bg-[#f25a22]">
                <div className="container-wrapper ">
                    
                    <TVCs data={tvcData} />
                </div>
            </div>
        </div>
    )
}

export default Popeyes