document.addEventListener('DOMContentLoaded', () => {
  const data = window.APP_DATA || { APP: { nombre: 'MaderaStudio' }, NAV_ITEMS: [] };

  renderNavAndFooter(data);
  initMobileMenu();
  initNavbarScroll();
  initCounters();
  initCalculadora();
  initTabs();
  initContactForm();
  initCurrentYear();

  if (document.getElementById('testimonios-track')) renderTestimonios(data);
  if (document.getElementById('servicios-grid')) renderServicios(data, true);
  if (document.getElementById('servicios-grid-home')) renderServicios(data, false);
  if (document.getElementById('proceso-steps')) renderProceso(data);
  if (document.getElementById('stats-grid')) renderEstadisticas(data);
  if (document.getElementById('equipo-grid')) renderEquipo(data);
  if (document.getElementById('cursos-grid')) renderCursos(data);
  if (document.getElementById('planes-grid')) renderPlanes(data);
  if (document.getElementById('precios-list')) renderPrecios(data);
  if (document.getElementById('horarios-clases-table')) renderHorariosClases(data);
  if (document.getElementById('horarios-atencion-table')) renderHorariosAtencion(data);
  if (document.getElementById('certificaciones-grid')) renderCertificaciones(data);
  if (document.getElementById('galeria-grid')) renderGaleria(data);
  if (document.getElementById('maderas-grid')) renderMaderas(data);
  if (document.getElementById('faq-container')) renderFAQ(data);
});

