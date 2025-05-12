import React from 'react'
import GlobalCover from '../Components/GlobalCover'
import JubilantForAll from '../Components/Sustainability/JubilantForAll';
import ValueChain from '../Components/Sustainability/ValueChain';
import Pillars from '../Components/Sustainability/Pillars';
import SustainabilityGovernance from '../Components/Sustainability/SustainabilityGovernance';
import SustainabilityTargets from '../Components/Sustainability/SustainabilityTargets';
import SustainabilityFrameworks from '../Components/Sustainability/SustainabilityFrameworks';
import SustainabilityScores from '../Components/Sustainability/SustainabilityScores';
import KeyValues from '../Components/Global/KeyValues';
import kpiData from '@data/sustainnability/kpiData';


const Sustainability = () => {
    const subLinks = [
        { icon:'./sustainability/sms-edit.svg', label: 'CEO Message', path: '/sustainability/ceo-message' },
        { icon:'./sustainability/share.svg', label: 'Value Chain', path: '/sustainability/value-chain' },
        { icon:'./sustainability/triangle.svg', label: 'Pillars of Our Sustainability', path: '/sustainability/pillars-of-our-sustainability' },
        { icon:'./sustainability/building-3.svg', label: 'Sustainability Governance', path: '/sustainability/sustainability-governance' },
        { icon:'./sustainability/Recycle_Icon_UIA.svg', label: 'Sustainability Frameworks', path: '/sustainability/sustainability-frameworks' },
        { icon:'./sustainability/ranking.svg', label: 'Sustainability Ratings', path: '/sustainability/sustainability-ratings' },
    ];
    return (
        <div>
            <GlobalCover
                title="Sustainability"
                video="./Website Final Videos/Sustainability/Sustainability_Banner.webm"
                subNav={subLinks}
                theme={"#00332d"}
                themeLine={"#a3d702"}
            />

            <div className="container-wrapper">
                <div className="max-w-screen-xl mx-auto my-16">
                    <KeyValues title={"Q3FY25 - Sustainability KPIs"} theme1={"#0F322D"} theme2={"#012a1e"} text={"#a3d702"} data={kpiData}/>
                </div>
                <div className="max-w-screen-xl mx-auto my-16">
                    <JubilantForAll/>
                </div>
                <div className=" my-16">
                    <ValueChain/>
                </div>
                <div className="max-w-screen-xl mx-auto my-16">
                    <Pillars/>
                </div>
                </div>
                <div className="my-16 bg-[#0b3932]">
                <div className="container-wrapper">
                    <SustainabilityGovernance/>
                </div>
                </div>
            <div className="container-wrapper">

                <div className="max-w-screen-xl mx-auto my-16">
                    <SustainabilityTargets/>
                </div>
                <div className="max-w-screen-xl mx-auto my-16">
                    <SustainabilityFrameworks title={"Sustainability Frameworks"}/>
                </div>
                <div className="max-w-screen-xl mx-auto my-16">
                    <SustainabilityFrameworks title={"Sustainability Policies"}/>
                </div>
                <div className="max-w-screen-xl mx-auto my-16">
                    <SustainabilityScores/>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Sustainability