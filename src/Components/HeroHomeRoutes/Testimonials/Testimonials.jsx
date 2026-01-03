import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonialsData = [
    {
        id: 1,
        companyLogo: "https://via.placeholder.com/60x30?text=LOGO",
        text: "Couldn't be happier with our decision to invest in this 3 BHK property. The location is fantastic, with easy access to schools, shopping, and transportation. The layout is smartly designed, maximizing space and functionality.",
        author: "Amit Chopra",
        role: "CEO, Lotus Minds",
        avatar: "https://i.pravatar.cc/150?u=tim",
    },
    {
        id: 2,
        companyLogo: "https://via.placeholder.com/60x30?text=LOGO",
        text: "Our experience with this 3 BHK property has been nothing short of fantastic. The location is ideal, close to all amenities and yet tucked away in a peaceful neighborhood. The property itself is well-maintained and offers ample space for our family to thrive.",
        author: "Payal Dahiya",
        role: "Marketing Director, TechFlow",
        avatar: "https://i.pravatar.cc/150?u=sarah",
    },
    {
        id: 3,
        companyLogo: "https://via.placeholder.com/60x30?text=LOGO",
        text: "Highly recommend this 3 BHK property to anyone looking for a comfortable and convenient living space. The location is excellent, with great connectivity and nearby amenities. The property itself is beautifully designed, providing a cozy yet spacious environment to call home.",
        author: "Dinesh Sharma",
        role: "Founder, GreenWave",
        avatar: "https://i.pravatar.cc/150?u=alex",
    },
    {
        id: 4,
        companyLogo: "https://via.placeholder.com/60x30?text=LOGO",
        text: "Absolutely thrilled with our 3 BHK property! The location is unbeatable, offering convenience and accessibility to everything we need. The spacious layout and thoughtful design make it a perfect fit for our family.",
        author: "Dinesh Sharma",
        role: "Prakash Gohil",
        avatar: "https://i.pravatar.cc/150?u=alex",
    }
];

const Testimonials = () => {
    const fadeIn = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex]); // Reset interval whenever currentIndex changes manually or via autoplay

    return (
        <section className="testimonials-section section">
            <div className="container">
                <motion.div
                    className="testimonials-header"
                    {...fadeIn}
                >
                    {/* <span className="section-subtitle">TESTIMONIALS</span> */}
                    <h2 className="heading-2 section-title text-center"> Testimonial</h2>
                </motion.div>

                <motion.div
                    className="testimonials-container"
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: 0.2 }}
                >
                    <button className="nav-btn prev" onClick={handlePrev} aria-label="Previous testimonial">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>

                    <div className="testimonials-cards-stack">
                        {testimonialsData.map((testimonial, index) => {
                            // Only show current and next couple for stacking
                            const isActive = index === currentIndex;
                            const isStack1 = index === (currentIndex + 1) % testimonialsData.length;
                            const isStack2 = index === (currentIndex + 2) % testimonialsData.length;

                            let className = "testimonial-card";
                            if (isActive) className += " active";
                            else if (isStack1) className += " stack-1";
                            else if (isStack2) className += " stack-2";
                            else className += " hidden";

                            return (
                                <div key={testimonial.id} className={className}>
                                    {/* <div className="card-logo">
                                        <svg width="60" height="30" viewBox="0 0 60 30" fill="currentColor">
                                            <path d="M10 10v10h10v-10h-10zm15 0v10h10v-10h-10zm15 0v10h10v-10h-10z" fillOpacity="0.8" />
                                            <text x="5" y="22" fontSize="10" fontWeight="bold" fill="#000">LOGO</text>
                                        </svg>
                                    </div> */}
                                    <p className="card-text">"{testimonial.text}"</p>
                                    <div className="card-footer">
                                        {/* <img src={testimonial.avatar} alt={testimonial.author} className="author-avatar" /> */}
                                        <FaUserCircle size={60} />
                                        <div className="author-info">
                                            <h4 className="author-name">{testimonial.author}</h4>
                                            {/* <p className="author-role">{testimonial.role}</p> */}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <button className="nav-btn next" onClick={handleNext} aria-label="Next testimonial">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
           
        </motion.div>
            </div >
        </section >
    );
};

export default Testimonials;