document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initParallax();
  initHeaderReveal();
  initTestimoniosDots();
});

function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const anim = el.dataset.anim || 'fade-in-up';
        el.classList.add(`anim-${anim}`);
        el.classList.remove('anim-hidden');
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

  const animated = document.querySelectorAll('[data-anim]');
  animated.forEach(el => {
    el.classList.add('anim-hidden');
    observer.observe(el);
  });
  // Safety net: garantiza visibilidad aunque el observer no dispare
  setTimeout(() => {
    animated.forEach(el => {
      if (el.classList.contains('anim-hidden')) {
        const anim = el.dataset.anim || 'fade-in-up';
        el.classList.add(`anim-${anim}`);
        el.classList.remove('anim-hidden');
        observer.unobserve(el);
      }
    });
  }, 1800);
}

function initParallax() {
  const hero = document.querySelector('[data-parallax]');
  if (!hero) return;
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  }, { passive: true });
}

function initHeaderReveal() {
  const reveal = document.querySelectorAll('[data-reveal]');
  reveal.forEach((el, idx) => {
    el.style.animationDelay = `${idx * 0.1}s`;
    el.classList.add('anim-fade-in-down');
  });
}

function initTestimoniosDots() {
  const track = document.getElementById('testimonios-track');
  const dotsContainer = document.getElementById('testimonios-dots');
  if (!track || !dotsContainer) return;

  track.addEventListener('scroll', () => {
    const items = track.querySelectorAll('.snap-item');
    const scrollLeft = track.scrollLeft;
    const itemWidth = items[0]?.offsetWidth || 1;
    const index = Math.round(scrollLeft / itemWidth);
    dotsContainer.querySelectorAll('button').forEach((d, i) => {
      d.classList.toggle('bg-amber-700', i === index);
      d.classList.toggle('bg-stone-300', i !== index);
      d.classList.toggle('w-8', i === index);
      d.classList.toggle('w-3', i !== index);
    });
  });

  const items = track.querySelectorAll('.snap-item');
  items.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = `h-3 rounded-full transition-all duration-300 ${i === 0 ? 'bg-amber-700 w-8' : 'bg-stone-300 w-3'}`;
    btn.setAttribute('aria-label', `Testimonio ${i + 1}`);
    btn.addEventListener('click', () => {
      const itemWidth = items[0].offsetWidth;
      track.scrollTo({ left: i * itemWidth, behavior: 'smooth' });
    });
    dotsContainer.appendChild(btn);
  });
}