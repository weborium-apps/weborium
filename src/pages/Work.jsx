import Reveal from '../components/Reveal';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import './work.css';

export default function Work() {
  return (
    <>
      <section className="pagehero">
        <div className="container">
          <Reveal type="up"><p className="eyebrow">Our Work</p></Reveal>
          <Reveal type="up" delay={0.08}>
            <h1 className="pagehero__title">
              Four launches.<br />Every one built to <em>last</em>.
            </h1>
          </Reveal>
          <Reveal type="up" delay={0.16}>
            <p className="pagehero__sub">
              From automotive booking systems to community care platforms,
              here's what Weborium has shipped since opening its doors in 2025.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section work-list">
        <div className="container">
          {projects.map((p, i) => (
            <ProjectCard project={p} reverse={i % 2 === 1} key={p.slug} />
          ))}
        </div>
      </section>
    </>
  );
}
