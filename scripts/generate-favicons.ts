/**
 * Generate favicon fallbacks for Dueydo
 *
 * - apple-touch-icon.png (180x180) — iOS home screen
 * - favicon-32x32.png (32x32) — browser tab fallback
 * - favicon-16x16.png (16x16) — smaller contexts
 *
 * Uses the existing favicon.svg as source.
 * Usage: bun run scripts/generate-favicons.ts
 */

import { readFileSync } from 'fs';
import { Resvg } from '@resvg/resvg-js';

const svgSource = readFileSync('public/favicon.svg', 'utf-8');

// The SVG viewBox is 120x140 (taller than wide due to shield shape).
// For square icons, we'll pad it into a square canvas with some background.

function createSquareSvg(size: number): string {
  // Embed the shield SVG centered in a square with dark background and rounded corners
  const padding = size * 0.1; // 10% padding
  const shieldScale = (size - padding * 2) / 140; // scale based on height (140 is viewBox height)
  const shieldWidth = 120 * shieldScale;
  const offsetX = (size - shieldWidth) / 2;
  const offsetY = padding;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <!-- Dark background with rounded corners for touch icon -->
  <rect width="${size}" height="${size}" rx="${size * 0.18}" fill="#0F0D0A" />

  <!-- Shield logo centered -->
  <g transform="translate(${offsetX}, ${offsetY}) scale(${shieldScale})">
    <!-- Shield outline -->
    <path d="M14 8 L106 8 Q112 8 112 14 L112 65 Q112 115 60 136 Q8 115 8 65 L8 14 Q8 8 14 8 Z"
      fill="#050505" stroke="#C9A84C" stroke-width="4"/>
    <!-- Inner border -->
    <path d="M22 16 L98 16 Q100 16 100 18 L100 62 Q100 106 60 124 Q20 106 20 62 L20 18 Q20 16 22 16 Z"
      fill="none" stroke="#C9A84C" stroke-width="1.5" opacity="0.25"/>
    <!-- Cinzel Decorative Bold "D" -->
    <path d="M47.40 42.74L47.40 42.74Q48.35 42.74 50.87 42.74Q53.39 42.74 60.22 42.80L60.22 42.80Q70.14 42.91 75.90 48.15Q81.67 53.38 81.67 62.43Q81.67 71.47 75.90 76.74Q70.14 82 60.22 82L60.22 82L39.90 82L39.90 81.44L40.62 81.44Q42.02 81.44 43.06 80.46Q44.10 79.48 44.21 78.08L44.21 78.08L44.21 45.32Q37.94 45.77 34.91 48.23L34.91 48.23Q33.40 49.41 32.53 50.64Q31.66 51.87 30.82 53.61L30.82 53.61L30.26 53.38Q31.61 47.78 35.89 45.29Q40.18 42.80 47.40 42.74ZM59.55 79.65L59.55 79.65Q65.54 79.65 69.04 75Q72.54 70.35 72.54 62.40Q72.54 54.45 69.04 49.86Q65.54 45.26 59.66 45.26L59.66 45.26Q59.61 45.26 59.55 45.26L59.55 45.26L52.61 45.26L52.61 79.65L59.55 79.65Q59.55 79.65 59.55 79.65Z"
      fill="#C9A84C" opacity="0.9"/>
  </g>
</svg>`;
}

const sizes = [
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-16x16.png', size: 16 },
];

for (const { name, size } of sizes) {
  const squareSvg = createSquareSvg(size);
  const resvg = new Resvg(squareSvg, {
    fitTo: { mode: 'width' as const, value: size },
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  await Bun.write(`public/${name}`, pngBuffer);
  console.log(`✓ ${name} (${size}×${size}, ${pngBuffer.length} bytes)`);
}

console.log('\n✓ All favicon files generated!');
