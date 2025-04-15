import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaDownload, FaBookOpen, FaShareAlt, FaChevronLeft, FaChevronRight, FaChevronDown } from 'react-icons/fa';
import reportData from '../../data/Investors/annualReportsData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomPrevArrow = ({ onClick }) => (
  <div className="absolute -bottom-10 left-1/2 transform -translate-x-16 z-10" onClick={onClick}>
    <div className="bg-[#22668a] hover:bg-[#1b5472] text-white p-3 rounded-full shadow-md transition cursor-pointer">
      <FaChevronLeft />
    </div>
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="absolute -bottom-10 left-1/2 transform translate-x-16 z-10" onClick={onClick}>
    <div className="bg-[#22668a] hover:bg-[#1b5472] text-white p-3 rounded-full shadow-md transition cursor-pointer">
      <FaChevronRight />
    </div>
  </div>
);

const AnnualReports = () => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [open, setOpen] = useState(false);

  const years = ['All', ...new Set(reportData.map((report) => report.year))];

  const handleSelect = (year) => {
    setSelectedYear(year);
    setOpen(false);
  };

  const filteredReports =
    selectedYear === 'All'
      ? reportData
      : reportData.filter((report) => report.year === selectedYear);

  const handleShare = (title, link) => {
    const subject = encodeURIComponent(`Check out this report: ${title}`);
    const body = encodeURIComponent(`You can view the report here: ${link}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="text-white py-18 px-4 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h2 className="text-3xl md:text-4xl font-light">Integrated Annual Reports</h2>

        {/* Custom Year Selector */}
        <div className="relative min-w-[140px] z-20">
          <button
            onClick={() => setOpen(!open)}
            className="bg-[#4ac9f6] text-[#0b3932] font-semibold rounded-full px-6 py-2 flex items-center justify-between w-full shadow-md focus:outline-none transition"
          >
            {selectedYear === 'All' ? 'Fiscal Year' : `${selectedYear}`}
            <FaChevronDown className={`ml-2 transition-transform ${open ? 'rotate-180' : ''}`} />
          </button>

          {open && (
            <ul className="absolute top-full left-0 mt-2 w-full bg-white border border-[#cde0bc] rounded-xl shadow-lg z-20 overflow-hidden">
              {years.map((year) => (
                <li
                  key={year}
                  onClick={() => handleSelect(year)}
                  className="px-6 py-2 text-[#0b3932] cursor-pointer hover:bg-[#bdeeff] transition font-medium"
                >
                  {year === 'All' ? 'All Years' : ` ${year}`}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Slider */}
      <Slider {...settings}>
        {filteredReports.map((report, idx) => (
          <div key={idx} className="px-3">
            <div className="flex bg-[#10314e] rounded-xl overflow-hidden shadow-lg h-full">
              {/* Image */}
              <div className="w-[40%] flex items-center justify-center p-2">
                <img
                  src={report.thumbnail}
                  alt={report.title}
                  className="max-h-[240px] object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-between p-4 w-[60%]">
                <p className="text-base font-semibold mb-4">{report.title}</p>
                <div className="flex gap-3">
                  <a
                    href={report.pdfLink}
                    download
                    className="bg-[#22668a] p-2 rounded-md hover:bg-[#1b5472] transition"
                    title="Download"
                  >
                    <FaDownload />
                  </a>
                  <a
                    href={report.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#22668a] p-2 rounded-md hover:bg-[#1b5472] transition"
                    title="Read"
                  >
                    <FaBookOpen />
                  </a>
                  <button
                    onClick={() => handleShare(report.title, report.pdfLink)}
                    className="bg-[#22668a] p-2 rounded-md hover:bg-[#1b5472] transition"
                    title="Share"
                  >
                    <FaShareAlt />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AnnualReports;
