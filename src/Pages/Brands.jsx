import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalCover from '../Components/GlobalCover';
import AnimationWrapper from '../Components/Global/AnimationWrapper';

const Brands = () => {
    const navigate = useNavigate();

    const subLinks = [
        { icon: './Dominos.svg', label: 'Dominos', path: '/dominos' },
        { icon: './Popeyes.svg', label: 'Popeyes', path: '/popeyes' },
        { icon: './Dunkin.svg', label: 'Dunkin', path: '/dunkin' },
        { icon: "./Hong's Kitchen.svg", label: "Hong's Kitchen", path: '/hongs-kitchen' },
        { icon: './Coffy.svg', label: 'Coffy', path: '/coffy' },
        { icon: './Franchise Information.svg', label: 'Franchise Information', path: '/franchise-info' },
    ];

    useEffect(() => {
        if (subLinks.length > 0) {
            navigate(subLinks[0].path, { replace: true });
        }
    }, [navigate]);

    return (
        <AnimationWrapper>
            <GlobalCover
                title="Our Brands"
                image="./brands/brands-banner.png"
                subNav={subLinks}
                theme={"#03253E"}
                themeLine={"#49C8F5"}
            />
        </AnimationWrapper>
    );
};

export default Brands;
