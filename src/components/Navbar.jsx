import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    AC<span className="dot">.</span>
                </div>

                <div className="nav-links">
                    <button onClick={() => scrollToSection('projects')} className="nav-link">Work</button>
                    <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
