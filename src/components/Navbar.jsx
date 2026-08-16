import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './navbar.css';

const links = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar__inner container">
          <Link to="/" className="navbar__logo cursor-hover" onClick={() => setOpen(false)}>
            <img src='https://pub-4288b22fbd4c41f8ae1e48c844c96685.r2.dev/weborium/weborium.png' className="navbar__logo-mark"></img>
            <span className="navbar__logo-text">Weborium</span>
          </Link>

          <nav className="navbar__links">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => `navbar__link cursor-hover ${isActive ? 'is-active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="navbar__actions">
            <Link to="/contact" className="btn filled navbar__cta cursor-hover">
              Start a project
            </Link>
            <button
              className={`navbar__burger cursor-hover ${open ? 'is-open' : ''}`}
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navmobile"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="navmobile__inner container">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink to={l.to} className="navmobile__link" onClick={() => setOpen(false)}>
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="navmobile__foot"
              >
                <Link to="/contact" className="btn filled" onClick={() => setOpen(false)}>
                  Start a project
                </Link>
                <p className="navmobile__meta">Weborium — Est. 2025, India</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
