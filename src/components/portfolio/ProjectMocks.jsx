import React from "react";

/**
 * 5 unique abstract mockups for each project.
 * Pure SVG/CSS — no external images. Each one reflects the project domain.
 */

export const MockCorporateWeb = () => (
  <svg viewBox="0 0 400 280" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="400" height="280" fill="var(--surface-alt)" />
    {/* Browser bar */}
    <rect x="20" y="20" width="360" height="32" fill="var(--surface)" stroke="var(--border)" />
    <circle cx="34" cy="36" r="4" fill="#ef4444" />
    <circle cx="48" cy="36" r="4" fill="#f59e0b" />
    <circle cx="62" cy="36" r="4" fill="#10b981" />
    <rect x="90" y="28" width="200" height="16" fill="var(--bg)" stroke="var(--border)" />
    <text x="100" y="40" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--text-secondary)">vincco.com.mx</text>

    {/* Hero block */}
    <rect x="20" y="64" width="360" height="100" fill="var(--surface)" stroke="var(--border)" />
    <rect x="36" y="80" width="160" height="10" fill="var(--text-primary)" opacity="0.85" />
    <rect x="36" y="98" width="220" height="6" fill="var(--text-secondary)" opacity="0.55" />
    <rect x="36" y="110" width="180" height="6" fill="var(--text-secondary)" opacity="0.4" />
    <rect x="36" y="130" width="70" height="20" fill="var(--accent)" />
    <rect x="116" y="130" width="70" height="20" fill="none" stroke="var(--border)" />

    {/* 3 columns */}
    <rect x="20" y="178" width="113" height="80" fill="var(--surface)" stroke="var(--border)" />
    <rect x="143" y="178" width="113" height="80" fill="var(--surface)" stroke="var(--border)" />
    <rect x="266" y="178" width="114" height="80" fill="var(--surface)" stroke="var(--border)" />
    <circle cx="40" cy="198" r="8" fill="var(--accent)" opacity="0.8" />
    <circle cx="163" cy="198" r="8" fill="var(--accent)" opacity="0.8" />
    <circle cx="286" cy="198" r="8" fill="var(--accent)" opacity="0.8" />
    <rect x="32" y="215" width="80" height="5" fill="var(--text-primary)" opacity="0.75" />
    <rect x="155" y="215" width="80" height="5" fill="var(--text-primary)" opacity="0.75" />
    <rect x="278" y="215" width="80" height="5" fill="var(--text-primary)" opacity="0.75" />
    <rect x="32" y="226" width="90" height="3" fill="var(--text-secondary)" opacity="0.5" />
    <rect x="32" y="232" width="70" height="3" fill="var(--text-secondary)" opacity="0.5" />
    <rect x="155" y="226" width="90" height="3" fill="var(--text-secondary)" opacity="0.5" />
    <rect x="155" y="232" width="70" height="3" fill="var(--text-secondary)" opacity="0.5" />
    <rect x="278" y="226" width="90" height="3" fill="var(--text-secondary)" opacity="0.5" />
    <rect x="278" y="232" width="70" height="3" fill="var(--text-secondary)" opacity="0.5" />
  </svg>
);

export const MockInventorySEC = () => (
  <svg viewBox="0 0 400 280" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="400" height="280" fill="var(--surface-alt)" />
    {/* Sidebar */}
    <rect x="0" y="0" width="80" height="280" fill="var(--surface)" stroke="var(--border)" />
    <rect x="12" y="20" width="56" height="6" fill="var(--accent)" />
    <rect x="12" y="50" width="56" height="4" fill="var(--text-secondary)" opacity="0.5" />
    <rect x="12" y="62" width="40" height="4" fill="var(--text-secondary)" opacity="0.5" />
    <rect x="12" y="74" width="50" height="4" fill="var(--text-secondary)" opacity="0.5" />
    <rect x="12" y="98" width="56" height="16" fill="var(--accent-soft)" stroke="var(--accent)" />
    <rect x="12" y="122" width="48" height="4" fill="var(--text-secondary)" opacity="0.5" />
    <rect x="12" y="134" width="56" height="4" fill="var(--text-secondary)" opacity="0.5" />

    {/* Topbar */}
    <rect x="80" y="0" width="320" height="40" fill="var(--surface)" stroke="var(--border)" />
    <rect x="100" y="14" width="120" height="12" fill="var(--text-primary)" opacity="0.85" />
    <circle cx="370" cy="20" r="10" fill="var(--surface-alt)" stroke="var(--border)" />

    {/* KPI cards */}
    <rect x="96" y="56" width="92" height="58" fill="var(--surface)" stroke="var(--border)" />
    <rect x="200" y="56" width="92" height="58" fill="var(--surface)" stroke="var(--border)" />
    <rect x="304" y="56" width="84" height="58" fill="var(--surface)" stroke="var(--border)" />
    <text x="106" y="76" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="var(--text-secondary)">ACTIVOS</text>
    <text x="106" y="100" fontFamily="Cabinet Grotesk, sans-serif" fontSize="20" fontWeight="700" fill="var(--text-primary)">1,248</text>
    <text x="210" y="76" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="var(--text-secondary)">MOVIMIENTOS</text>
    <text x="210" y="100" fontFamily="Cabinet Grotesk, sans-serif" fontSize="20" fontWeight="700" fill="var(--accent)">86</text>
    <text x="314" y="76" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="var(--text-secondary)">USUARIOS</text>
    <text x="314" y="100" fontFamily="Cabinet Grotesk, sans-serif" fontSize="20" fontWeight="700" fill="var(--text-primary)">42</text>

    {/* Table */}
    <rect x="96" y="128" width="292" height="138" fill="var(--surface)" stroke="var(--border)" />
    <rect x="96" y="128" width="292" height="22" fill="var(--surface-alt)" stroke="var(--border)" />
    {[0, 1, 2, 3, 4].map((i) => (
      <g key={i}>
        <line x1="96" y1={150 + (i + 1) * 20} x2="388" y2={150 + (i + 1) * 20} stroke="var(--border)" />
        <rect x="108" y={158 + i * 20} width="14" height="6" fill="var(--text-secondary)" opacity="0.6" />
        <rect x="140" y={158 + i * 20} width="80" height="6" fill="var(--text-primary)" opacity="0.7" />
        <rect x="240" y={158 + i * 20} width="60" height="6" fill="var(--text-secondary)" opacity="0.5" />
        <rect x="320" y={156 + i * 20} width="40" height="10" fill={i % 2 === 0 ? "#10b98133" : "var(--accent-soft)"} stroke={i % 2 === 0 ? "#10b981" : "var(--accent)"} />
      </g>
    ))}
  </svg>
);

export const MockInventoryVincco = () => (
  <svg viewBox="0 0 400 280" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="400" height="280" fill="var(--surface-alt)" />
    {/* Header */}
    <rect x="20" y="20" width="360" height="44" fill="var(--surface)" stroke="var(--border)" />
    <rect x="34" y="34" width="14" height="14" fill="var(--accent)" />
    <rect x="56" y="36" width="80" height="10" fill="var(--text-primary)" opacity="0.85" />
    <rect x="290" y="32" width="70" height="20" fill="var(--accent)" />
    <text x="305" y="46" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="white">+ ACTIVO</text>

    {/* Two column layout */}
    <rect x="20" y="76" width="170" height="184" fill="var(--surface)" stroke="var(--border)" />
    <rect x="200" y="76" width="180" height="184" fill="var(--surface)" stroke="var(--border)" />

    {/* Left: chart bars */}
    <text x="32" y="96" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--text-secondary)">STOCK · CATEGORÍA</text>
    {[
      [40, 110, 50],
      [40, 130, 110],
      [40, 150, 80],
      [40, 170, 140],
      [40, 190, 70],
      [40, 210, 100],
    ].map(([x, y, w], i) => (
      <g key={i}>
        <rect x={x} y={y} width={140} height="10" fill="var(--surface-alt)" />
        <rect x={x} y={y} width={w} height="10" fill={i % 2 ? "var(--accent)" : "var(--text-primary)"} opacity={i % 2 ? 1 : 0.5} />
      </g>
    ))}

    {/* Right: movement feed */}
    <text x="212" y="96" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="var(--text-secondary)">MOVIMIENTOS RECIENTES</text>
    {[0, 1, 2, 3, 4].map((i) => (
      <g key={i}>
        <circle cx="220" cy={120 + i * 26} r="4" fill={i === 0 ? "#10b981" : i === 1 ? "var(--accent)" : "var(--text-secondary)"} />
        <rect x="232" y={114 + i * 26} width="100" height="6" fill="var(--text-primary)" opacity="0.7" />
        <rect x="232" y={123 + i * 26} width="60" height="4" fill="var(--text-secondary)" opacity="0.5" />
      </g>
    ))}
  </svg>
);

