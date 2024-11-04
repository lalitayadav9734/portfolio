// Projects.js
import React, { useEffect, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('https://api.github.com/users/lalitayadav9734/repos');
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching GitHub projects:", error);
    }
  };

  return (
    <section id="projects">
    <h2>My Projects</h2>
    <p>Here are some of the projects I’ve worked on, demonstrating my skills and experience in web development.</p>
    <div className="projects-container">
      {projects.slice(0, 6).map((project, index) => (
        (index === 2 || index === 4) ? null : (
          <div className="project-card" key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description ? project.description : "No description available"}</p>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        )
      ))}
    </div>
  </section>
  ); 
} 
export default Projects;
