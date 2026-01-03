import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Image } from "antd";
import { motion } from "framer-motion";
import ProjectsData from "../ProjectsData/ProjectsData";
import "./ProjectDetail.css";

const ProjectDetail = () => {
    const fadeIn = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const { slug } = useParams();
    const project = ProjectsData.find((p) => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="project-not-found">
                <h2>Project Not Found</h2>
                <a href="/" className="btn btn-primary">Back to Home</a>
            </div>
        );
    }

    const scrollToContent = () => {
        const content = document.getElementById("project-content");
        if (content) {
            content.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="project-detail">
            {/* Hero Section */}
            <section className="project-hero">
                <div
                    className="hero-background"
                    style={{ backgroundImage: `url(${project.projectImage})` }}
                >
                    <div className="hero-overlay-cinematic"></div>
                </div>
                <div className="hero-content">
                    <motion.span
                        className="hero-subtitle-brand"
                        {...fadeIn}
                    >
                        PIOUS Group
                    </motion.span>
                    <motion.h1
                        className="hero-title-display"
                        {...fadeIn}
                        transition={{ ...fadeIn.transition, delay: 0.2 }}
                    >
                        {project.projectTitle}
                    </motion.h1>
                    <div className="scroll-hint bounce" onClick={scrollToContent}>
                        <span className="scroll-text">Explore Project</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="19 12 12 19 5 12"></polyline>
                        </svg>
                    </div>
                </div>
            </section>

            <div id="project-content">
                {/* Introduction Section */}
                <section className="project-intro section bg-dark text-light">
                    <div className="container">
                        <div className="intro-grid">
                            <motion.div
                                className="intro-text"
                                {...fadeIn}
                            >
                                <span className="subtitle-gold">ABOUT PROJECT</span>
                                <h2 className="heading-2">{project.projectTitle}</h2>
                                <div className="intro-description">
                                    {project.projectDescription}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Amenities Section */}
                {project.amenities && project.amenities.length > 0 && (
                    <section className="project-amenities section bg-dark-alt text-light">
                        <div className="container">
                            <motion.div
                                className="section-header"
                                {...fadeIn}
                            >
                                <span className="subtitle-gold">Our Features</span>
                                <h2 className="heading-2">Amenities</h2>
                                <div className="header-divider-gold-left"></div>
                            </motion.div>
                            <div className="amenities-grid">
                                {project.amenities.map((amenity, index) => (
                                    <motion.div
                                        key={amenity.id}
                                        className="amenity-card"
                                        {...fadeIn}
                                        transition={{ ...fadeIn.transition, delay: (index % 5) * 0.1 }}
                                    >
                                        <div className="amenity-icon-wrapper">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#DFC17B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                <path d="M9 3v18"></path>
                                                <path d="M15 3v18"></path>
                                                <path d="M3 9h18"></path>
                                                <path d="M3 15h18"></path>
                                            </svg>
                                        </div>
                                        <span className="amenity-name">{amenity.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Elevation Gallery Section */}
                {project.elevationImages && project.elevationImages.length > 0 && (
                    <section className="project-gallery section bg-dark text-light">
                        <div className="container">
                            <motion.div
                                className="section-header"
                                {...fadeIn}
                            >
                                <span className="subtitle-gold">VISUALS</span>
                                <h2 className="heading-3">Our Elevation</h2>
                                <div className="header-divider-gold-left"></div>
                            </motion.div>
                            <div className="gallery-grid elevation-gallery">
                                <Image.PreviewGroup>
                                    {project.elevationImages.map((img, index) => (
                                        <motion.div
                                            key={index}
                                            className="gallery-item"
                                            {...fadeIn}
                                            transition={{ ...fadeIn.transition, delay: (index % 3) * 0.1 }}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${project.projectTitle} Elevation ${index + 1}`}
                                                className="gallery-image"
                                            />
                                        </motion.div>
                                    ))}
                                </Image.PreviewGroup>
                            </div>
                        </div>
                    </section>
                )}

                {/* Floor Plan Section */}
                {project.floorPlanImages && project.floorPlanImages.length > 0 && (
                    <section className="project-gallery section bg-dark-alt text-light">
                        <div className="container">
                            <motion.div
                                className="section-header"
                                {...fadeIn}
                            >
                                <span className="subtitle-gold">TECHNICALS</span>
                                <h2 className="heading-3">Floor Plan</h2>
                                <div className="header-divider-gold-left"></div>
                            </motion.div>
                            <div className="gallery-grid floorplan-gallery">
                                <Image.PreviewGroup>
                                    {project.floorPlanImages.map((img, index) => (
                                        <motion.div
                                            key={index}
                                            className="gallery-item"
                                            {...fadeIn}
                                            transition={{ ...fadeIn.transition, delay: (index % 3) * 0.1 }}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${project.projectTitle} Floor Plan ${index + 1}`}
                                                className="gallery-image"
                                            />
                                        </motion.div>
                                    ))}
                                </Image.PreviewGroup>
                            </div>
                        </div>
                    </section>
                )}
            </div>

            {/* Footer Brand CTA */}
            {/* <section className="project-footer-cta section bg-dark text-light text-center">
                <div className="container fade-in-up">
                    <h2 className="heading-2">Interested in <span className="text-highlight">{project.projectTitle}</span>?</h2>
                    <p className="text-secondary mt-4">Contact us today to learn more about availability and pricing.</p>
                    <div className="cta-actions mt-5">
                        <a href="tel:+918128128120" className="btn btn-primary btn-lg">Call Now</a>
                        <a href="/" className="btn btn-secondary btn-lg ml-md-3">Back to Home</a>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default ProjectDetail;
