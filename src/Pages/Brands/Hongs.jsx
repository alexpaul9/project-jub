import React from 'react'
import GlobalCover from '../../Components/GlobalCover';
import VideoSlider from '../../Components/Brands/VideoSlider';
// import TVCs from '../../Components/Brands/TVCs';
// import tvcData from "../../data/brands/popeye";

const Hongs = () => {
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
                title={<img src="./hongs/hongs-title.svg" alt="" />}
                image="./hongs/hongs-banner.png"
                subNav={subLinks}
                theme={"#00B6AD"}
                themeLine={"#EF3F4B"}
            />
            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <section className="my-16">
                        <div className="mx-auto flex flex-col md:flex-row items-center gap-10">
                            {/* Left Text Area */}
                            <div className="md:w-1/2">
                                <h2 className="text-3xl md:text-5xl font-light leading-tight text-gray-900">
                                    Experience Tasty Chinese with a Desi Tadka at Hong's Kitchen
                                </h2>
                                <div className="flex justify-center gap-4 items-stretch">
                                    {/* Left Box */}
                                    <div className="bg-[#daf1f0] border-[#9adfdd] p-6 rounded-3xl border  mt-6 shadow-sm flex-1">
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            Say hello to Hong’s Kitchen — our first-ever homegrown brand serving up bold, street-style Chinese with a desi twist. Our menu is packed with crowd-pleasers inspired by the bustling food streets of Asia, made even better with fresh, local ingredients for that extra punch of flavor. Bringing you Indo-Chinese like you’ve never had before — proudly made in India.
                                        </p>
                                    </div>


                                </div>

                            </div>

                            {/* Right Image */}
                            <div className="w-full md:w-1/2 flex">
                                <img
                                    src="./hongs/hongs-featured1.png"
                                    alt=""
                                    className="rounded-3xl w-full object-cover"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className='bg-[#00B6AD]'>
                <div className="container-wrapper">
                    <div className="mx-auto max-w-[1350px] mt-16 py-4">
                        <div className="flex justify-between items-center gap-6 mx-auto my-16">
                            <div className='md:w-1/2 mx-auto text-white'>
                                <h2 className="text-3xl md:text-5xl mb-4 font-light leading-tight">
                                    From One Kitchen <br />
                                    To Many
                                </h2>
                                <p className='mb-4 text-2xl text-white'>
                                    What began in 2019 as a single outlet has now grown to 30+ restaurants across North India in just 7 years— a testament to the love for bold, street-style Chinese done right. The pace has been fast, the flavours even faster — and this is just the start.
                                </p>

                            </div>
                            <div className='md:w-1/2 md:flex justify-center items-center gap-4 mx-auto text-white'>
                                {/* Image 1 */}
                                <div className="relative w-full overflow-hidden rounded-2xl">
                                    <img src="./hongs/hongs-featured2.png" className="w-full h-full object-cover" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-wrapper">
                <div className="mx-auto max-w-[1350px] my-16 py-4">
                    <div className="">
                        <h2 className="text-5xl font-light text-gray-800 mb-10 ">
                            The Hong's Kitchen Difference
                        </h2>
                        <div className="flex flex-wrap gap-6 mx-auto">
                            {/* Highlight 1 */}
                            <div className="flex items-center gap-2 bg-[#daf1f0] border-[#9adfdd] rounded-3xl border  w-full sm:w-[48%] md:w-[32%] lg:w-[32%]">
                                <img src="./hongs/hongs-icon1.png" alt="Biggest Market" className="w-32 h-32 object-contain flex-shrink-0" />
                                <div className="flex flex-col justify-center">
                                    <h3 className="text-2xl font-normal text-[#00B6AD] mb-1">Transparency</h3>
                                    <p className="text-xs text-gray-700 leading-snug">
                                        Watch the magic happen — our live, open kitchens let you see your food being made, fresh and hot.
                                    </p>
                                </div>
                            </div>

                            {/* Highlight 2 */}
                            <div className="flex items-center gap-2 bg-[#daf1f0] border-[#9adfdd] rounded-3xl border w-full sm:w-[48%] md:w-[32%] lg:w-[32%]">
                                <img src="./hongs/hongs-icon2.png" alt="2000+ Stores" className="w-32 h-32 object-contain flex-shrink-0" />
                                <div className="flex flex-col justify-center text-sm">
                                    <h3 className="text-2xl font-normal text-[#00B6AD] mb-0.5">Inclusivity</h3>
                                    <p className="text-gray-700 text-xs  leading-tight">
                                        Thoughtfully designed kitchens with dedicated zones for veg and non-veg prep.
                                    </p>
                                </div>
                            </div>

                            {/* Highlight 3 */}
                            <div className="flex items-center gap-2 p-1 bg-[#daf1f0] border-[#9adfdd] rounded-3xl border w-full sm:w-[48%] md:w-[32%] lg:w-[32%]">
                                <img src="./hongs/hongs-icon3.png" alt="Pioneering Innovation" className="w-32 h-32 object-contain flex-shrink-0" />
                                <div className="flex flex-col justify-center text-sm">
                                    <h3 className="text-2xl font-normal text-[#00B6AD] mb-0.5">Innovations</h3>
                                    <p className="text-gray-700 text-xs leading-tight">
                                        From Fiery Orange Chicken to the Hong Kong Wrap to our Molten Cheese Spring Rolls— we’re always dishing out bold, one-of-a-kind creations.
                                    </p>
                                </div>
                            </div>

                            {/* Highlight 4 */}
                            <div className="flex items-center gap-2 p-1 bg-[#daf1f0] border-[#9adfdd] rounded-3xl border w-full sm:w-[48%] md:w-[32%] lg:w-[32%]">
                                <img src="./hongs/hongs-icon4.png" alt="Million’s of Pizza" className="w-32 h-32 object-contain flex-shrink-0" />
                                <div className="flex flex-col justify-center text-sm">
                                    <h3 className="text-2xl font-normal text-[#00B6AD] mb-2 leading-none">No-Antibiotic <br /> Ever Chicken</h3>
                                    <p className="text-gray-700 text-xs leading-tight">
                                        Only clean, high-quality chicken — always free from antibiotics, always full of flavours.
                                    </p>
                                </div>
                            </div>

                            {/* Highlight 5 */}
                            <div className="flex items-center gap-2 p-1 bg-[#daf1f0] border-[#9adfdd] rounded-3xl border w-full sm:w-[48%] md:w-[32%] lg:w-[32%]">
                                <img src="./hongs/hongs-icon5.png" alt="6.6 M+ Strong Community" className="w-32 h-32 object-contain flex-shrink-0" />
                                <div className="flex flex-col justify-center text-sm">
                                    <h3 className="text-2xl font-normal text-[#00B6AD] mb-2 leading-none">Fresh Vegetables <br /> & Ingredients</h3>
                                    <p className="text-gray-700 text-xs leading-tight">
                                        We don’t do shortcuts — just crisp veggies and top-notch ingredients, prepped fresh every day.
                                    </p>
                                </div>
                            </div>

                            {/* Highlight 6 */}
                            <div className="flex items-center gap-2 p-1 bg-[#daf1f0] border-[#9adfdd] rounded-3xl border w-full sm:w-[48%] md:w-[32%] lg:w-[32%]">
                                <img src="./hongs/hongs-icon6.png" alt="Speed Delivery" className="w-32 h-32 object-contain flex-shrink-0" />
                                <div className="flex flex-col justify-center text-sm">
                                    <h3 className="text-2xl leading-none font-normal text-[#00B6AD] mb-2">100%  E-Fleet <br />Delivery</h3>
                                    <p className="text-gray-700 leading-tight">
                                        Every delivery is powered by a 100% electric fleet — fresh food, zero emissions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <h2 className="text-5xl font-light text-gray-800 mb-10 ">
                        Menu Innovations
                    </h2>
                    <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center items-stretch">
                        {/* Card 1 */}
                        <div className="flex flex-col w-full md:w-1/3 border bg-[#daf1f0] border-[#9adfdd] rounded-3xl p-4">
                            <img src="./hongs/innov1.png" alt="" className="mb-2 mx-auto" />
                            <div className="text-center overflow-visible">
                                <h3 className="text-xl text-[#00B6AD]">
                                    Fiery Orange Chicken
                                </h3>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col w-full md:w-1/3 border bg-[#daf1f0] border-[#9adfdd] rounded-3xl p-4">
                            <img src="./hongs/innov2.png" alt="" className="mb-2 mx-auto" />
                            <div className="text-center overflow-visible">
                                <h3 className="text-xl text-[#00B6AD]">
                                    Hong Kong Wrap
                                </h3>

                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col w-full md:w-1/3 border bg-[#daf1f0] border-[#9adfdd] rounded-3xl p-4">
                            <img src="./hongs/innov3.png" alt="" className="mb-2 mx-auto" />
                            <div className="text-center overflow-visible">
                                <h3 className="text-xl text-[#00B6AD]">
                                    Choco Bao
                                </h3>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="flex flex-col w-full md:w-1/3 border bg-[#daf1f0] border-[#9adfdd] rounded-3xl p-4">
                            <img src="./hongs/innov4.png" alt="" className="mb-2 mx-auto" />
                            <div className="text-center overflow-visible">
                                <h3 className="text-xl text-[#00B6AD]">
                                    Molten Cheese Spring Rolls
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#00B6AD]'>
                <div className="container-wrapper">
                    <div className="max-w-[1350px] mx-auto my-16 py-4">
                        <VideoSlider />
                    </div>
                </div>
            </div>

            <div className="container-wrapper">
                <div className="mx-auto max-w-[1350px] my-16 py-4">
                    <h2 className="text-5xl font-light text-gray-800 mb-10 ">
                        Awards
                    </h2>
                    <div className='md:w-full md:flex justify-center items-center gap-4 mx-auto text-white'>
                        {/* Image 1 */}
                        <div className="relative w-[25%] overflow-hidden rounded-2xl">
                            <img src="./hongs/award1.png" className="w-full h-full object-cover" alt="" />
                            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                <p className="text-white w-full text-lg text-center">Food Connoisseurs Awards</p>
                            </div>
                        </div>

                        {/* Image 2 */}
                        <div className="relative w-[25%] overflow-hidden rounded-2xl">
                            <img src="./hongs/award2.png" className="w-full h-full object-cover" alt="" />
                            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                <p className="text-white text-lg w-full text-center">Exchange4Media: <br /> Gold & Bronze</p>
                            </div>
                        </div>

                        {/* Image 3 */}
                        <div className="relative w-[25%] overflow-hidden rounded-2xl">
                            <img src="./hongs/award3.png" className="w-full h-full object-cover" alt="" />
                            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                <p className="text-white text-lg w-full text-center">Olive Crown: Gold & Silver</p>
                            </div>
                        </div>

                        {/* Image 3 */}
                        <div className="relative w-[25%] overflow-hidden rounded-2xl">
                            <img src="./hongs/award4.png" className="w-full h-full object-cover" alt="" />
                            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                                <p className="text-white text-lg w-full text-center">MadOverMarketing: Gold</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hongs