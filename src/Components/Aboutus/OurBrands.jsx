import React from "react";
import { motion } from "framer-motion";

const brands = [
  {
    name: "Domino’s",
    desc: "#1 in Pizza Globally",
    image: "/aboutus/Background.png",
    logo: "./dominos.svg",
    link: "#",
  },
  {
    name: "Popeyes",
    desc: "#2 in Chicken Globally",
    image: "/aboutus/Background (1).png",
    logo: "./popeyes.svg",
    link: "#",
  },
  {
    name: "COFFY",
    desc: "Fast growing Café Brand",
    image: "/aboutus/Background (2).png",
    logo: "./coffy.svg",
    link: "#",
  },
  {
    name: "Hong’s Kitchen",
    desc: "First Indo-Chinese QSR Brand",
    image: "/aboutus/Background (3).png",
    logo: "./hongs.svg",
    link: "#",
  },
  {
    name: "Dunkin’",
    desc: "#1 Coffee & Donuts QSR Brand in USA",
    image: "/aboutus/Background (4).png",
    logo: "./dunkin.svg",
    link: "#",
  },
];

export default function OurBrands() {
  return (
    <section className="bg-white py-10 px-4">
      <div className="md:flex justify-between items-center gap-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-light text-gray-800">
            JFL is a Multi-brand <br /> Food-tech company
          </h2>
          <button className="mt-4 flex items-center px-4 py-2 bg-[#03253E] text-[#49C8F5] rounded-xl text-sm font-medium shadow hover:bg-blue-800">
            Global Brands Under JFL
            <img src="./aboutus/shop.svg" className="ml-2 w-5 h-5" alt="" />
          </button>
        </div>

        <div className="mt-6 md:mt-0 md:w-1/2 bg-[#edf9ff] rounded-xl p-6 text-gray-700 border border-[#a9cbd9]">
          <p>
            The Group has a strong portfolio of brands in emerging markets with
            franchise rights for three global brands – Domino’s, Popeyes and
            Dunkin’ – and two own-brands, Hong’s Kitchen, an Indo-Chinese QSR
            brand in India and a cafe brand - COFFY in Turkey.
          </p>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {brands.map((brand, index) => (
          <a key={index} href={brand.link} className="block">
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: -2,
                boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="rounded-2xl overflow-hidden bg-[#49C8F5] pb-2"
            >
              <div className="bg-[#03253E] rounded-2xl">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-44 object-cover"
                />
                <div
                  className={`h-[90px] flex flex-col justify-center items-center text-white`}
                >
                  <img
                    src={brand.logo}
                    className="h-8 .   w-auto mb-1"
                    alt={brand.name}
                  />
                  <p className="text-xs text-center">{brand.desc}</p>
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
}
