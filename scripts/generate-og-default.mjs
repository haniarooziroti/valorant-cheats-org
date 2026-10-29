/**
 * Creates 1200×630 OG default from brand frame (cover crop).
 * Run: node scripts/generate-og-default.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const src = path.join(root, 'public', 'images', 'gameplay', 'frames', 'mw4-frame-12.png');
const outDir = path.join(root, 'public', 'images');
const jpg = path.join(outDir, 'og-default.jpg');
const webp = path.join(outDir, 'og-default.webp');

if (!fs.existsSync(src)) {
  console.error('Missing source frame:', src);
  process.exit(1);
}

await sharp(src)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(jpg);

await sharp(jpg).webp({ quality: 82 }).toFile(webp);

console.log('OG default written:', jpg, webp);
