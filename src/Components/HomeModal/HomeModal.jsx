import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import './HomeModal.css';

const HomeModal = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Show modal only if on homepage and hasn't been shown in this session (component lifecycle)
        if (location.pathname === '/' && !hasShown) {
            setIsModalOpen(true);
            setHasShown(true);
        }
    }, [location, hasShown]);

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleNavigate = () => {
        navigate('/project/pious-parivaar');
        setIsModalOpen(false);
    };

    return (
        <Modal
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
            centered
            width={500}
            className="home-modal"
            closable={true}
            maskClosable={true}
        >
            <div className="modal-content-wrapper">
                <div className="modal-image-container">
                    <img
                        src="/Images/ModalImages/ModalImage.jpeg"
                        alt="Highlight"
                        className="modal-image"
                    />
                </div>
                <button className="modal-action-btn" onClick={handleNavigate}>
                    View Project
                </button>
            </div>
        </Modal>
    );
};

export default HomeModal;
