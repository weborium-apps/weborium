import Reveal from '../components/Reveal';
import TeamCard from '../components/TeamCard';
import { team } from '../data/team';
import './work.css';
import './about.css';

const values = [
  { t: 'Craft over speed', d: 'We would rather ship a week later and get the type scale, the spacing and the states right.' },
  { t: 'Small by design', d: 'Three people means no hand-offs get lost. Whoever designs it also helps ship it.' },
  { t: 'Content-first', d: "We design with the client's real words and numbers from day one, never lorem ipsum." },
  { t: 'Built to be owned', d: 'Clean, componentised code that a future developer, ours or yours, can actually read.' },
];

export default function About() {
  return (
    <>
      <section className="pagehero">
        <div className="container">
          <Reveal type="up"><p className="eyebrow">About Weborium</p></Reveal>
          <Reveal type="up" delay={0.08}>
            <h1 className="pagehero__title">
             An agency built by<br /><em>three people</em> since 2025.
            </h1>
          </Reveal>
          <Reveal type="up" delay={0.16}>
            <p className="pagehero__sub">
              Weborium started with a simple frustration: too many small
              businesses were stuck with template sites that looked like
              everyone else's. We set out to prove a lean team could deliver
              agency-grade design and engineering, faster and closer to the client.
            </p>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="section story">
        <div className="container story__grid">
          <Reveal type="up"><p className="eyebrow">Our Story</p></Reveal>
          <div>
            <Reveal type="up" delay={0.06}>
              <p className="story__p">
                Weborium opened its doors in 2025 with three people and one
                conviction: that most small and mid-sized businesses deserve
                interfaces as considered as those built for venture-backed
                startups, they just rarely get offered the chance.
              </p>
            </Reveal>
            <Reveal type="up" delay={0.12}>
              <p className="story__p">
                In our first year we shipped four full products across four
                very different industries, an automotive garage, a
                multi-service business, an agricultural exporter and a
                community care platform, proving the same rigorous process
                could flex across categories without losing its edge.
              </p>
            </Reveal>
            <Reveal type="up" delay={0.18}>
              <p className="story__p">
                We're still small on purpose. Every project gets both
                developers and our designer directly, not a rotating account
                team. That's the trade we've made, and we intend to keep making it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section values on-paper">
        <div className="container">
          <Reveal type="up"><p className="eyebrow">What We Value</p></Reveal>
          <Reveal type="up" delay={0.08}>
            <h2 className="process__title">Four things we won't compromise on.</h2>
          </Reveal>
          <div className="values__grid">
            {values.map((v, i) => (
              <Reveal type="up" delay={i * 0.08} key={v.t} className="values__item">
                <span className="num values__num">0{i + 1}</span>
                <h3 className="values__title">{v.t}</h3>
                <p className="values__desc">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section" id="team">
        <div className="container">
          <Reveal type="up"><p className="eyebrow">The People</p></Reveal>
          <Reveal type="up" delay={0.08}>
            <h2 className="process__title">Meet the team behind Weborium.</h2>
          </Reveal>
          <div className="team-teaser__grid about-team__grid">
            {team.map((m, i) => (
              <TeamCard member={m} delay={i * 0.1} key={m.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
