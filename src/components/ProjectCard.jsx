import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, tags, link, className }) => {
    return (
        <div className={`project-card glass-panel ${className || ''}`}>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-desc">{description}</p>
                <div className="card-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="card-arrow">→</div>
        </div>
    );
};

export default ProjectCard;
