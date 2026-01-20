import React from 'react';
import './Skills.css';

const skills = [
    { name: 'Vibe Coding', category: 'Methodology' },
    { name: 'Prompt Engineering', category: 'AI' },
    { name: 'React & Vite', category: 'Frontend' },
    { name: 'Modern UI/UX', category: 'Design' },
    { name: 'Cursor AI', category: 'Tools' },
    { name: 'LLM Integration', category: 'AI' },
];

const Skills = () => {
    return (
        <section className="skills-section">
            <div className="container">
                <h2 className="section-title">Technical Arsenal</h2>

                <div className="marquee-container">
                    <div className="marquee-track">
                        {/* Original Set */}
                        {skills.map((skill, index) => (
                            <div key={`a-${index}`} className="skill-card glass-panel">
                                <span className="skill-category">{skill.category}</span>
                                <h3 className="skill-name">{skill.name}</h3>
                            </div>
                        ))}
                        {/* Duplicate Set for Seamless Loop */}
                        {skills.map((skill, index) => (
                            <div key={`b-${index}`} className="skill-card glass-panel">
                                <span className="skill-category">{skill.category}</span>
                                <h3 className="skill-name">{skill.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
