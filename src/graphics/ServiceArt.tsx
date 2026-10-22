// One drawn graphic per service (480×320). Used on the homepage cards and on each service page.
import type { ServiceId } from "../content/ids";
import { Art, Bar, C, Check, Flag, Glow, Node, Pill, Win } from "./kit";

function WebsitesArt() {
  return (
    <Art w={480} h={320} label="Grafik: Website im Browser und auf dem Smartphone, optimiert für Suchmaschinen und KI-Suche">
      <Glow cx={250} cy={160} r={140} />
      <Win x={36} y={34} w={330} h={226}>
        {/* address bar */}
        <rect x="60" y="-18" width="210" height="12" rx="6" fill={C.white} stroke={C.s200} />
        <text x="165" y="-9" textAnchor="middle" fontSize="7.5" fill={C.s500}>ihre-firma.de</text>
        {/* nav */}
        <rect x="14" y="12" width="14" height="14" rx="4" fill={C.navy} />
        <Bar x={34} y={16} w={40} h={6} fill={C.navy} />
        <Bar x={170} y={16} w={26} />
        <Bar x={204} y={16} w={26} />
        <Bar x={238} y={16} w={26} />
        <rect x="274" y="11" width="44" height="16" rx="8" fill={C.orange} />
        {/* hero */}
        <Bar x={14} y={46} w={150} h={11} fill={C.navy} />
        <Bar x={14} y={62} w={118} h={11} fill={C.navy} />
        <Bar x={14} y={84} w={160} />
        <Bar x={14} y={95} w={140} />
        <Bar x={14} y={106} w={120} />
        <rect x="14" y="122" width="70" height="20" rx="10" fill={C.orange} />
        <rect x="90" y="122" width="62" height="20" rx="10" fill={C.white} stroke={C.s300} />
        {/* hero visual */}
        <rect x="190" y="42" width="128" height="100" rx="10" fill={C.net0} stroke={C.net1} />
        <path d="M204 124L232 98L252 110L282 74L304 88" stroke={C.net} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <Node x={282} y={74} r={6} />
        {/* cards */}
        {[14, 116, 218].map((x) => (
          <g key={x}>
            <rect x={x} y="156" width="96" height="40" rx="8" fill={C.s50} stroke={C.s200} />
            <rect x={x + 8} y="164" width="12" height="12" rx="3" fill={C.net1} />
            <Bar x={x + 26} y={166} w={50} h={5} fill={C.s300} />
            <Bar x={x + 8} y={183} w={76} h={4} />
          </g>
        ))}
      </Win>
      {/* phone */}
      <g transform="translate(330 96)">
        <rect x="3" y="6" width="108" height="196" rx="20" fill={C.navy} opacity=".1" />
        <rect width="108" height="196" rx="20" fill={C.navy} />
        <rect x="7" y="8" width="94" height="180" rx="14" fill={C.white} />
        <rect x="40" y="13" width="28" height="5" rx="2.5" fill={C.navy} />
        <Bar x={16} y={30} w={60} h={8} fill={C.navy} />
        <Bar x={16} y={42} w={44} h={8} fill={C.navy} />
        <Bar x={16} y={58} w={74} h={4} />
        <Bar x={16} y={66} w={66} h={4} />
        <rect x="16" y="78" width="50" height="15" rx="7.5" fill={C.orange} />
        <rect x="16" y="102" width="76" height="52" rx="8" fill={C.net0} stroke={C.net1} />
        <path d="M24 144l16-14 10 6 18-20 14 8" stroke={C.net} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <Bar x={16} y={164} w={70} h={4} />
        <Bar x={16} y={172} w={54} h={4} />
      </g>
      {/* search badge */}
      <g transform="translate(20 236)">
        <rect x="2" y="4" width="196" height="58" rx="12" fill={C.navy} opacity=".08" />
        <rect width="196" height="58" rx="12" fill={C.white} stroke={C.s200} />
        <circle cx="22" cy="20" r="7" fill="none" stroke={C.net} strokeWidth="2.5" />
        <path d="M27 25l5 5" stroke={C.net} strokeWidth="2.5" strokeLinecap="round" />
        <text x="40" y="24" fontSize="10" fontWeight="700" fill={C.navy}>Google & KI-Suche</text>
        <Check x={22} y={42} r={6} />
        <text x="34" y="45.5" fontSize="9" fill={C.s700}>vorgerendert · schema.org · llms.txt</text>
      </g>
    </Art>
  );
}

