import React, { useState } from 'react';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const DateFilter = ({ onFilter }) => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleSubmit = () => {
    if (onFilter) {
      onFilter({ from: fromDate, to: toDate });
    }
  };

  return (
    <div className='bg-[#49C8F5] pb-1'>

    <div className=" bg-[#03253E] p-3">
    <div className="container-wrapper">
    <div className="max-w-[1350px] mx-auto flex items-center gap-4">
      {/* From Date */}
      <div className="relative flex cursor-pointer items-center bg-[#071725] px-4 py-2 rounded-xl border-b-[3px] border-[#49C8F5] text-white">
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="bg-transparent cursor-pointer outline-none text-white pr-6"
        />
        <FaCalendarAlt className="absolute right-3 text-white" />
      </div>

      <span className="text-white">To</span>

      {/* To Date */}
      <div className="relative flex cursor-pointer items-center bg-[#071725] px-4 py-2 rounded-xl border-b-[3px] border-[#49C8F5] text-white">
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="bg-transparent cursor-pointer outline-none text-white pr-6"
        />
        <FaCalendarAlt className="absolute right-3 text-white" />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-[#071725] text-white p-3 rounded-xl border-b-[3px] border-b-[#49C8F5] hover:bg-[#49C8F5]/20 duration-300 cursor-pointer transition"
      >
        <FaArrowRight />
      </button>
    </div>
    </div>
    </div>
    </div>
  );
};

export default DateFilter;