import { art } from "../content/art";
// Hero graphic: Claude Code in the terminal at the centre of a network of what we build.
// Plus the three small reference graphics (work247, Bookique, GARAN-Label).
import type { Reference } from "../content/pages";
import { Art, Bar, C, Check, Flag, Node, Win } from "./kit";

function Card({ x, y, w = 160, title, sub, color, children }: { x: number; y: number; w?: number; title: string; sub: string; color: string; children?: React.ReactNode }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="2" y="5" width={w} height="64" rx="14" fill={C.ink} opacity=".09" />
      <rect width={w} height="64" rx="14" fill={C.white} stroke={C.s200} />
      <rect x="12" y="14" width="36" height="36" rx="10" fill={color} />
      <g transform="translate(30 32)">{children}</g>
      <text x="58" y="29" fontSize="11" fontWeight="700" fill={C.ink}>{title}</text>
      <text x="58" y="44" fontSize="8.5" fill={C.s500}>{sub}</text>
    </g>
  );
}

export function HeroArt() {
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
  return (
    <Art w={560} h={460} label={art("Grafik: Claude Code entwickelt Shopify-App, CRM-Erweiterung, KI-Agent und eigenes System auf Servern in Deutschland")}>
      <circle cx="280" cy="230" r="200" fill={C.white} opacity=".04" />
      <circle cx="280" cy="230" r="140" fill="none" stroke={C.white} strokeOpacity=".18" strokeWidth="1.5" strokeDasharray="4 6" />
      {/* network lines */}
      <g stroke={C.net} strokeWidth="2" fill="none" opacity=".6">
        <path d="M150 114L200 170" />
        <path d="M410 114L360 170" />
        <path d="M150 344L200 290" />
        <path d="M410 344L360 290" />
      </g>
      {/* terminal */}
      <Win x={150} y={140} w={260} h={170} dark title="claude">
        <text x="14" y="20" fontSize="10" fontFamily={mono} fill={C.hi}>✻ <tspan fill={C.white}>Claude Code</tspan></text>
        <text x="14" y="40" fontSize="9.5" fontFamily={mono} fill={C.s400}>&gt; <tspan fill={C.s200}>{art("Baue ein Kundenportal mit")}</tspan></text>
        <text x="14" y="53" fontSize="9.5" fontFamily={mono} fill={C.s200}>{art("  Login, Aufträgen und Rechnungen")}</text>
        <text x="14" y="73" fontSize="9" fontFamily={mono} fill="#4ade80">✓ <tspan fill={C.s300}>{art("Datenmodell angelegt")}</tspan></text>
        <text x="14" y="87" fontSize="9" fontFamily={mono} fill="#4ade80">✓ <tspan fill={C.s300}>{art("API und Oberfläche erstellt")}</tspan></text>
        <text x="14" y="101" fontSize="9" fontFamily={mono} fill="#4ade80">✓ <tspan fill={C.s300}>{art("Tests bestanden (48/48)")}</tspan></text>
        <text x="14" y="121" fontSize="9" fontFamily={mono} fill={C.net4}>● <tspan fill={C.s300}>{art("Prüfung durch Cronema …")}</tspan></text>
        <rect x="14" y="131" width="7" height="11" fill={C.hi} />
      </Win>
      {/* cards around */}
      <Card x={6} y={50} title={art("Shopify-App")} sub={art("Erweiterung im Shop")} color="#5e8e3e">
        <path d="M-9 -4h18l-2 13h-14Z M-5 -4a5 5 0 0 1 10 0" stroke={C.white} strokeWidth="2.4" fill="none" strokeLinejoin="round" />
      </Card>
      <Card x={394} y={50} title={art("CRM-App")} sub={art("GoHighLevel, HubSpot")} color={C.net}>
        <circle cx="-4" cy="-4" r="4" fill={C.white} />
        <circle cx="6" cy="-2" r="3" fill={C.white} opacity=".7" />
        <path d="M-12 9a8 8 0 0 1 16 0Z M1 9a6 6 0 0 1 11 0Z" fill={C.white} />
      </Card>
      <Card x={6} y={344} title={art("KI-Agent")} sub="n8n · Make · Zapier" color={C.hi}>
        <path d="M0 -10l3 7 7 3-7 3-3 7-3-7-7-3 7-3Z" fill={C.white} />
      </Card>
      <Card x={394} y={344} title={art("Eigenes System")} sub={art("auf Ihrem Server")} color={C.ink}>
        <rect x="-10" y="-10" width="20" height="8" rx="2" fill={C.white} />
        <rect x="-10" y="1" width="20" height="8" rx="2" fill={C.white} opacity=".75" />
        <circle cx="-6" cy="-6" r="1.4" fill={C.ink} />
        <circle cx="-6" cy="5" r="1.4" fill={C.ink} />
      </Card>
      {/* hub dots on lines */}
      <Node x={166} y={132} r={6} />
      <Node x={394} y={132} r={6} color={C.net} />
      <Node x={166} y={327} r={6} color={C.net} />
      <Node x={394} y={327} r={6} />
      {/* badge */}
      <g transform="translate(206 404)">
        <rect width="148" height="30" rx="15" fill={C.white} stroke={C.s200} />
        <Flag x={14} y={9.6} w={18} />
        <text x="40" y="19.5" fontSize="10" fontWeight="700" fill={C.ink}>{art("Hetzner · Deutschland")}</text>
      </g>
    </Art>
  );
}

