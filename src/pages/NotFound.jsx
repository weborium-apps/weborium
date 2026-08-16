import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: 200, minHeight: '80vh' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <Reveal type="up">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>404 Error</p>
        </Reveal>
        <Reveal type="up" delay={0.08}>
          <h1 style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(60px, 12vw, 160px)', margin: '20px 0' }}>
            Lost the plot.
          </h1>
        </Reveal>
        <Reveal type="up" delay={0.16}>
          <p style={{ color: 'var(--text-mid)', fontSize: 17, marginBottom: 34 }}>
            That page doesn't exist, or has moved somewhere else.
          </p>
        </Reveal>
        <Reveal type="up" delay={0.22}>
          <Link to="/" className="btn filled cursor-hover">Back to home</Link>
        </Reveal>
      </div>
    </section>
  );
}
