import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const VideoPlayer = ({ videoUrl, onClose }) => {
  if (!videoUrl) return null;

  const embedUrl = videoUrl.replace("watch?v=", "embed/");

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 bg-opacity-70 p-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative bg-white rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full aspect-video"
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 cursor-pointer text-white z-10 bg-black bg-opacity-50 hover:bg-opacity-80 p-2 rounded-full"
          >
            <FaTimes size={18} />
          </button>
          <iframe
            width="100%"
            height="100%"
            src={embedUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoPlayer;
