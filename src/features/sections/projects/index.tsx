import React, { useRef, useEffect } from 'react';
import Project from './Project';
import BDLogin from 'assets/bd/bd-login.png';
import BDReport from 'assets/bd/bd-report.png';
import BDTable from 'assets/bd/bd-uti-table.png';
import IllumLogin from 'assets/tf/illum-login.png';
import IllumCalender from 'assets/tf/illum-calendar.png';
import IllumBusinessPlan from 'assets/tf/illum-business-plan.png';

import './styles.css';  

interface Project {
  id: number;
  title: string;
  images: string[];
  tools: string[]
}

interface ProjectsProps {
}

const projects = [
  {
    id: 1,
    title: "Bridge Diagnostics",
    images: [BDLogin, BDReport, BDTable],
    tools: ["React", "FastAPI"],
  },
  {
    id: 2,
    title: "illūm",
    images: [IllumLogin, IllumCalender, IllumBusinessPlan],
    tools: ["React", "Laravel"],
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
      
      if (sectionTop < windowHeight * 2) {
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
      <p className="section-title">Projects</p>
      <div className="project-list">
        {projects.map(project => (
          <Project key={project.id} project={project}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;