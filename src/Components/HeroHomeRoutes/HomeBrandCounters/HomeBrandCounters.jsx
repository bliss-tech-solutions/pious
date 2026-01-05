import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate, useInView, useMotionValueEvent } from "framer-motion";
import "./HomeBrandCounters.css";
import interiorImage from "../../../assets/brand-counters/interior-showcase.png";

const Counter = ({ value, suffix = "" }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());
    const [displayValue, setDisplayValue] = useState("0");
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    useMotionValueEvent(rounded, "change", (latest) => {
        setDisplayValue(latest);
    });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, {
                duration: 2,
                ease: "easeOut",
            });
            return () => controls.stop();
        } else {
            count.set(0);
            setDisplayValue("0");
        }
    }, [isInView, value, count]);

    return (
        <span ref={ref}>
            {displayValue}
            {suffix}
        </span>
    );
};



const HomeBrandCounters = () => {
    const fadeIn = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    return (
        <section className="brand-counters section-sm">
            <div className="container">
                <div className="brand-counters-wrapper">
                    {/* Left Side: Brand Story */}
                    <div className="brand-counters-left">
                        <motion.span
                            className="sub-heading"
                            {...fadeIn}
                        >
                            INNOVATION ON MULTIPLE LEVELS
                        </motion.span>
                        <motion.h2
                            className="heading-2"
                            {...fadeIn}
                            transition={{ ...fadeIn.transition, delay: 0.1 }}
                        >
                            COMFORT & SPACE
                        </motion.h2>
                        <motion.div
                            className="featured-image-container"
                            {...fadeIn}
                            transition={{ ...fadeIn.transition, delay: 0.2 }}
                        >
                            <img src="/Images/ProjectsImages/PiousParivaarProjectImages/PiousParivaarGalleryImage2.jpg" alt="Modern Interior" className="featured-image" />
                        </motion.div>
                        <motion.div
                            className="brand-desc"
                            {...fadeIn}
                            transition={{ ...fadeIn.transition, delay: 0.3 }}
                        >
                            {/* <span className="brand-index">01</span> */}
                            <p>
                                PIOUS Group is dedicated to creating residential spaces with an optimal layout and modern design, ensuring every home is a milestone.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Side: Milestones Grid */}
                    <div className="brand-counters-right">
                        <div className="milestones-header">
                            <motion.span
                                className="sub-heading"
                                {...fadeIn}
                            >
                                KEEPS GROWING
                            </motion.span>
                            <motion.h2
                                className="heading-2"
                                {...fadeIn}
                                transition={{ ...fadeIn.transition, delay: 0.1 }}
                            >
                                EVERY MILESTONE
                            </motion.h2>
                            <motion.div
                                className="zigzag-line"
                                {...fadeIn}
                                transition={{ ...fadeIn.transition, delay: 0.2 }}
                            >
                                <svg width="40" height="8" viewBox="0 0 40 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 3L9 7L13 3L17 7L21 3L25 7L29 3L33 7L37 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.div>
                        </div>

                        <div className="counters-grid">
                            <motion.div
                                className="counter-item"
                                {...fadeIn}
                                transition={{ ...fadeIn.transition, delay: 0.3 }}
                            >
                                <h3 className="counter-number">
                                    <Counter value={3} suffix="+" />
                                </h3>
                                <p className="counter-label">Projects <br /> completed</p>
                            </motion.div>
                            <motion.div
                                className="counter-item"
                                {...fadeIn}
                                transition={{ ...fadeIn.transition, delay: 0.4 }}
                            >
                                <h3 className="counter-number">
                                    <Counter value={3} suffix="L+" />
                                </h3>
                                <p className="counter-label">Sq.ft. <br /> Constructed Area</p>
                            </motion.div>
                            <motion.div
                                className="counter-item"
                                {...fadeIn}
                                transition={{ ...fadeIn.transition, delay: 0.5 }}
                            >
                                <h3 className="counter-number">
                                    <Counter value={232} suffix="+" />
                                </h3>
                                <p className="counter-label">Residential <br /> Units</p>
                            </motion.div>
                            <motion.div
                                className="counter-item"
                                {...fadeIn}
                                transition={{ ...fadeIn.transition, delay: 0.6 }}
                            >
                                <h3 className="counter-number">
                                    <Counter value={38} suffix="+" />
                                </h3>
                                <p className="counter-label">Commercial <br /> Units</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBrandCounters;