/** Blog index: topic filters, search, sort; syncs ?q= &category= &sort= */
export function initBlogIndexFilters(emptyMessage: string) {
  const grid = document.getElementById('blog-grid');
  const emptyEl = document.getElementById('blog-empty');
  const sortSelect = document.querySelector<HTMLSelectElement>('[data-pill-filter="blog-sort"]');
  const countValue = document.querySelector('[data-blog-count-value]');
  const countLabel = document.querySelector('[data-blog-count-label]');
  const clearBtn = document.querySelector<HTMLButtonElement>('[data-blog-clear-filters]');
  if (!grid) return;

  const filters = document.querySelectorAll<HTMLButtonElement>('[data-blog-filter]');
  const cards = () => [...grid.querySelectorAll<HTMLElement>('[data-blog-card]')];

  const activeTag = () =>
    document.querySelector<HTMLButtonElement>('[data-blog-filter][aria-pressed="true"]')?.getAttribute(
      'data-blog-filter',
    ) ?? 'all';

  const getSort = () => sortSelect?.value || 'newest';

  const compareCards = (a: HTMLElement, b: HTMLElement, sort: string) => {
    const tsA = Number(a.getAttribute('data-ts') ?? 0);
    const tsB = Number(b.getAttribute('data-ts') ?? 0);
    const readA = Number(a.getAttribute('data-read-minutes') ?? 0);
    const readB = Number(b.getAttribute('data-read-minutes') ?? 0);
    if (sort === 'oldest') return tsA - tsB;
    if (sort === 'short') return readA - readB;
    if (sort === 'long') return readB - readA;
    return tsB - tsA;
  };

  const syncUrl = (tag: string, sort: string, query: string) => {
    const url = new URL(window.location.href);
    if (tag === 'all') url.searchParams.delete('category');
    else url.searchParams.set('category', tag);
    if (sort === 'newest') url.searchParams.delete('sort');
    else url.searchParams.set('sort', sort);
    if (query) url.searchParams.set('q', query);
    else url.searchParams.delete('q');
    window.history.replaceState({}, '', url);
  };

  const searchInput = document.querySelector<HTMLInputElement>('[data-blog-search]');
  let debounceTimer: ReturnType<typeof setTimeout> | undefined;

  const apply = () => {
    const tag = activeTag();
    const sort = getSort();
    const q = (searchInput?.value ?? '').trim().toLowerCase();
    const items = cards();

    const sorted = [...items].sort((a, b) => compareCards(a, b, sort));
    sorted.forEach((el) => grid.appendChild(el));

    let visibleCount = 0;
    items.forEach((el) => {
      const matchTopic = tag === 'all' || el.getAttribute('data-tag') === tag;
      const haystack = el.getAttribute('data-search') ?? '';
      const matchSearch = !q || haystack.includes(q);
      const show = matchTopic && matchSearch;
      el.classList.toggle('hidden', !show);
      if (show) visibleCount += 1;
    });

    if (countValue) countValue.textContent = String(visibleCount);
    if (countLabel) countLabel.textContent = visibleCount === 1 ? 'article' : 'articles';

    if (emptyEl) {
      emptyEl.classList.toggle('hidden', visibleCount > 0);
    }

    syncUrl(tag, sort, q);
  };

  const setFilter = (tag: string) => {
    filters.forEach((b) => {
      const active = (b.getAttribute('data-blog-filter') ?? 'all') === tag;
      b.setAttribute('aria-pressed', String(active));
      b.classList.toggle('is-active', active);
    });
    apply();
  };

  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      setFilter(btn.getAttribute('data-blog-filter') ?? 'all');
    });
  });

  sortSelect?.addEventListener('change', apply);
  searchInput?.addEventListener('input', () => {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(apply, 150);
  });

  clearBtn?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    if (sortSelect) sortSelect.value = 'newest';
    setFilter('all');
  });

  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get('category') ?? params.get('topic');
  const sortParam = params.get('sort');
  const qParam = params.get('q');
  if (qParam && searchInput) searchInput.value = qParam;
  if (sortParam && sortSelect) {
    const allowed = ['newest', 'oldest', 'short', 'long'];
    if (allowed.includes(sortParam)) sortSelect.value = sortParam;
  }
  if (categoryParam) {
    const match = [...filters].find(
      (b) => (b.getAttribute('data-blog-filter') ?? '').toLowerCase() === categoryParam.toLowerCase(),
    );
    if (match) setFilter(match.getAttribute('data-blog-filter') ?? 'all');
    else apply();
  } else {
    apply();
  }
}
