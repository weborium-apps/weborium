import { useEffect, useRef } from 'react';
import './cursordot.css';

export default function CursorDot() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFine || prefersReduced) return;

    let raf;
    const move = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const loop = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.16;
      ring.current.y += (pos.current.y - ring.current.y) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    const over = (e) => {
      if (e.target.closest('a, button, .cursor-hover')) {
        ringRef.current?.classList.add('is-active');
      }
    };
    const out = (e) => {
      if (e.target.closest('a, button, .cursor-hover')) {
        ringRef.current?.classList.remove('is-active');
      }
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', over);
    document.addEventListener('mouseout', out);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', over);
      document.removeEventListener('mouseout', out);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="cursor-fx" aria-hidden="true">
      <div className="cursor-fx__dot" ref={dotRef} />
      <div className="cursor-fx__ring" ref={ringRef} />
    </div>
  );
}
