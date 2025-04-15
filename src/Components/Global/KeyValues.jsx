import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const KeyValues = ({ theme1, theme2, title, text, data = [] }) => {
  return (
    <div
      className="p-8 rounded-4xl text-white w-full mx-auto"
      style={{ backgroundColor: theme1 }}
    >
      <h2 className="text-2xl sm:text-3xl manrope-thin mb-6">{title}</h2>
      <div className="rounded-xl py-6 w-full text-left text-white md:flex flex-wrap gap-6">
        {data.map((item, index) => (
          <KPIBox
            key={index}
            value={item.value}
            label={item.label}
            theme2={theme2}
            text={text}
          />
        ))}
      </div>
    </div>
  );
};

const KPIBox = ({ value, label, theme2, text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(value);

  useEffect(() => {
    const numericMatch = value.toString().match(/^([\d,]+)(.*)$/);
    if (isInView && numericMatch && numericMatch[2].trim() === '') {
      // Only animate if the value is purely numeric (optionally with commas)
      let start = 0;
      const end = parseInt(numericMatch[1].replace(/,/g, ''));
      const duration = 800;
      const increment = end / (duration / 16);

      const step = () => {
        start += increment;
        if (start < end) {
          setCount(Math.floor(start).toLocaleString());
          requestAnimationFrame(step);
        } else {
          setCount(end.toLocaleString());
        }
      };

      requestAnimationFrame(step);
    } else {
      setCount(value); // fallback for strings or complex values
    }
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="md:w-[23%] my-2 md:my-0 rounded-xl px-6 py-4 text-left"
      style={{ backgroundColor: theme2 }}
    >
      <h3 className="text-4xl manrope-thin" style={{ color: text }}>
        {count}
      </h3>
      <p className="text-white mt-1">{label}</p>
    </div>
  );
};

export default KeyValues;
