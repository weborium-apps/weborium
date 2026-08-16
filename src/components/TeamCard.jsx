import Reveal from "./Reveal";
import "./teamcard.css";

export default function TeamCard({ member, delay = 0 }) {
  return (
    <Reveal type="up" delay={delay} className="tcard">
      <div className="tcard__photo cursor-hover">
        {member.photo ? (
          <img src={member.photo} alt={member.name} />
        ) : (
          <div className="tcard__placeholder">
            <span className="tcard__initials">{member.initials}</span>
            {/* <span className="tcard__add">+ Add Photo</span> */}
          </div>
        )}
      </div>
      <div className="tcard__info">
        <h3 className="tcard__name">{member.name}</h3>
        <p className="tcard__role">{member.role}</p>
        <p className="tcard__bio">{member.bio}</p>
        <ul className="tcard__focus">
          {member.focus.map((f) => (
            <li key={f} className="tag">
              {f}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
