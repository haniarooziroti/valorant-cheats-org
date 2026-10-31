import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const outDir = path.join(root, 'public/images/gameplay');
fs.mkdirSync(outDir, { recursive: true });

const assets = [
  { name: 'hero-poster', w: 960, h: 600, c1: '#7f3dee', c2: '#0d0a14' },
  { name: 'valorant-aimbot', w: 960, h: 540, c1: '#3b82f6', c2: '#0f0c18' },
  { name: 'valorant-esp', w: 960, h: 540, c1: '#22c55e', c2: '#0e0b17' },
  { name: 'valorant-triggerbot', w: 960, h: 540, c1: '#f97316', c2: '#0f0c19' },
  { name: 'valorant-radar', w: 960, h: 540, c1: '#a855f7', c2: '#040306' },
  { name: 'valorant-no-recoil', w: 960, h: 540, c1: '#eab308', c2: '#0d0a14' },
  { name: 'valorant-menu', w: 960, h: 540, c1: '#6366f1', c2: '#0f0c18' },
  { name: 'valorant-wallhack', w: 960, h: 540, c1: '#14b8a6', c2: '#0e0b17' },
];

const widths = [320, 400, 512, 640, 960];

for (const asset of assets) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${asset.w}" height="${asset.h}">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${asset.c1}"/>
      <stop offset="100%" stop-color="${asset.c2}"/>
    </linearGradient></defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
  </svg>`;
  const pngPath = path.join(outDir, `${asset.name}.png`);
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(pngPath);
  for (const width of widths) {
    const webpPath = path.join(outDir, `${asset.name}-${width}.webp`);
    await sharp(pngPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 4 })
      .toFile(webpPath);
  }
  console.log(`Generated ${asset.name}`);
}

console.log('Valorant gameplay placeholders ready.');
