import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CardWithPopup = ({ image, title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-white p-3 text-black rounded-2xl overflow-hidden border border-[#C7D5E1] hover:shadow-xl transition-shadow">
        <img src={image} alt={title} className="w-full h-48 rounded-2xl object-cover" />

        <div className="p-4 pt-3 pb-14 relative sm:pb-14 md:h-26">
          <h3 className="font-normal text-xl mb-3">{title}</h3>

          <motion.button
            onClick={() => setOpen(true)}
            className="text-lg md:text-sm text-[#03253E] border border-[#03253E] md:border-none px-4 py-2 rounded-lg flex items-center gap-2
              static sm:absolute sm:bottom-3 sm:right-4
              sm:bg-transparent sm:text-gray-700 sm:p-0 sm:hover:text-black group transition-colors"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <span>Learn more</span>
            <motion.span
              className="inline-block"
              variants={{
                rest: { x: 0, rotate: 0 },
                hover: { x: 4, rotate: 12 },
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <img src="./career/arrow-blu.svg" className="w-5 h-5" alt="" />
            </motion.span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full relative"
              initial={{ y: "-30%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "30%", opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black"
              >
                ✕
              </button>
              <h2 className="text-2xl font-semibold mb-2">{title}</h2>
              <img src={image} alt={title} className="w-full h-48 object-cover rounded-xl mb-4" />
              <p className="text-gray-700">{description || "No description provided."}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CardWithPopup;
