import React from 'react'
import GlobalCover from '../Components/GlobalCover'
import DateFilter from '../Components/Global/DateFilter'
import NewsSection from '../Components/Newsroom/NewsSection'
import AnimatedHeading from '../Components/Global/AnnimatedHeading'

const Newsroom = () => {
    return (
        <div>
            <GlobalCover
                title={"Newsroom"}
                video="./Website Final Videos/Newsroom/Newsroom_Banner.webm"
                subNav={<DateFilter />}
                theme={"#03253E"}
                themeLine={"#096080"}
            />
            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <div className='md:flex judtify-center items-stretch'>
                        <div className='md:w-[50%] overflow-hidden rounded-3xl md:rounded-r-none mb-4 md:mb-0'>
                            <img src="./newsroom/news-feat.png" className='w-full' alt="" />
                        </div>
                        <div className='bg-[#03253E] p-6 flex flex-col justify-center gap-4 md:w-[50%] overflow-hidden rounded-3xl md:rounded-l-none'>
                            <p className='bg-[#001625] w-fit py-1 px-3 rounded-xl text-white mb-4 font-thin'>October 25, 2024 , Noida,</p>
                            <p className='text-[#49C8F5] md:text-3xl '>
                                Domino’s Elevates Cheese Indulgence with New Cheese Burst Flavors: Hot & Fiery, Creamy Makhani, and Korean Sweet Chilli
                            </p>
                            <p className='text-white mb-4'>
                                Domino’s, India’s largest pizza chain, is taking pizza indulgence to the next level with the launch of its revamped Cheese Burst range, introducing three exciting new flavors..
                            </p>
                            <a className='flex justify-center items-center gap-3 text-[#001625] bg-[#49C8F5] w-fit py-1 px-3 rounded-xl font-thin hover:bg-[#6caac1] duration-300' href='/'>
                                <span>Download</span>
                                <img src="./newsroom/down-arrow.svg" alt="" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <NewsSection />
                </div>
            </div>
        </div>
    )
}

export default Newsroom