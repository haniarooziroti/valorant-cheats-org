import { spawnSync } from 'node:child_process';

const origin =
  process.env.PUBLIC_SITE_ORIGIN?.trim() ||
  'https://valorant-cheats--org.hania-rooziroti.workers.dev';

process.env.PUBLIC_SITE_ORIGIN = origin.replace(/\/$/, '');

const result = spawnSync('npm', ['run', 'build:core'], {
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

process.exit(result.status ?? 1);