function ExtensionsArt() {
  const platforms = [
    { y: 46, name: "Shopify", color: "#5e8e3e" },
    { y: 112, name: "GoHighLevel", color: "#1d63f1" },
    { y: 178, name: "HubSpot", color: "#ff7a59" },
    { y: 244, name: "WordPress", color: "#21759b" },
  ];
  return (
    <Art w={480} h={320} label="Grafik: Eigene Erweiterung wird wie ein Puzzleteil in Shopify, GoHighLevel, HubSpot oder WordPress eingesetzt">
      <Glow cx={300} cy={160} r={140} color={C.orange0} />
      {/* platform chips */}
      {platforms.map((p) => (
        <g key={p.name}>
          <path d={`M132 ${p.y + 15}C170 ${p.y + 15} 170 160 196 160`} stroke={C.s300} strokeWidth="2" fill="none" strokeDasharray="4 4" />
          <rect x="18" y={p.y} width="114" height="30" rx="15" fill={C.white} stroke={C.s200} />
          <circle cx="36" cy={p.y + 15} r="7" fill={p.color} />
          <text x="50" y={p.y + 19} fontSize="10.5" fontWeight="700" fill={C.navy}>{p.name}</text>
        </g>
      ))}
      {/* admin window */}
      <Win x={196} y={40} w={262} h={240} title="Admin">
        <rect x="0" y="0" width="62" height="216" fill={C.s50} />
        <path d="M0 216H62V0" stroke={C.s200} fill="none" />
        {[14, 32, 50, 68, 86].map((y, i) => (
          <g key={y}>
            <rect x="10" y={y} width="8" height="8" rx="2" fill={i === 4 ? C.orange : C.s300} />
            <Bar x={22} y={y + 1} w={30} h={6} fill={i === 4 ? C.orange : C.s200} />
          </g>
        ))}
        <Bar x={76} y={14} w={90} h={9} fill={C.navy} />
        <Bar x={76} y={30} w={140} h={5} />
        {/* existing content */}
        <rect x="76" y="46" width="172" height="44" rx="8" fill={C.s50} stroke={C.s200} />
        <Bar x={86} y={56} w={80} h={6} fill={C.s300} />
        <Bar x={86} y={70} w={120} h={5} />
        {/* slot for the extension */}
        <rect x="76" y="102" width="172" height="100" rx="10" fill={C.orange0} stroke={C.orange} strokeWidth="1.5" strokeDasharray="5 4" />
      </Win>
      {/* puzzle piece snapping in */}
      <g transform="translate(286 156)">
        <path
          d="M0 10A10 10 0 0 1 10 0H58A12 12 0 1 1 82 0H140A10 10 0 0 1 150 10V44A12 12 0 1 0 150 68V84A10 10 0 0 1 140 94H10A10 10 0 0 1 0 84Z"
          fill={C.orange}
          transform="translate(-4 -10) scale(.92)"
        />
        <text x="62" y="26" textAnchor="middle" fontSize="12" fontWeight="800" fill={C.white}>Ihre Funktion</text>
        <Bar x={18} y={38} w={88} h={5} fill="#ffd0a1" />
        <Bar x={18} y={49} w={70} h={5} fill="#ffd0a1" />
        <rect x="18" y="60" width="44" height="12" rx="6" fill={C.white} />
      </g>
      <path d="M392 120l12-12m0 0h-9m9 0v9" stroke={C.orange} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Art>
  );
}

