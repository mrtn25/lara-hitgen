"use client";

// Simple Mercator projection for Europe
// viewBox roughly covers lon -12..35, lat 34..72
// We map lon/lat to SVG x/y manually

const W = 600;
const H = 500;

function project(lon: number, lat: number): [number, number] {
  const lonMin = -12, lonMax = 38, latMin = 34, latMax = 72;
  const x = ((lon - lonMin) / (lonMax - lonMin)) * W;
  const y = (1 - (lat - latMin) / (latMax - latMin)) * H;
  return [x, y];
}

// Approximate interview partner clusters
// Portugal (60 dots): heavy in Lisbon area, some Porto, some Braga
// Germany (20 dots): heavy in Berlin, Munich, some Hamburg, Frankfurt
const seed = (n: number) => {
  // deterministic "random" offset so dots look natural but don't move on re-render
  return ((Math.sin(n * 9301 + 49297) * 233280) % 1 + 1) / 2;
};

function cluster(
  centerLon: number,
  centerLat: number,
  count: number,
  spread: number,
  offset: number
) {
  return Array.from({ length: count }, (_, i) => {
    const angle = seed(offset + i * 2) * Math.PI * 2;
    const r = seed(offset + i * 2 + 1) * spread;
    return {
      lon: centerLon + Math.cos(angle) * r,
      lat: centerLat + Math.sin(angle) * r * 0.6,
    };
  });
}

const dots = [
  // Lisbon
  ...cluster(-9.14, 38.72, 32, 0.6, 0),
  // Porto
  ...cluster(-8.61, 41.15, 14, 0.4, 100),
  // Braga / rest of Portugal
  ...cluster(-8.43, 41.55, 8, 0.7, 200),
  // Porto area extras
  ...cluster(-8.9, 40.2, 6, 0.5, 300),
  // Berlin
  ...cluster(13.4, 52.52, 9, 0.35, 400),
  // Munich
  ...cluster(11.58, 48.14, 6, 0.3, 500),
  // Hamburg
  ...cluster(10.0, 53.55, 3, 0.25, 600),
  // Frankfurt
  ...cluster(8.68, 50.11, 2, 0.2, 700),
];

// Very simplified Europe outline as SVG path (approximate coastal/border path)
// Using a pre-projected outline stored as lon/lat polygons would be huge;
// instead we draw a light background rectangle and label countries
const countryLabels: { name: string; lon: number; lat: number }[] = [
  { name: "Portugal", lon: -8.2, lat: 39.5 },
  { name: "Spain", lon: -3.7, lat: 40.4 },
  { name: "France", lon: 2.3, lat: 46.2 },
  { name: "Germany", lon: 10.4, lat: 51.2 },
  { name: "Italy", lon: 12.6, lat: 42.8 },
  { name: "Netherlands", lon: 5.3, lat: 52.4 },
  { name: "Poland", lon: 19.2, lat: 52.0 },
  { name: "Austria", lon: 14.5, lat: 47.5 },
  { name: "Switzerland", lon: 8.2, lat: 46.8 },
  { name: "Belgium", lon: 4.5, lat: 50.5 },
  { name: "Denmark", lon: 10.0, lat: 56.0 },
  { name: "Sweden", lon: 15.0, lat: 62.0 },
  { name: "Norway", lon: 10.0, lat: 65.0 },
  { name: "Finland", lon: 26.0, lat: 64.0 },
  { name: "Czech Rep.", lon: 15.5, lat: 49.8 },
  { name: "UK", lon: -2.5, lat: 54.0 },
];

export default function EuropeMap() {
  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full max-w-2xl mx-auto"
        style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
      >
        {/* Background */}
        <rect width={W} height={H} fill="#eef2f7" rx="12" />

        {/* Very rough country shapes as rectangles/blobs — just for visual grounding */}
        {/* We draw a simple political-color fill for a few key countries */}
        {/* Portugal */}
        <ellipse cx={project(-8.0, 39.5)[0]} cy={project(-8.0, 39.5)[1]} rx={22} ry={40} fill="#d4e0f7" opacity={0.7} />
        {/* Spain */}
        <ellipse cx={project(-3.7, 40.2)[0]} cy={project(-3.7, 40.2)[1]} rx={70} ry={55} fill="#e8edf5" opacity={0.6} />
        {/* France */}
        <ellipse cx={project(2.3, 46.5)[0]} cy={project(2.3, 46.5)[1]} rx={60} ry={55} fill="#e8edf5" opacity={0.5} />
        {/* Germany */}
        <ellipse cx={project(10.4, 51.2)[0]} cy={project(10.4, 51.2)[1]} rx={52} ry={55} fill="#d4e0f7" opacity={0.7} />
        {/* Italy */}
        <ellipse cx={project(12.6, 43.0)[0]} cy={project(12.6, 43.0)[1]} rx={30} ry={70} fill="#e8edf5" opacity={0.5} />
        {/* UK */}
        <ellipse cx={project(-2.0, 54.0)[0]} cy={project(-2.0, 54.0)[1]} rx={30} ry={50} fill="#e8edf5" opacity={0.5} />
        {/* Scandinavia */}
        <ellipse cx={project(14.0, 63.0)[0]} cy={project(14.0, 63.0)[1]} rx={70} ry={60} fill="#e8edf5" opacity={0.4} />
        {/* Poland */}
        <ellipse cx={project(19.5, 52.0)[0]} cy={project(19.5, 52.0)[1]} rx={50} ry={40} fill="#e8edf5" opacity={0.4} />

        {/* Country name labels */}
        {countryLabels.map(({ name, lon, lat }) => {
          const [x, y] = project(lon, lat);
          return (
            <text
              key={name}
              x={x}
              y={y}
              fontSize="9"
              fill="#9ca3af"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {name}
            </text>
          );
        })}

        {/* Interview dots */}
        {dots.map((d, i) => {
          const [x, y] = project(d.lon, d.lat);
          const isPortugal = d.lon < -6;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={4}
              fill={isPortugal ? "#1c4ed8" : "#1c1917"}
              opacity={0.75}
            />
          );
        })}

        {/* Legend */}
        <g transform={`translate(${W - 160}, ${H - 70})`}>
          <rect width={150} height={62} rx={6} fill="white" opacity={0.85} />
          <circle cx={16} cy={18} r={5} fill="#1c4ed8" opacity={0.75} />
          <text x={26} y={22} fontSize="10" fill="#374151">Portugal (≈60)</text>
          <circle cx={16} cy={38} r={5} fill="#1c1917" opacity={0.75} />
          <text x={26} y={42} fontSize="10" fill="#374151">Germany (≈20)</text>
          <text x={8} y={56} fontSize="9" fill="#9ca3af">Interview partners</text>
        </g>
      </svg>
    </div>
  );
}
