import React, { useState, useRef, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import "./HeroHome.css";

const HeroHome = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoRef = useRef(null);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };

    return (
        <div id="heroHome">
            {/* Loading Preview / Poster with Blur */}
            <div className={`hero-loading-preview ${isVideoLoaded ? 'fade-out' : ''}`}>
                <img
                    src="/Images/PiousHomePageImage.jpeg"
                    alt="Loading Preview"
                    className="preview-image"
                />
            </div>

            {/* Video Background */}
            <div className="hero-video-wrapper">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    onLoadedData={handleVideoLoad}
                    className={`hero-background-video ${isVideoLoaded ? 'fade-in' : ''}`}
                >
                    <source src="/Images/DroneHomeVideo/PIOUS%20PARIVARDroneVideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-overlay"></div>
            </div>

            {/* Volume Control Trigger */}
            <button
                className="volume-toggle"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>

            {/* Hero Text Content (Optional) */}
            <div className="hero-content-wrapper">
                {/* Content can be placed here */}
            </div>
        </div>
    );
};

export default HeroHome;