function Work247Art() {
  return (
    <Art w={320} h={200} label={art("Grafik: work247 zeigt Immobilien aus dem CRM als Widget auf der Website")}>
      <rect width="320" height="200" rx="16" fill={C.net0} />
      <Win x={18} y={18} w={200} h={164} title={art("Immobilien")}>
        {[0, 1].map((i) => (
          <g key={i} transform={`translate(${10 + i * 94} 10)`}>
            <rect width="86" height="120" rx="8" fill={C.white} stroke={C.s200} />
            <rect x="0" y="0" width="86" height="56" rx="8" fill={i ? "#c7d2fe" : C.net1} />
            <path d="M24 44V30l19-14 19 14v14Z" fill={C.white} />
            <rect x="38" y="34" width="10" height="10" fill={i ? "#c7d2fe" : C.net1} />
            <Bar x={8} y={66} w={60} h={6} fill={C.ink} />
            <Bar x={8} y={78} w={48} h={4} />
            <text x="8" y="104" fontSize="10" fontWeight="800" fill={C.hi}>{i ? "1.290 €" : "489.000 €"}</text>
          </g>
        ))}
      </Win>
      <g transform="translate(200 40)">
        <rect width="104" height="120" rx="12" fill={C.white} stroke={C.s200} />
        <rect x="10" y="10" width="84" height="22" rx="6" fill={C.hi} />
        <text x="52" y="25" textAnchor="middle" fontSize="9" fontWeight="700" fill={C.white}>{art("PDF-Exposé")}</text>
        <Bar x={10} y={42} w={70} h={5} fill={C.s300} />
        <Bar x={10} y={52} w={84} h={4} />
        <Bar x={10} y={60} w={60} h={4} />
        <Check x={18} y={84} r={6} />
        <text x="28" y="87" fontSize="8" fill={C.s700}>{art("Lead im CRM")}</text>
        <Check x={18} y={102} r={6} fill={C.net} />
        <text x="28" y="105" fontSize="8" fill={C.s700}>{art("OpenImmo-Import")}</text>
      </g>
    </Art>
  );
}

