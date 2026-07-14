import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.resolve(__dirname, "../public/blog/covers");

const BRAND = {
  navy: "#16233F",
  navySecondary: "#223252",
  chartreuse: "#8CC63F",
  cyan: "#4FC3E8",
  steel: "#3E5C76",
  offWhite: "#FAFAF8",
  muted: "#8A93A0",
};

const SLUGS = [
  "gst-e-commerce-india",
  "nri-mutual-funds-fema",
  "startup-compliance-checklist",
  "gst-calendar-penalty-guide",
  "succession-planning-primer",
  "nri-repatriation-fema-guide",
  "income-tax-slabs-india-fy-2026-27",
  "gst-registration-process-india-2026",
  "how-nris-file-income-tax-return-india",
  "fema-rules-nri-repatriation",
  "roc-compliance-checklist-private-companies-india",
  "set-up-indian-subsidiary-foreign-company",
];

function shell({ label, topicArt }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-label="${label}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${BRAND.navy}"/>
      <stop offset="100%" stop-color="${BRAND.navySecondary}"/>
    </linearGradient>
    <linearGradient id="facetGreen" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#A3E300"/>
      <stop offset="50%" stop-color="${BRAND.chartreuse}"/>
      <stop offset="100%" stop-color="#D2E31B"/>
    </linearGradient>
    <linearGradient id="facetCyan" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3BB9E8"/>
      <stop offset="100%" stop-color="${BRAND.cyan}"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
    </pattern>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="28" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="4" fill="url(#facetGreen)"/>

  <circle cx="980" cy="120" r="110" fill="${BRAND.cyan}" opacity="0.12" filter="url(#glow)"/>
  <circle cx="180" cy="520" r="90" fill="${BRAND.chartreuse}" opacity="0.1" filter="url(#glow)"/>

  <!-- Logo-inspired corner facets -->
  <g opacity="0.35" transform="translate(40,40) scale(0.55)">
    <path d="M 10 45 L 95 55 L 16 95 Z" fill="#FFFFFF"/>
    <path d="M 10 45 L 35 67 L 30 58 Z" fill="${BRAND.steel}"/>
    <path d="M 11 32 L 95 55 L 35 67 Z" fill="${BRAND.cyan}"/>
    <path d="M 10 10 L 95 55 L 35 65 Z" fill="url(#facetGreen)"/>
  </g>

  <g transform="translate(600,300)">
    ${topicArt}
  </g>

  <text x="56" y="580" fill="${BRAND.muted}" font-family="Arial, Helvetica, sans-serif" font-size="18" letter-spacing="3">DSS CORP ADVISORY</text>
</svg>`;
}

const illustrations = {
  "gst-e-commerce-india": shell({
    label: "GST for e-commerce sellers in India",
    topicArt: `
      <rect x="-180" y="-120" width="360" height="240" rx="20" fill="rgba(255,255,255,0.06)" stroke="rgba(79,195,232,0.35)" stroke-width="2"/>
      <path d="M -90 -20 h 180 l -30 80 h -120 z" fill="none" stroke="${BRAND.cyan}" stroke-width="6" stroke-linejoin="round"/>
      <circle cx="55" cy="10" r="8" fill="${BRAND.chartreuse}"/>
      <rect x="40" y="-95" width="110" height="42" rx="10" fill="${BRAND.chartreuse}"/>
      <text x="95" y="-67" text-anchor="middle" fill="${BRAND.navy}" font-family="Arial, sans-serif" font-size="22" font-weight="700">GST 18%</text>
      <text x="0" y="95" text-anchor="middle" fill="${BRAND.offWhite}" font-family="Arial, sans-serif" font-size="20">E-Commerce Tax</text>
    `,
  }),
  "nri-mutual-funds-fema": shell({
    label: "NRI mutual funds and FEMA guidelines",
    topicArt: `
      <circle cx="0" cy="-10" r="95" fill="none" stroke="${BRAND.cyan}" stroke-width="4"/>
      <ellipse cx="0" cy="-10" rx="95" ry="38" fill="none" stroke="${BRAND.steel}" stroke-width="3"/>
      <line x1="0" y1="-105" x2="0" y2="85" stroke="${BRAND.steel}" stroke-width="3"/>
      <rect x="-70" y="35" width="28" height="55" rx="4" fill="${BRAND.chartreuse}"/>
      <rect x="-30" y="10" width="28" height="80" rx="4" fill="${BRAND.cyan}"/>
      <rect x="10" y="25" width="28" height="65" rx="4" fill="${BRAND.steel}"/>
      <rect x="50" y="0" width="28" height="90" rx="4" fill="${BRAND.chartreuse}"/>
      <text x="0" y="115" text-anchor="middle" fill="${BRAND.offWhite}" font-family="Arial, sans-serif" font-size="20">NRI Investments</text>
    `,
  }),
  "startup-compliance-checklist": shell({
    label: "Startup compliance checklist",
    topicArt: `
      <path d="M -30 -110 L 30 -110 L 45 -70 L 0 -40 L -45 -70 Z" fill="url(#facetGreen)"/>
      <rect x="-10" y="-40" width="20" height="55" fill="${BRAND.cyan}"/>
      <polygon points="-35,15 0,45 35,15" fill="${BRAND.steel}"/>
      <rect x="-120" y="20" width="150" height="190" rx="14" fill="rgba(255,255,255,0.08)" stroke="${BRAND.cyan}" stroke-width="2"/>
      <line x1="-95" y1="60" x2="-35" y2="60" stroke="${BRAND.chartreuse}" stroke-width="5" stroke-linecap="round"/>
      <line x1="-95" y1="95" x2="-35" y2="95" stroke="${BRAND.offWhite}" stroke-width="4" stroke-linecap="round" opacity="0.5"/>
      <line x1="-95" y1="130" x2="-35" y2="130" stroke="${BRAND.offWhite}" stroke-width="4" stroke-linecap="round" opacity="0.5"/>
      <polyline points="-100,55 -85,70 -70,50" fill="none" stroke="${BRAND.navy}" stroke-width="4" stroke-linecap="round"/>
      <text x="55" y="120" text-anchor="middle" fill="${BRAND.offWhite}" font-family="Arial, sans-serif" font-size="20">Founder Compliance</text>
    `,
  }),
  "gst-calendar-penalty-guide": shell({
    label: "GST filing calendar and penalties",
    topicArt: `
      <rect x="-130" y="-110" width="260" height="210" rx="18" fill="rgba(255,255,255,0.07)" stroke="${BRAND.cyan}" stroke-width="2"/>
      <rect x="-130" y="-110" width="260" height="48" rx="18" fill="${BRAND.chartreuse}"/>
      <rect x="-130" y="-78" width="260" height="20" fill="${BRAND.chartreuse}"/>
      <circle cx="-70" cy="10" r="16" fill="${BRAND.navy}" opacity="0.35"/>
      <circle cx="0" cy="10" r="16" fill="${BRAND.navy}" opacity="0.35"/>
      <circle cx="70" cy="10" r="16" fill="${BRAND.cyan}"/>
      <circle cx="-70" cy="70" r="16" fill="${BRAND.navy}" opacity="0.35"/>
      <circle cx="0" cy="70" r="16" fill="${BRAND.chartreuse}"/>
      <circle cx="70" cy="70" r="16" fill="${BRAND.navy}" opacity="0.35"/>
      <circle cx="155" cy="-55" r="34" fill="${BRAND.steel}" stroke="${BRAND.cyan}" stroke-width="3"/>
      <line x1="155" y1="-55" x2="155" y2="-72" stroke="${BRAND.offWhite}" stroke-width="4" stroke-linecap="round"/>
      <line x1="155" y1="-55" x2="170" y2="-48" stroke="${BRAND.chartreuse}" stroke-width="4" stroke-linecap="round"/>
      <text x="0" y="145" text-anchor="middle" fill="${BRAND.offWhite}" font-family="Arial, sans-serif" font-size="20">GST Calendar</text>
    `,
  }),
  "succession-planning-primer": shell({
    label: "Succession planning and private trusts",
    topicArt: `
      <circle cx="0" cy="-70" r="28" fill="${BRAND.cyan}"/>
      <line x1="0" y1="-42" x2="-80" y2="20" stroke="${BRAND.steel}" stroke-width="4"/>
      <line x1="0" y1="-42" x2="80" y2="20" stroke="${BRAND.steel}" stroke-width="4"/>
      <circle cx="-80" cy="20" r="24" fill="${BRAND.chartreuse}"/>
      <circle cx="80" cy="20" r="24" fill="${BRAND.chartreuse}"/>
      <line x1="-80" y1="44" x2="-130" y2="110" stroke="${BRAND.steel}" stroke-width="3"/>
      <line x1="-80" y1="44" x2="-30" y2="110" stroke="${BRAND.steel}" stroke-width="3"/>
      <line x1="80" y1="44" x2="30" y2="110" stroke="${BRAND.steel}" stroke-width="3"/>
      <line x1="80" y1="44" x2="130" y2="110" stroke="${BRAND.steel}" stroke-width="3"/>
      <circle cx="-130" cy="110" r="18" fill="${BRAND.steel}"/>
      <circle cx="-30" cy="110" r="18" fill="${BRAND.steel}"/>
      <circle cx="30" cy="110" r="18" fill="${BRAND.steel}"/>
      <circle cx="130" cy="110" r="18" fill="${BRAND.steel}"/>
      <path d="M 120 -95 h 55 v 70 h -55 z" fill="none" stroke="${BRAND.chartreuse}" stroke-width="4"/>
      <path d="M 132 -78 l 12 12 -24 24 -8 -8 z" fill="${BRAND.chartreuse}"/>
      <text x="0" y="160" text-anchor="middle" fill="${BRAND.offWhite}" font-family="Arial, sans-serif" font-size="20">Legacy Planning</text>
    `,
  }),
  "nri-repatriation-fema-guide": shell({
    label: "NRI repatriation and FEMA guide",
    topicArt: `
      <rect x="-140" y="-30" width="110" height="70" rx="10" fill="${BRAND.steel}"/>
      <text x="-85" y="12" text-anchor="middle" fill="${BRAND.offWhite}" font-family="Arial, sans-serif" font-size="18" font-weight="700">NRO</text>
      <rect x="30" y="-30" width="110" height="70" rx="10" fill="${BRAND.chartreuse}"/>
      <text x="85" y="12" text-anchor="middle" fill="${BRAND.navy}" font-family="Arial, sans-serif" font-size="18" font-weight="700">NRE</text>
      <path d="M -20 -5 H 20" stroke="${BRAND.cyan}" stroke-width="6" marker-end="url(#arrow)"/>
      <path d="M -95 -95 C -20 -120 20 -120 95 -95" fill="none" stroke="${BRAND.cyan}" stroke-width="4"/>
      <path d="M 120 -70 L 160 -95 L 160 -45 Z" fill="${BRAND.cyan}"/>
      <text x="0" y="95" text-anchor="middle" fill="${BRAND.offWhite}" font-family="Arial, sans-serif" font-size="20">FEMA Repatriation</text>
    `,
  }),
  "income-tax-slabs-india-fy-2026-27": shell({
    label: "Income tax slabs India FY 2026-27",
    topicArt: `
      <rect x="-120" y="60" width="50" height="40" fill="${BRAND.steel}"/>
      <rect x="-60" y="35" width="50" height="65" fill="${BRAND.cyan}"/>
      <rect x="0" y="5" width="50" height="95" fill="${BRAND.chartreuse}"/>
      <rect x="60" y="-30" width="50" height="130" fill="${BRAND.cyan}"/>
      <line x1="-140" y1="100" x2="140" y2="100" stroke="${BRAND.offWhite}" stroke-width="3" opacity="0.5"/>
      <text x="-95" y="92" text-anchor="middle" fill="${BRAND.offWhite}" font-size="14" font-family="Arial">0%</text>
      <text x="-35" y="67" text-anchor="middle" fill="${BRAND.navy}" font-size="14" font-family="Arial">5%</text>
      <text x="25" y="37" text-anchor="middle" fill="${BRAND.navy}" font-size="14" font-family="Arial">10%</text>
      <text x="85" y="2" text-anchor="middle" fill="${BRAND.navy}" font-size="14" font-family="Arial">15%</text>
      <text x="0" y="-70" text-anchor="middle" fill="${BRAND.chartreuse}" font-family="Arial, sans-serif" font-size="24" font-weight="700">FY 2026-27</text>
      <text x="0" y="135" text-anchor="middle" fill="${BRAND.offWhite}" font-family="Arial, sans-serif" font-size="20">Tax Slabs</text>
    `,
  }),
  "gst-registration-process-india-2026": shell({
    label: "GST registration process India 2026",
    topicArt: `
      <rect x="-130" y="-90" width="260" height="170" rx="16" fill="rgba(255,255,255,0.08)" stroke="${BRAND.cyan}" stroke-width="2"/>
      <rect x="-95" y="-50" width="70" height="55" rx="8" fill="${BRAND.steel}"/>
      <rect x="-10" y="-50" width="120" height="12" rx="4" fill="${BRAND.offWhite}" opacity="0.45"/>
      <rect x="-10" y="-28" width="90" height="12" rx="4" fill="${BRAND.offWhite}" opacity="0.3"/>
      <rect x="-10" y="-6" width="100" height="12" rx="4" fill="${BRAND.offWhite}" opacity="0.3"/>
      <circle cx="95" cy="55" r="42" fill="${BRAND.chartreuse}"/>
      <path d="M 78 55 L 90 67 L 115 42" fill="none" stroke="${BRAND.navy}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="0" y="-105" text-anchor="middle" fill="${BRAND.chartreuse}" font-family="Arial, sans-serif" font-size="24" font-weight="700">GSTIN</text>
      <text x="0" y="130" text-anchor="middle" fill="${BRAND.offWhite}" font-family="Arial, sans-serif" font-size="20">Registration</text>
    `,
  }),
  "how-nris-file-income-tax-return-india": shell({
    label: "How NRIs file income tax return in India",
    topicArt: `
      <rect x="-150" y="-60" width="210" height="140" rx="12" fill="${BRAND.navySecondary}" stroke="${BRAND.cyan}" stroke-width="2"/>
      <rect x="-150" y="-60" width="210" height="28" rx="12" fill="${BRAND.steel}"/>
      <text x="-45" y="-40" text-anchor="middle" fill="${BRAND.offWhite}" font-family="Arial, sans-serif" font-size="16" font-weight="700">ITR-2</text>
      <line x1="-120" y1="-10" x2="-20" y2="-10" stroke="${BRAND.offWhite}" stroke-width="5" opacity="0.35" stroke-linecap="round"/>
      <line x1="-120" y1="20" x2="-20" y2="20" stroke="${BRAND.offWhite}" stroke-width="5" opacity="0.35" stroke-linecap="round"/>
      <line x1="-120" y1="50" x2="-50" y2="50" stroke="${BRAND.chartreuse}" stroke-width="5" stroke-linecap="round"/>
      <circle cx="120" cy="-10" r="55" fill="none" stroke="${BRAND.cyan}" stroke-width="4"/>
      <ellipse cx="120" cy="-10" rx="55" ry="22" fill="none" stroke="${BRAND.steel}" stroke-width="3"/>
      <line x1="120" y1="-65" x2="120" y2="45" stroke="${BRAND.steel}" stroke-width="3"/>
      <text x="0" y="120" text-anchor="middle" fill="${BRAND.offWhite}" font-family="Arial, sans-serif" font-size="20">NRI Tax Filing</text>
    `,
  }),
  "fema-rules-nri-repatriation": shell({
    label: "FEMA rules for NRI repatriation",
    topicArt: `
      <rect x="-150" y="-20" width="90" height="60" rx="8" fill="${BRAND.chartreuse}"/>
      <text x="-105" y="15" text-anchor="middle" fill="${BRAND.navy}" font-family="Arial, sans-serif" font-size="16" font-weight="700">FCNR</text>
      <rect x="-40" y="-20" width="90" height="60" rx="8" fill="${BRAND.cyan}"/>
      <text x="5" y="15" text-anchor="middle" fill="${BRAND.navy}" font-family="Arial, sans-serif" font-size="16" font-weight="700">NRE</text>
      <rect x="70" y="-20" width="90" height="60" rx="8" fill="${BRAND.steel}"/>
      <text x="115" y="15" text-anchor="middle" fill="${BRAND.offWhite}" font-family="Arial, sans-serif" font-size="16" font-weight="700">NRO</text>
      <path d="M -170 75 C -60 110 60 110 170 75" fill="none" stroke="${BRAND.cyan}" stroke-width="4" stroke-dasharray="8 8"/>
      <path d="M -120 75 L -60 95" stroke="${BRAND.chartreuse}" stroke-width="5"/>
      <path d="M 0 75 L 0 100" stroke="${BRAND.chartreuse}" stroke-width="5"/>
      <path d="M 120 75 L 60 95" stroke="${BRAND.chartreuse}" stroke-width="5"/>
      <text x="0" y="-75" text-anchor="middle" fill="${BRAND.chartreuse}" font-family="Arial, sans-serif" font-size="22" font-weight="700">USD 1M Cap</text>
      <text x="0" y="135" text-anchor="middle" fill="${BRAND.offWhite}" font-family="Arial, sans-serif" font-size="20">FEMA Rules</text>
    `,
  }),
  "roc-compliance-checklist-private-companies-india": shell({
    label: "ROC compliance checklist for private companies",
    topicArt: `
      <rect x="-160" y="-100" width="200" height="230" rx="14" fill="rgba(255,255,255,0.08)" stroke="${BRAND.cyan}" stroke-width="2"/>
      <rect x="-160" y="-100" width="200" height="40" rx="14" fill="${BRAND.steel}"/>
      <text x="-60" y="-74" text-anchor="middle" fill="${BRAND.offWhite}" font-family="Arial, sans-serif" font-size="18" font-weight="700">ROC</text>
      <rect x="-135" y="-40" width="22" height="22" rx="4" fill="${BRAND.chartreuse}"/>
      <path d="M -130 -29 l 5 5 10 -12" fill="none" stroke="${BRAND.navy}" stroke-width="3" stroke-linecap="round"/>
      <line x1="-100" y1="-28" x2="-20" y2="-28" stroke="${BRAND.offWhite}" stroke-width="5" opacity="0.45" stroke-linecap="round"/>
      <rect x="-135" y="5" width="22" height="22" rx="4" fill="${BRAND.chartreuse}"/>
      <path d="M -130 16 l 5 5 10 -12" fill="none" stroke="${BRAND.navy}" stroke-width="3" stroke-linecap="round"/>
      <line x1="-100" y1="17" x2="-20" y2="17" stroke="${BRAND.offWhite}" stroke-width="5" opacity="0.45" stroke-linecap="round"/>
      <rect x="-135" y="50" width="22" height="22" rx="4" fill="${BRAND.cyan}"/>
      <line x1="-100" y1="62" x2="-35" y2="62" stroke="${BRAND.offWhite}" stroke-width="5" opacity="0.35" stroke-linecap="round"/>
      <circle cx="110" cy="-10" r="58" fill="none" stroke="${BRAND.chartreuse}" stroke-width="5"/>
      <text x="110" y="-2" text-anchor="middle" fill="${BRAND.chartreuse}" font-family="Arial, sans-serif" font-size="22" font-weight="700">AOC-4</text>
      <text x="110" y="28" text-anchor="middle" fill="${BRAND.offWhite}" font-family="Arial, sans-serif" font-size="16">MGT-7</text>
      <text x="0" y="160" text-anchor="middle" fill="${BRAND.offWhite}" font-family="Arial, sans-serif" font-size="20">Company Filings</text>
    `,
  }),
  "set-up-indian-subsidiary-foreign-company": shell({
    label: "Set up Indian subsidiary as a foreign company",
    topicArt: `
      <circle cx="-70" cy="-20" r="70" fill="none" stroke="${BRAND.cyan}" stroke-width="4"/>
      <ellipse cx="-70" cy="-20" rx="70" ry="28" fill="none" stroke="${BRAND.steel}" stroke-width="3"/>
      <line x1="-70" y1="-90" x2="-70" y2="50" stroke="${BRAND.steel}" stroke-width="3"/>
      <rect x="40" y="-70" width="130" height="150" rx="14" fill="rgba(255,255,255,0.08)" stroke="${BRAND.chartreuse}" stroke-width="3"/>
      <rect x="40" y="-70" width="130" height="36" rx="14" fill="${BRAND.chartreuse}"/>
      <text x="105" y="-46" text-anchor="middle" fill="${BRAND.navy}" font-family="Arial, sans-serif" font-size="16" font-weight="700">INDIA WOS</text>
      <line x1="60" y1="-10" x2="150" y2="-10" stroke="${BRAND.offWhite}" stroke-width="4" opacity="0.4" stroke-linecap="round"/>
      <line x1="60" y1="20" x2="140" y2="20" stroke="${BRAND.offWhite}" stroke-width="4" opacity="0.35" stroke-linecap="round"/>
      <line x1="60" y1="50" x2="125" y2="50" stroke="${BRAND.cyan}" stroke-width="4" stroke-linecap="round"/>
      <path d="M -10 -20 H 30" stroke="${BRAND.chartreuse}" stroke-width="6" stroke-linecap="round"/>
      <path d="M 18 -32 L 38 -20 L 18 -8" fill="none" stroke="${BRAND.chartreuse}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
      <text x="0" y="120" text-anchor="middle" fill="${BRAND.offWhite}" font-family="Arial, sans-serif" font-size="20">Subsidiary Setup</text>
    `,
  }),
};

async function main() {
  const onlySlugs = process.argv.slice(2);
  const targetSlugs = onlySlugs.length > 0 ? onlySlugs : SLUGS;

  // Rich AI covers live in public/blog/covers. Only rebuild SVG placeholders
  // when explicitly requested: node scripts/generate-blog-covers.mjs <slug...>
  if (onlySlugs.length === 0) {
    console.log(
      "Skipping SVG overwrite of AI covers. Pass slug args to generate specific SVG covers."
    );
    console.log("Example: node scripts/generate-blog-covers.mjs roc-compliance-checklist-private-companies-india");
    return;
  }

  fs.mkdirSync(outputDir, { recursive: true });

  for (const slug of targetSlugs) {
    const svg = illustrations[slug];
    if (!svg) {
      throw new Error(`Missing illustration for ${slug}`);
    }

    const jpgPath = path.join(outputDir, `${slug}.jpg`);
    const svgPath = path.join(outputDir, `${slug}.svg`);

    fs.writeFileSync(svgPath, svg);
    await sharp(Buffer.from(svg)).jpeg({ quality: 92 }).toFile(jpgPath);
    console.log(`Generated ${slug}.jpg`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
