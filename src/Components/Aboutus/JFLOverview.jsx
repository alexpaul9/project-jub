import React from "react";

const JFLOverview = () => {
    const countries = [
        { name: "India", flag: "/aboutus/in.svg" },
        { name: "Sri Lanka", flag: "/aboutus/Sri Lanka.svg" },
        { name: "Turkey", flag: "/aboutus/Turkey.svg" },
        { name: "Bangladesh", flag: "/aboutus/Bangladesh.svg" },
        { name: "Azerbaijan", flag: "/aboutus/Azerbaijan.svg" },
        { name: "Georgia", flag: "/aboutus/Georgia.svg" },
    ];

    return (
        <div className="">
        <div className="flex flex-col lg:flex-row gap-12 ">
          {/* Left Column */}
          <div className="flex-1 flex flex-col justify-between gap-6 h-full">
            {/* Pizza Image */}
            <img
              src="/aboutus/Rectangle 8635 (1).png"
              alt="Pizza"
              className="rounded-3xl w-full h-auto object-cover shadow-2xl"
            />
      
            {/* Flex Box Row */}
            <div className="flex flex-row gap-4 h-full">
              {/* Stores Box */}
              <div className="flex justify-between items-center bg-[#032f4b] text-white rounded-3xl px-6 py-6 shadow-lg w-3/5">
                <div>
                  <h2 className="text-4xl text-[#4ac9f6] font-normal">2,991+</h2>
                  <p className="text-lg mt-2">stores</p>
                </div>
                <div>
                  <div className="flex flex-col justify-center gap-3 mt-4">
                    <span className="border border-[#4ac9f6] text-[#4ac9f6] rounded-full px-4 py-1 text-sm">
                      6 countries
                    </span>
                    <span className="border border-[#4ac9f6] text-[#4ac9f6] rounded-full px-4 py-1 text-sm">
                      5 iconic brands
                    </span>
                  </div>
                </div>
              </div>
      
              {/* Innovation Box */}
              <div
                className="w-2/5 text-white flex items-end rounded-3xl px-6 py-6 shadow-lg bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/aboutus/Stats Background.png')" }}
              >
                <h3 className="text-base font-normal leading-snug">
                  Innovation,<br />Expansion & Excellence
                </h3>
              </div>
            </div>
          </div>
      
          {/* Right Column */}
          <div className="flex-1 flex flex-col justify-between h-full">
            {/* Heading */}
            <div>
              <h1 className="text-4xl font-thin text-[#032f4b] leading-tight mb-4">
                Jubilant FoodWorks Limited <br />(JFL Group)
              </h1>
              <p className="text-lg my-2 text-gray-700 max-w-xl">
                Incorporated in 1995, ranks among the leading emerging markets’ food service companies.
              </p>
            </div>
      
            {/* Global Presence */}
            <div
              className="bg-[#032f4b] text-white rounded-3xl mt-4 px-8 py-8 shadow-lg bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/aboutus/Card Background.png')" }}
            >
              <h2 className="text-3xl font-normal text-[#4ac9f6] mb-2">Global Presence</h2>
              <p className="text-gray-300 text-base mb-6">
                Jubilant FoodWorks operates across six key markets, serving 22% of the world population:
              </p>
      
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {countries.map((country) => (
                  <div
                    key={country.name}
                    className="flex items-center gap-2 bg-[#1b2e4e]/80 px-3 py-2 rounded-md"
                  >
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="w-9 h-7 object-cover rounded-[4px]"
                    />
                    <span className="text-sm">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      

    );
};

export default JFLOverview;
