import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeading = ({
    tag = 'h2',
    text,
    className = '',
    ...rest
}) => {
    const Tag = tag;
    
    // Split text into characters
    const characters = text.split('');

    const container = {
        hidden: { 
            opacity: 1,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.3,
                ease: "easeOut"
            }
        }
    };

    const letterAnimation = {
        hidden: {
            opacity: 0,
            y: 100,
            rotate: Math.random() * 180 - 90,
            scale: 4,
            filter: "blur(30px) brightness(3)",
            textShadow: "0 0 30px #00ff00, 0 0 50px #00ff00, 0 0 70px #00ff00",
        },
        visible: {
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: 1,
            filter: "blur(0px) brightness(1)",
            textShadow: "0 0 0px transparent",
            transition: {
                duration: 1.8,
                ease: [0.2, 0.8, 0.2, 1],
                opacity: { duration: 2 },
                scale: { duration: 1.8 },
                rotate: { duration: 1.5 },
                y: { 
                    type: "spring",
                    damping: 12,
                    stiffness: 50,
                    duration: 1.8
                }
            }
        }
    };

    const glowEffect = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: [0, 0.5, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }
        }
    };

    return (
        <Tag className={className} {...rest}>
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                style={{ 
                    display: 'inline-block',
                    position: 'relative',
                    overflow: 'visible',
                    willChange: 'transform'
                }}
            >
                {characters.map((char, index) => (
                    <motion.span
                        key={index}
                        variants={letterAnimation}
                        style={{ 
                            display: 'inline-block',
                            position: 'relative',
                            whiteSpace: 'pre',
                            WebkitFontSmoothing: 'antialiased',
                            willChange: 'transform, opacity, filter'
                        }}
                    >
                        {/* Glowing background effect */}
                        <motion.span
                            variants={glowEffect}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'radial-gradient(circle at center, rgba(0,255,0,0.3) 0%, transparent 80%)',
                                filter: 'blur(8px)',
                                transform: 'scale(2)',
                                pointerEvents: 'none',
                                willChange: 'opacity, transform'
                            }}
                        />

                        {/* Main character */}
                        <span style={{ 
                            position: 'relative', 
                            zIndex: 1,
                            mixBlendMode: 'screen'
                        }}>
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    </motion.span>
                ))}
            </motion.div>
        </Tag>
    );
};

export default AnimatedHeading;
