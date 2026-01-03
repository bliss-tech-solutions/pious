import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaBullseye, FaHandshake, FaUserTie, FaCheckCircle, FaChartLine, FaGavel, FaChevronDown, FaLightbulb, FaClock, FaShieldAlt } from "react-icons/fa";
import "./AboutUs.css";

const AboutUs = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const [activeAccordion, setActiveAccordion] = useState(0);

    const vmpData = [
        {
            title: "Vision",
            icon: <FaEye />,
            content: "To be a trusted leader in real estate, creating innovative and high-quality spaces for modern living."
        },
        {
            title: "Mission",
            icon: <FaBullseye />,
            content: "To deliver premium living and business spaces with excellence, transparency, and timely execution."
        },
        {
            title: "Promises",
            icon: <FaHandshake />,
            content: "We ensure quality, integrity, and customer satisfaction in every project we undertake."
        }
    ];

    const staggerContainer = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { staggerChildren: 0.2 }
    };

    return (
        <div className="about-us-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <motion.h1
                        className="heading-display text-light"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        About Us
                    </motion.h1>
                    <motion.div
                        className="zigzag-line white"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <svg width="60" height="12" viewBox="0 0 40 8" fill="none">
                            <path d="M1 7L5 3L9 7L13 3L17 7L21 3L25 7L29 3L33 7L37 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.div>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="about-welcome section">
                <div className="container">
                    <div className="welcome-grid">
                        <motion.div className="welcome-text" {...fadeIn}>
                            <span className="sub-heading">ESTABLISHED SINCE 2015</span>
                            <h2 className="heading-2">Welcome to <span className="brand-accent">PIOUS Group</span></h2>
                            <p>
                                PIOUS Group is a diversified business organization with a strong presence in real estate and construction. Since its inception, we have been dedicated to delivering excellence, building trust, and creating lasting value for our clients and stakeholders.
                            </p>
                            <p>
                                Our portfolio includes residential and residential-cum-commercial projects, with a focus on quality construction, innovative design, and timely delivery. We strive to create spaces that combine functionality, aesthetics, and modern living, catering to the evolving needs of urban lifestyles.
                            </p>
                            <p>
                                At PIOUS Group, our philosophy is simple—build with integrity, deliver with precision, and grow together with our community.
                            </p>
                        </motion.div>
                        <motion.div
                            className="welcome-logo"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="pious-logo-placeholder">
                                <img src="/PiousLogoWhite.png" alt="PIOUS Group Logo" style={{ filter: 'invert(1)' }} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose PIOUS Group Section */}
            <section className="why-choose section-sm bg-secondary">
                <div className="container">
                    <motion.div className="section-header text-center" {...fadeIn}>
                        <h2 className="heading-2">Why Choose PIOUS Group</h2>
                        <div className="zigzag-line centered">
                            <svg width="40" height="8" viewBox="0 0 40 8" fill="none">
                                <path d="M1 7L5 3L9 7L13 3L17 7L21 3L25 7L29 3L33 7L37 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </motion.div>

                    <div className="why-grid">
                        <motion.div className="why-item" {...fadeIn}>
                            <div className="why-icon"><FaChartLine /></div>
                            <h3>Proven Track Record</h3>
                            <p>Successfully delivered multiple residential and residential-cum-commercial projects.</p>
                        </motion.div>
                        <motion.div className="why-item" {...fadeIn}>
                            <div className="why-icon"><FaCheckCircle /></div>
                            <h3>Quality Construction</h3>
                            <p>Focused on durable structures, premium materials, and modern design.</p>
                        </motion.div>
                        <motion.div className="why-item" {...fadeIn}>
                            <div className="why-icon"><FaClock /></div>
                            <h3>Timely Delivery</h3>
                            <p>Commitment to on-time completion for all projects.</p>
                        </motion.div>
                        <motion.div className="why-item" {...fadeIn}>
                            <div className="why-icon"><FaUserTie /></div>
                            <h3>Customer-Centric Approach</h3>
                            <p>Prioritizing client satisfaction, transparency, and seamless experience.</p>
                        </motion.div>
                        <motion.div className="why-item" {...fadeIn}>
                            <div className="why-icon"><FaLightbulb /></div>
                            <h3>Innovative Design</h3>
                            <p>Combining aesthetics, functionality, and smart layouts for modern living.</p>
                        </motion.div>
                        <motion.div className="why-item" {...fadeIn}>
                            <div className="why-icon"><FaShieldAlt /></div>
                            <h3>Trusted Developer</h3>
                            <p>Years of experience and a reputation for reliability and integrity in the real estate sector.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Services Section */}
            <section className="our-services section">
                <div className="container">
                    <motion.div className="section-header text-center" {...fadeIn}>
                        <h2 className="heading-2">Our Services</h2>
                        <div className="zigzag-line centered">
                            <svg width="40" height="8" viewBox="0 0 40 8" fill="none">
                                <path d="M1 7L5 3L9 7L13 3L17 7L21 3L25 7L29 3L33 7L37 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="section-intro">
                            At PIOUS Group, we specialize in both residential and commercial development. Our residential projects are thoughtfully designed, combining modern layouts, functional design, and quality construction to ensure a comfortable and elegant living experience.
                        </p>
                    </motion.div>

                    <div className="services-grid">
                        <motion.div className="service-card" {...fadeIn}>
                            <div className="service-content">
                                <h3>Residential Development</h3>
                                <p>We create thoughtfully designed homes that combine modern layouts, functional design, and quality construction for a superior living experience.</p>
                            </div>
                        </motion.div>
                        <motion.div className="service-card" {...fadeIn}>
                            <div className="service-content">
                                <h3>Commercial & Mixed-Use</h3>
                                <p>We develop retail spaces and residential-cum-commercial projects offering smart, practical layouts for business and convenience. From planning to execution, we provide end-to-end solutions.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision Mission Promise Section */}
            <section className="vmp-section section-sm">
                <div className="container">
                    <div className="vmp-accordion">
                        {vmpData.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}
                                {...fadeIn}
                            >
                                <div
                                    className="accordion-header"
                                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                                >
                                    <div className="header-left">
                                        <span className="accordion-icon">{item.icon}</span>
                                        <h3>{item.title}</h3>
                                    </div>
                                    <motion.span
                                        className="toggle-icon"
                                        animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <FaChevronDown />
                                    </motion.span>
                                </div>
                                <AnimatePresence initial={false}>
                                    {activeAccordion === index && (
                                        <motion.div
                                            className="accordion-content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                        >
                                            <div className="content-inner">
                                                <p>{item.content}</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="about-contact section bg-secondary">
                <div className="container">
                    <motion.div className="section-header text-center" {...fadeIn}>
                        <h2 className="heading-2">Contact Us</h2>
                        <div className="zigzag-line centered">
                            <svg width="40" height="8" viewBox="0 0 40 8" fill="none">
                                <path d="M1 7L5 3L9 7L13 3L17 7L21 3L25 7L29 3L33 7L37 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </motion.div>

                    <div className="contact-wrapper">
                        <motion.form className="contact-form" {...fadeIn}>
                            <div className="form-row">
                                <input type="text" placeholder="Name" required />
                                <input type="email" placeholder="Email" required />
                            </div>
                            <textarea placeholder="Comment" rows="5" required></textarea>
                            <button type="submit" className="btn btn-primary btn-lg">GET IN TOUCH</button>
                        </motion.form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