function BookiqueArt() {
  const days = Array.from({ length: 21 }, (_, i) => i);
  return (
    <Art w={320} h={200} label={art("Grafik: Bookique zeigt einen Buchungskalender im Shopify-Shop")}>
      <rect width="320" height="200" rx="16" fill={C.hi0} />
      <Win x={18} y={18} w={176} h={164} title={art("Termin buchen")}>
        <Bar x={12} y={10} w={70} h={7} fill={C.ink} />
        {days.map((d) => {
          const x = 12 + (d % 7) * 22;
          const y = 26 + Math.floor(d / 7) * 22;
          const sel = d === 9;
          return (
            <g key={d}>
              <rect x={x} y={y} width="18" height="18" rx="5" fill={sel ? C.hi : d % 5 === 0 ? C.s100 : C.white} stroke={sel ? C.hi : C.s200} />
              <text x={x + 9} y={y + 12.5} textAnchor="middle" fontSize="7.5" fontWeight={sel ? 800 : 500} fill={sel ? C.white : C.s700}>{d + 1}</text>
            </g>
          );
        })}
        {["09:00", "10:30", "14:00"].map((t, i) => (
          <g key={t} transform={`translate(${12 + i * 50} 100)`}>
            <rect width="44" height="18" rx="9" fill={i === 1 ? C.ink : C.white} stroke={i === 1 ? C.ink : C.s300} />
            <text x="22" y="12.5" textAnchor="middle" fontSize="8" fontWeight="700" fill={i === 1 ? C.white : C.ink}>{t}</text>
          </g>
        ))}
      </Win>
      <g transform="translate(186 40)">
        <rect width="120" height="56" rx="12" fill={C.ink} />
        <path d="M22 16l2.5 6 6 2.5-6 2.5L22 33l-2.5-6-6-2.5 6-2.5Z" fill={C.hi} />
        <text x="38" y="24" fontSize="9" fontWeight="700" fill={C.white}>{art("KI-Assistent")}</text>
        <text x="38" y="37" fontSize="7.5" fill={C.s300}>{art("„Yogakurs anlegen“")}</text>
      </g>
      <g transform="translate(186 106)">
        <rect width="120" height="56" rx="12" fill={C.white} stroke={C.s200} />
        <Check x={20} y={28} r={9} />
        <text x="36" y="25" fontSize="9" fontWeight="700" fill={C.ink}>{art("Gebucht")}</text>
        <text x="36" y="38" fontSize="7.5" fill={C.s500}>{art("bezahlt im Checkout")}</text>
      </g>
    </Art>
  );
}

function GaranArt() {
  return (
    <Art w={320} h={200} label={art("Grafik: GARAN-Label zeigt Gewährleistungshinweis und Haltbarkeitslabel auf der Produktseite")}>
      <rect width="320" height="200" rx="16" fill={C.s100} />
      <Win x={18} y={18} w={284} h={164} title={art("Produktseite")}>
        <rect x="12" y="10" width="100" height="100" rx="10" fill={C.net1} />
        <rect x="38" y="30" width="48" height="60" rx="8" fill={C.white} />
        <circle cx="62" cy="52" r="10" fill={C.net} opacity=".7" />
        <Bar x={122} y={12} w={110} h={9} fill={C.ink} />
        <text x="122" y="40" fontSize="12" fontWeight="800" fill={C.ink}>149,00 €</text>
        <rect x="122" y="48" width="80" height="20" rx="10" fill={C.ink} />
        <text x="162" y="61.5" textAnchor="middle" fontSize="8.5" fontWeight="700" fill={C.white}>{art("In den Warenkorb")}</text>
        {/* label */}
        <g transform="translate(212 44)">
          <rect width="56" height="62" rx="8" fill={C.white} stroke={C.ink} strokeWidth="2" />
          <rect width="56" height="18" rx="8" fill={C.ink} />
          <rect y="10" width="56" height="8" fill={C.ink} />
          <text x="28" y="13" textAnchor="middle" fontSize="7.5" fontWeight="800" fill={C.white}>{art("GARANTIE")}</text>
          <text x="28" y="40" textAnchor="middle" fontSize="16" fontWeight="800" fill={C.hi}>5</text>
          <text x="28" y="53" textAnchor="middle" fontSize="7" fontWeight="700" fill={C.ink}>{art("JAHRE")}</text>
        </g>
        {/* legal notice */}
        <rect x="12" y="118" width="260" height="18" rx="6" fill={C.hi0} stroke={C.hi1} />
        <circle cx="24" cy="127" r="5" fill={C.hi} />
        <text x="21.6" y="130" fontSize="8" fontWeight="800" fill={C.white}>i</text>
        <text x="34" y="130" fontSize="7.5" fill={C.s700}>{art("Gesetzliche Gewährleistung: mindestens 2 Jahre (EU)")}</text>
      </Win>
    </Art>
  );
}

