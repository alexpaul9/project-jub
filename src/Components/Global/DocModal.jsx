import React from 'react';
import { FaTimes } from 'react-icons/fa';

function DocModal({ open, onClose, title, bannerImage, documents = [] }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      {/* Close Button: fixed, responsive position and size */}
      <button
        className="
          fixed 
          top-5 right-6 
          text-2xl 
          text-white 
          hover:text-gray-200 
          z-50
          sm:top-4 sm:right-4 sm:text-xl
        "
        onClick={onClose}
        aria-label="Close"
      >
        <FaTimes />
      </button>

      {/* Scrollable Content */}
      <div className="relative w-full md:max-w-7xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-[#e6f1f6] to-[#cbd5e1] rounded-3xl shadow-xl p-6
        max-w-full mx-2 p-4
      ">
        {/* Banner */}
        <div
          className="rounded-xl overflow-hidden mb-8 relative h-[220px] flex items-center justify-center text-white text-4xl font-light
            sm:h-[150px] sm:text-2xl
          "
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-xl" />
          <h2 className="relative z-10">{title}</h2>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 pb-4
          sm:grid-cols-1 sm:px-2
        ">
          {documents.map((doc, index) => (
            <a
              key={index}
              href={doc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#16263e] hover:bg-[#232e3f] p-3 transition-colors duration-200 rounded-xl text-white flex md:flex-row  md:items-center gap-2 shadow-lg
                flex-co items-start
              "
            >
              <img src="/pdf-icon.svg" alt="PDF" className="w-10 h-10 md:w-auto md:h-auto sm:mb-2" />
              <p className="md:text-[12px] text-xs md:w-[50%] sm:w-full">{doc.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DocModal;
