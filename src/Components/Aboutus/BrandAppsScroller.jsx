import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BrandAppsScroller = () => {
    const imageWrapperRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const imageWrapper = imageWrapperRef.current;
        const image = imageRef.current;

        const updateAnimation = () => {
            gsap.killTweensOf(image);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());

            const imageWidth = image.scrollWidth || image.offsetWidth;
            const wrapperWidth = imageWrapper.offsetWidth;
            const scrollDistance = imageWidth - wrapperWidth;

            if (scrollDistance <= 0) return;

            gsap.to(image, {
                x: -scrollDistance,
                ease: "none",
                scrollTrigger: {
                    trigger: imageWrapper,
                    start: "top top",
                    end: `+=${scrollDistance}`,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });
        };

        if (image.tagName === "IMG" && !image.complete) {
            image.addEventListener("load", updateAnimation);
        } else {
            updateAnimation();
        }

        window.addEventListener("resize", updateAnimation);

        return () => {
            window.removeEventListener("resize", updateAnimation);
            if (image.tagName === "IMG") image.removeEventListener("load", updateAnimation);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Set your desired strip height here
    const stripHeight = 600;

    return (
        <section
            style={{
                width: "100vw",
                background: "#F2F6F8",
                overflow: "hidden",
                // No height or minHeight!
            }}
        >
            
            <div
                ref={imageWrapperRef}
                style={{
                    position: "relative",
                    height: `${stripHeight}px`,
                    width: "100vw",
                    overflow: "hidden",
                }}
            >
                
                <img
                    ref={imageRef}
                    src="/immersive/phone-strip.png"
                    alt="Brand apps"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100%",
                        width: "auto",
                        minWidth: "2000px",
                        willChange: "transform",
                    }}
                />
            </div>
            {/* No placeholder needed unless you have content below */}
        </section>
    );
};

export default BrandAppsScroller;
