import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

function ProjectList() {
    return (
    <div className="projects-grid">
    {projects.map((project) => (
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