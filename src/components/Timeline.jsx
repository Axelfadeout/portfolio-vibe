import React from 'react';
import './Timeline.css';

import be2bitImg from '../assets/timeline/be2bit.png';
import gormitiImg from '../assets/timeline/gormiti.png';
import cryptochronicImg from '../assets/timeline/cryptochronic.png';

const experiences = [
    {
        year: '2025',
        role: 'Designer',
        company: 'Be2Bit',
        description: 'Creating immersive digital experiences and UI/UX solutions for innovative tech projects.',
        highlight: true,
        image: be2bitImg,
        imageType: 'logo'
    },
    {
        year: '2024',
        role: 'TCG Game Design',
        company: 'Giochi Preziosi',
        description: 'Lead design for "Gormiti New Era" Trading Card Game. Defined mechanics, balance, and card archetypes for a major IP.',
        highlight: true,
        image: gormitiImg,
        imageType: 'work'
    },
    {
        year: '2023',
        role: 'Gameplay Design',
        company: 'CryptoChronic',
        description: 'Designed core gameplay loops and economy systems for a blockchain-based gaming project.',
        highlight: false,
        image: cryptochronicImg,
        imageType: 'work'
    }
];

const Timeline = () => {
    return (
        <section id="experience" className="timeline-section">
            <div className="container">
                <h2 className="section-title">Journey & Experience</h2>
                <div className="timeline-container">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-content glass-panel">
                                {exp.image && <img src={exp.image} alt={exp.company} className={`timeline-img ${exp.imageType}`} />}
                                <div className="timeline-date">{exp.year}</div>
                                <h3 className="timeline-role">{exp.role}</h3>
                                <h4 className="timeline-company">{exp.company}</h4>
                                <p className="timeline-desc">{exp.description}</p>
                            </div>
                            <div className="timeline-dot"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
