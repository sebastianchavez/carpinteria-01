# MaderaStudio — Landing Page para Carpintería

Template HTML/CSS/JS completo para una carpintería artesanal con academia. 100% estático, sin build step, listo para personalizar.

## 🚀 Inicio rápido

No requiere instalación. Solo abre `index.html` en cualquier navegador moderno.

Para servirlo localmente (recomendado, evita restricciones de CORS en algunos navegadores):

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

Luego abre `http://localhost:8000`.

## 📂 Estructura del proyecto

```
carpinteria-01/
├── index.html                  Pantalla principal (Inicio)
├── sobre-nosotros.html         Sobre nosotros
├── servicios.html               Nuestros servicios
├── galeria.html                Galería de trabajos
├── precios.html                Precios y planes
├── horarios-clases.html        Academia y horarios
├── contacto.html               Contacto + formulario + mapa
├── politicas-privacidad.html   Política de privacidad
├── terminos-condiciones.html   Términos y condiciones
├── README.md                   Este archivo
└── assets/
    ├── css/
    │   └── styles.css          Estilos personalizados
    ├── js/
    │   ├── data.js             Mock data (APP, servicios, equipo, etc.)
    │   ├── main.js             Render dinámico + formularios + contadores
    │   ├── animations.js       Animaciones de scroll
    │   └── gallery.js          Filtros + lightbox de galería
    └── img/
        └── logo.svg            Logo del sitio
```

## 🎨 Stack técnico

- **HTML5** semántico
- **Tailwind CSS 3** vía CDN (no requiere build)
- **JavaScript vanilla** (sin frameworks)
- **Google Fonts**: Inter + Cormorant Garamond
- **Iconos**: Heroicons SVG inline

## 🎨 Paleta de colores

Madera / cobre / crema — definidos en el `tailwind.config` de cada HTML:

| Token | Color | Uso |
|-------|-------|-----|
| `amber-50` | `#FFFBEB` | Fondo del sitio |
| `amber-100` | `#fef3c7` | Badges, fondos suaves |
| `amber-700` | `#B45309` | CTAs principales, acentos |
| `amber-800` | `#92400E` | Header gradiente |
| `amber-900` | `#78350F` | Texto destacado |
| `stone-700/900` | grises | Texto |

## ✏️ Personalizar datos del negocio

Toda la información del sitio está en **`assets/js/data.js`**. Edítalo para personalizar:

```js
const APP = {
  nombre: 'MaderaStudio',        // ← Cambia el nombre
  eslogan: 'Carpintería...',     // ← Cambia el eslogan
  telefono: '+56 9 8765 4321',   // ← Teléfono
  whatsapp: '56987654321',       // ← WhatsApp (sin +)
  email: 'contacto@...',
  direccion: 'Av. Los Carpinteros...',
  horarioAtencion: 'Lun-Vie 09:00-19:00',
  redes: { facebook, instagram, youtube, linkedin }
};

const NAV_ITEMS = [...];         // Items del menú
const SERVICIOS = [...];         // Catálogo de servicios
const EQUIPO = [...];            // Equipo de trabajo
const TESTIMONIOS = [...];       // Reseñas de clientes
const PLANES = [...];            // Planes mensuales
const PRECIOS_SERVICIOS = [...]; // Lista de precios
const CURSOS = [...];            // Cursos academia
const HORARIOS_CLASES = [...];   // Horarios academia
const HORARIOS_ATENCION = [...]; // Horarios de atención
const GALERIA = [...];           // Trabajos galería
const MADERAS = [...];           // Tipos de madera
const PROCESO = [...];           // Pasos del proceso
const ESTADISTICAS = [...];      // Métricas
const CERTIFICACIONES = [...];   // Certificaciones
const FAQ = [...];               // Preguntas frecuentes
```

Después de editar, los cambios se reflejan automáticamente en todas las páginas.

## 🧩 Componentes reutilizables

Definidos como clases en `assets/css/styles.css`:

- `.btn-primary` — Botón madera oscuro
- `.btn-accent` — Botón cobre (CTA principal)
- `.btn-outline` — Botón con borde
- `.btn-ghost` — Botón transparente
- `.container-page` — Container con padding responsivo
- `.section` — Padding generoso para secciones
- `.section-title` / `.section-subtitle` — Tipografía de títulos
- `.card` — Card base con borde y sombra
- `.card-3d` — Card con hover elevado
- `.wood-card` — Card para tipos de madera
- `.input-field` / `.label-field` — Estilos de formulario
- `.badge` — Etiqueta pequeña
- `.wood-sample` — Muestra de color de madera
- `.proceso-line` — Línea vertical del proceso

## ✨ Animaciones disponibles

- `data-anim="fade-in"` / `fade-in-up` / `fade-in-down` / `fade-in-left` / `fade-in-right` / `scale-in` / `float`
- `data-counter="123"` — Contadores animados (e.g. `ESTADISTICAS`)
- `data-reveal` — Reveal al cargar la página (e.g. hero)
- `data-parallax` — Parallax en hero
- `data-counter-observe` — Para items renderizados dinámicamente

## 📋 Formularios

### Formulario principal (contacto.html)
- Validación JS en tiempo real
- Validación de email
- Mensaje de éxito/error tras envío
- No envía datos (es un mockup); integrar a un servicio como Formspree, Netlify Forms, o backend propio.

### Calculadora de presupuesto
- 10 tipos de muebles con tarifas base
- Multiplicador por urgencia
- Multiplicador por tamaño
- Resultado referencial (orientativo)

## 🖼️ Imágenes

Las imágenes usan servicios mock:
- **Picsum Photos** (con seed) para galería
- **Pravatar.cc** para avatares

Para producción, reemplaza con imágenes propias en `assets/img/`.

## 🗺️ Mapa de contacto

`contacto.html` usa un iframe de OpenStreetMap. Para cambiar la ubicación, edita el `src` del iframe:

```html
<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=LNG_MERCURY&marker=LAT,LNG">
```

## 📱 Responsive

Todas las páginas son mobile-first:
- Menú hamburguesa en móvil (`< lg`)
- Grids colapsan a 1 columna en móvil
- Tipografía escalable (`text-4xl md:text-6xl`)

## 🔧 Compatibilidad probada

- Chrome / Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari iOS 14+
- Chrome Android 90+

## 🚢 Deploy

Sube los archivos a cualquier hosting estático:

- **Netlify** — Drag & drop
- **Vercel** — `vercel deploy`
- **GitHub Pages** — Push a `gh-pages`
- **Cloudflare Pages** — Conecta repo

Sin variables de entorno, sin build step, sin dependencias externas (excepto Tailwind CDN, opcionalmente puede compilarse).

## 📄 Licencia

Template libre para uso en `Carpintería o taller de madera`. Personaliza textos, imágenes y colores según tu negocio.

## 🆘 Soporte y personalización

Para modificar el template:
1. **Textos**: Edita `assets/js/data.js`
2. **Colores**: Cambia la config de Tailwind en cada HTML
4. **Imágenes**: Reemplaza URLs de picsum/pravatar con imágenes propias
5. **Formulario**: Conecta a tu backend o servicio (Formspree, etc.)
6. **Logo**: Reemplaza `assets/img/logo.svg`

---

Hecho con HTML + Tailwind + JS nativo. Sin frameworks, sin build step. Ábrelo y edítalo.