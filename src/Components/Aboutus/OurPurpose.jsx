import React from "react";

export default function OurPurpose() {
  const values = [
    {
      title: "BE CUSTOMER FIRST",
      icon: "./aboutus/abico 1.svg", // Replace with your icons
    },
    {
      title: "LEAD WITH CARE",
      icon: "./aboutus/abico 2.svg",
    },
    {
      title: "HUSTLE MINDFULLY",
      icon: "./aboutus/abico 3.svg",
    },
    {
      title: "DRIVE GROWTH",
      icon: "./aboutus/abico 4.svg",
    },
    {
      title: "FIND BETTER WAYS",
      icon: "./aboutus/abico 5.svg",
    },
  ];

  return (
    <section className="">
      <div className="mx-auto">

        {/* Our Purpose */}
        <div className="text-left">
          <h3 className="text-gray-500 text-xl md:text-3xl mb-2">Our Purpose</h3>
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 flex  items-center gap-3">
            We Serve Joy
            <img src="./aboutus/smiley.svg" alt="Smiley" className="w-20 h-20" />
          </h1>
        </div>

        {/* Blue Box */}
        <div className="mt-8 bg-[#e6f1fb] border border-blue-200 rounded-xl p-6 text-gray-700">
          <h2 className="text-3xl font-normal text-[#096080] mb-4">
            The Joy of Customers is our ultimate reward. <br />
            Joy in teams is our secret ingredient.
          </h2>
          <p className="mb-4 text-xl">
            Food has the power to create an extraordinary experience on a perfectly ordinary day.
            Food can elevate the moment and lend it enduring happy memories.
            We are privileged that our business allows us to contribute to these experiences and memories—everyday.
          </p>
          <p className="text-xl">
            Serving JOY is the North Star for the choices we make, decisions we take, how we work, and what we invest in.
            Serving JOY is the guiding light when we put the{" "}
            <span className="font-bold text-green-600">CUSTOMER FIRST</span>,
            endeavor to find{" "}
            <span className="font-bold text-green-500">A BETTER WAY</span>,
            express{" "}
            <span className="font-bold text-red-400">CARE</span>,
            thrive in{" "}
            <span className="font-bold text-yellow-400">HUSTLE</span>,
            and chase our{" "}
            <span className="font-bold text-blue-500">GROWTH</span> ambitions.
          </p>
        </div>

        {/* JFL Values */}
        <div className="mt-12 bg-[#e6f1fb] border border-blue-200 rounded-xl p-6">
          <h3 className="text-3xl font-light text-gray-800 mb-6">The JFL Values</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg hover:shadow-md transition">
                <div className={`w-40 h-40 flex items-center justify-center rounded-full ${value.bgColor}`}>
                  <img src={value.icon} alt={value.title} className="" />
                </div>
                <p className="mt-3 text-sm font-semibold text-gray-700">{value.title}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
