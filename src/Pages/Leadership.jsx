import React, { useState } from 'react';
import { management, boardOfDirectors } from '../data/about/leadership';
import GlobalCover from '../Components/GlobalCover';

const Leadership = () => {
    const [isManagement, setIsManagement] = useState(true);
    const data = isManagement ? management : boardOfDirectors;
    const subLinks = [
        { icon: './aboutus/building.svg', label: 'Company Profile', path: '/sustainability/ceo-message' },
        { icon: './aboutus/sms.svg', label: "Chairman's Message", path: '/sustainability/value-chain' },
        { icon: './aboutus/profile-2user.svg', label: 'Leadership', path: '/leadership' },
        { icon: './aboutus/routing.svg', label: 'Milestones', path: '/sustainability/sustainability-governance' },
        { icon: './aboutus/award.svg', label: 'Awards', path: '/sustainability/sustainability-frameworks' },
        { icon: './aboutus/buildings-2.svg', label: 'Jubilant Bharti Group', path: '/sustainability/sustainability-frameworks' },
    ];
    return (
        <div>
            <GlobalCover
                title="Leadership"
                image="./aboutus/about.png"
                subNav={subLinks}
                theme={"#03253E"}
                themeLine={"#49C8F5"}
            />

            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">

                    <div className="py-10">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-5xl font-thin text-gray-800">
                                {isManagement ? 'Management' : 'Board of Directors'}
                            </h2>
                            <div className="space-x-2 rounded-xl bg-[#096080] p-1">
                                <button
                                    onClick={() => setIsManagement(true)}
                                    className={`px-4 py-2 cursor-pointer rounded-lg text-lg font-light transition ${isManagement
                                        ? 'bg-[#49C8F5] text-[#002733]'
                                        : 'text-white bg-transparent'
                                        }`}
                                >
                                    Management
                                </button>
                                <button
                                    onClick={() => setIsManagement(false)}
                                    className={`px-4 py-2 cursor-pointer rounded-lg text-lg font-light transition ${!isManagement
                                        ? 'bg-[#49C8F5] text-[#002733]'
                                        : 'text-white bg-transparent'
                                        }`}
                                >
                                    Board of Directors
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            {data.map((person, idx) => (
                                <div
                                    key={idx}
                                    className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] rounded-4xl overflow-hidden transition hover:shadow-xl"
                                >
                                    <div className="relative">
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                            className="w-full object-cover"
                                        />
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-18 bg-white/70 backdrop-blur-md rounded-2xl text-center px-4 flex flex-col items-center justify-center">
                                            <h3 className="text-sm font-bold text-gray-800 m-0 leading-tight">{person.name}</h3>
                                            <p className="text-xs text-gray-700 m-0 leading-tight">{person.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leadership