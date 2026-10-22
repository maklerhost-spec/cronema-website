// Shared pieces for the hand-drawn SVG graphics: colours, frame, window chrome, text bars.
import type { ReactNode } from "react";

export const C = {
  // Anthracite and the logo blue (no orange, Manfred 22.10.2026)
  ink: "#1d2025",
  ink7: "#2b2f36",
  hi: "#0091da",
  hi1: "#cdeafb",
  hi0: "#eaf6fd",
  net: "#38bdf8",
  net4: "#7dd3fc",
  net1: "#e0f2fe",
  net0: "#f0f9ff",
  s50: "#f8fafc",
  s100: "#f1f5f9",
  s200: "#e2e8f0",
  s300: "#cbd5e1",
  s400: "#94a3b8",
  s500: "#64748b",
  s700: "#334155",
  green: "#16a34a",
  green1: "#dcfce7",
  white: "#ffffff",
};

/** Root <svg>: responsive, labelled, Inter for all text. */
export function Art({ w, h, label, children, className = "" }: { w: number; h: number; label: string; children: ReactNode; className?: string }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={label} className={`h-auto w-full ${className}`} fontFamily="Inter, ui-sans-serif, system-ui, sans-serif">
      <title>{label}</title>
      {children}
    </svg>
  );
}

/** Window with title bar and three dots; children are placed in window coordinates below the bar. */
export function Win({ x, y, w, h, title, children, dark = false }: { x: number; y: number; w: number; h: number; title?: string; children?: ReactNode; dark?: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="2" y="6" width={w} height={h} rx="12" fill={C.ink} opacity=".08" />
      <rect width={w} height={h} rx="12" fill={dark ? C.ink : C.white} stroke={dark ? C.ink7 : C.s200} />
      <path d={`M0 12A12 12 0 0 1 12 0H${w - 12}A12 12 0 0 1 ${w} 12V24H0Z`} fill={dark ? C.ink7 : C.s100} />
      <circle cx="14" cy="12" r="3.5" fill={dark ? C.s500 : C.s300} />
      <circle cx="26" cy="12" r="3.5" fill={dark ? C.s500 : C.s300} />
      <circle cx="38" cy="12" r="3.5" fill={dark ? C.s500 : C.s300} />
      {title && (
        <text x={w / 2} y="16" textAnchor="middle" fontSize="9" fontWeight="600" fill={dark ? C.s300 : C.s500}>
          {title}
        </text>
      )}
      <g transform="translate(0 24)">{children}</g>
    </g>
  );
}

/** Grey placeholder line for text. */
export function Bar({ x, y, w, h = 6, fill = C.s200 }: { x: number; y: number; w: number; h?: number; fill?: string }) {
  return <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} />;
}

/** Small rounded label (pill) with text. */
export function Pill({ x, y, text, fill = C.white, color = C.ink, stroke = C.s200, size = 10, pad = 10, w }: { x: number; y: number; text: string; fill?: string; color?: string; stroke?: string; size?: number; pad?: number; w?: number }) {
  const width = w ?? text.length * size * 0.58 + pad * 2;
  const h = size + 12;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={width} height={h} rx={h / 2} fill={fill} stroke={stroke} />
      <text x={width / 2} y={h / 2 + size * 0.36} textAnchor="middle" fontSize={size} fontWeight="600" fill={color}>
        {text}
      </text>
    </g>
  );
}

/** Check mark in a circle. */
export function Check({ x, y, r = 7, fill = C.green }: { x: number; y: number; r?: number; fill?: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r={r} fill={fill} />
      <path d={`M${-r * 0.45} 0l${r * 0.3} ${r * 0.32} ${r * 0.6} ${-r * 0.62}`} stroke={C.white} strokeWidth={r * 0.28} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}

/** Network node: ring with a dot, as in the logo. */
export function Node({ x, y, r = 6, color = C.hi }: { x: number; y: number; r?: number; color?: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={color} />
      <circle cx={x} cy={y} r={r * 0.38} fill={C.white} />
    </g>
  );
}

/** German flag stripes, for "server in Germany". */
export function Flag({ x, y, w = 18 }: { x: number; y: number; w?: number }) {
  const h = (w * 3) / 5;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={h / 3} fill="#111" />
      <rect y={h / 3} width={w} height={h / 3} fill="#dd0000" />
      <rect y={(2 * h) / 3} width={w} height={h / 3} fill="#ffce00" />
    </g>
  );
}

/** Soft background blob behind a graphic. */
export function Glow({ cx, cy, r, color = C.net1 }: { cx: number; cy: number; r: number; color?: string }) {
  return <circle cx={cx} cy={cy} r={r} fill={color} opacity=".55" />;
}
