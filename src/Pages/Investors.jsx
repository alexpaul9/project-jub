import React from 'react'
import GlobalCover from '../Components/GlobalCover';
import KeyValues from '../Components/Global/KeyValues';
import keyFiguresData from '../data/Investors/keyFiguresData';
import AnnualReports from '../Components/Investors/AnnualReports';
import CEOPerspective from '../Components/Investors/CEOPerspective';
import EventsSection from '../Components/Investors/EventsSection';
import EventsSlider from '../Components/Investors/EventsSlider';
import InvestorsUpdates from '../Components/Investors/InvestorsUpdates';
import Governance from '../Components/Investors/Governance';
import ResultsSection from '../Components/Investors/ResultsComponent';

const Investors = () => {
    const subLinks = [
        { icon: './investors/financial-info.svg', label: 'Financial Information', path: '/sustainability/ceo-message' },
        { icon: './investors/company-reports.svg', label: 'Company Reports', path: '/sustainability/value-chain' },
        { icon: './investors/governance.svg', label: 'Governance', path: '/sustainability/pillars-of-our-sustainability' },
        { icon: './investors/sh-info.svg', label: 'Shareholder Information', path: '/sustainability/sustainability-governance' },
        { icon: './investors/reg-46.svg', label: 'Disclosures under Reg 46', path: '/sustainability/sustainability-frameworks' },
    ];
    return (
        <div>
            <GlobalCover
                title="Investors"
                video="./Website Final Videos/Investor/Investor_Banner.webm"
                subNav={subLinks}
                theme={"#03253E"}
                themeLine={"#49C8F5"}
            />

            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <KeyValues title={"Q3FY25 - Key Figures"} theme1={"#096080"} theme2={"#03253E"} text={"#4ac9f6"} data={keyFiguresData} />
                </div>
            </div>
            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <ResultsSection />
                </div>
            </div>
            <div className='bg-[#03253E]'>
                <div className="container-wrapper">
                    <div className="max-w-[1350px] mx-auto my-16">
                        <AnnualReports />
                    </div>
                </div>
            </div>
            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <CEOPerspective />
                </div>
            </div>
            <div className='bg-[#03253E]'>
                <div className="container-wrapper">
                    <div className="np max-w-[1350px] mx-auto my-16">
                        <EventsSection />
                    </div>
                </div>
            </div>
            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <EventsSlider />
                </div>
                <div className="max-w-[1350px] mx-auto my-16">
                    <InvestorsUpdates />
                </div>
            </div>
                {/* <div className=''> */}
                    {/* <div className="max-w-[1350px] mx-auto my-16"> */}
                        <Governance />
                    {/* </div> */}
                {/* </div> */}
        </div>
    )
}

export default Investors