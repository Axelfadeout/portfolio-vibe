import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-content">
                <div className="footer-intro">
                    <h2 className="footer-title">Let's build something <br /> <span className="gradient-text">extraordinary.</span></h2>
                    <p className="footer-desc">
                        Ready to elevate your digital presence? Reach out and let's discuss your next project.
                    </p>
                </div>

                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/alex-cangini" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                    <button onClick={() => {
                        navigator.clipboard.writeText('a.cangini@be2bit.com');
                        alert('Email copiata negli appunti! 📧'); // Simple feedback for now
                    }} className="footer-link">
                        Email
                    </button>
                </div>

                <div className="footer-copy">
                    &copy; {new Date().getFullYear()} Vibe Coder. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
