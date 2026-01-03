import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import ProjectsData from "../ProjectsData/ProjectsData";
import { FaTimes } from "react-icons/fa";

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Disable body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [activeAccordions, setActiveAccordions] = useState({});

    const toggleAccordion = (section) => {
        setActiveAccordions(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setActiveAccordions({});
    };

    return (
        <nav className={`navigation ${scrolled ? "scrolled" : ""}`}>
            <div className="container navigation-container">
                <div className="nav-logo">
                    <Link to="/" onClick={closeMenu}>
                        <img src="/PiousLogoWhite.png" alt="Pious Logo" className="logo-img" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li className="nav-item-dropdown">
                        <Link to="/#homeProjects">Projects <span className="dropdown-arrow">▾</span></Link>
                        <ul className="dropdown-menu">
                            <li className="nested-dropdown">
                                <span className="dropdown-item">Ongoing Projects <span className="nested-arrow">◂</span></span>
                                <ul className="nested-dropdown-menu">
                                    {ProjectsData.filter(p => p.projectStatus === "Ongoing").map(project => (
                                        <li key={project.id}>
                                            <Link to={`/project/${project.slug}`} onClick={closeMenu}>
                                                {project.projectTitle}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="nested-dropdown">
                                <span className="dropdown-item">Completed Projects <span className="nested-arrow">◂</span></span>
                                <ul className="nested-dropdown-menu">
                                    {ProjectsData.filter(p => p.projectStatus === "Completed").map(project => (
                                        <li key={project.id}>
                                            <Link to={`/project/${project.slug}`} onClick={closeMenu}>
                                                {project.projectTitle}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><Link to="/about">About</Link></li>
                    {/* <li><a href="#contact" className="nav-cta">Contact</a></li> */}
                </ul>

                {/* Mobile Hamburger Button */}
                <button
                    className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Mobile Full Screen Menu Overlay */}
                <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
                    <button className="close-menu-btn" onClick={closeMenu} aria-label="Close menu">
                        <FaTimes size={24} />
                    </button>
                    <ul className="mobile-nav-links">
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>

                        {/* Projects Accordion */}
                        <li className={`mobile-nav-accordion ${activeAccordions['projects'] ? 'active' : ''}`}>
                            <button className="accordion-header" onClick={() => toggleAccordion('projects')}>
                                Projects <span className="accordion-arrow">▾</span>
                            </button>
                            <div className="accordion-content">
                                {/* Ongoing Projects */}
                                <div className={`nested-accordion ${activeAccordions['ongoing'] ? 'active' : ''}`}>
                                    <button className="nested-accordion-header" onClick={() => toggleAccordion('ongoing')}>
                                        Ongoing Projects <span className="accordion-arrow">▾</span>
                                    </button>
                                    <ul className="nested-list">
                                        {ProjectsData.filter(p => p.projectStatus === "Ongoing").map(project => (
                                            <li key={project.id}>
                                                <Link to={`/project/${project.slug}`} onClick={closeMenu}>
                                                    {project.projectTitle}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Completed Projects */}
                                <div className={`nested-accordion ${activeAccordions['completed'] ? 'active' : ''}`}>
                                    <button className="nested-accordion-header" onClick={() => toggleAccordion('completed')}>
                                        Completed Projects <span className="accordion-arrow">▾</span>
                                    </button>
                                    <ul className="nested-list">
                                        {ProjectsData.filter(p => p.projectStatus === "Completed").map(project => (
                                            <li key={project.id}>
                                                <Link to={`/project/${project.slug}`} onClick={closeMenu}>
                                                    {project.projectTitle}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>

                        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
                        <li><a href="#contact" className="mobile-nav-cta" onClick={closeMenu}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;