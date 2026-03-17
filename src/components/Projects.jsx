import React, { useState } from 'react';
import ProjectOverview from './ProjectOverview';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      title: 'Smart Tech Store Web Application',
      description: 'E-Commerce Web Application for selling tech products.',
      detailedDescription: (
        <>

          <p>I built a complete, production-ready MERN e-commerce solution from scratch.</p><br />

          <h3><strong>FRONTEND (Client &amp; Admin)</strong></h3><br />
          <li><p>The interface uses <b className='text-gray-500'>React.js</b> with <b className='text-gray-500'>Vite</b> and <b className='text-gray-500'>Tailwind CSS</b> styling.</p></li><br />
          <li><p>Authentication includes secure <b className='text-gray-500'>JWT flow</b> and <b className='text-gray-500'>Google OAuth</b> single sign-on.</p></li>
          <li><p>State management uses <b className='text-gray-500'>Context API</b> with custom cart persistence hooks.</p></li>
          <li><p>Admin dashboards feature <b className='text-gray-500'>RBAC</b> protection and full <b className='text-gray-500'>CRUD</b> data control.</p></li>
          <li><p>The UI offers mobile-first design using <b className='text-gray-500'>Lucide-React</b> and <b className='text-gray-500'>toast notifications</b>.</p></li><br />

          <h3><strong>BACKEND &amp; INFRASTRUCTURE</strong></h3><br />
          <li><p>The server runs on <b className='text-gray-500'>Node.js</b> and <b className='text-gray-500'>Express</b> using <b className='text-gray-500'>Mongoose</b> models.</p></li>
          <li><p><b className='text-gray-500'>RESTful APIs</b> support dynamic filtering, search, and data pagination logic.</p></li>
          <li><p><b className='text-gray-500'>MongoDB</b> stores primary data while <b className='text-gray-500'>Supabase</b> handles cloud image storage.</p></li>
          <li><p><b className='text-gray-500'>Security</b> is enforced via middleware-based RBAC and advanced data encryption.</p></li>
          <li><p>The frontend is on <b className='text-gray-500'>Vercel</b> while the backend uses <b className='text-gray-500'>Render</b>.</p></li>

        </>
      ),
      tech: ['React', 'Node', 'MongoDB', 'Tailwind', 'Express'],
      learnedSkills: ['MERN Architecture', 'State Management', 'Authentication', 'API Integration', 'Deployment', 'UI/UX Design'],
      images: [
        '/sts/sts1.png',
        '/sts/sts2.png',
        '/sts/sts3.png',
        '/sts/sts4.png',
        '/sts/sts5.png',
        '/sts/sts6.png'
      ],
      link: 'https://mern-project-frontend-m2ik.vercel.app',
      github: {
        frontend: 'https://github.com/dinethnethsara24/mern-project-frontend',
        backend: 'https://github.com/dinethnethsara24/mern-project-backend'
      },
      linkedin: 'https://www.linkedin.com/in/dineth-peiris-dev/#projects'
    },
    {
      title: 'New Sterling Stores Web Application',
      description: 'E-Commerce Web Application for selling hardware products.',
      detailedDescription: (
        <>
          <p className="mb-4">
            A bespoke hardware store application tailored for <b className='text-gray-500'>New Sterling Stores</b>, focusing on inventory precision and bulk orders.
          </p>
          <p className="mb-4">
            This <b className='text-gray-500'>MERN stack</b> project involved developing a comprehensive e-commerce solution for a hardware store. My primary focus was building a secure user authentication flow using <b className='text-gray-500'>Node.js</b>, <b className='text-gray-500'>Express.js</b>, and <b className='text-gray-500'>JWT tokens</b> to manage user roles and access. I also designed a robust reporting system that utilized <b className='text-gray-500'>React charts</b> to visualize real-time sales and inventory analytics. To ensure data integrity, I implemented secure password storage with <b className='text-gray-500'>bcrypt hashing</b> and created a dynamic dashboard with custom filters for detailed report generation.
          </p>
          <p className="mb-2 italic opacity-80 font-bold">Key deliverables:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>A full login flow using JWT and bcrypt for protected user access.</li>
            <li>Role-based React interfaces that adapt based on user permissions.</li>
            <li>Interactive charts and filters for real-time sales and inventory analytics.</li>
          </ul>
        </>
      ),
      tech: ['React', 'Node', 'MongoDB', 'Vite'],
      learnedSkills: ['Database Design', 'Client Interaction', 'Team Management', 'System Architecture'],
      images: [
        '/ns/001.jpg',
        '/ns/002.jpg',
        '/ns/003.jpg'
      ],
      link: '#',
      github: {
        frontend: 'https://github.com/Nethupa05/Hardware-Frontend',
        backend: 'https://github.com/Nethupa05/Hardware-Backend'
      },
      linkedin: '#'
    },
    {
      title: 'HealthCare Management System',
      description: 'A comprehensive healthcare management system for hospital and pharmacy.',
      detailedDescription: (
        <>
          <p className="mb-4">
            A robust desktop application built to streamline operations within a <b className='text-gray-500'>hospital and connected pharmacy</b> network.
          </p>
          <p className="mb-2 italic opacity-80">Core functionalities:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Patient records and appointment scheduling.</li>
            <li>Pharmacy inventory and prescription handling.</li>
            <li>Role-based access controls for doctors, nurses, and admins.</li>
          </ul>
        </>
      ),
      tech: ['Java', 'MySQL', 'IntelliJ IDEA'],
      learnedSkills: ['Java Swing/FX', 'SQL Queries', 'Object-Oriented Design', 'Requirements Analysis'],
      images: [
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1532938911079-1b06ac7ce122?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1551076805-e1869043e560?auto=format&fit=crop&q=80&w=800'
      ],
      link: '#',
      github: 'https://github.com/Jyne2002/Healthcare-Management-System',
      linkedin: '#'
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Featured Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
        {projectList.map((project, index) => (
          <article key={index} className="hit-area-fix bg-brutal-bg dark:bg-dark-bg border-brutal border-brutal-border dark:border-white shadow-brutal-lg dark:shadow-dark-brutal-lg flex flex-col justify-between transition-all duration-200 h-full hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg-hover dark:hover:shadow-dark-brutal-lg-hover">

            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold mb-4 dark:text-dark-subtext">{project.title}</h3>
              <p className="mb-6 text-gray-700 dark:text-dark-text">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="font-mono text-xs font-bold bg-[#EEE] dark:bg-[#333] px-2 py-1 border-2 border-brutal-border dark:border-white dark:text-dark-subtext">{tech}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mb-4 mt-auto">
                {typeof project.github === 'string' && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="hit-area-fix flex-1 font-mono text-xs text-center font-bold bg-white dark:bg-[#222] text-brutal-text dark:text-white px-3 py-2 border-2 border-brutal-border dark:border-white shadow-brutal-sm dark:shadow-dark-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                    Source Code
                  </a>
                )}
                {typeof project.github === 'object' && project.github !== null && (
                  <>
                    {project.github.frontend && (
                      <a href={project.github.frontend} target="_blank" rel="noreferrer" className="hit-area-fix flex-1 font-mono text-xs text-center font-bold bg-white dark:bg-[#222] text-brutal-text dark:text-white px-3 py-2 border-2 border-brutal-border dark:border-white shadow-brutal-sm dark:shadow-dark-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                        Frontend
                      </a>
                    )}
                    {project.github.backend && (
                      <a href={project.github.backend} target="_blank" rel="noreferrer" className="hit-area-fix flex-1 font-mono text-xs text-center font-bold bg-white dark:bg-[#222] text-brutal-text dark:text-white px-3 py-2 border-2 border-brutal-border dark:border-white shadow-brutal-sm dark:shadow-dark-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                        Backend
                      </a>
                    )}
                  </>
                )}
                {project.linkedin && (
                  <a href={project.linkedin} target="_blank" rel="noreferrer" className="hit-area-fix flex-1 font-mono text-xs text-center font-bold bg-white dark:bg-[#222] text-brutal-text dark:text-white px-3 py-2 border-2 border-brutal-border dark:border-white shadow-brutal-sm dark:shadow-dark-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                    LinkedIn
                  </a>
                )}
              </div>
            </div>

            <button onClick={() => setSelectedProject(project)} className="w-full block text-center p-5 font-mono font-bold uppercase border-t-brutal border-brutal-border dark:border-white bg-[#fff07c] text-brutal-text transition-colors duration-200 hover:bg-brutal-text hover:text-brutal-accent-yellow hover:no-underline cursor-pointer">
              View Project &rarr;
            </button>
          </article>

        ))}
      </div>

      {selectedProject && (
        <ProjectOverview
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
