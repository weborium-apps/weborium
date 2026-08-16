import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import Marquee from '../components/Marquee';
import ProjectCard from '../components/ProjectCard';
import TeamCard from '../components/TeamCard';
import { projects } from '../data/projects';
import { team } from '../data/team';
import './home.css';

const headlineWords = ['We', 'design', 'interfaces', 'people', 'remember.'];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="hero__grid" />
          <div className="hero__glow" />
        </div>

        <div className="container hero__inner">
          <motion.p
            className="eyebrow hero__eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Weborium — Frontend Design Studio, Est. 2025
          </motion.p>

          <h1 className="hero__headline">
            {headlineWords.map((w, i) => (
              <span className="hero__word-wrap" key={i}>
                <motion.span
                  className="hero__word"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, delay: 0.25 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            className="hero__foot"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
          >
            <p className="hero__sub">
              A small studio in India building fast, considered, pixel-precise
              websites, four shipped products in, with many more in the pipeline.
            </p>
            <div className="hero__actions">
              <Link to="/work" className="btn filled cursor-hover">See our work</Link>
              <Link to="/contact" className="btn cursor-hover">Start a project</Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <span className="hero__scroll-line" />
          <span>Scroll</span>
        </motion.div>
      </section>

      <Marquee items={['Motolab PitShop', 'Fortune Multi Services', 'Shri Venkateshwara', 'JustShare Care']} />

      {/* INTRO STATEMENT */}
      <section className="section intro">
        <div className="container intro__grid">
          <Reveal type="up">
            <p className="eyebrow">Studio Statement</p>
          </Reveal>
          <Reveal type="up" delay={0.1}>
            <h2 className="intro__text">
              We're a young studio that treats <em>every</em> project like a
              flagship, obsessing over the details most agencies skip: type
              rhythm, motion timing, load speed, and the quiet confidence of
              a page that just <em>works</em>.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container stats__grid">
          {[
            { value: '4', label: 'Projects delivered' },
            { value: '3', label: 'People on the team' },
            { value: '2025', label: 'Studio founded' },
            { value: '100%', label: 'Custom-built, no templates' },
          ].map((s, i) => (
            <Reveal type="up" delay={i * 0.08} key={s.label} className="stats__item">
              <span className="stats__value">{s.value}</span>
              <span className="stats__label">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="section work-section">
        <div className="container">
          <div className="work-section__head">
            <Reveal type="up">
              <p className="eyebrow">Selected Work</p>
            </Reveal>
            <Reveal type="up" delay={0.08}>
              <h2 className="work-section__title">Four products, shipped.</h2>
            </Reveal>
            <Reveal type="up" delay={0.14}>
              <Link to="/work" className="btn cursor-hover work-section__all">
                View all work →
              </Link>
            </Reveal>
          </div>

          <div className="work-section__list">
            {projects.map((p, i) => (
              <ProjectCard project={p} reverse={i % 2 === 1} key={p.slug} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process on-paper">
        <div className="container">
          <Reveal type="up">
            <p className="eyebrow">How We Work</p>
          </Reveal>
          <Reveal type="up" delay={0.08}>
            <h2 className="process__title">A tight loop, run by three people.</h2>
          </Reveal>

          <div className="process__list">
            {[
              { t: 'Discover', d: 'We learn the business, the users and the constraint that actually matters before opening Figma.' },
              { t: 'Design', d: 'Real content, real type scale, real states, from empty to error to delight. No lorem ipsum.' },
              { t: 'Build', d: 'Componentised React, tuned for performance and accessibility, deployed with room to grow.' },
              { t: 'Refine', d: 'We watch real usage and keep polishing after launch, not just before it.' },
            ].map((step, i) => (
              <Reveal type="up" delay={i * 0.08} key={step.t} className="process__row">
                <span className="process__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="process__step-title">{step.t}</h3>
                <p className="process__step-desc">{step.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM TEASER */}
      <section className="section team-teaser">
        <div className="container">
          <div className="work-section__head">
            <Reveal type="up">
              <p className="eyebrow">The Studio</p>
            </Reveal>
            <Reveal type="up" delay={0.08}>
              <h2 className="work-section__title">Three people, one standard.</h2>
            </Reveal>
            <Reveal type="up" delay={0.14}>
              <Link to="/about" className="btn cursor-hover work-section__all">
                Meet the team →
              </Link>
            </Reveal>
          </div>

          <div className="team-teaser__grid">
            {team.map((m, i) => (
              <TeamCard member={m} delay={i * 0.1} key={m.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
