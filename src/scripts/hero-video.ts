const SKIP_SEC = 5;

export function initHeroVideo() {
  const wrap = document.querySelector<HTMLElement>('[data-hero-video]');
  const video = wrap?.querySelector<HTMLVideoElement>('[data-hero-video-el]');
  const back = wrap?.querySelector<HTMLButtonElement>('[data-hero-video-back]');
  const forward = wrap?.querySelector<HTMLButtonElement>('[data-hero-video-forward]');
  if (!wrap || !video) return;
  if (wrap.dataset.heroVideoReady === 'true') return;
  wrap.dataset.heroVideoReady = 'true';

  const max = Number(wrap.dataset.heroDuration) || video.duration || 15;
  const clamp = (t: number) => Math.min(Math.max(t, 0), max);

  const play = () => {
    video.play().catch(() => {});
  };

  const playFromStart = () => {
    if (video.currentTime >= max - 0.05 || Number.isNaN(video.currentTime)) {
      video.currentTime = 0;
    }
    play();
  };

  video.addEventListener('loadedmetadata', () => {
    video.currentTime = 0;
  });

  video.addEventListener('timeupdate', () => {
    if (video.currentTime >= max - 0.05) {
      video.currentTime = 0;
    }
  });

  back?.addEventListener('click', () => {
    video.currentTime = clamp(video.currentTime - SKIP_SEC);
  });

  forward?.addEventListener('click', () => {
    video.currentTime = clamp(video.currentTime + SKIP_SEC);
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) playFromStart();
        else video.pause();
      });
    },
    { threshold: 0.2 },
  );
  io.observe(video);

  if (video.readyState >= 2) playFromStart();
  else video.addEventListener('canplay', playFromStart, { once: true });
}
