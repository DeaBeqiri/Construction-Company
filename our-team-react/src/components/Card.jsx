export default function Card({ name, job, description, image }) {
  return (
    <div className="team-card">
      <div className="team-img">
        <img src={image} alt="Team Member" />
      </div>
      <div className="team-content">
        <h3>{name}</h3>
        <span>{job}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}
