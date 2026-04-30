import { useState } from "react";

function ProjectCard({ name, description, url, image }) {
  const [showDescription, setShowDescription] = useState(false);
  function toggleDescription() {
    setShowDescription(!showDescription);
}
  return (
    <div className="project-card">
      <h2 className="project-card__title">{name}</h2>
      <button onClick={(toggleDescription)}>
        {showDescription ? "Hide Description" : "Show Description"}
      </button>
      {showDescription && <p className="project-card__description">{description}</p>}
      <br />
      <a href={url} className="project-card__link">Visit Project</a>
      <img className="project-card__image" src={image} alt={name} />
    </div>
  );
}

export default ProjectCard;