function renderNavAndFooter(data) {
  const path = window.location.pathname.split('/').pop() || 'index.html';

  const navLinks = data.NAV_ITEMS.map(i => {
    const active = i.href === path ? 'active text-amber-700' : 'text-stone-700';
    return `<a href="${i.href}" class="nav-link ${active} hover:text-amber-700 font-medium transition-colors">${i.label}</a>`;
  }).join('');

  const navHTML = `
    <nav id="main-nav" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md">
      <div class="container-page">
        <div class="flex items-center justify-between h-20">
          <a href="index.html" class="flex items-center gap-3 group">
            <img src="assets/img/logo.svg" alt="${data.APP.nombre}" class="h-10 w-10 group-hover:scale-110 transition-transform" onerror="this.style.display='none'">
            <div>
              <span class="text-2xl font-extrabold text-amber-900">${data.APP.nombre}</span>
              <p class="text-xs text-stone-500 -mt-1 hidden sm:block">${data.APP.eslogan}</p>
            </div>
          </a>
          <div class="hidden lg:flex items-center gap-8">${navLinks}</div>
          <div class="hidden lg:flex items-center gap-3">
            <a href="tel:${data.APP.telefono}" class="btn-ghost">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              ${data.APP.telefono}
            </a>
            <a href="contacto.html" class="btn-accent">Cotizar mueble</a>
          </div>
          <button id="mobile-toggle" class="lg:hidden p-2 text-stone-700" aria-label="Menú">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" class="mobile-menu lg:hidden bg-white border-t border-amber-100">
        <div class="container-page py-4 flex flex-col gap-2">
          ${data.NAV_ITEMS.map(i => `<a href="${i.href}" class="px-4 py-3 rounded-lg hover:bg-amber-50 ${i.href === path ? 'bg-amber-50 text-amber-700 font-semibold' : 'text-stone-700'} font-medium">${i.label}</a>`).join('')}
          <a href="contacto.html" class="btn-accent mt-2">Cotizar mueble</a>
        </div>
      </div>
    </nav>
    <div class="h-20"></div>
  `;

  const navContainer = document.getElementById('nav-container');
  if (navContainer) navContainer.innerHTML = navHTML;

  const footerHTML = `
    <footer class="bg-stone-900 text-stone-300 pt-16 pb-8 mt-16 wood-texture">
      <div class="container-page">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <img src="assets/img/logo.svg" alt="${data.APP.nombre}" class="h-10 w-10" onerror="this.style.display='none'">
              <span class="text-2xl font-extrabold text-white">${data.APP.nombre}</span>
            </div>
            <p class="text-sm text-stone-400 mb-6">${data.APP.eslogan}. Muebles artesanales fabricados con tradición y tecnología, además de formación profesional en carpintería.</p>
            <div class="flex gap-3">
              ${redSocial('facebook', data.APP.redes.facebook)}
              ${redSocial('instagram', data.APP.redes.instagram)}
              ${redSocial('youtube', data.APP.redes.youtube)}
              ${redSocial('linkedin', data.APP.redes.linkedin)}
            </div>
          </div>
          <div>
            <h4 class="text-white font-bold mb-4">Empresa</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="index.html" class="hover:text-amber-500 transition-colors">Inicio</a></li>
              <li><a href="sobre-nosotros.html" class="hover:text-amber-500 transition-colors">Sobre nosotros</a></li>
              <li><a href="servicios.html" class="hover:text-amber-500 transition-colors">Servicios</a></li>
              <li><a href="galeria.html" class="hover:text-amber-500 transition-colors">Galería</a></li>
              <li><a href="precios.html" class="hover:text-amber-500 transition-colors">Precios</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-bold mb-4">Academia</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="horarios-clases.html" class="hover:text-amber-500 transition-colors">Cursos y horarios</a></li>
              <li><a href="horarios-clases.html#cursos" class="hover:text-amber-500 transition-colors">Temarios</a></li>
              <li><a href="horarios-clases.html#instructores" class="hover:text-amber-500 transition-colors">Instructores</a></li>
              <li><a href="contacto.html" class="hover:text-amber-500 transition-colors">Inscripción</a></li>
              <li><a href="contacto.html" class="hover:text-amber-500 transition-colors">Becas y descuentos</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-bold mb-4">Contacto</h4>
            <ul class="space-y-3 text-sm">
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                ${data.APP.direccion}
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1.1 1.1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <a href="tel:${data.APP.telefono}" class="hover:text-amber-500 transition-colors">${data.APP.telefono}</a>
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-5 h-5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:${data.APP.email}" class="hover:text-amber-500 transition-colors">${data.APP.email}</a>
              </li>
              <li class="flex items-start gap-2">
                <svg class="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>${data.APP.horarioAtencion}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-stone-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-400">
          <p>© <span id="current-year"></span> ${data.APP.nombre}. Todos los derechos reservados.</p>
          <div class="flex gap-6">
            <a href="politicas-privacidad.html" class="hover:text-amber-500 transition-colors">Políticas de privacidad</a>
            <a href="terminos-condiciones.html" class="hover:text-amber-500 transition-colors">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
    <a href="https://wa.me/${data.APP.whatsapp}" target="_blank" rel="noopener" class="whatsapp-float" aria-label="WhatsApp">
      <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  `;

  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) footerContainer.innerHTML = footerHTML;
}

function redSocial(tipo, url) {
  const icons = {
    facebook: '<path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>',
    instagram: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>',
    youtube: '<path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>',
    linkedin: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>'
  };
  return `<a href="${url}" target="_blank" rel="noopener" class="w-10 h-10 rounded-full bg-stone-800 hover:bg-amber-600 flex items-center justify-center transition-colors duration-300" aria-label="${tipo}"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">${icons[tipo]}</svg></a>`;
}

function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    const isOpen = menu.classList.contains('open');
    toggle.innerHTML = isOpen
      ? '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>'
      : '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>';
  });
}

function initNavbarScroll() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) nav.classList.add('nav-scrolled');
    else nav.classList.remove('nav-scrolled');
  });
}

function initCurrentYear() {
  const el = document.getElementById('current-year');
  if (el) el.textContent = new Date().getFullYear();
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.counter, 10);
    const dur = 2000;
    const start = performance.now();
    const animate = now => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const val = Math.floor(eased * target);
      el.textContent = val.toLocaleString('es-CL') + (el.dataset.suffix || '');
      if (t < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  counters.forEach(c => observer.observe(c));
  // Safety net: si el observer no dispara (e.g. screenshot, viewport grande)
  setTimeout(() => {
    counters.forEach(c => {
      if (c.textContent.startsWith('0')) {
        animateCounter(c);
        observer.unobserve(c);
      }
    });
  }, 1500);
}

