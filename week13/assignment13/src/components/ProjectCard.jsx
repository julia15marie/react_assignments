function ProjectCard({ name, description, url, image }) {
  return (
    <div className="project-card">
      <h2 className="project-card__title">{name}</h2>

      <a href={url}>Visit Project</a>
      <img className="project-card__image" src={image} alt={name} />
      <p className="project-card__description">{description}</p>
    </div>
  );
}

export default ProjectCard;