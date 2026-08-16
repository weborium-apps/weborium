import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollRail from './components/ScrollRail';
import CursorDot from './components/CursorDot';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import useSmoothScroll from './hooks/useSmoothScroll';

import Home from './pages/Home';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  useSmoothScroll();
  const location = useLocation();

  return (
    <>
      <CursorDot />
      <ScrollRail />
      <Navbar />
      <ScrollToTop />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
            <Route path="/work/:slug" element={<PageTransition><ProjectDetail /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
