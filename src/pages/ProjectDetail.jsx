import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Reveal from '../components/Reveal';
import ProjectVisual from '../components/ProjectVisual';
import { projects, getProject } from '../data/projects';
import './projectdetail.css';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!project) return <Navigate to="/work" replace />;

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <section
        className="pdhero"
        style={{ '--accent': project.color, '--accent-soft': project.colorSoft }}
      >
        <div className="container pdhero__inner">
          <Reveal type="up">
            <Link to="/work" className="pdhero__back cursor-hover">← All Work</Link>
          </Reveal>

          <div className="pdhero__grid">
            <div>
              <Reveal type="up" delay={0.08}>
                <p className="eyebrow">{project.category} — {project.year}</p>
              </Reveal>
              <Reveal type="up" delay={0.14}>
                <h1 className="pdhero__title">{project.name}</h1>
              </Reveal>
              <Reveal type="up" delay={0.2}>
                <p className="pdhero__blurb">{project.blurb}</p>
              </Reveal>
            </div>
            <Reveal type="up" delay={0.24} className="pdhero__meta">
              <div>
                <p className="pdhero__meta-label">Services</p>
                <p className="pdhero__meta-value">{project.services.join(', ')}</p>
              </div>
              <div>
                <p className="pdhero__meta-label">Stack</p>
                <p className="pdhero__meta-value">{project.stack.join(', ')}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal type="scale" className="pdvisual container">
        <div className="pdvisual__frame" style={{ '--accent': project.color, '--accent-soft': project.colorSoft }}>
          <ProjectVisual slug={project.slug} color={project.color} colorSoft={project.colorSoft} />
        </div>
      </Reveal>

      <section className="section pdbody">
        <div className="container pdbody__grid">
          <Reveal type="up">
            <p className="eyebrow">The Brief</p>
          </Reveal>
          <Reveal type="up" delay={0.08}>
            <p className="pdbody__text">{project.description}</p>
          </Reveal>
        </div>
      </section>

      <section className="section pdmetrics on-paper">
        <div className="container">
          <Reveal type="up"><p className="eyebrow">Impact</p></Reveal>
          <div className="pdmetrics__grid">
            {project.metrics.map((m, i) => (
              <Reveal type="up" delay={i * 0.1} key={m.label} className="pdmetrics__item">
                <span className="pdmetrics__value">{m.value}</span>
                <span className="pdmetrics__label">{m.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pdnext">
        <Link to={`/work/${next.slug}`} className="pdnext__link cursor-hover">
          <div className="container pdnext__inner">
            <span className="eyebrow">Next Project</span>
            <h2 className="pdnext__title">{next.name} →</h2>
          </div>
        </Link>
      </section>
    </>
  );
}