function initCalculadora() {
  const form = document.getElementById('calculadora-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const tipo = form.tipo.value;
    const urgencia = parseFloat(form.urgencia.value);
    const metros = parseFloat(form.metros.value) || 1;
    const base = SERVICIOS_BASE[tipo] || 80000;
    const total = Math.round(base * urgencia * metros);
    document.getElementById('calc-result').innerHTML = `
        <div class="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 text-center">
          <p class="text-sm text-stone-600 mb-2">Presupuesto estimado</p>
          <p class="text-4xl font-extrabold text-amber-900">$${total.toLocaleString('es-CL')}</p>
          <p class="text-xs text-stone-500 mt-2">*Valor referencial. Cotización formal tras visita técnica.</p>
        </div>`;
    document.getElementById('calc-result').classList.remove('hidden');
  });
}

const SERVICIOS_BASE = {
  mueble: 80000, cocina: 150000, closet: 95000,
  puerta: 45000, deck: 95000, restauracion: 35000,
  tallado: 25000, diseno: 30000, barnizado: 12000, industrial: 250000
};

function initFAQ() {
  document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      item.classList.toggle('open');
    });
  });
}

function initTabs() {
  document.querySelectorAll('[data-tab-group]').forEach(group => {
    const btns = group.querySelectorAll('[data-tab]');
    const contents = document.querySelectorAll(`[data-tab-content="${group.dataset.tabGroup}"]`);
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active', 'bg-amber-700', 'text-white'));
        btn.classList.add('active', 'bg-amber-700', 'text-white');
        contents.forEach(c => c.classList.remove('active'));
        const target = document.getElementById(btn.dataset.tab);
        if (target) target.classList.add('active');
      });
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      const err = field.parentElement.querySelector('.error-msg');
      if (!field.value.trim() || (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value))) {
        field.classList.add('border-red-500');
        if (err) err.classList.remove('hidden');
        valid = false;
      } else {
        field.classList.remove('border-red-500');
        if (err) err.classList.add('hidden');
      }
    });
    const msg = document.getElementById('form-message');
    if (valid) {
      msg.innerHTML = '<div class="bg-green-50 border-2 border-green-300 text-green-800 rounded-lg p-4"><strong>¡Mensaje enviado!</strong> Nos pondremos en contacto a la brevedad.</div>';
      form.reset();
      setTimeout(() => msg.innerHTML = '', 6000);
    } else {
      msg.innerHTML = '<div class="bg-red-50 border-2 border-red-300 text-red-800 rounded-lg p-4">Por favor completa todos los campos correctamente.</div>';
    }
  });
}

function renderTestimonios(data) {
  const track = document.getElementById('testimonios-track');
  if (!track) return;
  track.innerHTML = data.TESTIMONIOS.map(t => `
    <div class="snap-item flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4">
      <div class="card p-8 h-full">
        <div class="flex text-amber-500 mb-3">${'★'.repeat(t.rating)}</div>
        <p class="text-stone-700 italic mb-6">"${t.texto}"</p>
        <div class="flex items-center gap-3">
          <img src="${t.avatar}" alt="${t.nombre}" class="w-12 h-12 rounded-full object-cover">
          <div>
            <p class="font-bold text-stone-900">${t.nombre}</p>
            <p class="text-sm text-stone-500">${t.cargo}</p>
          </div>
        </div>
      </div>
    </div>`).join('');
}

function renderServicios(data, all = true) {
  const grid = document.getElementById('servicios-grid');
  const targetId = all ? 'servicios-grid' : 'servicios-grid-home';
  const target = document.getElementById(targetId);
  if (!target) return;
  const items = all ? data.SERVICIOS : data.SERVICIOS.slice(0, 4);
  target.innerHTML = items.map((s, i) => `
    <div class="card card-3d p-6 anim-hidden" style="animation-delay:${i * 0.1}s" data-counter-observe>
      <div class="w-14 h-14 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
        ${iconoServicio(s.icono)}
      </div>
      <h3 class="text-xl font-bold text-stone-900 mb-2">${s.nombre}</h3>
      <p class="text-stone-600 mb-4 text-sm leading-relaxed">${s.descripcion}</p>
      <div class="flex items-center justify-between mt-auto border-t border-amber-100">
        <div>
          <span class="text-xs text-stone-500">Desde</span>
          <p class="text-xl font-extrabold text-amber-900">$${s.precioDesde.toLocaleString('es-CL')}</p>
        </div>
        <a href="contacto.html?servicio=${s.id}" class="btn-ghost text-amber-700 hover:text-amber-900 font-semibold">Cotizar →</a>
      </div>
    </div>`).join('');
  observeAnimations();
}

