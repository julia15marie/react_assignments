import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

function ProjectList({limit}) {
  const displayed = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="projects-grid">
    {displayed.map((project) => (
     <ProjectCard 
        key={project.id} 
        name={project.name} 
        description={project.description}
        url={project.url}
        image={project.image}
  />
))}
    </div>
  );
}

export default ProjectList;