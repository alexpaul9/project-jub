import { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const ImpactCard = ({ image, title, impact, content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-[25%] rounded-3xl bg-[#f7fbfd] p-4 shadow-xl hover:shadow-lg hover:shadow-[#49C8F5]/50 transition-all duration-300">
        <div className="relative h-[180px] rounded-2xl overflow-hidden bg-gradient-to-b from-gray-300 to-gray-500">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}

          {/* Always show the overlay link */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#3b3b3b] opacity-90 flex items-end justify-end p-4 transition-opacity hover:opacity-100">
            <div
              className="flex items-center gap-1 text-sky-400 text-sm font-medium cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <span>Learn more</span>
              <FaArrowUpRightFromSquare />
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <h3 className="text-base font-semibold text-[#0f1d3c]">{title}</h3>
          <div className="flex items-center justify-between mt-2">
            <span className="px-4 py-1 bg-[#49C8F5]  text-[#0f1d3c] md:text-[14px] rounded-xl font-thin">
              Impact No.s
            </span>
            <span className="md:text-4xl text-3xl font-thin text-[#0f1d3c]">{impact}</span>
          </div>
        </div>
      </div>

      {/* Animated Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-xl w-[90%] max-w-lg shadow-lg relative"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-4 text-xl font-bold text-gray-600 hover:text-black"
              >
                &times;
              </button>
              <h2 className="text-xl font-semibold text-[#0f1d3c] mb-4">
                {title}
              </h2>
              <p className="text-gray-700 text-sm">
                {content || "More detailed content goes here..."}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImpactCard;
