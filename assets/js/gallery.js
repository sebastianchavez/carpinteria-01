function initGalleryFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;

      items.forEach(item => {
        if (cat === 'todos' || item.dataset.cat === cat) {
          item.classList.remove('hidden-filter');
          item.style.position = 'relative';
        } else {
          item.classList.add('hidden-filter');
        }
      });
    });
  });

  initLightbox();
}

function initLightbox() {
  const items = document.querySelectorAll('.gallery-item');
  let currentIndex = 0;
  let visibleItems = [];

  function getVisible() {
    return Array.from(items).filter(i => !i.classList.contains('hidden-filter'));
  }

  function openLightbox(idx) {
    visibleItems = getVisible();
    currentIndex = idx;
    const item = visibleItems[idx];
    const img = item.querySelector('img');
    const title = item.querySelector('.font-bold').textContent;

    const backdrop = document.createElement('div');
    backdrop.className = 'lightbox-backdrop';
    backdrop.innerHTML = `
      <button class="absolute top-4 right-4 text-white text-4xl hover:text-amber-400 z-10" id="close-lb">&times;</button>
      <button class="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-amber-400" id="prev-lb">‹</button>
      <button class="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-amber-400" id="next-lb">›</button>
      <div class="lightbox-content">
        <img src="${img.src.replace('w=800', 'w=1600')}" alt="${title}" class="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl">
        <p class="text-white text-center mt-4 text-lg font-semibold">${title}</p>
        <p class="text-stone-400 text-center text-sm">${visibleItems.length > 0 ? (currentIndex + 1) + ' / ' + visibleItems.length : ''}</p>
      </div>
    `;
    document.body.appendChild(backdrop);
    document.body.style.overflow = 'hidden';

    backdrop.querySelector('#close-lb').addEventListener('click', closeLightbox);
    backdrop.querySelector('#prev-lb').addEventListener('click', () => navigate(-1));
    backdrop.querySelector('#next-lb').addEventListener('click', () => navigate(1));
    backdrop.addEventListener('click', e => { if (e.target === backdrop) closeLightbox(); });
  }

  function navigate(dir) {
    visibleItems = getVisible();
    currentIndex = (currentIndex + dir + visibleItems.length) % visibleItems.length;
    document.querySelector('.lightbox-backdrop')?.remove();
    openLightbox(currentIndex);
  }

  function closeLightbox() {
    document.querySelector('.lightbox-backdrop')?.remove();
    document.body.style.overflow = '';
  }

  items.forEach(item => {
    item.addEventListener('click', () => {
      const visible = getVisible();
      const idx = visible.indexOf(item);
      if (idx >= 0) openLightbox(idx);
    });
  });

  document.addEventListener('keydown', e => {
    if (!document.querySelector('.lightbox-backdrop')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('galeria-grid')) {
    setTimeout(() => initGalleryFilters(), 100);
  }
});