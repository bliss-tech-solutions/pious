import { Link } from "react-router-dom";
import "./HomeProjects.css";
import { motion } from "framer-motion";
import ProjectsData from "../../ProjectsData/ProjectsData";

const HomeProjects = () => {
    const fadeIn = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    return (
        <section id="homeProjects" className="section">
            <div className="container">
                <motion.div
                    className="projects-header"
                    {...fadeIn}
                >
                    <span className="section-subtitle">OUR PROJECT</span>
                    <div className="header-content">
                        <h2 className="heading-2 section-title">Featured Projects</h2>
                        <div className="header-description-wrapper">
                            <p className="section-description text-secondary">
                                Explore our collection of premium residential projects designed for modern living.
                            </p>
                            <a href="#" className="projects-arrow-link" aria-label="View all projects">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </a>
                        </div>
                    </div>
                </motion.div>

                <div className="projects-grid">
                    {ProjectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            {...fadeIn}
                            transition={{ ...fadeIn.transition, delay: index * 0.1 }}
                        >
                            <Link
                                to={`/project/${project.slug}`}
                                className="project-card"
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <div className="project-number">0{index + 1}</div>
                                <div className="project-image-wrapper">
                                    <span className="project-tag">{project.projectType}</span>
                                    <img src={project.projectImage} alt={project.projectTitle} className="project-image" />
                                    <div className="project-overlay">
                                        <h3 className="project-title">{project.projectTitle}</h3>
                                        <button
                                            className="project-inquiry-btn"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                const phoneNumber = "+919712574225";
                                                const message = `Hi, I am interested in ${project.projectTitle}.`;
                                                window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
                                            }}
                                        >
                                            Inquiry
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeProjects;