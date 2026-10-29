import { DEFAULT_IMAGE_WIDTHS, defaultWebpSrc, responsiveSrcSet } from '../utils/responsiveImage';

export function initProductGalleries() {
  document.querySelectorAll<HTMLElement>('[data-product-gallery]').forEach((root) => {
    if (root.dataset.galleryBound === 'true') return;
    root.dataset.galleryBound = 'true';

    const main = root.querySelector<HTMLImageElement>('.product-gallery__image');
    const thumbs = root.querySelectorAll<HTMLButtonElement>('[data-product-gallery-thumb]');
    if (!main || !thumbs.length) return;

    const applySlide = (thumb: HTMLButtonElement) => {
      const baseSrc = thumb.getAttribute('data-src');
      const alt = thumb.getAttribute('data-alt') ?? '';
      if (baseSrc) {
        main.src = defaultWebpSrc(baseSrc, DEFAULT_IMAGE_WIDTHS);
        main.srcset = responsiveSrcSet(baseSrc, DEFAULT_IMAGE_WIDTHS);
      }
      main.alt = alt;
      thumbs.forEach((t) => {
        const active = t === thumb;
        t.classList.toggle('is-active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
      });
    };

    thumbs.forEach((thumb) => {
      thumb.addEventListener('click', () => applySlide(thumb));
    });
  });
}