function iconoServicio(tipo) {
  const icons = {
    mueble: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>',
    cocina: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>',
    closet: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16M9 6v12M15 6v12"/></svg>',
    puerta: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>',
    deck: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>',
    restauracion: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>',
    tallado: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M9 17l-5 5m6-6l2.879-2.879M14 14l5 5M9 9l-5-5"/></svg>',
    diseno: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
    barnizado: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.5a1 1 0 010-2H21V8a2 2 0 00-2-2H7"/></svg>',
    industrial: '<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'
  };
  return icons[tipo] || icons.mueble;
}

function renderProceso(data) {
  const el = document.getElementById('proceso-steps');
  if (!el) return;
  el.innerHTML = data.PROCESO.map(p => `
    <div class="relative pl-16 pb-8 anim-hidden" data-counter-observe>
      <div class="absolute left-0 top-0 w-12 h-12 rounded-full bg-amber-700 text-white flex items-center justify-center font-extrabold text-xl shadow-lg">${p.num}</div>
      <h3 class="text-xl font-bold text-stone-900 mb-2">${p.titulo}</h3>
      <p class="text-stone-600">${p.descripcion}</p>
    </div>`).join('');
  observeAnimations();
}

function renderEstadisticas(data) {
  const el = document.getElementById('stats-grid');
  if (!el) return;
  el.innerHTML = data.ESTADISTICAS.map(e => `
    <div class="text-center">
      <p class="text-4xl md:text-5xl font-extrabold text-white"><span data-counter="${e.num}" data-suffix="${e.sufijo}">0${e.sufijo}</span></p>
      <p class="text-amber-100 mt-2 text-sm md:text-base">${e.label}</p>
    </div>`).join('');
  initCounters();
}

function renderEquipo(data) {
  const el = document.getElementById('equipo-grid');
  if (!el) return;
  el.innerHTML = data.EQUIPO.map((m, i) => `
    <div class="card overflow-hidden anim-hidden" style="animation-delay:${i * 0.1}s" data-counter-observe>
      <div class="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
        <img src="${m.foto}" alt="${m.nombre}" class="w-full h-full object-cover" loading="lazy">
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold text-stone-900">${m.nombre}</h3>
        <p class="text-amber-700 font-semibold text-sm mb-3">${m.cargo}</p>
        <p class="text-stone-600 text-sm">${m.bio}</p>
      </div>
    </div>`).join('');
  observeAnimations();
}

