import React from 'react';
import './Services.css';

const services = [
    {
        title: 'Rapid MVP',
        icon: '🚀',
        description: 'From idea to market-ready product in record time. I build scalable foundations using modern frameworks like React and Next.js.'
    },
    {
        title: 'AI Automation',
        icon: '🤖',
        description: 'Supercharge your workflows with custom AI agents. I integrate LLMs to automate complex tasks and enhance user interaction.'
    },
    {
        title: 'Performance',
        icon: '⚡',
        description: 'Speed matters. I optimize every line of code to ensure your application loads instantly and runs smoothly on all devices.'
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <h2 className="section-title">What I Can Do For You</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card glass-panel">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
