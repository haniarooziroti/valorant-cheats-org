const SKIP_SEC = 5;

export function initHeroVideo() {
  const wrap = document.querySelector<HTMLElement>('[data-hero-video]');
  const video = wrap?.querySelector<HTMLVideoElement>('[data-hero-video-el]');
  const back = wrap?.querySelector<HTMLButtonElement>('[data-hero-video-back]');
  const forward = wrap?.querySelector<HTMLButtonElement>('[data-hero-video-forward]');
  if (!wrap || !video) return;

  const max = Number(wrap.dataset.heroDuration) || video.duration || 15;

  const clamp = (t: number) => Math.min(Math.max(t, 0), max);

  const tryPlay = () => {
    if (video.readyState >= 2) video.play().catch(() => {});
    else {
      video.addEventListener('canplay', () => video.play().catch(() => {}), { once: true });
      video.load();
    }
  };

  video.addEventListener('loadedmetadata', () => {
    video.currentTime = 0;
    tryPlay();
  });

  if (video.readyState >= 1) {
    video.currentTime = 0;
    tryPlay();
  }

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
        if (entry.isIntersecting) tryPlay();
        else video.pause();
      });
    },
    { threshold: 0.35 },
  );
  io.observe(video);
}
