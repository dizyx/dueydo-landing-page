/**
 * Generate OG social image for Dueydo (1200x630)
 *
 * Creates an SVG and converts it to PNG using sharp (via resvg-js for SVG rendering).
 * Brand: gold shield logo on dark background with brand name and tagline.
 *
 * Usage: bun run scripts/generate-og-image.ts
 */

const SVG_WIDTH = 1200;
const SVG_HEIGHT = 630;

// Dueydo brand colors
const DARK_BG = '#0F0D0A';
const GOLD = '#C9A84C';
const GOLD_DIM = '#A68A3A';
const CREAM = '#F5F2EC';

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${SVG_WIDTH}" height="${SVG_HEIGHT}" viewBox="0 0 ${SVG_WIDTH} ${SVG_HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Subtle radial gradient background -->
    <radialGradient id="bg-gradient" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#1A1714" />
      <stop offset="100%" stop-color="${DARK_BG}" />
    </radialGradient>

    <!-- Gold gradient for shield -->
    <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E0C060" />
      <stop offset="50%" stop-color="${GOLD}" />
      <stop offset="100%" stop-color="${GOLD_DIM}" />
    </linearGradient>

    <!-- Subtle glow behind shield -->
    <radialGradient id="shield-glow" cx="50%" cy="42%" r="25%">
      <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.08" />
      <stop offset="100%" stop-color="${GOLD}" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${SVG_WIDTH}" height="${SVG_HEIGHT}" fill="url(#bg-gradient)" />

  <!-- Subtle glow -->
  <rect width="${SVG_WIDTH}" height="${SVG_HEIGHT}" fill="url(#shield-glow)" />

  <!-- Decorative top/bottom gold lines -->
  <rect x="0" y="0" width="${SVG_WIDTH}" height="3" fill="${GOLD}" opacity="0.4" />
  <rect x="0" y="${SVG_HEIGHT - 3}" width="${SVG_WIDTH}" height="3" fill="${GOLD}" opacity="0.4" />

  <!-- Shield Logo (centered, upper portion) -->
  <g transform="translate(560, 100) scale(0.85)">
    <!-- Shield body -->
    <path d="M7 4 L93 4 Q100 4 100 11 L100 52 Q100 95 50 115 Q0 95 0 52 L0 11 Q0 4 7 4 Z"
          fill="${DARK_BG}" stroke="url(#gold-gradient)" stroke-width="3" />

    <!-- Inner shield outline -->
    <path d="M14 11 L86 11 Q88 11 88 13 L88 50 Q88 89 50 106 Q12 89 12 50 L12 13 Q12 11 14 11 Z"
          fill="none" stroke="${GOLD}" stroke-width="1" opacity="0.2" />

    <!-- D letter -->
    <text x="50" y="68" text-anchor="middle"
          font-family="Georgia, 'Times New Roman', serif"
          font-size="48" font-weight="700"
          fill="${GOLD}" opacity="0.9">D</text>
  </g>

  <!-- Brand Name -->
  <text x="600" y="340" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="72" font-weight="700"
        letter-spacing="12" fill="${CREAM}">DUEYDO</text>

  <!-- Tagline -->
  <text x="600" y="395" text-anchor="middle"
        font-family="Georgia, 'Times New Roman', serif"
        font-size="24" font-style="italic"
        letter-spacing="2" fill="${GOLD}" opacity="0.8">Private secure chat for friends</text>

  <!-- Feature pills row -->
  <g transform="translate(600, 445)">
    <!-- Signal Protocol -->
    <g transform="translate(-280, 0)">
      <rect x="-75" y="-14" width="150" height="28" rx="14"
            fill="none" stroke="${GOLD}" stroke-width="1" opacity="0.3" />
      <text x="0" y="5" text-anchor="middle"
            font-family="Arial, Helvetica, sans-serif"
            font-size="11" letter-spacing="2"
            fill="${GOLD}" opacity="0.6">SIGNAL PROTOCOL</text>
    </g>
    <!-- E2E Encrypted -->
    <g transform="translate(-93, 0)">
      <rect x="-75" y="-14" width="150" height="28" rx="14"
            fill="none" stroke="${GOLD}" stroke-width="1" opacity="0.3" />
      <text x="0" y="5" text-anchor="middle"
            font-family="Arial, Helvetica, sans-serif"
            font-size="11" letter-spacing="2"
            fill="${GOLD}" opacity="0.6">E2E ENCRYPTED</text>
    </g>
    <!-- Auto-Delete -->
    <g transform="translate(93, 0)">
      <rect x="-75" y="-14" width="150" height="28" rx="14"
            fill="none" stroke="${GOLD}" stroke-width="1" opacity="0.3" />
      <text x="0" y="5" text-anchor="middle"
            font-family="Arial, Helvetica, sans-serif"
            font-size="11" letter-spacing="2"
            fill="${GOLD}" opacity="0.6">AUTO-DELETE</text>
    </g>
    <!-- EU Hosted -->
    <g transform="translate(280, 0)">
      <rect x="-75" y="-14" width="150" height="28" rx="14"
            fill="none" stroke="${GOLD}" stroke-width="1" opacity="0.3" />
      <text x="0" y="5" text-anchor="middle"
            font-family="Arial, Helvetica, sans-serif"
            font-size="11" letter-spacing="2"
            fill="${GOLD}" opacity="0.6">EU HOSTED</text>
    </g>
  </g>

  <!-- Coming Soon badge -->
  <g transform="translate(600, 520)">
    <rect x="-80" y="-16" width="160" height="32" rx="16"
          fill="none" stroke="${GOLD}" stroke-width="1.5" opacity="0.5" />
    <circle cx="-55" cy="0" r="4" fill="${GOLD}" opacity="0.7" />
    <text x="5" y="5" text-anchor="middle"
          font-family="Georgia, 'Times New Roman', serif"
          font-size="12" letter-spacing="3"
          fill="${GOLD}" opacity="0.7">COMING SOON</text>
  </g>

  <!-- dizyx attribution -->
  <text x="600" y="${SVG_HEIGHT - 25}" text-anchor="middle"
        font-family="Arial, Helvetica, sans-serif"
        font-size="12" letter-spacing="1"
        fill="${CREAM}" opacity="0.25">dueydo.com</text>
</svg>`;

// Write the SVG first
const svgPath = 'public/og-image.svg';
await Bun.write(svgPath, svg);
console.log(`✓ SVG written to ${svgPath}`);

// Try to convert to PNG using resvg-js
try {
  const { Resvg } = await import('@aspect-run/resvg');
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width' as const, value: SVG_WIDTH },
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  await Bun.write('public/og-image.png', pngBuffer);
  console.log(`✓ PNG written to public/og-image.png (${pngBuffer.length} bytes)`);
} catch (e) {
  // Try @resvg/resvg-js as fallback
  try {
    const { Resvg } = await import('@resvg/resvg-js');
    const resvg = new Resvg(svg, {
      fitTo: { mode: 'width' as const, value: SVG_WIDTH },
    });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();
    await Bun.write('public/og-image.png', pngBuffer);
    console.log(`✓ PNG written to public/og-image.png (${pngBuffer.length} bytes)`);
  } catch (e2) {
    console.log('⚠ Could not convert SVG to PNG — resvg not available.');
    console.log('  Install with: bun add -d @resvg/resvg-js');
    console.log('  SVG saved as fallback. You can convert manually or install resvg.');
  }
}
