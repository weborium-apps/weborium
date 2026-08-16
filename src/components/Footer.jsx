import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import './footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <Reveal type="up">
          <div className="footer__cta">
            <p className="eyebrow">Let's build something</p>
            <h2 className="footer__headline">
              Got a product<br />worth <em>designing</em> well?
            </h2>
            <Link to="/contact" className="btn filled footer__btn cursor-hover">
              Start a project →
            </Link>
          </div>
        </Reveal>

        <div className="hr" />

        <div className="footer__grid">
          <div className="footer__col">
            <div className="navbar__logo" style={{ marginBottom: 16 }}>
              <img src='https://pub-4288b22fbd4c41f8ae1e48c844c96685.r2.dev/weborium/weborium.png' className="navbar__logo-mark"></img>
              <span className="navbar__logo-text">Weborium</span>
            </div>
            <p className="footer__desc">
              A frontend-focused design & development studio, founded 2025.
              We design and build interfaces for brands who take their
              craft seriously.
            </p>
          </div>

          <div className="footer__col">
            <p className="footer__label">Sitemap</p>
            <ul className="footer__list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <p className="footer__label">Selected Work</p>
            <ul className="footer__list">
              <li><Link to="/work/motolab-pitshop">Motolab PitShop</Link></li>
              <li><Link to="/work/fortune-multi-services">Fortune Multi Services</Link></li>
              <li><Link to="/work/shri-venkateshwara-agros-herbs">Shri Venkateshwara</Link></li>
              <li><Link to="/work/justshare-care">JustShare Care</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <p className="footer__label">Contact</p>
            <ul className="footer__list">
              <li><a href="mailto:hello@weborium.studio">weborium.tech@gmail.com</a></li>
              <li><a href="tel:+911234567890">+91 91064 46305</a></li>
              <li>Ahmedabad, Gujarat, India</li>
            </ul>
          </div>
        </div>

        <div className="hr" />

        <div className="footer__bottom">
          <p>© {year} Weborium Studio. All rights reserved.</p>
          <div className="footer__social">
            <a href="#" className="cursor-hover">Instagram</a>
            <a href="#" className="cursor-hover">LinkedIn</a>
            <a href="#" className="cursor-hover">Behance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
