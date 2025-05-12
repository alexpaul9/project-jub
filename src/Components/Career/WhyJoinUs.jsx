import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CardWithPopup from "../CardWithPopup";

const cardData = [
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


export default function WhyJoinUs() {

    
    const [activeCard, setActiveCard] = useState(null);

    return (
        <section className="text-white relative">
            {/* Top Tag */}
            <div className="mb-4">
                <span className="bg-[#49C8F5] text-[#03253E] text-lg px-4 py-2 rounded-2xl font-light">
                    Why Join Us
                </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-thin leading-tight">
                Join us to shape the future of food-tech <br /> with purpose, passion, and limitless growth.
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {cardData.map((card, index) => (
                    <CardWithPopup
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description} // popup data
                    />
                ))}
            </div>


            {/* Bottom Section */}
            <div className="mt-16 grid md:grid-cols-2 items-center gap-10">
                <div>
                    <h3 className="text-3xl md:text-5xl font-thin mb-4">Work at the heart of Innovation</h3>
                    <p className="text-gray-300 mb-6">
                        This is a place to grow, learn and connect. Everything that makes you who you are is welcome here.
                    </p>
                    <button className="bg-[#49C8F5] text-[#03253E] text-lg px-4 py-2 rounded-2xl font-light">
                        Explore Opportunity
                    </button>
                </div>
                <div>
                    <img
                        src="./career/wju-featured.png"
                        alt="Team"
                        className="rounded-2xl w-full object-cover"
                    />
                </div>
            </div>

            {/* Popup */}
            <AnimatePresence>
                {activeCard && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveCard(null)}
                    >
                        <motion.div
                            className="bg-white text-black rounded-2xl max-w-md w-full p-6 relative shadow-xl"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-3 right-3 text-gray-500 hover:text-black"
                                onClick={() => setActiveCard(null)}
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <h4 className="text-xl font-semibold mb-2">{activeCard.title}</h4>
                            <p className="text-sm text-gray-700">{activeCard.description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
