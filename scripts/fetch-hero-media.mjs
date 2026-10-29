/**
 * Downloads YouTube segment and extracts lightweight WebP frames for the site.
 * Source: https://www.youtube.com/watch?v=b1kDLLiCKy0 (5:15–5:30)
 *
 * Run: node scripts/fetch-hero-media.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';

const root = process.cwd();
const videoId = 'b1kDLLiCKy0';
const url = `https://www.youtube.com/watch?v=${videoId}`;
const startSec = 5 * 60 + 15; // 5:15
const endSec = 5 * 60 + 30; // 5:30
const duration = endSec - startSec;

const tempDir = path.join(root, 'temp', 'hero-media');
const videosDir = path.join(root, 'public', 'videos');
const framesDir = path.join(root, 'public', 'images', 'gameplay', 'frames');

function run(cmd, args, opts = {}) {
  execFileSync(cmd, args, { stdio: 'inherit', ...opts });
}

fs.mkdirSync(tempDir, { recursive: true });
fs.mkdirSync(videosDir, { recursive: true });
fs.mkdirSync(framesDir, { recursive: true });

const sourcePath = path.join(tempDir, 'source.mp4');
if (!fs.existsSync(sourcePath)) {
  console.log('Downloading source (720p max)…');
  run('yt-dlp', [
    '-f',
    'bv*[height<=720]+ba/b[height<=720]/b',
    '--merge-output-format',
    'mp4',
    '-o',
    sourcePath,
    url,
  ]);
}

const heroMp4 = path.join(videosDir, 'mw4-hero.mp4');
const heroWebm = path.join(videosDir, 'mw4-hero.webm');

console.log('Clipping hero segment…');
run('ffmpeg', [
  '-y',
  '-ss',
  String(startSec),
  '-to',
  String(endSec),
  '-i',
  sourcePath,
  '-an',
  '-vf',
  'scale=min(960\\,iw):-2',
  '-c:v',
  'libx264',
  '-crf',
  '36',
  '-preset',
  'slow',
  '-movflags',
  '+faststart',
  heroMp4,
]);

run('ffmpeg', [
  '-y',
  '-i',
  heroMp4,
  '-an',
  '-c:v',
  'libvpx-vp9',
  '-crf',
  '45',
  '-b:v',
  '0',
  '-row-mt',
  '1',
  '-deadline',
  'good',
  heroWebm,
]);

console.log('Extracting frames…');
const frameCount = 12;
for (let i = 0; i < frameCount; i += 1) {
  const t = startSec + (i / frameCount) * duration + 0.2;
  const pngOut = path.join(framesDir, `mw4-frame-${String(i + 1).padStart(2, '0')}.png`);
  run('ffmpeg', ['-y', '-ss', String(t), '-i', sourcePath, '-frames:v', '1', '-q:v', '2', pngOut]);
}

console.log('Optimizing frames to WebP…');
const widths = [320, 512, 640, 960];
for (let i = 1; i <= frameCount; i += 1) {
  const base = `mw4-frame-${String(i).padStart(2, '0')}`;
  const png = path.join(framesDir, `${base}.png`);
  if (!fs.existsSync(png)) continue;
  for (const w of widths) {
    const webp = path.join(framesDir, `${base}-${w}.webp`);
    await sharp(png)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 78, effort: 4 })
      .toFile(webp);
  }
  console.log(`Frames ready: ${base}`);
}

console.log('Done. Hero:', heroWebm, heroMp4);
