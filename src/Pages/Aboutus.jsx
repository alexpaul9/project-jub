import React from 'react'
import GlobalCover from '../Components/GlobalCover';
import JFLOverview from '../Components/Aboutus/JFLOverview';
import KeyValues from '../Components/Global/KeyValues';
import keyFiguresData from '../data/about/keyFiguresData';
import OurBrands from '../Components/Aboutus/OurBrands';
import OurPurpose from '../Components/Aboutus/OurPurpose';
import ValueCreation from '../Components/Aboutus/ValueCreation';

const Aboutus = () => {
    const subLinks = [
        { icon: './aboutus/building.svg', label: 'Company Profile', path: 'overview' },
        { icon: './aboutus/sms.svg', label: "Chairman's Message", path: 'brands' },
        { icon: './aboutus/profile-2user.svg', label: 'Leadership', path: '/leadership' },
        { icon: './aboutus/routing.svg', label: 'Strategy', path: 'purpose' },
        { icon: './aboutus/award.svg', label: 'Immersive Food Experience', path: 'value-creation' },
        { icon: './aboutus/buildings-2.svg', label: 'Jubilant Bharti Group', path: 'sustainability-frameworks' },
    ];

    return (
        <div>
            <GlobalCover
                title="About Us"
                image="./aboutus/about.png"
                subNav={subLinks}
                theme={"#03253E"}
                themeLine={"#49C8F5"}
            />
            
            <div className='bg-[#f2f6f8] py-2'>
                <div className="container-wrapper">
                    <div className="max-w-[1350px] mx-auto my-16">
                        <JFLOverview />
                    </div>
                </div>
            </div>

            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-8">
                    <OurBrands />
                </div>
            </div>

            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto mb-16">
                    <KeyValues title={"Q3FY25 - Key Figures"} theme1={"#096080"} theme2={"#03253E"} text={"#4ac9f6"} data={keyFiguresData} />
                </div>
            </div>

            <div className='bg-[#f5f7fa] py-2'>
                <div className="container-wrapper">
                    <div className="max-w-[1350px] mx-auto my-16">
                        <OurPurpose />
                    </div>
                </div>
            </div>

            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <ValueCreation />
                </div>
            </div>
        </div>
    )
}

export default Aboutus