function CustomArt() {
  const bars = [38, 56, 44, 72, 64, 88, 80];
  return (
    <Art w={480} h={320} label="Grafik: Eigenes Software-Dashboard, geschützt und auf einem Server in Deutschland betrieben">
      <Glow cx={230} cy={160} r={145} />
      <Win x={26} y={30} w={360} h={244} title="ihr-system.de">
        <rect x="0" y="0" width="74" height="220" fill={C.navy} />
        <path d="M0 208V0h74v208a12 12 0 0 1 -12 12H12A12 12 0 0 1 0 208Z" fill={C.navy} />
        <Node x={20} y={20} r={7} />
        <Bar x={32} y={17} w={30} h={6} fill={C.white} />
        {[46, 66, 86, 106, 126].map((y, i) => (
          <g key={y}>
            <rect x="8" y={y - 6} width="58" height="16" rx="5" fill={i === 0 ? C.navy7 : "none"} />
            <rect x="14" y={y - 1} width="7" height="7" rx="2" fill={i === 0 ? C.orange : C.s400} />
            <Bar x={26} y={y} w={30} h={5} fill={i === 0 ? C.white : C.s500} />
          </g>
        ))}
        {/* KPI tiles */}
        {[
          { x: 86, v: "128", l: "Aufträge", c: C.net },
          { x: 176, v: "96 %", l: "pünktlich", c: C.green },
          { x: 266, v: "14", l: "offen", c: C.orange },
        ].map((k) => (
          <g key={k.x}>
            <rect x={k.x} y="12" width="82" height="48" rx="8" fill={C.white} stroke={C.s200} />
            <text x={k.x + 10} y="34" fontSize="15" fontWeight="800" fill={C.navy}>{k.v}</text>
            <circle cx={k.x + 13} cy="47" r="3" fill={k.c} />
            <text x={k.x + 20} y="50" fontSize="8" fill={C.s500}>{k.l}</text>
          </g>
        ))}
        {/* chart */}
        <rect x="86" y="70" width="172" height="90" rx="8" fill={C.white} stroke={C.s200} />
        <Bar x={96} y={80} w={60} h={5} fill={C.s300} />
        {bars.map((h, i) => (
          <rect key={i} x={100 + i * 22} y={150 - h} width="12" height={h} rx="3" fill={i === 5 ? C.orange : C.net} opacity={i === 5 ? 1 : 0.85} />
        ))}
        {/* list */}
        <rect x="266" y="70" width="82" height="138" rx="8" fill={C.white} stroke={C.s200} />
        {[84, 108, 132, 156, 180].map((y, i) => (
          <g key={y}>
            <circle cx="278" cy={y} r="5" fill={[C.net1, C.orange1, C.green1, C.net1, C.orange1][i]} />
            <Bar x={288} y={y - 4} w={48} h={4} fill={C.s300} />
            <Bar x={288} y={y + 2} w={34} h={3} />
          </g>
        ))}
        {/* table */}
        <rect x="86" y="168" width="172" height="40" rx="8" fill={C.s50} stroke={C.s200} />
        <Bar x={96} y={178} w={152} h={5} fill={C.s300} />
        <Bar x={96} y={190} w={120} h={5} />
      </Win>
      {/* server + shield */}
      <g transform="translate(366 150)">
        <rect x="0" y="0" width="96" height="120" rx="12" fill={C.navy} />
        {[14, 46, 78].map((y) => (
          <g key={y}>
            <rect x="10" y={y} width="76" height="24" rx="5" fill={C.navy7} />
            <circle cx="22" cy={y + 12} r="3" fill="#4ade80" />
            <Bar x={32} y={y + 9} w={30} h={5} fill={C.s500} />
          </g>
        ))}
        <Flag x={66} y={128} w={22} />
        <text x="0" y="141" fontSize="9" fontWeight="700" fill={C.navy}>Server DE</text>
      </g>
      <g transform="translate(340 110)">
        <path d="M24 0L46 8V24C46 38 37 48 24 54C11 48 2 38 2 24V8Z" fill={C.orange} stroke={C.white} strokeWidth="3" />
        <rect x="16" y="22" width="16" height="13" rx="2.5" fill={C.white} />
        <path d="M19 22v-4a5 5 0 0 1 10 0v4" stroke={C.white} strokeWidth="2.5" fill="none" />
      </g>
    </Art>
  );
}

