import React, { useState } from 'react'
import GlobalCover from '../Components/GlobalCover';
import KeyValues from '../Components/Global/KeyValues';
import initiatives from '../data/csr/initiatives';
import ImpactCard from '../Components/Global/ImpactCard';
import Modal from "../Components/Modal";
import { motion, AnimatePresence } from 'framer-motion';
import CSRNewsletter from '../Components/csr/CSRNewsletter';
import AnimationWrapper from '../Components/Global/AnimationWrapper';

const CSR = () => {

    const impactData = [
        {
            title: "Community Healthcare",
            image: "/images/healthcare.jpg",
            impact: "XXXX",
            hasOverlay: false,
        },
        {
            title: "Livestock & Livelihood Development",
            image: "",
            impact: "XXXX",
            hasOverlay: true,
            content: "Details about livestock and livelihood development program go here...",
        },
        {
            title: "Skill Development",
            image: "/images/skill.jpg",
            impact: "XXXX",
            hasOverlay: false,
        },
        {
            title: "Food Safety & Eat Right Education",
            image: "",
            impact: "XXXX",
            hasOverlay: true,
            content: "Education initiatives about food safety and healthy eating.",
        },
    ];

    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => setModalContent(content);
    const closeModal = () => setModalContent(null);

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
                title={"Corporate Social Responsibility"}
                image="./csr/csr-banner.png"
                subNav={subLinks}
                theme={"#03253E"}
                themeLine={"#096080"}
            />

            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <KeyValues title={"CSR Initiatives in FY 2024-25"} theme1={"#096080"} theme2={"#03253E"} text={"#4ac9f6"} data={initiatives} />
                </div>
            </div>

            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <div className='w-full md:flex justify-center items-stretch gap-6'>
                        <div className='md:w-[40%] rounded-3xl'>
                            <img src="./csr/placeholder.png" className='w-full md:mb-0 mb-4' alt="" />
                        </div>
                        <div className='md:w-[60%] bg-[#e1f2f8] border p-6 border-[#a1c5d4] rounded-3xl flex flex-col justify-center'>
                            <p className='md:text-[22px] mb-4'>
                                Through our CSR programs, we have positively touched over <b>500,000</b> lives during FY 2024-25, making transformational impact and significant strides toward our social responsibility goals.
                            </p>
                            <span className='bg-[#49C8F5] w-fit md:text-[16px] text-[#03253E] rounded-3xl inline-block font-thin px-4 py-2'>Health and Hope in Every Community</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <div className="md:flex justify-center items-stretch gap-4">
                        {impactData.map((item, idx) => (
                            <ImpactCard key={idx} {...item} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <section>
                        <div className="flex flex-col md:flex-row gap-6 mb-12">
                            {/* Card 1 */}
                            <div className="border border-[#c7d5e1] shadow-lg rounded-4xl flex-1 p-4 flex flex-col md:flex-row items-center">
                                <img
                                    src="./csr/placeholder.png"
                                    className="w-full md:w-1/2 h-auto rounded-xl mb-4 md:mb-0 md:mr-6"
                                    alt="Before Interview"
                                />
                                <div className="text-left">
                                    <h3 className="text-2xl mb-2">Employee Volunteering</h3>
                                    <p className="text-[#7F7F8A] text-[12px] my-2">
                                        Domino's, India's largest quick-service restaurant (QSR) chain,
                                        today announced the opening of its 2000th store in the country.
                                    </p>
                                    <motion.span
                                        className="flex items-center text-sm underline underline-offset-2 cursor-pointer"
                                        onClick={() => openModal("before")}
                                        whileHover="hover"
                                        initial="initial"
                                    >
                                        Learn more
                                        <motion.span
                                            className="ml-2 inline-block"
                                            variants={{
                                                initial: { x: 0 },
                                                hover: { x: 5 },
                                            }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            ↗
                                        </motion.span>
                                    </motion.span>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="border border-[#c7d5e1] shadow-lg rounded-4xl flex-1 p-4 flex flex-col md:flex-row items-center">
                                <img
                                    src="./csr/placeholder.png"
                                    className="w-full md:w-1/2 h-auto rounded-xl mb-4 md:mb-0 md:mr-6"
                                    alt="During Interview"
                                />
                                <div className="text-left">
                                    <h3 className="text-2xl mb-2">Awards & Accolades</h3>
                                    <p className="text-[#7F7F8A] text-[12px] my-2">
                                        Domino's, India's largest quick-service restaurant (QSR) chain,
                                        today announced the opening of its 2000th store in the country.
                                    </p>
                                    <motion.span
                                        className="flex items-center text-sm underline underline-offset-2 cursor-pointer"
                                        onClick={() => openModal("during")}
                                        whileHover="hover"
                                        initial="initial"
                                    >
                                        Learn more
                                        <motion.span
                                            className="ml-2 inline-block"
                                            variants={{
                                                initial: { x: 0 },
                                                hover: { x: 5 },
                                            }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            ↗
                                        </motion.span>
                                    </motion.span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* ✅ Using your existing Modal */}
                <Modal isOpen={!!modalContent} onClose={closeModal}>
                    {modalContent === "before" && (
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Before the Interview</h3>
                            <p className="text-sm text-gray-700">
                                Prepare by researching the company, practicing common questions,
                                and dressing appropriately.
                            </p>
                        </div>
                    )}
                    {modalContent === "during" && (
                        <div>
                            <h3 className="text-xl font-semibold mb-2">During the Interview</h3>
                            <p className="text-sm text-gray-700">
                                Stay confident, listen carefully, ask questions, and present your
                                skills clearly.
                            </p>
                        </div>
                    )}
                </Modal>
            </div>

            <div className='bg-[#03253E]'>
                <div className="container-wrapper">
                    <div className="max-w-[1350px] mx-auto my-16">
                        <CSRNewsletter />
                    </div>
                </div>
            </div>

            <div className="container-wrapper">
                <div className='max-w-[1350px] mx-auto my-16'>
                    <h2 className=' md:text-5xl mb-8 font-thin'>Pop-up</h2>
                    <div className=" bg-[#e1f2f8] border border-[#a1c5d4] p-8 rounded-4xl md:flex justify-center items-stretch gap-6 ">
                        <div className='rounded-3xl md:w-[60%]'>
                            <img src="./csr/placeholder.png" className='w-full' alt="" />
                        </div>
                        <div className='rounded-3xl bg-white p-6 md:w-[40%]'>
                            <h3 className='text-3xl font-thin mb-6'>Community Healthcare</h3>
                            <p className='py-2 border-b border-gray-300'>
                                Promoted health-seeking behavior among rural populations by providing access to healthcare services for a population more than 4.6 Lakhs
                            </p>
                            <p className='py-2 border-b border-gray-300'>
                                Extended medical care to 150 villages, treated more than 100,000 patients.
                            </p>
                            <p className='py-2 border-b border-gray-300'>
                                Organized multi-specialty health camps to address diverse healthcare needs.
                            </p>
                            <span className='bg-[#49C8F5] mt-6 w-fit md:text-[16px] text-[#03253E] rounded-3xl inline-block font-thin px-4 py-2'>Data as per FY2024-25</span>
                        </div>
                    </div>
                </div>
            </div>
        </AnimationWrapper>
    )
}

export default CSR