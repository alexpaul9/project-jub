import React from 'react'
import GlobalCover from '../Components/GlobalCover'
import JFLOverview from '../Components/Aboutus/JFLOverview';
import OurBrands from '../Components/Aboutus/OurBrands';
import WhyJoinUs from '../Components/Career/WhyJoinUs';
import HiringCredo from '../Components/Career/HiringCredo';
import OurPurpose from '../Components/Aboutus/OurPurpose';
import CardWithPopup from '../Components/CardWithPopup';

const Career = () => {
    const subLinks = [
        { icon: './investors/financial-info.svg', label: 'About JFL', path: '/' },
        { icon: './investors/company-reports.svg', label: 'Values & Accolades', path: '/' },
        { icon: './investors/governance.svg', label: 'Know the Organization', path: '/' },
        { icon: "./investors/sh-info.svg", label: "Culture", path: '/' },
        { icon: './investors/sh-info.svg', label: 'Open Roles', path: '/' },
        { icon: './investors/reg-46.svg', label: 'Recruitment Journey', path: '/' },
    ];
    return (
        <div>
            <GlobalCover
                title={"Career"}
                video="./Website Final Videos/Career/CareerBanner.webm"
                subNav={subLinks}
                theme={"#03253E"}
                themeLine={"#096080"}
            />
            <div className='bg-[#f2f6f8] py-2'>
                <div className="container-wrapper">
                    <div className="max-w-[1350px] mx-auto my-16">
                        <JFLOverview />
                    </div>
                </div>
            </div>
            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <OurBrands />
                </div>
            </div>
            <div className='bg-[#03253E] py-2'>
                <div className="container-wrapper">
                    <div className="max-w-[1350px] mx-auto my-16">
                        <WhyJoinUs />
                    </div>
                </div>
            </div>
            <div className='bg-[#f2f6f8] py-2'>
                <div className="container-wrapper">
                    <div className="max-w-[1350px] mx-auto my-16">
                        <HiringCredo />
                    </div>
                </div>
            </div>

            <div className="mx-auto py-4 bg-[#03253E]">
                <div className="container-wrapper">
                    <div className="max-w-[1350px] flex justify-between items-center gap-6 mx-auto my-16">
                        <div className='md:w-1/2 mx-auto text-white'>
                            <img src="./career/featured-stand.png" className='w-full' alt="" />
                        </div>
                        <div className='md:w-1/2 mx-auto text-white'>
                            <span className="bg-[#49C8F5] inline-block text-[#03253E] text-lg px-4 py-2 rounded-2xl font-light">
                                What we stand for
                            </span>
                            <h2 className="text-3xl md:text-5xl my-8 font-light leading-tight">
                                Built on purpose, <br /> powered by values.
                            </h2>
                            <p className='text-xl rounded-3xl text-white'>
                                At JFL, our purpose is the cornerstone of our identity. It informs our strategy, guides our actions, and shapes the way we engage with our employees, customers, and communities. Our values are the everyday expression of that purpose. They shape how we work, lead, collaborate and grow.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='bg-[#f5f7fa] py-2'>
                <div className="container-wrapper">
                    <div className="max-w-[1350px] mx-auto my-16">
                        <OurPurpose />
                    </div>
                </div>
            </div>

            <div className="mx-auto py-4 bg-[#03253E]">
                <div className="container-wrapper">
                    <div className="max-w-[1350px] mx-auto my-16">
                        <section className="">
                            <div className="text-white mx-auto">

                                <span className="bg-[#49C8F5] inline-block text-[#03253E] mb-4 text-lg px-4 py-2 rounded-2xl font-light">
                                    Life at JFL
                                </span>

                                {/* Heading */}
                                <h2 className="text-4xl font-light mb-6">Our Culture</h2>

                                {/* Paragraphs */}
                                <p className="text-lg font-light mb-4 ">
                                    At JFL, we are on a mission to redefine the future of food-tech, and
                                    that journey is powered by innovation, collaboration and a shared
                                    passion for what we do. From kitchen to code, we work together with
                                    purpose and heart—
                                    <strong className="font-semibold">
                                        driving change, serving joy to our customers, and growing stronger
                                        every day.
                                    </strong>
                                </p>
                                <p className="text-lg font-light mb-10">
                                    Exceptional cultures don’t happen by accident, it takes intentional
                                    design, effort and commitment to nurture a great culture over time. We
                                    strive to create a joyful workplace that feels like home and where
                                    everyone feels valued and inspired.
                                </p>

                                {/* Image Gallery */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <img
                                        src="./career/cul1.png"
                                        alt="Culture 1"
                                        className="rounded-xl object-cover w-full h-48"
                                    />
                                    <img
                                        src="./career/cul2.png"
                                        alt="Culture 2"
                                        className="rounded-xl object-cover w-full h-48"
                                    />
                                    <img
                                        src="./career/cul3.png"
                                        alt="Culture 3"
                                        className="rounded-xl object-cover w-full h-48"
                                    />
                                    <img
                                        src="./career/cul4.png"
                                        alt="Culture 4"
                                        className="rounded-xl object-cover w-full h-48"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div className='bg-[#f2f6f8] py-2'>
                <div className="container-wrapper">
                    <div className="max-w-[1350px] mx-auto">
                        <section className="">
                            <h2 className="text-4xl font-light mb-4">Accolades</h2>
                            <p className="text-[24px] font-light mb-10">
                                <strong>At Jubilant Foodworks, we’re passionate about cultivating a culture that’s inspiring, high-performing, inclusive, and joyful.</strong> It’s both humbling and encouraging to be recognized by some of India’s most respected workplace culture awards.
                            </p>

                            <div className="bg-[#e9f0f7] p-8 rounded-2xl border border-[#adcdf0] flex flex-col lg:flex-row items-center justify-between gap-6">
                                {/* Text Section */}
                                <div className="flex flex-col gap-4 text-[#001d3d] md:w-1/2">
                                    <div className="flex items-start gap-3">
                                        <div className="w-[16px] h-14 bg-[#a6c5d4]"></div>
                                        <p className="text-[24px] leading-snug">
                                            Recognized as a <br />
                                            Great Place To Work®
                                            twice in a row!
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-[16px]  h-22 bg-[#a6c5d4]"></div>
                                        <p className="text-[24px] leading-snug">
                                            Recognized as one of the WOW Workplaces <br /> (Workplaces of Winners) of 2025 in the FMCG/ Retail <br />category by JOMBAY!
                                        </p>
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div className="flex gap-4 shrink-0 md:w-1/2 flex-wrap justify-center">
                                    <img
                                        src="./career/accolades1.png"
                                        alt="Great Place to Work India"
                                        className="h-64 object-contain"
                                    />
                                    <img
                                        src="./career/accolades2.png"
                                        alt="WOW Workplace 2025"
                                        className="h-64 object-contain"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className=" container-wrapper">
                    <div className="max-w-[1350px] mx-auto my-16">
                        <h2 className="text-4xl font-light mb-8">Our Social Impact</h2>
                        <div className="bg-[#e9f0f7] p-2 md:p-8 rounded-2xl border border-[#adcdf0] gap-6">
                            <p className='mb-3 md:text-[22px] font-bold'>
                                We are deeply humbled by the social impact JFL continues to create, recognizing our unique role within the intricate social and cultural fabric of our country.
                            </p>
                            <p className='mb-3 md:text-[22px]'>
                                We are the trusted <b> ‘neighborhood store,’</b> we offer accessible, life-changing employment opportunities.
                            </p>
                            <p className='mb-3 md:text-[22px]'>
                                Our <b>shift-based roles</b> provide much-needed flexibility, empowering individuals to balance work with caregiving responsibilities.
                            </p>
                            <p className='mb-3 md:text-[22px]'>
                                We contribute meaningfully to the <b>economic empowerment of women</b> and their families. For many women—particularly in tier 2 and tier 3 cities—JFL has become a gateway to professional life, offering a dignified path to financial independence.
                            </p>

                            <div className='my-8 md:flex flex-wra justify-center items-center md:gap-4'>
                                <div className='md:w-1/4 mb-4 md:mb-0'>
                                    <CardWithPopup image={"./career/csra1.png"} title={"Community Healthcare"} description={"1"} />
                                </div>
                                <div className='md:w-1/4 mb-4 md:mb-0'>
                                    <CardWithPopup image={"./career/csra2.png"} title={"Livestock & Livelihood Development"} description={"2"} />
                                </div>
                                <div className='md:w-1/4 mb-4 md:mb-0'>
                                    <CardWithPopup image={"./career/csra3.png"} title={"Skill Development"} description={"3"} />
                                </div>
                                <div className='md:w-1/4 mb-4 md:mb-0'>
                                    <CardWithPopup image={"./career/csra4.png"} title={"Food Safety & Eat Right Education"} description={"4"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career