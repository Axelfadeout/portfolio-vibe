import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const inputs = ["Vibe Coding & AI", "Agentic Workflows", "Next-Gen UX", "Rapid Prototyping"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % inputs.length;
            const fullText = inputs[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Pause at end
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <div className="badge glass-panel">
                        <span className="dot"></span>
                        Available for new projects
                    </div>

                    <h1 className="title">
                        Hi, I'm <span className="highlight-text">Alex</span> <br />
                        <span className="gradient-text h-min-height">{text}<span className="cursor">|</span></span>
                    </h1>

                    <p className="subtitle">
                        I blend advanced Prompt Engineering with modern web standards to build
                        stunning, high-performance applications at warp speed.
                    </p>

                    <div className="cta-group">
                        <a href="#projects" className="btn btn-primary">
                            View Work
                        </a>
                        <a href="#contact" className="btn btn-secondary glass-panel">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
