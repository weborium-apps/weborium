import { Link } from 'react-router-dom';
import ProjectVisual from './ProjectVisual';
import Reveal from './Reveal';
import './projectcard.css';

export default function ProjectCard({ project, reverse = false, delay = 0 }) {
  return (
    <Reveal type="up" delay={delay} className={`pcard ${reverse ? 'pcard--reverse' : ''}`}>
      <Link to={`/work/${project.slug}`} className="pcard__visual cursor-hover" style={{ '--accent': project.color, '--accent-soft': project.colorSoft }}>
        <ProjectVisual slug={project.slug} color={project.color} colorSoft={project.colorSoft} />
        <span className="pcard__visual-glow" />
        <span className="pcard__view">View Case Study →</span>
      </Link>

      <div className="pcard__body">
        <span className="num pcard__index">{project.index}</span>
        <p className="eyebrow">{project.category}</p>
        <h3 className="pcard__title">
          <Link to={`/work/${project.slug}`} className="cursor-hover">{project.name}</Link>
        </h3>
        <p className="pcard__blurb">{project.blurb}</p>
        <ul className="pcard__stack">
          {project.stack.map((s) => (
            <li key={s} className="tag">{s}</li>
          ))}
        </ul>
        <Link to={`/work/${project.slug}`} className="pcard__link cursor-hover">
          View case study <span>→</span>
        </Link>
      </div>
    </Reveal>
  );
}
