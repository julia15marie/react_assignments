function ProjectCard({ name, description, url, image }) {
  return (
    <div className="project-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={url}>Visit Project</a>
      <img src={image} alt={name}/>
    </div>
  );
}

export default ProjectCard;