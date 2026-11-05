import { DEFAULT_IMAGE_WIDTHS, defaultWebpSrc, responsiveSrcSet } from '../utils/responsiveImage';

function setGalleryMainImage(main: HTMLImageElement, baseSrc: string, alt: string) {
  const src = defaultWebpSrc(baseSrc, DEFAULT_IMAGE_WIDTHS);
  const srcset = responsiveSrcSet(baseSrc, DEFAULT_IMAGE_WIDTHS);
  main.src = src;
  main.srcset = srcset;
  main.alt = alt;

  const source = main.closest('picture')?.querySelector('source');
  if (source) {
    source.srcset = srcset;
  }
}

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
        setGalleryMainImage(main, baseSrc, alt);
      }
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
