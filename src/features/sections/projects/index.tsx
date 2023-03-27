import React, { useRef, useEffect } from 'react';
import Project from './Project';
import BDLogin from 'assets/bd/bd-login.png';
import IllumLogin from 'assets/tf/illum-login.png';
import NALogin from 'assets/na/newport-applications-celebrateability.png';

import './styles.css';  

interface Project {
  id: number;
  title: string;
  image: string;
  tools: string[]
}

interface ProjectsProps {
}

const projects = [
  {
    id: 1,
    title: "Bridge Diagnostics",
    image: BDLogin,
    tools: ["React", "FastAPI"],
  },
  {
    id: 2,
    title: "illūm",
    image: IllumLogin,
    tools: ["React", "Laravel"],
  },
  {
    id: 3,
    title: "CelebrateAbility",
    image: NALogin,
    tools: ["React"],
  },
]

const Projects: React.FC<ProjectsProps> = (props) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    const handleScroll = () => {
      const sectionTop = section?.getBoundingClientRect().top || 0;
      const windowHeight = window.innerHeight;

      if (section === null) return 
      
      if (sectionTop < windowHeight * 1.5) {
        section.classList.add('is-visible');
      } else {
        section.classList.remove('is-visible');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="project-section" ref={sectionRef}>
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        {projects.map(project => (
          <Project key={project.id} project={project}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;