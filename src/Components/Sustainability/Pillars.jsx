import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    title: "Responsible Sourcing",
    image: "./sustainability/p1.png",
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
    image: "./sustainability/p2.png",
    content: [
      "Focused on delivering the highest quality baked goods.",
      "Invested in energy-efficient baking techniques.",
      "Introduced healthier options with whole grains and reduced sugar.",
    ],
  },
  {
    title: "Emissions, Energy & Waste Management",
    image: "./sustainability/p3.png",
    content: [
      "Installed solar panels across production units.",
      "90% reduction in landfill waste.",
      "Converted food waste into bio-compost.",
    ],
  },
  {
    title: "Benefit: People and Communities",
    image: "./sustainability/p4.png",
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
  const cardRefs = useRef([]);

  // Update arrow position based on active box
  useEffect(() => {
    const card = cardRefs.current[activeIndex];
    if (card) {
      const rect = card.getBoundingClientRect();
      const containerRect = card.parentNode.getBoundingClientRect();
      const center = rect.left + rect.width / 2 - containerRect.left;
      setArrowLeft(center);
    }
  }, [activeIndex]);

  return (
    <div className="w-full">
      {/* Cards Row */}
      <h2 className="manrope-thin text-4xl mb-6">Pillars of Our Sustainability</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 relative">
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer rounded-xl bg-gray-200 overflow-hidden transition duration-300 shadow-md ${
              activeIndex === index ? "ring-2 ring-green-400" : ""
            }`}
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="bg-black bg-opacity-50 text-white text-center py-2 text-sm font-medium">
              {item.title}
            </div>
          </div>
        ))}

        {/* Arrow pointing to clicked card */}
        
      </div>

      {/* Content Block */}
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
          style={{ left: `${arrowLeft - 8}px` }} // subtract 8 to center the arrow
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
