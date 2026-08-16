// Abstract, brand-toned SVG art standing in for each project's real screenshots.
export default function ProjectVisual({ slug, color, colorSoft }) {
  const common = { viewBox: '0 0 600 460', xmlns: 'http://www.w3.org/2000/svg' };

  const scenes = {
    'motolab-pitshop': (
      <svg {...common}>
        <defs>
          <linearGradient id="mg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor="#141313" />
          </linearGradient>
        </defs>
        <rect width="600" height="460" fill="url(#mg1)" />
        <g stroke={colorSoft} strokeWidth="1.4" opacity="0.5">
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={i} x1={i * 60} y1="0" x2={i * 60} y2="460" />
          ))}
        </g>
        <circle cx="300" cy="240" r="120" fill="none" stroke={colorSoft} strokeWidth="3" />
        <circle cx="300" cy="240" r="72" fill="none" stroke={colorSoft} strokeWidth="1.5" opacity="0.7" />
        <circle cx="300" cy="240" r="10" fill={colorSoft} />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const x1 = 300 + Math.cos(a) * 76, y1 = 240 + Math.sin(a) * 76;
          const x2 = 300 + Math.cos(a) * 118, y2 = 240 + Math.sin(a) * 118;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={colorSoft} strokeWidth="2" opacity="0.6" />;
        })}
        <text x="40" y="420" fill={colorSoft} fontFamily="Space Mono" fontSize="13" opacity="0.8">MOTOLAB E-COMMERCE PLATFORM</text>
      </svg>
    ),
    'fortune-multi-services': (
      <svg {...common}>
        <defs>
          <linearGradient id="fg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor="#0d1620" />
          </linearGradient>
        </defs>
        <rect width="600" height="460" fill="url(#fg1)" />
        {Array.from({ length: 4 }).map((_, r) =>
          Array.from({ length: 5 }).map((_, c) => (
            <rect
              key={`${r}-${c}`}
              x={40 + c * 108}
              y={40 + r * 100}
              width="88"
              height="80"
              rx="4"
              fill="none"
              stroke={colorSoft}
              strokeWidth="1.2"
              opacity={0.25 + ((r + c) % 3) * 0.18}
            />
          ))
        )}
        <rect x="40" y="140" width="88" height="80" rx="4" fill={colorSoft} opacity="0.85" />
        <text x="40" y="430" fill={colorSoft} fontFamily="Space Mono" fontSize="13" opacity="0.85">FORTUNE — BRANDING PAGE</text>
      </svg>
    ),
    'shri-venkateshwara-agros-herbs': (
      <svg {...common}>
        <defs>
          <linearGradient id="ag1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor="#12160c" />
          </linearGradient>
        </defs>
        <rect width="600" height="460" fill="url(#ag1)" />
        <g fill="none" stroke={colorSoft} strokeWidth="2">
          <path d="M300 380 C300 260 230 220 180 140" opacity="0.8" />
          <path d="M300 380 C300 260 370 220 420 140" opacity="0.8" />
          <path d="M300 380 C300 220 300 160 300 60" opacity="0.9" />
        </g>
        {[[180,140],[420,140],[300,60],[240,220],[360,220]].map(([x,y],i)=>(
          <ellipse key={i} cx={x} cy={y} rx="34" ry="20" fill={colorSoft} opacity="0.75" transform={`rotate(${(i*35)-40} ${x} ${y})`} />
        ))}
        <text x="40" y="430" fill={colorSoft} fontFamily="Space Mono" fontSize="13" opacity="0.85">SHRI VENKATESHWARA — HARVEST 2025</text>
      </svg>
    ),
    'justshare-care': (
      <svg {...common}>
        <defs>
          <linearGradient id="jg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor="#1a1420" />
          </linearGradient>
        </defs>
        <rect width="600" height="460" fill="url(#jg1)" />
        <circle cx="230" cy="230" r="70" fill="none" stroke={colorSoft} strokeWidth="2" opacity="0.8" />
        <circle cx="370" cy="230" r="70" fill="none" stroke={colorSoft} strokeWidth="2" opacity="0.8" />
        <circle cx="300" cy="230" r="30" fill={colorSoft} opacity="0.9" />
        <text x="40" y="430" fill={colorSoft} fontFamily="Space Mono" fontSize="13" opacity="0.85">JUSTSHARE CARE — HEALTHCARE PLATFORM</text>
      </svg>
    ),
  };

  return scenes[slug] || (
    <svg {...common}>
      <rect width="600" height="460" fill={color} />
    </svg>
  );
}