function renderCursos(data) {
  const el = document.getElementById('cursos-grid');
  if (!el) return;
  el.innerHTML = data.CURSOS.map((c, i) => `
    <div class="card card-3d p-8 anim-hidden ${c.cuposDisponibles <= 5 ? 'border-amber-300 border-2' : ''}" style="animation-delay:${i * 0.15}s" data-counter-observe>
      <div class="flex items-center justify-between mb-4">
        <span class="badge">${c.nivel.split(' ')[1] || c.nivel}</span>
        ${c.cuposDisponibles <= 5 ? '<span class="text-xs text-amber-700 font-bold">¡Últimos cupos!</span>' : ''}
      </div>
      <h3 class="text-2xl font-bold text-stone-900 mb-2">${c.nivel}</h3>
      <p class="text-stone-600 mb-4">${c.descripcion}</p>
      <div class="grid grid-cols-2 gap-3 mb-4 text-sm">
        <div class="bg-amber-50 rounded-lg p-3">
          <p class="text-stone-500 text-xs">Duración</p>
          <p class="font-bold text-stone-900">${c.duracion}</p>
        </div>
        <div class="bg-amber-50 rounded-lg p-3">
          <p class="text-stone-500 text-xs">Próximo inicio</p>
          <p class="font-bold text-stone-900">${c.proximoInicio}</p>
        </div>
      </div>
      <div class="mb-4">
        <p class="text-sm font-semibold text-stone-700 mb-2">Temario:</p>
        <ul class="text-sm text-stone-600 space-y-1">
          ${c.temario.slice(0, 4).map(t => `<li class="flex items-start gap-2"><span class="text-amber-600">✓</span>${t}</li>`).join('')}
        </ul>
      </div>
      <div class="flex items-center justify-between pt-4 border-t border-amber-100">
        <div>
          <p class="text-xs text-stone-500">Inversión total</p>
          <p class="text-2xl font-extrabold text-amber-900">$${c.precio.toLocaleString('es-CL')}</p>
        </div>
        <a href="contacto.html?curso=${c.id}" class="btn-accent">Inscribirme</a>
      </div>
    </div>`).join('');
  observeAnimations();
}

