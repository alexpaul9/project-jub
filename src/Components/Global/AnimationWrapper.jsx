import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { 
        opacity: 0, 
        y: 40
    },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1.0],
            type: "spring",
            damping: 20,
            stiffness: 100
        } 
    }
};

const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const AnimationWrapper = ({ children, className = "" }) => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className={className}
        >
            {React.Children.map(children, (child, index) => (
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ 
                        once: true, 
                        margin: "-50px",
                        amount: 0.3 // This means the element will animate when 30% of it is in view
                    }}
                    variants={fadeInUp}
                >
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default AnimationWrapper; 