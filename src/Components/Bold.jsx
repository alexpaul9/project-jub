import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    title: "Responsible Sourcing",
    image: "./strategy/b.png",
    content: [
      <div className="w-full md:flex justify-center items-stretch gap-6 p-6">
        <div className="p-4 bg-[#001625] rounded-3xl">
          <img src="./strategy/bt1.svg" alt="" />
        </div>
        <div className="p-4 bg-[#001625] rounded-3xl">
          <img src="./strategy/bt2.svg" alt="" />
        </div>
        <div className="p-4 bg-[#001625] rounded-3xl">
          <img src="./strategy/bt3.svg" alt="" />
        </div>
        <div className="p-4 bg-[#001625] rounded-3xl">
          <img src="./strategy/bt4.svg" alt="" />
        </div>
      </div>

    ],
  },
  {
    title: "Baking Goodness",
    image: "./strategy/o.png",
    content: [
      <div className="p-4">
        <h2 className="md:text-5xl font-thin text-white mb-6">
        Operate with Excellence
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto">
          {/* Card 1 */}
          <div className="bg-[#001625] flex items-center gap-4 p- rounded-3xl shadow-lg hover:shadow-blue-500/40 transition">
            <img src="./strategy/exel1.png" alt="Foodparks" className="" />
            <div>
              <h3 className="text-4xl text-[#49C8F5]">16</h3>
              <p className="text-white font-thin md:text-[22px]">Foodparks and Distribution centers</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#001625] flex items-center gap-4 p-6 rounded-3xl shadow-lg hover:shadow-blue-500/40 transition">
            <img src="./strategy/exel2.png" alt="Logistics Fleet" className="" />
            <div>
              <h3 className="text-4xl text-[#49C8F5]">230</h3>
              <p className="text-white font-thin md:text-[22px]">Multi-temperature logistics fleet</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#001625] flex items-center gap-4 p-6 rounded-3xl shadow-lg hover:shadow-blue-500/40 transition">
            <img src="./strategy/exel3.png" alt="Delivery Speed" className="" />
            <div>
              <h3 className="text-4xl text-[#49C8F5]">~66%</h3>
              <p className="text-white font-thin md:text-[22px]">Deliveries under 20 min</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#001625] flex items-center gap-4 p-6 rounded-3xl shadow-lg hover:shadow-blue-500/40 transition">
            <img src="./strategy/exel4.png" alt="Bikes" className="" />
            <div>
              <h3 className="text-4xl text-[#49C8F5]">~30K</h3>
              <p className="text-white font-thin md:text-[22px]">Bikes</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#001625] flex items-center gap-4 p-6 rounded-3xl shadow-lg hover:shadow-blue-500/40 transition">
            <img src="./strategy/exel5.png" alt="Fill-rate" className="" />
            <div>
              <h3 className="text-4xl text-[#49C8F5]">~99.6%</h3>
              <p className="text-white font-thin md:text-[22px]">Fill-rate</p>
            </div>
          </div>
        </div>
      </div>

    ],
  },
  {
    title: "Emissions, Energy & Waste Management",
    image: "../strategy/l.png",
    content: [
      <div className="mx-auto border">
        {/* Our Purpose */}
        <div className="text-left">
          <h3 className="text-white text-xl md:text-3xl mb-2">Lead with Purpose</h3>
          <h1 className="text-4xl md:text-5xl font-light text-[#49C8F5] flex  items-center gap-3">
            We Serve Joy
            <img src="./aboutus/smiley.svg" alt="Smiley" className="w-20 h-20" />
          </h1>
        </div>

        {/* JFL Values */}
        <div className="rounded-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            <div className="flex flex-col items-center text-center p-4 rounded-lg hover:shadow-md transition">
              <div className={`flex items-center justify-center rounded-full`}>
                <img src="./aboutus/abico 1.svg" alt="" className="" />
              </div>
              <p className="mt-3 text-sm font-semibold text-white">BE CUSTOMER FIRST</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg hover:shadow-md transition">
              <div className={`flex items-center justify-center rounded-full`}>
                <img src="./aboutus/abico 2.svg" alt="" className="" />
              </div>
              <p className="mt-3 text-sm font-semibold text-white">LEAD WITH CARE</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg hover:shadow-md transition">
              <div className={`flex items-center justify-center rounded-full`}>
                <img src="./aboutus/abico 3.svg" alt="" className="" />
              </div>
              <p className="mt-3 text-sm font-semibold text-white">HUSTLE MINDFULLY</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg hover:shadow-md transition">
              <div className={`flex items-center justify-center rounded-full`}>
                <img src="./aboutus/abico 4.svg" alt="" className="" />
              </div>
              <p className="mt-3 text-sm font-semibold text-white">DRIVE GROWTH</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-lg hover:shadow-md transition">
              <div className={`flex items-center justify-center rounded-full`}>
                <img src="./aboutus/abico 5.svg" alt="" className="" />
              </div>
              <p className="mt-3 text-sm font-semibold text-white">FIND BETTER WAYS</p>
            </div>
          </div>
        </div>

      </div>
    ],
  },
  {
    title: "Benefit: People and Communities",
    image: "./strategy/d.png",
    content: [
      <div className="p-4">
        <h2 className="md:text-5xl font-thin text-white">
          Delicious Food
        </h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <a href="#" className="block">
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: -2,
                boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="rounded-2xl overflow-hidden bg-[#49C8F5] pb-2"
            >
              <div className="bg-[#03253E] rounded-2xl">
                <img
                  src="/aboutus/Background.png"
                  alt="Domino’s"
                  className="w-full h-44 object-cover"
                />
                <div className="h-[90px] flex flex-col justify-center items-center text-white">
                  <img src="/aboutus/Dominos.svg" className="h-10 w-auto mb-1" alt="Domino’s" />
                  <p className="text-xs text-center">#1 in Pizza Globally</p>
                </div>
              </div>
            </motion.div>
          </a>

          <a href="#" className="block">
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: -2,
                boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="rounded-2xl overflow-hidden bg-[#49C8F5] pb-2"
            >
              <div className="bg-[#03253E] rounded-2xl">
                <img
                  src="/aboutus/Background (1).png"
                  alt="Popeyes"
                  className="w-full h-44 object-cover"
                />
                <div className="h-[90px] flex flex-col justify-center items-center text-white">
                  <img src="/aboutus/popeyes.svg" className="h-10 w-auto mb-1" alt="Popeyes" />
                  <p className="text-xs text-center">#2 in Chicken Globally</p>
                </div>
              </div>
            </motion.div>
          </a>

          <a href="#" className="block">
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: -2,
                boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="rounded-2xl overflow-hidden bg-[#49C8F5] pb-2"
            >
              <div className="bg-[#03253E] rounded-2xl">
                <img
                  src="/aboutus/Background (2).png"
                  alt="COFFY"
                  className="w-full h-44 object-cover"
                />
                <div className="h-[90px] flex flex-col justify-center items-center text-white">
                  <img src="/aboutus/coffy.svg" className="h-10 w-auto mb-1" alt="COFFY" />
                  <p className="text-xs text-center">Fast growing Café Brand</p>
                </div>
              </div>
            </motion.div>
          </a>

          <a href="#" className="block">
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: -2,
                boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="rounded-2xl overflow-hidden bg-[#49C8F5] pb-2"
            >
              <div className="bg-[#03253E] rounded-2xl">
                <img
                  src="/aboutus/Background (3).png"
                  alt="Hong’s Kitchen"
                  className="w-full h-44 object-cover"
                />
                <div className="h-[90px] flex flex-col justify-center items-center text-white">
                  <img src="/aboutus/hongs-kitchen.svg" className="h-10 w-auto mb-1" alt="Hong’s Kitchen" />
                  <p className="text-xs text-center">First Indo-Chinese QSR Brand</p>
                </div>
              </div>
            </motion.div>
          </a>

          <a href="#" className="block">
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: -2,
                boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="rounded-2xl overflow-hidden bg-[#49C8F5] pb-2"
            >
              <div className="bg-[#03253E] rounded-2xl">
                <img
                  src="/aboutus/Background (4).png"
                  alt="Dunkin’"
                  className="w-full h-44 object-cover"
                />
                <div className="h-[90px] flex flex-col justify-center items-center text-white">
                  <img src="/aboutus/dunkin-logo 1.svg" className="h-10 w-auto mb-1" alt="Dunkin’" />
                  <p className="text-xs text-center">#1 Coffee & Donuts QSR Brand in USA</p>
                </div>
              </div>
            </motion.div>
          </a>
        </div>
      </div>
    ],
  },
];



export default function Bold() {
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
            className={`cursor-pointer rounded-4xl bg-gray-200 overflow-hidden transition duration-300 shadow-md ${activeIndex === index ? "ring-2 ring-[#03253E]" : ""
              }`}
          >
            <img src={item.image} alt={item.title} className="w-full h- object-cover" />
            {/* <div className="bg-black bg-opacity-50 text-white text-center py-2 text-sm font-medium">
              {item.title}
            </div> */}
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
          className="bg-[#03253E] rounded-4xl px-6 py-6 shadow-md relative"
        >
          <div
            className="absolute -top-2 w-4 h-4 hidden md:block bg-[#03253E] rotate-45 z-10 transition-all duration-300"
            style={{ left: `${arrowLeft - 8}px` }} // subtract 8 to center the arrow
          ></div>
          <ul className="text-sm space-y-2 text-gray-800">
            {data[activeIndex].content.map((point, idx) => (
              <li
                key={idx}
                className="transition duration-200 px-2 py-1 rounded"
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