function AgentsArt() {
  const node = (x: number, y: number, title: string, sub: string, color: string, icon: string) => (
    <g transform={`translate(${x} ${y})`}>
      <rect x="1" y="3" width="104" height="46" rx="10" fill={C.navy} opacity=".08" />
      <rect width="104" height="46" rx="10" fill={C.white} stroke={C.s200} />
      <rect x="8" y="9" width="28" height="28" rx="7" fill={color} />
      <text x="22" y="28" textAnchor="middle" fontSize="13" fontWeight="800" fill={C.white}>{icon}</text>
      <text x="42" y="21" fontSize="9.5" fontWeight="700" fill={C.navy}>{title}</text>
      <text x="42" y="33" fontSize="8" fill={C.s500}>{sub}</text>
    </g>
  );
  return (
    <Art w={480} h={320} label="Grafik: Workflow mit KI-Agent, der Anfragen liest und an CRM, E-Mail und Team weitergibt">
      <defs>
        <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill={C.s300} />
        </pattern>
      </defs>
      <rect x="8" y="8" width="464" height="304" rx="18" fill={C.s50} />
      <rect x="8" y="8" width="464" height="304" rx="18" fill="url(#dots)" />
      {/* connections */}
      <g stroke={C.s400} strokeWidth="2" fill="none">
        <path d="M122 112C150 112 150 140 176 140" />
        <path d="M304 140C328 140 328 66 352 66" />
        <path d="M304 140C328 140 328 140 352 140" />
        <path d="M304 140C328 140 328 214 352 214" />
        <path d="M206 176V226" strokeDasharray="4 4" />
        <path d="M240 176V226" strokeDasharray="4 4" />
        <path d="M274 176V226" strokeDasharray="4 4" />
      </g>
      {node(18, 89, "Neue Anfrage", "per E-Mail", C.net, "@")}
      {/* agent */}
      <g transform="translate(176 104)">
        <rect x="2" y="4" width="128" height="72" rx="14" fill={C.orange} opacity=".2" />
        <rect width="128" height="72" rx="14" fill={C.navy} />
        <path d="M24 22l3.5 8.5L36 34l-8.5 3.5L24 46l-3.5-8.5L12 34l8.5-3.5Z" fill={C.orange} />
        <path d="M38 14l1.6 3.9 3.9 1.6-3.9 1.6L38 25l-1.6-3.9-3.9-1.6 3.9-1.6Z" fill={C.net4} />
        <text x="48" y="31" fontSize="12" fontWeight="800" fill={C.white}>KI-Agent</text>
        <text x="48" y="45" fontSize="8.5" fill={C.s300}>versteht & handelt</text>
        <rect x="48" y="52" width="58" height="11" rx="5.5" fill={C.navy7} />
        <circle cx="55" cy="57.5" r="2.5" fill="#4ade80" />
        <text x="61" y="60.5" fontSize="7" fill={C.s300}>aktiv</text>
      </g>
      {/* sub tools */}
      {[
        { x: 180, t: "Modell" },
        { x: 220, t: "Wissen" },
        { x: 260, t: "Tools" },
      ].map((s, i) => (
        <g key={s.t} transform={`translate(${s.x + (i - 1) * 8} 226)`}>
          <rect width="52" height="26" rx="13" fill={C.white} stroke={C.net} strokeWidth="1.5" />
          <text x="26" y="17" textAnchor="middle" fontSize="9" fontWeight="700" fill={C.net}>{s.t}</text>
        </g>
      ))}
      {node(352, 43, "CRM", "angelegt", C.green, "✓")}
      {node(352, 117, "Antwort", "zur Freigabe", C.orange, "✎")}
      {node(352, 191, "Team", "informiert", C.navy7, "!")}
      <Node x={122} y={112} r={5} color={C.net} />
      <Node x={304} y={140} r={5} />
      {/* platform labels */}
      <g transform="translate(22 270)">
        {["n8n", "Make", "Zapier", "eigene API"].map((p, i) => (
          <Pill key={p} x={i * 70} y={0} text={p} size={9} w={62} />
        ))}
      </g>
    </Art>
  );
}

