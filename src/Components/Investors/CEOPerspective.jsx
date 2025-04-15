import React from "react";
import { Send } from "lucide-react"

const CEOPerspective = () => {
    return (
        <div className="bg-[#f0f4f8] rounded-3xl  mx-auto">
            <div
                className="relative flex flex-col md:flex-row justify-between rounded-3xl overflow-hidden bg-cover bg-center p-6 md:p-10"
                style={{
                    backgroundImage: `url("/sustainability/chairman_bg.png")`,
                }}
            >
                {/* Content Section */}
                <div className="max-w-[600px] text-white z-10">
                    <div className="inline-block px-4 py-1 mb-6 text-sm font-light text-white bg-[#2d6e8a] rounded-full">
                        CEO Perspectives on the Quarter
                    </div>

                    <div className="relative">
                        <img
                            src="./sustainability/quote1.svg"
                            alt="Quote Start"
                            className="w-8 mb-4"
                        />
                        <p className="text-white text-lg sm:text-xl leading-normal">
                            This is a quarter of new highs. Not only in Revenue but also in same store sales growth, store expansion, app traffic, app conversion, customer loyalty, new customer acquisition and highest absolute EBITDA. We remain focused on building platforms and accelerating our prowess as a food-tech company.
                            <img src="./sustainability/quote2.svg" alt="quote" className="md:absolute w-[20px] -right-7 bottom-0  ml-1 h-[20px]" />
                            {/* </span> */}
                        </p>
                        {/* <img
              src="/investors/quote-end.png"
              alt="Quote End"
              className="w-8 mt-4"
            /> */}
                    </div>

                    <div className="h-[2px] w-28 bg-[#49C8F5] my-6"></div>
                    <div className="flex justify-between">
                        <div>
                    <h3 className="text-white text-lg font-bold">Mr. Sameer Khetarpal</h3>
                    <p className="text-white text-sm">
                        Chief Executive Officer and Managing Director
                    </p>
                    </div>
                    <button className="flex items-center gap-2 bg-[#49C8F5] text-black px-6 py-2 rounded-2xl text-lg font-light shadow-md hover:bg-[#76c5f3] transition">
                    <Send className="w-5 h-5" />
                        Share
                    </button>
                    </div>
                    
                </div>

                {/* CEO Image - bottom right with overlap */}
                <img
                    src="/investors/ceo.png"
                    alt="CEO"
                    className="md:absolute bottom-0 right-0 w-full  md:w-[450px] object-contain z-0"
                />
            </div>
        </div>
    );
};

export default CEOPerspective;
