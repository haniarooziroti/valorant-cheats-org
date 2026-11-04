const SKIP_SEC = 5;

function setPlaying(wrap: HTMLElement, playing: boolean) {
  wrap.dataset.heroPlaying = playing ? 'true' : 'false';
  const toggle = wrap.querySelector<HTMLButtonElement>('[data-hero-video-toggle]');
  if (toggle) {
    toggle.setAttribute('aria-label', playing ? 'Pause video' : 'Play video');
    toggle.setAttribute('aria-pressed', playing ? 'true' : 'false');
  }
}

export function initHeroVideo() {
  const wrap = document.querySelector<HTMLElement>('[data-hero-video]');
  const video = wrap?.querySelector<HTMLVideoElement>('[data-hero-video-el]');
  const back = wrap?.querySelector<HTMLButtonElement>('[data-hero-video-back]');
  const forward = wrap?.querySelector<HTMLButtonElement>('[data-hero-video-forward]');
  const toggle = wrap?.querySelector<HTMLButtonElement>('[data-hero-video-toggle]');
  const overlay = wrap?.querySelector<HTMLButtonElement>('[data-hero-video-overlay]');
  if (!wrap || !video) return;
  if (wrap.dataset.heroVideoReady === 'true') return;
  wrap.dataset.heroVideoReady = 'true';

  const max = Number(wrap.dataset.heroDuration) || video.duration || 15;
  const clamp = (t: number) => Math.min(Math.max(t, 0), max);

  const play = () => {
    video.play().catch(() => setPlaying(wrap, false));
  };

  const pause = () => {
    video.pause();
  };

  const togglePlayback = () => {
    if (video.paused) play();
    else pause();
  };

  video.addEventListener('loadedmetadata', () => {
    video.currentTime = 0;
    setPlaying(wrap, false);
  });

  video.addEventListener('play', () => setPlaying(wrap, true));
  video.addEventListener('pause', () => setPlaying(wrap, false));

  video.addEventListener('timeupdate', () => {
    if (video.currentTime >= max - 0.05) {
      video.pause();
      video.currentTime = 0;
      setPlaying(wrap, false);
    }
  });

  toggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePlayback();
  });

  overlay?.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePlayback();
  });

  back?.addEventListener('click', (e) => {
    e.stopPropagation();
    video.currentTime = clamp(video.currentTime - SKIP_SEC);
  });

  forward?.addEventListener('click', (e) => {
    e.stopPropagation();
    video.currentTime = clamp(video.currentTime + SKIP_SEC);
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && !video.paused) pause();
      });
    },
    { threshold: 0.2 },
  );
  io.observe(video);

  setPlaying(wrap, false);
}
