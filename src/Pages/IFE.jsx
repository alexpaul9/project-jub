import React from 'react'
import GlobalCover from '../Components/GlobalCover';
import BrandAppsScroller from '../Components/Aboutus/BrandAppsScroller';

const IFE = () => {
    const subLinks = [
        { icon: './aboutus/building.svg', label: 'Company Profile', path: '/sustainability/ceo-message' },
        { icon: './aboutus/sms.svg', label: "Chairman's Message", path: '/sustainability/value-chain' },
        { icon: './aboutus/profile-2user.svg', label: 'Leadership', path: '/leadership' },
        { icon: './aboutus/routing.svg', label: 'Milestones', path: '/sustainability/sustainability-governance' },
        { icon: './aboutus/award.svg', label: 'Immersive Food Experience', path: '/immersive-food-experience' },
        { icon: './aboutus/buildings-2.svg', label: 'Jubilant Bharti Group', path: '/sustainability/sustainability-frameworks' },
    ];
    return (
        <div>
            <GlobalCover
                title="Immersive Food Experience"
                // image="./aboutus/about.png"
                video="./Website Final Videos/Immersive/Immersive_Banner.webm"
                subNav={subLinks}
                theme={"#03253E"}
                themeLine={"#49C8F5"}
            />
            <div className='bg-[#f2f6f8] py-2'>
                <div className="container-wrapper">
                    <div className="max-w-[1350px] mx-auto my-16">
                        <h2 className='text-4xl md:text-5xl mb-4 font-thin'>
                            JFL is a house of brands, and has <br /> a dedicated app for each business
                        </h2>
                        <span className="bg-[#49C8F5] inline-block text-[#03253E] my-4 text-lg px-4 py-2 rounded-2xl font-light">
                            Brand Apps
                        </span>
                    </div>
                </div>
            </div>
            <BrandAppsScroller />
            <div className='bg-[#f2f6f8] py-2'>
                <div className="container-wrapper">
                    <div className="max-w-[1350px] mx-auto my-16">
                        <h2 className='text-4xl md:text-5xl mb-4 font-thin'>
                            And we have integrated with <br />a bunch of aggregators
                        </h2>
                        <span className="bg-[#49C8F5] inline-block text-[#03253E] my-4 text-lg px-4 py-2 rounded-2xl font-light">
                            Aggregators
                        </span>
                        <div className='py-4 flex flex-wrap gap-6 justify-between items-center'>
                            <img src="./immersive/ifei1.png" className='w-[100px]' alt="" />
                            <img src="./immersive/ifei2.png" className='w-[100px]' alt="" />
                            <img src="./immersive/ifei3.png" className='w-[100px]' alt="" />
                            <img src="./immersive/ifei4.png" className='w-[100px]' alt="" />
                            <img src="./immersive/ifei5.png" className='w-[100px]' alt="" />
                            <img src="./immersive/ifei6.png" className='w-[100px]' alt="" />
                            <img src="./immersive/ifei7.png" className='w-[100px]' alt="" />
                            <img src="./immersive/ifei8.png" className='w-[100px]' alt="" />
                            <img src="./immersive/ifei9.png" className='w-[100px]' alt="" />
                            <img src="./immersive/ifei10.png" className='w-[100px]' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto py-4 bg-[#03253E]">
                <div className="container-wrapper">
                    <div className="max-w-[1350px] mx-auto my-16">
                        <h2 className="text-3xl text-white md:text-5xl my-8 font-light leading-tight">
                            Food First Approach
                        </h2>
                        <div className="md:flex justify-between items-center gap-6 mx-auto">
                            <div className='md:w-1/2 mb-4 md:mb-0 flex flex-col gap-4 mx-auto text-white'>
                                <div className='flex md:text-[24px] rounded-2xl justify-start bg-[#071D30] w-f items-center gap-3'>
                                    <img src="./immersive/ffa1.png" alt="" />
                                    <p>
                                        Heavy focus on Images and Videos
                                    </p>
                                </div>
                                <div className='flex md:text-[24px] rounded-2xl justify-start bg-[#071D30] w-f items-center gap-3'>
                                    <img src="./immersive/ffa2.png" alt="" />
                                    <p>
                                        Intent is to evoke Hunger Pangs
                                    </p>
                                </div>
                                <div className='flex md:text-[24px] rounded-2xl justify-start bg-[#071D30] w-f items-center gap-3'>
                                    <img src="./immersive/ffa3.png" alt="" />
                                    <p>
                                        Every session drives positive emotion
                                    </p>
                                </div>
                                <div className='flex md:text-[24px] rounded-2xl justify-start bg-[#071D30] w-f items-center gap-3'>
                                    <img src="./immersive/ffa4.png" alt="" />
                                    <p>
                                        Strategic Moat
                                    </p>
                                </div>
                            </div>
                            <div className='md:w-1/2 mx-auto text-white'>
                                <video
                                    src={'./Website Final Videos/Immersive/FoodFirstApproach.webm'}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover rounded-3xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <h2 className="text-3xl text-black md:text-5xl my-8 font-light leading-tight">
                        Our App is Topical & Dynamic
                    </h2>
                    <div className="md:flex  justify-between items-stretch gap-6 mx-auto">
                        <div className='md:w-[60%] mb-4 md:mb-0 mx-auto text-white'>
                            <video
                                src={'./Website Final Videos/Immersive/OurAppisTopical.webm'}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover rounded-3xl"
                            />
                        </div>
                        <div className='md:w-[40%] bg-[#eaf1f8] border rounded-4xl border-[#adcdf0] p-5 flex justify-center gap-6 flex-col gap-4 mx-auto text-[#096080]'>
                            <div className='flex md:text-[24px] rounded-3xl md:p-4 justify-start bg-white items-center gap-3'>
                                <img src="./immersive/topical1.png" alt="" />
                                <p>
                                    App looks different <br /> on each Festival
                                </p>
                            </div>
                            <div className='flex md:text-[24px] rounded-3xl md:p-4 justify-start bg-white items-center gap-3'>
                                <img src="./immersive/topical2.png" alt="" />
                                <p>
                                    Builds long term <br /> emotional associations
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mx-auto py-4 bg-[#03253E]">
                <div className="container-wrapper">
                    <div className="max-w-[1350px] mx-auto my-16">
                        <h2 className="text-3xl text-white md:text-5xl my-8 font-light leading-tight">
                            Heavy Use of Personalization driven <br /> by self-learning Data Science Models
                        </h2>
                        <div className="md:flex justify-between items-center gap-6 mx-auto">
                            <div className='md:w-[40%] mb-4 md:mb-0 flex font-thin flex-col gap-4 mx-auto text-white'>
                                <div className='flex md:text-[22px] rounded-2xl justify-start bg-white/2 border border-[#223a50] w-f items-center gap-3'>
                                    <img src="./immersive/ffa1.png" alt="" />
                                    <p>
                                        Different Home Page at <br /> City - Store Level
                                    </p>
                                </div>
                                <div className='flex md:text-[22px] rounded-2xl justify-start bg-[#071D30] w-f items-center gap-3'>
                                    <img src="./immersive/ffa2.png" alt="" />
                                    <p>
                                        Menu Page Sequencing is <br /> personalized basis <br /> Machine Learning Models
                                    </p>
                                </div>
                                <div className='flex md:text-[22px] rounded-2xl justify-start bg-[#071D30] w-f items-center gap-3'>
                                    <img src="./immersive/ffa3.png" alt="" />
                                    <p>
                                        Real time discount <br /> affinity models to <br /> optimize spends
                                    </p>
                                </div>
                            </div>
                            <div className="md:w-[60%] md:flex justify-center items-stretch mx-auto gap-5">
                                <div className="relative flex p-16 md:w-1/2 items-center justify-center">
                                    <img src="./immersive/text1.svg" alt="" className="absolute left-0 h-auto" />
                                    <img src="./immersive/model1.png" alt="" className=" h-auto" />
                                </div>

                                <div className="relative md:w-1/2 flex p- items-center justify-center">
                                    <img src="./immersive/text2.svg" alt="" className="absolute left-0 h-auto" />
                                    <img src="./immersive/model2.png" alt="" className=" h-auto" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <h2 className="text-3xl text-black md:text-5xl my-8 font-light leading-tight">
                        India's Largest Loyalty Program
                    </h2>
                    <div className='md:flex justify-center items-stretch gap-6'>
                        <div className='md:w-1/2 bg-[#eaf1f8] border rounded-4xl border-[#adcdf0] flex md:text-[24px] font-thin mb-4 md:mb-0 flex-col p-6 justify-center gap-4'>
                            <div className='flex items-center justify-center- gap-3'>
                                <img src="./immersive/loy1.svg" alt="" />
                                <p>
                                    31 Million Loyalty Members
                                </p>
                            </div>
                            <div className='flex items-center justify-center- gap-3'>
                                <img src="./immersive/loy2.svg" alt="" />
                                <p>
                                    75% orders from Loyalty Members
                                </p>
                            </div>
                            <div className='flex items-center justify-center- gap-3'>
                                <img src="./immersive/loy3.svg" alt="" />
                                <p>
                                    Reduced Churn
                                </p>
                            </div>
                            <div className='flex items-center justify-center- gap-3'>
                                <img src="./immersive/loy4.svg" alt="" />
                                <p>
                                    Higher Order Frequency
                                </p>
                            </div>
                            <div className='flex items-center justify-center- gap-3'>
                                <img src="./immersive/loy5.svg" alt="" />
                                <p>
                                    Higher Lifetime Value
                                </p>
                            </div>
                        </div>
                        <div className='md:w-[60%] mb-4 md:mb-0 mx-auto text-white'>
                            {/* <video
                                src={'./Website Final Videos/Immersive/OurAppisTopical.we1m'}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover rounded-3xl"
                            /> */}
                            <img src="./immersive/loyalty-feat.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-wrapper">
                <div className="max-w-[1350px]  mx-auto my-16">
                    {/* Left Box */}
                    <h2 className="text-3xl text-black md:text-5xl my-8 font-light leading-tight">
                        We are where our customers are
                    </h2>
                    <div className='md:flex justify-between items-stretch gap-6'>
                        <div className='md:w-[57%] rounded-2xl bg-[#001625] p-4'>
                            <div className=' flex justify-evenly gap-4 items-center '>
                                <div className='w-[25%] flex items-center justify-center'>
                                    <img src="./immersive/cx1.svg" className='h-90 object-contain' alt="cx1" />
                                </div>
                                <div className='w-[25%] flex items-center justify-center'>
                                    <img src="./immersive/cx2.svg" className='h-90 object-contain' alt="cx2" />
                                </div>
                                <div className='w-[25%] flex items-center justify-center'>
                                    <img src="./immersive/cx3.svg" className='h-90 object-contain' alt="cx3" />
                                </div>
                                <div className='w-[25%] flex items-center justify-center'>
                                    <img src="./immersive/cx4.svg" className='h-90 object-contain' alt="cx4" />
                                </div>
                            </div>
                            <p className='text-white text-center md:text-[20px] pt-4'>
                                Deep integrations with all Ecosystem Players
                            </p>
                        </div>

                        {/* Right Box */}
                        <div className='md:w-[42%] rounded-2xl bg-[#001625] p-4'>
                            <div className='flex justify-evenly gap-4 items-center bg-[#001625]'>
                                <div className='w-[33%] flex items-center justify-center'>
                                    <img src="./immersive/cx5.svg" className='h-90 object-contain' alt="cx5" />
                                </div>
                                <div className='w-[33%] flex items-center justify-center'>
                                    <img src="./immersive/cx6.svg" className='h-90 object-contain' alt="cx6" />
                                </div>
                                <div className='w-[33%] flex items-center justify-center'>
                                    <img src="./immersive/cx7.svg" className='h-90 object-contain' alt="cx7" />
                                </div>
                            </div>
                            <p className='text-white text-center md:text-[20px] pt-4'>
                                First Food Brand to integrate directly with ONDC
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#03253E] py-2'>
                <div className="container-wrapper ">
                    <div className="max-w-[1350px]  mx-auto my-16">
                        <img src="./immersive/2022.svg" className='w-full' alt="" />
                    </div>
                </div>
            </div>

            <div className='bg-[#03253E] mt-8 py-2'>
                <div className="container-wrapper ">
                    <div className="max-w-[1350px]  mx-auto my-16">

                        <h2 className="text-3xl text-white md:text-5xl my-8 font-light leading-tight">
                            Our apps get a lot of Customer Love
                        </h2>
                        <div className='md:flex justify-center items-center gap-6 '>
                            <div className='md:w-[33%] mb-4 md:md-0'>
                                <img src="./immersive/4mil.png" className='mb-4' alt="" />
                                <img src="./immersive/test.svg" className='w-full' alt="" />
                            </div>
                            <div className='md:w-[33%] mb-4 md:md-0'>
                                <img src="./immersive/ios.svg" className='w-full' alt="" />
                            </div>
                            <div className='md:w-[33%] mb-4 md:md-0'>
                                <img src="./immersive/android.svg" className='w-full' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-wrapper">
                <div className="max-w-[1350px] md:flex justify-center items-stretch gap-6 mx-auto my-16">

                    {/* Left Video Block */}
                    <div className='md:w-[50%]'>
                        <span className="bg-[#49C8F5] inline-block text-[#03253E] my-4 text-lg px-4 py-2 rounded-2xl font-light">
                            Popeyes Next Gen App 2.0
                        </span>
                        <div className="rounded-3xl overflow-hidden">
                            <video
                                src={'./Website Final Videos/Immersive/PopeyesNexGen.webm'}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full object-cover aspect-video"
                            />
                        </div>
                    </div>

                    {/* Right Video Block */}
                    <div className='md:w-[50%]'>
                        <span className="bg-[#49C8F5] inline-block text-[#03253E] my-4 text-lg px-4 py-2 rounded-2xl font-light">
                            AI Chat Bot
                        </span>
                        <div className="rounded-3xl overflow-hidden">
                            <video
                                src={'./Website Final Videos/Immersive/Chatbot.webm'}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full object-cover aspect-video"
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className='bg-[#03253E] mt-8 py-2'>
                <div className="container-wrapper ">
                    <div className="max-w-[1350px]  mx-auto my-16">
                        <h2 className='text-4xl text-white md:text-5xl mb-4 font-thin'>
                            Team that made it Possible
                        </h2>
                        <div className='md:flex justify-center items-stretch gap-6'>
                            <div className='md:w-1/2 mb-4 md:mb-0'>
                                <span className="bg-[#49C8F5] inline-block text-[#03253E] my-4 md:text-[16px] text-lg px-4 py-2 rounded-2xl font-light">
                                    Dedicated Product, Design, Data Science & Engineering Teams
                                </span>
                                <div className='bg-[#011525] rounded-3xl p-6 text-white mb-4'>
                                    <p className='md:text-3xl text-[#49C8F5] mb-2'>
                                        250+ People
                                    </p>
                                    <p className='md:text-[18px]'>
                                        Only QSR in india to have a dedicated Product, Design, Engineering, Analytics & Data Science team
                                    </p>
                                </div>
                                <div className='bg-[#011525] rounded-3xl p-6 text-white'>
                                    <p className='md:text-[18px]'>
                                        Tech Native talent, best in class processes that enable tech DNA
                                    </p>
                                </div>
                            </div>
                            <div className='md:w-1/2'>
                                <img src="./immersive/loyalty-feat.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-wrapper ">
                <div className="max-w-[1350px]  mx-auto my-16">
                    <p className='text-center '>Video be here</p>
                </div>
            </div>

        </div>
    )
}

export default IFE