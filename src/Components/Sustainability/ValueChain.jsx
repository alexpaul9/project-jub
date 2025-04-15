import React from "react";

const hotspots = [
  {
    id: 1,
    top: "20%",
    left: "10%",
    text: "Poultry Farm",
  },
  {
    id: 2,
    top: "25%",
    left: "20%",
    text: "Dairy Farm",
  },
  {
    id: 3,
    top: "60%",
    left: "40%",
    text: "Fresh, high-quality meals are prepared transparently, empowering customers with informed choices",
  },
  {
    id: 4,
    top: "65%",
    left: "75%",
    text: "Houses",
  },
  // ➕ Add more hotspots here as needed
];

const ValueChain = () => {
  return (
    <div>
        <h2 className="manrope-thin text-4xl mb-6">Value Chain</h2>
    <div className="relative rounded-3xl border-2 border-gray-100 overflow-hidden w-full max-w-7xl mx-auto">
      <img
        src="./sustainability/value_chain.png"
        alt="Value Chain"
        className="w-full h-auto"
      />

      {hotspots.map((point) => (
       <div
       key={point.id}
       className="absolute group cursor-pointer"
       style={{ top: point.top, left: point.left }}
     >
       {/* The dot */}
       <div className="w-3 h-3 bg-blue-600 cursor-pointer rounded-full border-2 border-white shadow-lg relative z-10" />
      
       {/* Tooltip */}
       <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-[300px] bg-[#8ec850] text-black text-sm px-4 py-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition duration-300 whitespace-normal break-words text-center z-20
         after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#8ec850]">
         {point.text}
       </div>
     </div>
     
      ))}
    </div>
    </div>
  );
};

export default ValueChain;