function renderPlanes(data) {
  const el = document.getElementById('planes-grid');
  if (!el) return;
  el.innerHTML = data.PLANES.map((p, i) => `
    <div class="card p-8 relative ${p.destacado ? 'border-2 border-amber-500 scale-105 z-10 shadow-2xl' : ''} anim-hidden" style="animation-delay:${i * 0.15}s" data-counter-observe>
      ${p.destacado ? '<span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs font-bold px-4 py-1 rounded-full">MÁS POPULAR</span>' : ''}
      <h3 class="text-2xl font-bold text-stone-900 mb-2">${p.nombre}</h3>
      <p class="text-stone-500 mb-4 text-sm">${p.descripcion}</p>
      <div class="mb-6">
        <span class="text-5xl font-extrabold text-amber-900">$${p.precio.toLocaleString('es-CL')}</span>
        <span class="text-stone-500">/${p.periodicidad}</span>
      </div>
      <ul class="space-y-3 mb-8">
        ${p.caracteristicas.map(c => `<li class="flex items-start gap-2 text-sm text-stone-700"><svg class="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>${c}</li>`).join('')}
      </ul>
      <a href="contacto.html?plan=${encodeURIComponent(p.nombre)}" class="${p.destacado ? 'btn-accent' : 'btn-primary'} w-full">Contratar</a>
    </div>`).join('');
  observeAnimations();
}

function renderPrecios(data) {
  const el = document.getElementById('precios-list');
  if (!el) return;
  el.innerHTML = data.PRECIOS_SERVICIOS.map((p, i) => `
    <div class="flex items-center justify-between p-4 hover:bg-amber-50 transition-colors rounded-lg anim-hidden" style="animation-delay:${i * 0.05}s" data-counter-observe>
      <div>
        <p class="font-semibold text-stone-900">${p.servicio}</p>
        <p class="text-xs text-stone-500">${p.nota}</p>
      </div>
      <p class="text-xl font-extrabold text-amber-900 whitespace-nowrap">$${p.precio.toLocaleString('es-CL')}</p>
    </div>`).join('');
  observeAnimations();
}

function renderHorariosClases(data) {
  const el = document.getElementById('horarios-clases-table');
  if (!el) return;
  el.innerHTML = `
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="bg-amber-800 text-white">
            <th class="p-4 text-left font-bold">Día</th>
            <th class="p-4 text-center font-bold">Mañana</th>
            <th class="p-4 text-center font-bold">Tarde</th>
            <th class="p-4 text-center font-bold">Noche</th>
          </tr>
        </thead>
        <tbody>
          ${data.HORARIOS_CLASES.map(h => `
            <tr class="border-b border-amber-100 hover:bg-amber-50">
              <td class="p-4 font-semibold text-stone-900">${h.dia}</td>
              <td class="p-4 text-center ${h.manana && h.manana !== 'Cerrado' ? 'text-stone-700' : 'text-stone-400'}">${h.manana || '—'}</td>
              <td class="p-4 text-center ${h.tarde ? 'text-stone-700' : 'text-stone-400'}">${h.tarde || '—'}</td>
              <td class="p-4 text-center ${h.noche ? 'text-stone-700' : 'text-stone-400'}">${h.noche || '—'}</td>
            </tr>`).join('')}
        </tbody>
      </table>
    </div>`;
}

function renderHorariosAtencion(data) {
  const el = document.getElementById('horarios-atencion-table');
  if (!el) return;
  el.innerHTML = data.HORARIOS_ATENCION.map(h => `
    <div class="flex items-center justify-between p-3 border-b border-amber-100 last:border-0">
      <span class="font-semibold text-stone-900">${h.dia}</span>
      <span class="text-amber-800 font-bold">${h.horario}</span>
    </div>`).join('');
}

function renderCertificaciones(data) {
  const el = document.getElementById('certificaciones-grid');
  if (!el) return;
  el.innerHTML = data.CERTIFICACIONES.map(c => `
    <div class="bg-amber-50 hover:bg-amber-100 rounded-lg p-6 text-center transition-colors anim-hidden" data-counter-observe>
      <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-amber-700 text-white flex items-center justify-center">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <p class="text-sm font-semibold text-stone-700">${c}</p>
    </div>`).join('');
  observeAnimations();
}

function renderGaleria(data) {
  const el = document.getElementById('galeria-grid');
  if (!el) return;
  el.innerHTML = data.GALERIA.map(g => `
    <div class="gallery-item cursor-pointer group" data-cat="${g.categoria}">
      <div class="relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300">
        <img src="${g.img}" alt="${g.titulo}" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div class="text-white">
            <p class="font-bold">${g.titulo}</p>
            <span class="text-xs uppercase tracking-wide">${g.categoria}</span>
          </div>
        </div>
      </div>
    </div>`).join('');
  initGalleryFilters();
}

function renderMaderas(data) {
  const el = document.getElementById('maderas-grid');
  if (!el) return;
  el.innerHTML = data.MADERAS.map((m, i) => `
    <div class="wood-card anim-hidden" style="animation-delay:${i * 0.08}s" data-counter-observe>
      <div class="wood-sample" style="background-color:${m.color}"></div>
      <div class="p-6">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-xl font-bold text-stone-900">${m.nombre}</h3>
          <span class="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">${m.precio}</span>
        </div>
        <p class="text-stone-600 text-sm mb-4 leading-relaxed">${m.descripcion}</p>
        <div class="flex flex-wrap gap-2">
          ${m.usos.map(u => `<span class="text-xs px-2 py-1 bg-amber-50 text-amber-800 rounded">${u}</span>`).join('')}
        </div>
      </div>
    </div>`).join('');
  observeAnimations();
}

function renderFAQ(data) {
  const container = document.getElementById('faq-container');
  if (!container) return;
  container.innerHTML = data.FAQ.map((f, i) => `
    <div class="faq-item card overflow-hidden" data-anim="fade-in-up" style="animation-delay:${i * 0.05}s" data-counter-observe>
      <button class="faq-toggle w-full p-6 flex items-center justify-between text-left hover:bg-amber-50 transition-colors">
        <span class="font-bold text-stone-900 pr-4">${f.pregunta}</span>
        <span class="faq-icon text-2xl text-amber-700 flex-shrink-0">+</span>
      </button>
      <div class="faq-answer px-6">
        <p class="text-stone-600 leading-relaxed">${f.respuesta}</p>
      </div>
    </div>
  `).join('');
  document.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.faq-item').classList.toggle('open');
    });
  });
}

function observeAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('anim-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });
  const elements = document.querySelectorAll('[data-counter-observe]');
  elements.forEach(el => observer.observe(el));
  // Safety net: garantiza visibilidad si el observer no dispara (e.g. screenshots)
  setTimeout(() => {
    elements.forEach(el => {
      if (el.classList.contains('anim-hidden')) {
        el.classList.add('anim-fade-in-up');
        observer.unobserve(el);
      }
    });
  }, 1800);
}

window.initFAQ = initFAQ;