import React, { useState } from "react";
import CardWithPopup from "../CardWithPopup";
import Modal from "../../Components/Modal";


const credoData = [
    {
        title: "Hire For Expertise +\nPotential",
        description:
            "We hire T-shaped individuals who are experts in 1–2 streams and are coachable/malleable for future roles/paths",
        icon: "./career/credo-icon1.svg",
    },
    {
        title: "Hire for\nValues",
        description:
            "We hire individuals who are aligned with JFL core values and not only enhance our culture.",
        icon: "./career/credo-icon2.svg",
    },
    {
        title: "Hire for the\nLong Term",
        description:
            "We hire individuals who we think we can forge long term ties with and grow together.",
        icon: "./career/credo-icon3.svg",
    },
    {
        title: "Hire\nDiversity",
        description:
            "We hire for diverse talent, demographics, skills, and perspectives through diverse hiring channels.",
        icon: "./career/credo-icon4.svg",
    },
    {
        title: "Hire Consistently\n& Fairly",
        description:
            "We follow a consistent candidate-centric ‘JFL Way of Hiring’ across roles & take fair decisions.",
        icon: "./career/credo-icon5.svg",
    },
];

const credoCardData = [
    {
        title: "Career Growth & Development",
        image: "./career/wju1.png",
        description: "We help you reach new heights in your career with dedicated mentorship and growth plans.",
    },
    {
        title: "Learning & Development",
        image: "./career/wju2.png",
        description: "Continual learning is at our core. We offer structured L&D programs for every level.",
    },
    {
        title: "Diversity & Inclusion",
        image: "./career/wju3.png",
        description: "We celebrate differences and ensure an inclusive, welcoming culture for all.",
    },
    {
        title: "Benefits That Support The Whole You",
        image: "./career/wju4.png",
        description: "From health to hobbies, our benefits are designed to support your entire self.",
    },
];

export default function HiringCredo() {
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => setModalContent(content);
    const closeModal = () => setModalContent(null);

    return (
        <div className="mx-auto">
            <span className="bg-[#49C8F5] inline-block text-[#03253E] mb-4 text-lg px-4 py-2 rounded-2xl font-light">
                How We Hire
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-gray-800 mb-10">
                Our Hiring Credo
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {credoData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#03253E] text-white rounded-2xl p-6 flex flex-col items-center text-center shadow-sm"
                    >
                        <img
                            src={item.icon}
                            alt={item.title}
                            className="h-12 mb-4"
                        />
                        <h3 className="font-semibold whitespace-pre text-center text-lg text-[#49C8F5] mb-2 leading-snug">
                            {item.title}
                        </h3>
                        <p className="text-sm opacity-80 leading-snug">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            <section className="my-16">
                <div className="mx-auto flex flex-col md:flex-row items-center gap-10">
                    <div className="mx-auto flex flex-col md:flex-row gap-10 items-stretch">
                        {/* Left Text Area */}
                        <div className="md:w-1/2 flex">
                            <div className="bg-[#e9f0f7] border-[#adcdf0] p-8 rounded-3xl border shadow-sm w-full flex flex-col justify-center">
                                <p className="text-gray-700 text-xl leading-relaxed mb-2">
                                    We’re thrilled to have you join us on this journey—and we’re here to support you every step of the way!
                                </p>
                                <p className="text-gray-700 text-xl leading-relaxed mb-2">
                                    At JFL, we believe the hiring process is a two-way street. As we learn more about you, we hope you’re also getting to know us. We’re committed to making this experience as transparent and supportive as possible.
                                </p>
                                <p className="text-gray-700 text-xl leading-relaxed mb-2">
                                    Although the process may vary slightly depending on the role and function, here’s an overview of our standard hiring journey.
                                </p>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="md:w-1/2 flex">
                            <img
                                src="./career/credo-featured.png"
                                alt=""
                                className="rounded-3xl w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                    {credoCardData.map((card, index) => (
                        <CardWithPopup
                            key={index}
                            image={card.image}
                            title={card.title}
                            description={card.description} // popup data
                        />
                    ))}
                </div>
            </section>

            <section className="">

                <h2 className="text-3xl md:text-5xl font-light text-gray-800 mb-10">
                    How to prepare for the interview
                </h2>

                {/* Cards */}
                <div className="flex flex-col md:flex-row gap-6 mb-12">
                    <button
                        className="bg-[#0F2B49] text-white rounded-4xl flex-1 flex flex-col md:flex-row items-center focus:outline-none"
                        onClick={() => openModal("before")}
                    >
                        <img
                            src="./career/prepare1.png"
                            className="w-full md:w-1/2 h-auto rounded-xl mb-4 md:mb-0 md:mr-6"
                            alt="Before Interview"
                        />
                        <div className="text-left">
                            <h3 className="text-3xl font- mb-2">Before the <br /> Interview</h3>
                            <span className="flex items-center text-sm underline underline-offset-2">
                                Learn more <span className="ml-2">↗</span>
                            </span>
                        </div>
                    </button>

                    <button
                        className="bg-[#0F2B49] text-white rounded-4xl flex-1 flex flex-col md:flex-row items-center focus:outline-none"
                        onClick={() => openModal("during")}
                    >
                        <img
                            src="./career/prepare2.png"
                            className="w-full md:w-1/2 h-auto rounded-xl mb-4 md:mb-0 md:mr-6"
                            alt="During Interview"
                        />
                        <div className="text-left">
                            <h3 className="text-3xl mb-2">During the <br /> Interview</h3>
                            <span className="flex items-center text-sm underline underline-offset-2">
                                Learn more <span className="ml-2">↗</span>
                            </span>
                        </div>
                    </button>
                </div>

                {/* Modal */}
                <Modal isOpen={modalContent !== null} onClose={closeModal}>
                    {modalContent === "before" && (
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Before the Interview</h3>
                            <p className="text-sm text-gray-700">
                                Prepare by researching the company, practicing common questions, and dressing appropriately.
                            </p>
                        </div>
                    )}
                    {modalContent === "during" && (
                        <div>
                            <h3 className="text-xl font-semibold mb-2">During the Interview</h3>
                            <p className="text-sm text-gray-700">
                                Stay confident, listen carefully, ask questions, and present your skills clearly.
                            </p>
                        </div>
                    )}
                </Modal>

                {/* Purpose Section remains unchanged */}
            </section>
        </div>
    );
}
