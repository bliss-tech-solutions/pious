import React from "react";
import "./HomeBrand.css";
import { motion } from "framer-motion";

const HomeBrand = () => {
    const fadeIn = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    return (
        <section id="homeBrand" className="section">
            <div className="container">
                <div className="brand-content-wrapper">
                    <motion.span
                        className="brand-eyebrow"
                        {...fadeIn}
                    >
                        Crafting Exceptional Spaces Since 2015
                    </motion.span>

                    <motion.h2
                        className="heading-2 brand-title"
                        {...fadeIn}
                        transition={{ ...fadeIn.transition, delay: 0.1 }}
                    >
                        Welcome to <span className="text-highlight">PIOUS GROUP</span>
                    </motion.h2>

                    <motion.div
                        className="brand-divider"
                        {...fadeIn}
                        transition={{ ...fadeIn.transition, delay: 0.2 }}
                    ></motion.div>

                    <motion.div
                        className="brand-description"
                        {...fadeIn}
                        transition={{ ...fadeIn.transition, delay: 0.3 }}
                    >
                        <p>
                            Welcome to PIOUS GROUP, where your dreams take shape and your visions become reality.
                            Based in Chandkheda, Ahmedabad, we have been passionately dedicated to the art and science of construction since 2015.
                        </p>
                        <p style={{ marginTop: 'var(--spacing-md)' }}>
                            Driven by excellence, our mission is to deliver unparalleled quality, innovative solutions, and exceptional service.
                            Every project we undertake is executed with precision, integrity, and attention to detail—ensuring results that not only meet but consistently exceed our clients’ expectations.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeBrand;