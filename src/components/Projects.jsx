import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import './Projects.css';
import cvBuilderImg from '../assets/cv_builder_real.png';
import dentalCrmImg from '../assets/dental_crm_real.png';
import menuAyceImg from '../assets/menu_ayce_real.png';

const projectsData = [
    {
        title: 'CV Builder AI',
        description: 'Intelligent resume creation tool powered by AI. optimizing layout and content for maximum impact.',
        tags: ['React', 'AI Integration', 'PDF Gen'],
        link: 'https://cv-builder-ai-c05bf.web.app/',
        image: cvBuilderImg,
        video: '/videos/cv-builder.mp4',
        challenge: 'Job seekers often struggle with formatting and optimizing their resumes for Applicant Tracking Systems (ATS), leading to missed opportunities.',
        solution: 'I built an AI-driven wizard that guides users through content creation, auto-formats the layout, and generates professional, ATS-friendly PDFs instantly.'
    },
    {
        title: 'Dental CRM',
        description: 'Comprehensive patient management system with appointment scheduling and clinical data tracking.',
        tags: ['SaaS', 'Healthcare', 'Dashboard'],
        link: 'https://dental-crm-beige.vercel.app/login',
        image: dentalCrmImg,
        video: '/videos/dental-crm.mp4',
        challenge: 'Dental clinics require efficient patient tracking and appointment management, but legacy software is often clunky, expensive, and hard to use.',
        solution: 'A cloud-native SaaS solution with a modern, glassmorphic UI that streamlines scheduling, creates secure patient records, and simplifies clinical data management.'
    },
    {
        title: 'Menù AYCE',
        description: 'Digital menu solution for All-You-Can-Eat restaurants, streamlining orders and reducing waste.',
        tags: ['Mobile First', 'eCommerce', 'UI/UX'],
        link: null,
        image: menuAyceImg,
        video: '/videos/menu-ayce.mp4',
        isMobile: true,
        challenge: 'All-You-Can-Eat restaurants face chaos during peak hours with paper slips, leading to lost orders and slow service.',
        solution: 'A mobile-first progressive web app that allows diners to order directly from their table. It minimizes waiter workload and tracks order history to reduce food waste.'
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Featured Work</h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div key={index} onClick={() => setSelectedProject(project)}>
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};

export default Projects;
