import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

function splitTextToSpans(text) {
    return text.split('').map((char, i) => (
        <span
            key={i}
            style={{
                display: 'inline-block',
                opacity: 0,
                transform: 'translateY(30px) scale(0.8) rotate(4deg)',
                filter: 'blur(4px)',
                willChange: 'opacity, transform, filter'
            }}
            className="gsap-anim-char"
        >
            {char === ' ' ? '\u00A0' : char}
        </span>
    ));
}

const AnimatedHeading = ({
    tag = 'h2',
    text,
    duration = 1,
    stagger = 0.05,
    className = '',
    ...rest
}) => {
    const headingRef = useRef(null);
    const Tag = tag;

    useEffect(() => {
        const node = headingRef.current;
        if (!node) return;

        const chars = node.querySelectorAll('.gsap-anim-char');

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    gsap.to(chars, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotate: 0,
                        filter: 'blur(0px)',
                        duration,
                        stagger,
                        ease: 'power4.out',
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );
        observer.observe(node);

        return () => observer.disconnect();
    }, [duration, stagger]);

    return (
        <Tag
            ref={headingRef}
            className={className}
            style={{ display: 'inline-block', overflow: 'hidden' }}
            {...rest}
        >
            {splitTextToSpans(text)}
        </Tag>
    );
};

export default AnimatedHeading;
