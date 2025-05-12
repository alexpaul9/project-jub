import React from 'react'
import GlobalCover from '../Components/GlobalCover';
import Bold from '../Components/Bold';

const Strategy = () => {
    const subLinks = [
        { icon: './aboutus/building.svg', label: 'Company Profile', path: '/sustainability/ceo-message' },
        { icon: './aboutus/sms.svg', label: "Chairman's Message", path: '/sustainability/value-chain' },
        { icon: './aboutus/profile-2user.svg', label: 'Leadership', path: '/leadership' },
        { icon: './aboutus/routing.svg', label: 'Strategy', path: '/strategy' },
        { icon: './aboutus/award.svg', label: 'Immersive Food Experience', path: '/immersive-food-experience' },
        { icon: './aboutus/buildings-2.svg', label: 'Jubilant Bharti Group', path: '/sustainability/sustainability-frameworks' },
    ];

    return (
        <div>
            <GlobalCover
                title="Strategy"
                video="./Website Final Videos/Strategy/Strategy_Banner.webm"
                subNav={subLinks}
                theme={"#03253E"}
                themeLine={"#49C8F5"}
            />

            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <video
                        src={"./Website Final Videos/Strategy/BeBoldMD.webm"}
                        autoPlay
                        loop
                        // muted
                        playsInline
                        controls
                        className="w-full h-full rounded-4xl object-cover"
                    />
                </div>
            </div>

            <div className="container-wrapper">
                <div className="max-w-[1350px] mx-auto my-16">
                    <Bold/>
                </div>
            </div>

        </div>
    )
}

export default Strategy