function ApisArt() {
  return (
    <Art w={480} h={320} label="Grafik: Schnittstelle verbindet Shop, CRM und Warenwirtschaft und tauscht Daten in beide Richtungen aus">
      <Glow cx={240} cy={130} r={130} />
      {/* systems */}
      {[
        { x: 20, y: 40, t: "Shop", s: "Bestellungen", c: "#5e8e3e" },
        { x: 20, y: 150, t: "Fachsoftware", s: "OpenImmo · XML", c: C.navy7 },
        { x: 340, y: 40, t: "CRM", s: "Kontakte", c: C.net },
        { x: 340, y: 150, t: "Warenwirtschaft", s: "Lager · Rechnungen", c: C.orange },
      ].map((b) => (
        <g key={b.t} transform={`translate(${b.x} ${b.y})`}>
          <rect x="2" y="4" width="120" height="70" rx="12" fill={C.navy} opacity=".08" />
          <rect width="120" height="70" rx="12" fill={C.white} stroke={C.s200} />
          <rect x="12" y="12" width="22" height="22" rx="6" fill={b.c} />
          <rect x="17" y="18" width="12" height="2.5" rx="1.25" fill={C.white} />
          <rect x="17" y="22.5" width="12" height="2.5" rx="1.25" fill={C.white} />
          <rect x="17" y="27" width="8" height="2.5" rx="1.25" fill={C.white} />
          <text x="40" y="22" fontSize="10.5" fontWeight="700" fill={C.navy}>{b.t}</text>
          <text x="40" y="34" fontSize="8" fill={C.s500}>{b.s}</text>
          <Bar x={12} y={46} w={96} h={4} />
          <Bar x={12} y={55} w={70} h={4} />
        </g>
      ))}
      {/* links */}
      <g stroke={C.net} strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M140 75H200" />
        <path d="M140 185C170 185 180 120 204 112" />
        <path d="M280 112C304 120 312 75 340 75" />
        <path d="M280 120C310 130 310 185 340 185" />
      </g>
      <g fill={C.orange}>
        <circle cx="170" cy="75" r="4" />
        <circle cx="312" cy="82" r="4" />
        <circle cx="318" cy="168" r="4" />
        <circle cx="175" cy="150" r="4" />
      </g>
      {/* hub */}
      <g transform="translate(240 112)">
        <path d="M0 -44L38 -22V22L0 44L-38 22V-22Z" fill={C.navy} />
        <path d="M0 -34L29 -17V17L0 34L-29 17V-17Z" fill="none" stroke={C.net4} strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="0" y="5" textAnchor="middle" fontSize="15" fontWeight="800" fill={C.white}>API</text>
      </g>
      {/* code card */}
      <g transform="translate(130 228)">
        <rect x="2" y="4" width="220" height="80" rx="12" fill={C.navy} opacity=".1" />
        <rect width="220" height="80" rx="12" fill={C.navy} />
        <text x="14" y="22" fontSize="9.5" fontFamily="ui-monospace, Menlo, monospace" fill={C.net4}>
          <tspan fontWeight="700" fill="#4ade80">POST</tspan> /webhooks/orders
        </text>
        <text x="14" y="40" fontSize="9" fontFamily="ui-monospace, Menlo, monospace" fill={C.s300}>{'{ "id": 1042, "status": "paid",'}</text>
        <text x="14" y="54" fontSize="9" fontFamily="ui-monospace, Menlo, monospace" fill={C.s300}>{'  "sync": ["crm", "erp"] }'}</text>
        <rect x="14" y="61" width="58" height="13" rx="6.5" fill="#14532d" />
        <text x="43" y="70.5" textAnchor="middle" fontSize="8" fontWeight="700" fill="#4ade80">200 OK</text>
        <text x="80" y="71" fontSize="8" fill={C.s400}>protokolliert · 38 ms</text>
      </g>
    </Art>
  );
}