function ElektroPflichtArt() {
  return (
    <Art w={320} h={200} label={art("Grafik: ElektroPflicht zeigt Batterie-Hinweis, Rücknahme-Symbol und Ladegerät-Piktogramm auf der Produktseite")}>
      <rect width="320" height="200" rx="16" fill={C.s100} />
      <Win x={18} y={18} w={284} h={164} title={art("Produktseite")}>
        <rect x="12" y="10" width="84" height="84" rx="10" fill={C.net1} />
        <path d="M34 58 C34 34 74 34 74 58" fill="none" stroke={C.ink} strokeWidth="6" strokeLinecap="round" />
        <rect x="28" y="54" width="14" height="22" rx="6" fill={C.ink} />
        <rect x="66" y="54" width="14" height="22" rx="6" fill={C.ink} />
        <Bar x={106} y={12} w={100} h={9} fill={C.ink} />
        <text x="106" y="38" fontSize="12" fontWeight="800" fill={C.ink}>59,90 €</text>
        {/* charger pictogram: no charger included, 5–18 W */}
        <g transform="translate(106 46)">
          <rect width="24" height="24" rx="3" fill={C.white} stroke={C.ink} strokeWidth="1.6" />
          <path d="M8 6v5M16 6v5M6 11h12v3a6 6 0 0 1-12 0z M12 20v2" fill="none" stroke={C.ink} strokeWidth="1.4" />
          <path d="M4 21L20 3" stroke={C.ink} strokeWidth="1.6" />
          <rect x="28" width="34" height="24" rx="3" fill={C.white} stroke={C.ink} strokeWidth="1.6" />
          <text x="45" y="11" textAnchor="middle" fontSize="7.5" fontWeight="800" fill={C.ink}>5–18 W</text>
          <text x="45" y="20" textAnchor="middle" fontSize="5.5" fontWeight="700" fill={C.ink}>USB PD</text>
        </g>
        <rect x="178" y="48" width="88" height="20" rx="10" fill={C.ink} />
        <text x="222" y="61.5" textAnchor="middle" fontSize="8" fontWeight="700" fill={C.white}>{art("In den Warenkorb")}</text>
        {/* battery notice with the crossed-out wheeled bin */}
        <rect x="12" y="102" width="260" height="40" rx="6" fill={C.white} stroke={C.s200} />
        <g transform="translate(22 108)" stroke={C.ink} strokeWidth="1.4" fill="none">
          <path d="M3 6h14M5 6l1.5 18h7L15 6M8 3h4" />
          <path d="M1 2L19 26M19 2L1 26" />
        </g>
        <text x="50" y="118" fontSize="8" fontWeight="700" fill={C.ink}>{art("Hinweise zu Batterien")}</text>
        <Bar x={50} y={124} w={150} h={5} fill={C.s200} />
        <text x="50" y="138" fontSize="7" fill={C.hi}>{art("Kostenlose Rücknahme")}</text>
      </Win>
    </Art>
  );
}

export const REFERENCE_ART: Record<Reference["id"], () => JSX.Element> = {
  work247: Work247Art,
  bookique: BookiqueArt,
  garan: GaranArt,
  elektropflicht: ElektroPflichtArt,
};
