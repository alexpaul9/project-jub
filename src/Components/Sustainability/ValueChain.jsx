import React from "react";

const hotspots = [
  {
    id: 1,
    top: "40%",
    left: "25%",
    text: "Vendors: We select ethical suppliers to ensure a positive impact at every stage of our sourcing process.",
  },
  {
    id: 2,
    top: "76%",
    left: "40%",
    text: "Stores: Fresh, high-quality meals are prepared transparently, empowering customers with informed choices",
  },
  {
    id: 3,
    top: "25%",
    left: "60%",
    text: "Head office: Our tech team safeguards sensitive data, ensuring operational integrity and supporting sustainable practices.",
  },
  {
    id: 4,
    top: "62%",
    left: "65%",
    text: "Delivery at home: Eco-friendly packaging and our electric fleet reduce environmental impact while delivering fresh meals to your doorstep.",
  },
  {
    id: 5,
    top: "65%",
    left: "28%",
    text: "Cold Chain Logistics: IoT-enabled logistics maintain optimal conditions for raw materials, minimizing waste and ensuring quality.",
  },
  // ➕ Add more hotspots here as needed
];

const ValueChain = () => {
  return (
    <div>
        <h2 className="manrope-thin text-4xl mb-6">Value Chain</h2>
    <div className="relative rounded-3xl border-2 border-gray-100 overflow-hidden w-full max-w-[1350px] mx-auto">
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