import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import results from '../../data/Investors/results';
import { FaChevronDown } from 'react-icons/fa';


const monthToFYMonth = {
    April: 1,
    May: 2,
    June: 3,
    July: 4,
    August: 5,
    September: 6,
    October: 7,
    November: 8,
    December: 9,
    January: 10,
    February: 11,
    March: 12,
};

const getQuarterLabel = (monthNum) => {
    if (monthNum >= 1 && monthNum <= 3) return 'Q1';
    if (monthNum >= 4 && monthNum <= 6) return 'Q2';
    if (monthNum >= 7 && monthNum <= 9) return 'Q3';
    if (monthNum >= 10 && monthNum <= 12) return 'Q4';
    return '';
};

const getMonthInQuarter = (fyMonth) => ((fyMonth - 1) % 3) + 1;

const allQuarterMonthLabels = [
    'Q1-1M', 'Q1-2M', 'Q1-3M',
    'Q2-4M', 'Q2-5M', 'Q2-6M',
    'Q3-7M', 'Q3-8M', 'Q3-9M',
    'Q4-10M', 'Q4-11M', 'Q4-12M',
];

const categories = [
    { title: 'Financials', bg: './investors/result1.png' },
    { title: 'Corporate Governance', bg: './investors/result2.png' },
    { title: 'Press Releases', bg: './investors/result3.png' },
    { title: 'Investor Presentations', bg: './investors/result4.png' },
];

const ResultsSection = () => {
    const allEntries = Object.values(results).flat();
    const allYears = useMemo(
        () => [...new Set(allEntries.map((item) => item.year))].sort((a, b) => b - a),
        []
    );

    const [selectedYear, setSelectedYear] = useState(allYears[0]);
    const [selectedQuarterMonth, setSelectedQuarterMonth] = useState('Q1-1M');
    const [showYearDropdown, setShowYearDropdown] = useState(false);
    const [showQuarterDropdown, setShowQuarterDropdown] = useState(false);

    const getDocumentForCategory = (category) => {
        const entries = results[category] || [];
        return entries.find((item) => {
            const fyMonth = monthToFYMonth[item.month];
            const quarter = getQuarterLabel(fyMonth);
            const label = `${quarter}-${fyMonth}M`;
            return item.year === selectedYear && label === selectedQuarterMonth;
        });
    };

    return (
        <div className="mx-auto">
            <div className="flex justify-between items-center gap-4 mb-8 flex-wrap">
                <h2 className="md:text-4xl text-thin">
                    FY{String(selectedYear).slice(-2)} {selectedQuarterMonth} Results
                </h2>

                <div className="flex justify-center items-center gap-2">
                    {/* Year Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setShowYearDropdown(!showYearDropdown)}
                            className="bg-[#4ac9f6] text-[#0b3932] font-semibold rounded-2xl px-6 py-2 flex items-center justify-between w-full shadow-md focus:outline-none transition"
                        >
                            {selectedYear === 'All' ? 'Fiscal Year' : `FY: ${selectedYear}`}
                            <FaChevronDown className={`ml-2 transition-transform ${showYearDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                            {showYearDropdown && (
                                <motion.ul
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute mt-2 bg-white shadow rounded z-10 max-h-64 overflow-y-auto scrollbar-thin"
                                >
                                    {allYears.map((year) => (
                                        <li
                                            key={year}
                                            onClick={() => {
                                                setSelectedYear(year);
                                                setShowYearDropdown(false);
                                            }}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {year}
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Quarter Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setShowQuarterDropdown(!showQuarterDropdown)}
                            className="bg-[#4ac9f6] text-[#0b3932] font-semibold rounded-2xl px-6 py-2 flex items-center justify-between w-full shadow-md focus:outline-none transition"
                        >
                            {selectedQuarterMonth}
                            <FaChevronDown className={`ml-2 transition-transform ${showQuarterDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                            {showQuarterDropdown && (
                                <motion.ul
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute mt-2 bg-white shadow rounded z-10 max-h-64 overflow-y-auto scrollbar-thin"
                                >
                                    {allQuarterMonthLabels.map((label) => (
                                        <li
                                            key={label}
                                            onClick={() => {
                                                setSelectedQuarterMonth(label);
                                                setShowQuarterDropdown(false);
                                            }}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {label}
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map(({ title, bg }) => {
                    const doc = getDocumentForCategory(title);
                    return (
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            key={title}
                            className="relative p-4 text-white h-40 flex flex-col justify-end border rounded-2xl bg-cover bg-center shadow-md"
                            style={{
                                backgroundImage: `url(${bg})`,
                            }}
                        >
                            <div className="bg-black/40 absolute  inset-0 rounded-2xl"></div>
                            <div className="relative z-0 ">
                                {doc ? (
                                    <a className="text-white font-semibold text-2xl mb-2" href={doc.link}>{title}</a>
                                    //   <a
                                    //     href={doc.link}
                                    //     target="_blank"
                                    //     rel="noopener noreferrer"
                                    //     className="underline"
                                    //   >
                                    //     {doc.filename}
                                    //   </a>
                                ) : (
                                    // <a className="text-lg font-semibold mb-2" href={doc.link}>{title}</a>
                                    <p className="text-2xl  text-gray-400">{title}</p>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default ResultsSection;
