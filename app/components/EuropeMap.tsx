"use client";

import { useEffect, useRef, useState } from "react";

const W = 700;
const H = 520;

// Lambert conformal conic approximation for Europe
// lon range: -12 to 40, lat range: 34 to 72
function project(lon: number, lat: number): [number, number] {
  const lonMin = -14, lonMax = 42;
  const latMin = 33, latMax = 73;
  // slight vertical stretch to compensate for conic distortion
  const x = ((lon - lonMin) / (lonMax - lonMin)) * W;
  const latAdj = Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));
  const latAdjMin = Math.log(Math.tan(Math.PI / 4 + (latMin * Math.PI) / 360));
  const latAdjMax = Math.log(Math.tan(Math.PI / 4 + (latMax * Math.PI) / 360));
  const y = (1 - (latAdj - latAdjMin) / (latAdjMax - latAdjMin)) * H;
  return [x, y];
}

function det(n: number) {
  return ((Math.sin(n * 9301 + 49297) * 233280) % 1 + 1) / 2;
}

function cluster(lon: number, lat: number, count: number, spread: number, off: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = det(off + i * 2) * Math.PI * 2;
    const r = det(off + i * 2 + 1) * spread;
    return { lon: lon + Math.cos(angle) * r, lat: lat + Math.sin(angle) * r * 0.55 };
  });
}

const interviewDots = [
  ...cluster(-9.14, 38.72, 34, 0.55, 0),   // Lisbon
  ...cluster(-8.61, 41.15, 14, 0.38, 100),  // Porto
  ...cluster(-8.43, 41.55, 7, 0.6, 200),    // Braga area
  ...cluster(-8.9, 40.2, 5, 0.4, 300),      // Central PT
  ...cluster(13.4, 52.52, 9, 0.32, 400),    // Berlin
  ...cluster(11.58, 48.14, 7, 0.28, 500),   // Munich
  ...cluster(10.0, 53.55, 3, 0.22, 600),    // Hamburg
  ...cluster(8.68, 50.11, 1, 0.15, 700),    // Frankfurt
];

type TopoFeature = {
  type: string;
  arcs: number[][];
  properties: { name?: string };
};

export default function EuropeMap() {
  const [paths, setPaths] = useState<{ d: string; name: string; id: string }[]>([]);

  useEffect(() => {
    async function load() {
      const [topoMod, topojson] = await Promise.all([
        fetch("/world-110m.json").then((r) => r.json()),
        import("topojson-client"),
      ]);

      const geo = topojson.feature(topoMod, topoMod.objects.countries) as unknown as {
        type: string;
        features: TopoFeature[];
      };

      // Country numeric ISO codes for Europe
      const europeIds = new Set([
        "8","20","40","56","70","100","112","191","196","203","208","233",
        "246","250","276","300","348","352","372","380","428","440","442",
        "470","492","498","499","528","578","616","620","630","642","703",
        "705","724","752","756","804","826","831","832","833",
      ]);

      const result: { d: string; name: string; id: string }[] = [];

      for (const feature of geo.features) {
        const id = String((feature as { id?: string | number }).id ?? "");
        if (!europeIds.has(id)) continue;

        const coords = geoToSVG(feature as unknown as GeoJSON.Feature);
        if (coords) result.push({ d: coords, name: feature.properties?.name ?? "", id });
      }

      setPaths(result);
    }
    load();
  }, []);

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-[#dde8f4]">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ display: "block" }}>
        {/* Ocean background */}
        <rect width={W} height={H} fill="#dde8f4" />

        {/* Country shapes */}
        {paths.map(({ d, id }) => (
          <path
            key={id}
            d={d}
            fill="#e8eff8"
            stroke="#c4d4e8"
            strokeWidth={0.8}
          />
        ))}

        {/* Interview dots */}
        {interviewDots.map((dot, i) => {
          const [x, y] = project(dot.lon, dot.lat);
          const isPortugal = dot.lon < -6;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={5}
              fill={isPortugal ? "#2563eb" : "#1c1917"}
              opacity={0.82}
            />
          );
        })}

        {/* City labels */}
        {[
          { label: "Lisbon", lon: -9.14, lat: 38.72, anchor: "end" },
          { label: "Porto", lon: -8.61, lat: 41.15, anchor: "end" },
          { label: "Berlin", lon: 13.4, lat: 52.52, anchor: "start" },
          { label: "Munich", lon: 11.58, lat: 48.14, anchor: "start" },
        ].map(({ label, lon, lat, anchor }) => {
          const [x, y] = project(lon, lat);
          const offset = anchor === "end" ? -8 : 8;
          return (
            <text
              key={label}
              x={x + offset}
              y={y + 4}
              fontSize="10"
              fontWeight="600"
              fill="#374151"
              textAnchor={anchor as "end" | "start"}
              style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
            >
              {label}
            </text>
          );
        })}

        {/* Legend */}
        <g transform={`translate(${W - 170}, ${H - 72})`}>
          <rect width={160} height={64} rx={8} fill="white" opacity={0.9} />
          <circle cx={16} cy={18} r={5} fill="#2563eb" opacity={0.82} />
          <text x={28} y={22} fontSize="11" fill="#374151" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>Portugal (60+)</text>
          <circle cx={16} cy={38} r={5} fill="#1c1917" opacity={0.82} />
          <text x={28} y={42} fontSize="11" fill="#374151" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>Germany (20+)</text>
          <text x={8} y={57} fontSize="9" fill="#9ca3af" style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}>Interview partners</text>
        </g>
      </svg>
    </div>
  );
}

// Convert GeoJSON geometry to SVG path string using our project() function
function geoToSVG(feature: GeoJSON.Feature): string | null {
  const geom = feature.geometry;
  if (!geom) return null;

  function ringToPath(ring: number[][]): string {
    return ring
      .map(([lon, lat], i) => {
        const [x, y] = project(lon, lat);
        return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ") + " Z";
  }

  if (geom.type === "Polygon") {
    return geom.coordinates.map(ringToPath).join(" ");
  }
  if (geom.type === "MultiPolygon") {
    return geom.coordinates
      .map((poly) => poly.map(ringToPath).join(" "))
      .join(" ");
  }
  return null;
}

// Minimal GeoJSON types
declare namespace GeoJSON {
  interface Feature {
    type: string;
    geometry: Geometry | null;
    properties: Record<string, unknown> | null;
    id?: string | number;
  }
  type Geometry = PolygonGeometry | MultiPolygonGeometry;
  interface PolygonGeometry { type: "Polygon"; coordinates: number[][][]; }
  interface MultiPolygonGeometry { type: "MultiPolygon"; coordinates: number[][][][]; }
}
