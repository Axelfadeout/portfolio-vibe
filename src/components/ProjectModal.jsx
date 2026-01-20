import React, { useEffect } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!project) return null;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content glass-panel" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>

                <div className="modal-header">
                    <h2 className="modal-title">{project.title}</h2>
                    <div className="modal-tags">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="modal-body">
                    <div className={`media-container ${project.isMobile ? 'mobile-frame' : ''}`}>
                        {project.video ? (
                            <video
                                src={project.video}
                                className={`project-video ${project.isMobile ? 'mobile-video' : ''}`}
                                controls
                                autoPlay
                                loop
                                muted
                            />
                        ) : (
                            <div className="media-placeholder">
                                {project.image ? (
                                    <img src={project.image} alt={project.title} className="project-image" />
                                ) : (
                                    <div className="no-media">Preview Loading...</div>
                                )}
                            </div>
                        )}
                    </div>

                    <p className="project-full-desc">{project.description}</p>

                    <div className="case-study-section">
                        <div className="case-study-block">
                            <h3 className="cs-title">The Challenge</h3>
                            <p className="cs-text">{project.challenge}</p>
                        </div>
                        <div className="case-study-block">
                            <h3 className="cs-title">The Solution</h3>
                            <p className="cs-text">{project.solution}</p>
                        </div>
                    </div>

                    <div className="modal-actions">
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Visit Live Site
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