function HostingArt() {
  const usage = [14, 18, 22, 30, 38, 52, 66, 84, 104, 128];
  return (
    <Art w={480} h={320} label="Grafik: Cloud-Server in Deutschland, Serverleistung wächst stufenweise mit der Nutzung">
      <Glow cx={130} cy={170} r={120} color={C.orange0} />
      {/* rack */}
      <g transform="translate(34 46)">
        <rect x="3" y="6" width="150" height="216" rx="16" fill={C.navy} opacity=".1" />
        <rect width="150" height="216" rx="16" fill={C.navy} />
        {[16, 64, 112, 160].map((y, i) => (
          <g key={y}>
            <rect x="12" y={y} width="126" height="40" rx="8" fill={C.navy7} />
            <circle cx="28" cy={y + 20} r="4" fill={i < 3 ? "#4ade80" : C.s500} />
            <circle cx="42" cy={y + 20} r="4" fill={i < 2 ? C.net4 : C.s500} />
            {[0, 1, 2, 3, 4].map((k) => (
              <rect key={k} x={78 + k * 10} y={y + 10} width="5" height="20" rx="2" fill={C.s500} opacity=".6" />
            ))}
          </g>
        ))}
      </g>
      <g transform="translate(34 274)">
        <Flag x={0} y={2} w={22} />
        <text x="30" y="13" fontSize="10.5" fontWeight="700" fill={C.navy}>Rechenzentrum Deutschland</text>
      </g>
      {/* chart */}
      <g transform="translate(212 40)">
        <rect width="250" height="214" rx="14" fill={C.white} stroke={C.s200} />
        <text x="16" y="24" fontSize="10.5" fontWeight="700" fill={C.navy}>Kosten wachsen mit dem Erfolg</text>
        <path d="M16 186H234" stroke={C.s200} />
        {usage.map((h, i) => (
          <rect key={i} x={22 + i * 21} y={186 - h} width="13" height={h} rx="3" fill={C.net} opacity=".8" />
        ))}
        {/* stepped server capacity */}
        <path d="M18 160H80V140H122V112H164V70H234" stroke={C.orange} strokeWidth="3" fill="none" strokeLinejoin="round" strokeLinecap="round" />
        <g fontSize="8" fontWeight="600" fill={C.s500}>
          <text x="22" y="202">Start</text>
          <text x="96" y="202">Wachstum</text>
          <text x="176" y="202">Skalierung</text>
        </g>
        <g transform="translate(16 36)">
          <rect width="8" height="8" rx="2" fill={C.net} />
          <text x="12" y="7.5" fontSize="8" fill={C.s500}>Nutzung</text>
          <rect x="62" y="3" width="12" height="3" rx="1.5" fill={C.orange} />
          <text x="78" y="7.5" fontSize="8" fill={C.s500}>Serverleistung</text>
        </g>
      </g>
      <Pill x={300} y={268} text="ab wenigen Euro im Monat" size={9.5} fill={C.orange0} stroke={C.orange1} color={C.orange} />
    </Art>
  );
}

export const SERVICE_ART: Record<ServiceId, () => JSX.Element> = {
  websites: WebsitesArt,
  extensions: ExtensionsArt,
  custom: CustomArt,
  agents: AgentsArt,
  apis: ApisArt,
  hosting: HostingArt,
};

export function ServiceArt({ id, className = "" }: { id: ServiceId; className?: string }) {
  const Comp = SERVICE_ART[id];
  return (
    <div className={className}>
      <Comp />
    </div>
  );
}
