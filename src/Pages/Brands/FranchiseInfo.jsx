import React from 'react'
import GlobalCover from '../../Components/GlobalCover';
import VideoSlider from '../../Components/Brands/VideoSlider';
// import TVCs from '../../Components/Brands/TVCs';
// import tvcData from "../../data/brands/popeye";

const FranchiseInfo = () => {
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
                title={"Franchise Information"}
                image="./franchise-info/franchise-info-banner.png"
                subNav={subLinks}
                theme={"#03253e"}
                themeLine={"#4ac9f6"}
            />
            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <section className="my-16">
                        <div className="mx-auto flex flex-col md:flex-row items-center gap-10">
                            {/* Left Text Area */}
                            <div className="md:w-1/2">
                                <h2 className="text-3xl md:text-5xl font-light leading-tight text-gray-900">
                                    Jubilant FoodWorks Limited
                                </h2>
                                <p className='text-lg my-4'>
                                    Jubilant FoodWorks Limited is the Master Franchiseeof Domino’s Pizza in India, Bangladesh, Sri Lanka and Nepal with sole and exclusive rights to own and operate Domino’s Pizza restaurants in these territories.
                                </p>
                                <div className="flex justify-center gap-4 items-stretch">
                                    {/* Left Box */}
                                    <div className="bg-[#e1f2f8] border-[#a1c5d4] p-6 rounded-3xl border  mt-6 shadow-sm flex-1">
                                        <p className="text-gray-700 text-3xl leading-relaxed">
                                            For any franchise-related queries, kindly email us directly at:
                                        </p>
                                        <div className='flex justify-center gap-4 items-center  bg-[#03253E] w-fit text-normal text-3xl text-[#49C8F5] mt-2 py-3 px-6 rounded-2xl'>
                                            <img src="./franchise-info/sms-edit.svg" alt="" />
                                            <p className='mb-1'>
                                                dominos.franchise@jublfood.com
                                            </p>
                                        </div>
                                    </div>


                                </div>

                            </div>

                            {/* Right Image */}
                            <div className="w-full md:w-1/2 flex">
                                <img
                                    src="./franchise-info/fi-feature.png"
                                    alt=""
                                    className="rounded-3xl w-full object-cover"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className="container-wrapper">
                <div className="max-w-[1350px] bg-[#fef7f6] p-8 gap-6 rounded-3xl md:flex justify-center items-center border border-[#ffb9ba] mx-auto my-16">
                    <img src="./franchise-info/warning-png.png" alt="" />
                    <div>
                        <p className='mb-2'>
                            We have come across a few instances of fraudsters posing as Jubilant FoodWorks and asking for payment from gullible investors against the promise of a Domino’s franchise. We therefore caution and urge all interested parties to be careful and vigilant and interact only with the email id mentioned above.
                        </p>
                        <p>
                            Anyone dealing with such fraudsters shall be doing so on their own peril, risk and consequences. Neither Jubilant FoodWorks nor its Directors/Officers shall be responsible for any loss, harm, damage or fraud that occurs or may occur or arise to any person who decides to access such fake websites, or deal with them.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FranchiseInfo