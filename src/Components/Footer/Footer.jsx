import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";

const Footer = () => {
    const fadeIn = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.8, ease: "easeOut" }
    };
    const footerImages = [
        "/Images/ProjectRealImages/1.jpeg",
        "/Images/ProjectRealImages/2.jpeg",
        "/Images/ProjectRealImages/3.jpeg",
        "/Images/ProjectRealImages/4.jpeg",
        "/Images/ProjectRealImages/5.jpeg",
        "/Images/ProjectRealImages/6.jpeg",
    ];

    return (
        <footer className="footer">
            <div>
                <h2 className="heading-2 brand-title text-center"><span className="text-highlight">Signature </span>Projects Visuals</h2>
            </div>
            <br />
            <div className="footer-grid container">
                {footerImages.map((src, index) => (
                    <motion.div
                        className="footer-grid-item"
                        key={index}
                        {...fadeIn}
                        transition={{ ...fadeIn.transition, delay: index * 0.05 }}
                    >
                        <img src={src} alt={`Footer project ${index + 1}`} />
                    </motion.div>
                ))}
            </div>

            <div className="container">
                <div className="footer-main">
                    <motion.div
                        className="footer-branding"
                        {...fadeIn}
                    >
                        <div className="footer-logo">
                            <img src="/PiousLogoWhite.png" alt="Pious Logo" className="logo-img" />
                        </div>
                        <h2 className="footer-tagline">THE FUTURE OF HOME LIVING</h2>
                    </motion.div>

                    <div className="footer-links-social">
                        <motion.nav
                            className="footer-nav"
                            {...fadeIn}
                            transition={{ ...fadeIn.transition, delay: 0.2 }}
                        >
                            <a href="#">PRIVACY POLICY</a>
                            <a href="#">TERM & CONDITION</a>
                            <a href="#">ABOUT US</a>
                            {/* <a href="#">FAQ</a> */}
                        </motion.nav>

                        <motion.div
                            className="footer-bottom-row"
                            {...fadeIn}
                            transition={{ ...fadeIn.transition, delay: 0.3 }}
                        >
                            <div className="footer-socials">
                                <a href="https://www.instagram.com/piousbyfriendsgroup/" className="social-icon" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.475 1.382.897.422.422.68.822.897 1.382.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.216.56-.475.96-.897 1.382-.422.422-.822.68-1.382.897-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.013-4.85-.07c-1.17-.054-1.805-.249-2.227-.413-.56-.216-.96-.475-1.382-.897-.422-.422-.68-.822-.897-1.382-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.013-3.584.07-4.85c.054-1.17.249-1.805.413-2.227.216-.56.475-.96.897-1.382.422-.422.822-.68 1.382-.897.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.275.058-2.147.26-2.911.557-.79.306-1.46.717-2.128 1.384-.666.667-1.077 1.337-1.383 2.129-.297.763-.499 1.636-.557 2.911-.059 1.281-.073 1.688-.073 4.947s.014 3.667.072 4.947c.058 1.275.26 2.147.557 2.911.306.79.717 1.46 1.384 2.128.667.666 1.337 1.077 2.129 1.383.763.297 1.636.499 2.911.557 1.28.059 1.688.072 4.947.072s3.667-.014 4.947-.072c1.275-.058 2.147-.26 2.911-.557.79-.306 1.46-.717 2.128-1.384.666-.667 1.077-1.337 1.383-2.129.297-.763.499-1.636.557-2.911.059-1.281.073-1.688.073-4.947s-.014-3.667-.072-4.947c-.058-1.275-.26-2.147-.557-2.911-.306-.79-.717-1.46-1.384-2.128-.667-.666-1.337-1.077-2.129-1.383-.763-.297-1.636-.499-2.911-.557-1.281-.059-1.688-.073-4.947-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                                <a href="https://www.facebook.com/people/PiousbyFriendsgroup/61554763763636/" className="social-icon" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>
                                {/* <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                                </a>
                                <a href="#" className="social-icon" target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                </a> */}
                            </div>
                            <div className="footer-copyright">
                                <p>&copy; 2026 <span style={{ color: "var(--primary-brand)" }}>The Bliss Solution</span>. All Rights Reserved.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;