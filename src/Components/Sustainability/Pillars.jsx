import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    title: "Responsible Sourcing",
    url: "./Website Final Videos/Sustainability/Responsible_Sourcing.webm",
    content: [
      "The Company empowers dairy farmers with cutting-edge technologies and expert guidance, enabling them to enhance the productivity and quality of their dairy products.",
      "Achieved “No Antibiotics Ever” milestone.",
      "100% farm traceability for chicken, oregano, chili, and tomato paste.",
      "Achieved corn localization to enhance localization and incentivize local farmers.",
      "Member of I-SPOC (Sustainable Palm Oil Coalition of India).",
      "In our pursuit of agricultural harmony, the Company uses Integrated Pest Management (IPM) techniques for sourcing chilies from Andhra Pradesh.",
    ],
  },
  {
    title: "Baking Goodness",
    url: "./Website Final Videos/Sustainability/Baking_Goodness.webm",
    content: [
      "Focused on delivering the highest quality baked goods.",
      "Invested in energy-efficient baking techniques.",
      "Introduced healthier options with whole grains and reduced sugar.",
    ],
  },
  {
    title: "Emissions, Energy & Waste Management",
    url: "./Website Final Videos/Sustainability/Emissions_Management.webm",
    content: [
      "Installed solar panels across production units.",
      "90% reduction in landfill waste.",
      "Converted food waste into bio-compost.",
    ],
  },
  {
    title: "Benefit: People and Communities",
    url: "./Website Final Videos/Sustainability/Benefit_People_Communities.webm",
    content: [
      "Upgraded school facilities in 20+ villages.",
      "Over 5000+ families benefited from community initiatives.",
      "Enabled women's self-help groups through micro-loans.",
    ],
  },
];

export default function Pillars() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [arrowLeft, setArrowLeft] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardRefs = useRef([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    const card = cardRefs.current[activeIndex];
    if (card) {
      const rect = card.getBoundingClientRect();
      const containerRect = card.parentNode.getBoundingClientRect();
      const center = rect.left + rect.width / 2 - containerRect.left;
      setArrowLeft(center);
    }
  }, [activeIndex]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    const video = videoRefs.current[index];
    if (video) {
      video.play();
    }
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="w-full">
      <h2 className="manrope-thin text-4xl mb-6">Pillars of Our Sustainability</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 relative">
        {data.map((item, index) => (
         <div
         key={index}
         ref={(el) => (cardRefs.current[index] = el)}
         onClick={() => setActiveIndex(index)}
         onMouseEnter={() => handleMouseEnter(index)}
         onMouseLeave={() => handleMouseLeave(index)}
         className={`flex flex-col cursor-pointer rounded-xl bg-gray-200 overflow-hidden transition duration-300 shadow-md ${
           activeIndex === index ? "shadow-xl shadow-green-200" : ""
         }`}
       >
         {/* Square video container */}
         <div className="aspect-square w-full relative">
           <video
             ref={(el) => (videoRefs.current[index] = el)}
             loop
             muted
             playsInline
             className="w-full h-full object-cover"
             src={item.url}
           />
           {/* Overlay on hover */}
           <div
             className={`absolute inset-0 bg-black transition-opacity duration-300 ${
               hoveredIndex === index ? "opacity-0" : "opacity-30"
             }`}
           ></div>
         </div>
       
         {/* Title below video */}
         <div className="bg-black bg-opacity-70 text-white text-center py-2 text-sm font-medium">
           {item.title}
         </div>
       </div>
       
        
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={data[activeIndex].title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-[#ecf3e8] rounded-xl px-6 py-6 shadow-md relative"
        >
          <div
            className="absolute -top-2 w-4 h-4 hidden md:block bg-[#ecf3e8] rotate-45 z-10 transition-all duration-300"
            style={{ left: `${arrowLeft - 8}px` }}
          ></div>
          <h3 className="text-lg font-semibold mb-4">{data[activeIndex].title}</h3>
          <ul className="text-sm space-y-2 text-gray-800">
            {data[activeIndex].content.map((point, idx) => (
              <li
                key={idx}
                className="transition duration-200 hover:bg-lime-200 px-2 py-1 rounded"
              >
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