export const MockPresentationGen = () => (
  <svg viewBox="0 0 400 280" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="400" height="280" fill="var(--surface-alt)" />

    {/* Terminal */}
    <rect x="20" y="20" width="170" height="240" fill="#0a0a0a" stroke="var(--border)" />
    <rect x="20" y="20" width="170" height="20" fill="#1a1a1a" />
    <circle cx="32" cy="30" r="3" fill="#ef4444" />
    <circle cx="42" cy="30" r="3" fill="#f59e0b" />
    <circle cx="52" cy="30" r="3" fill="#10b981" />
    <text x="30" y="58" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#10b981">$ python gen.py</text>
    <text x="30" y="74" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#94a3b8">› loading template...</text>
    <text x="30" y="90" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#94a3b8">› building slide 1/12</text>
    <text x="30" y="106" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#94a3b8">› building slide 2/12</text>
    <text x="30" y="122" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#94a3b8">› building slide 3/12</text>
    <text x="30" y="138" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#3b82f6">› inserting charts</text>
    <text x="30" y="154" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#94a3b8">› applying brand</text>
    <text x="30" y="170" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#10b981">✔ Q3-report.pptx</text>
    <rect x="30" y="180" width="120" height="6" fill="#1f2937" />
    <rect x="30" y="180" width="96" height="6" fill="#3b82f6" />
    <text x="30" y="202" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#94a3b8">80% · 9.6s elapsed</text>
    <text x="30" y="232" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#f8fafc">$ _</text>

    {/* Output slide preview */}
    <rect x="210" y="50" width="170" height="100" fill="var(--surface)" stroke="var(--border)" />
    <rect x="222" y="62" width="80" height="8" fill="var(--text-primary)" opacity="0.85" />
    <rect x="222" y="76" width="120" height="4" fill="var(--text-secondary)" opacity="0.55" />
    <rect x="222" y="86" width="100" height="4" fill="var(--text-secondary)" opacity="0.55" />
    <rect x="222" y="104" width="36" height="36" fill="var(--accent)" opacity="0.85" />
    <rect x="266" y="104" width="36" height="36" fill="var(--accent)" opacity="0.55" />
    <rect x="310" y="104" width="60" height="36" fill="var(--surface-alt)" stroke="var(--border)" />

    <rect x="210" y="160" width="170" height="100" fill="var(--surface)" stroke="var(--border)" />
    <rect x="222" y="172" width="60" height="8" fill="var(--text-primary)" opacity="0.85" />
    <rect x="222" y="190" width="146" height="3" fill="var(--text-secondary)" opacity="0.5" />
    <rect x="222" y="198" width="120" height="3" fill="var(--text-secondary)" opacity="0.5" />
    <polyline
      points="222,250 250,232 280,240 310,220 340,228 370,212"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="2"
    />
  </svg>
);

export const MockDocGen = () => (
  <svg viewBox="0 0 400 280" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="400" height="280" fill="var(--surface-alt)" />

    {/* Source YAML/JSON */}
    <rect x="20" y="20" width="150" height="240" fill="var(--surface)" stroke="var(--border)" />
    <rect x="20" y="20" width="150" height="24" fill="var(--surface-alt)" stroke="var(--border)" />
    <text x="32" y="36" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--text-secondary)">config.yaml</text>
    {[
      "doc:",
      "  title: Manual",
      "  version: 2.4",
      "  sections:",
      "    - intro",
      "    - setup",
      "    - api",
      "    - troubleshoot",
      "author: SC",
      "lang: es",
    ].map((line, i) => (
      <text
        key={i}
        x="32"
        y={62 + i * 18}
        fontFamily="JetBrains Mono, monospace"
        fontSize="9"
        fill={line.startsWith(" ") ? "var(--text-secondary)" : "var(--accent)"}
      >
        {line}
      </text>
    ))}

    {/* Arrow */}
    <line x1="178" y1="140" x2="208" y2="140" stroke="var(--accent)" strokeWidth="2" />
    <polygon points="208,140 200,135 200,145" fill="var(--accent)" />

    {/* Generated PDFs stack */}
    <g>
      <rect x="240" y="56" width="120" height="160" fill="var(--surface)" stroke="var(--border)" />
      <rect x="230" y="48" width="120" height="160" fill="var(--surface)" stroke="var(--border)" />
      <rect x="220" y="40" width="120" height="160" fill="var(--surface)" stroke="var(--border)" />
      <rect x="220" y="40" width="120" height="22" fill="var(--accent)" />
      <text x="232" y="55" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="white">MANUAL.pdf</text>
      <rect x="232" y="76" width="60" height="6" fill="var(--text-primary)" opacity="0.85" />
      <rect x="232" y="90" width="96" height="3" fill="var(--text-secondary)" opacity="0.5" />
      <rect x="232" y="98" width="88" height="3" fill="var(--text-secondary)" opacity="0.5" />
      <rect x="232" y="106" width="92" height="3" fill="var(--text-secondary)" opacity="0.5" />
      <rect x="232" y="118" width="40" height="6" fill="var(--text-primary)" opacity="0.85" />
      <rect x="232" y="132" width="96" height="3" fill="var(--text-secondary)" opacity="0.5" />
      <rect x="232" y="140" width="88" height="3" fill="var(--text-secondary)" opacity="0.5" />
      <rect x="232" y="148" width="92" height="3" fill="var(--text-secondary)" opacity="0.5" />
      <rect x="232" y="160" width="40" height="6" fill="var(--text-primary)" opacity="0.85" />
      <rect x="232" y="174" width="96" height="3" fill="var(--text-secondary)" opacity="0.5" />
      <rect x="232" y="182" width="60" height="3" fill="var(--text-secondary)" opacity="0.5" />
    </g>

    <text x="220" y="234" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="var(--text-secondary)">+ 24 docs generados</text>
  </svg>
);

export const PROJECT_MOCKS = [
  MockCorporateWeb,
  MockInventorySEC,
  MockInventoryVincco,
  MockPresentationGen,
  MockDocGen,
];
