import './marquee.css';

export default function Marquee({ items, speed = 28 }) {
  return (
    <div className="marquee">
      <div className="marquee__track" style={{ animationDuration: `${speed}s` }}>
        {[...items, ...items].map((item, i) => (
          <span className="marquee__item" key={i}>
            {item} <span className="marquee__dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
