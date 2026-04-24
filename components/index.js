/* Music Manual — Web Components */

// ── site-nav ──────────────────────────────────────────────────────────────────
class SiteNav extends HTMLElement {
  connectedCallback() {
    const href  = this.getAttribute('href');
    const label = this.getAttribute('label') || 'Music Manual';
    const isChordFinder = window.location.pathname.includes('chord-finder');
    const toolLink = isChordFinder ? '' : `<a href="chord-finder.html" target="_blank" class="site-nav-tool">Harmonic Navigator</a>`;
    const left = href
      ? `<a href="${href}">${label}</a>`
      : `<span class="site-nav-home">Music Manual</span>`;
    this.innerHTML = `<nav class="site-nav">${left}${toolLink}</nav>`;

    if (window.matchMedia('(max-width: 600px)').matches) {
      const nav = this.querySelector('.site-nav');
      window.addEventListener('scroll', () => {
        nav.classList.toggle('is-scrolled', window.scrollY > 60);
      }, { passive: true });
    }
  }
}
customElements.define('site-nav', SiteNav);

// ── site-banner ───────────────────────────────────────────────────────────────
class SiteBanner extends HTMLElement {
  connectedCallback() {
    const text = this.innerHTML.trim();
    this.innerHTML = `<div class="banner"><span class="banner-text">${text}</span></div>`;
  }
}
customElements.define('site-banner', SiteBanner);

// ── site-hero ─────────────────────────────────────────────────────────────────
class SiteHero extends HTMLElement {
  connectedCallback() {
    const titleEl    = this.querySelector('[slot="title"]');
    const subtitleEl = this.querySelector('[slot="subtitle"]');
    const titleHTML    = titleEl    ? titleEl.innerHTML    : '';
    const subtitleHTML = subtitleEl ? subtitleEl.innerHTML : '';
    const compact = this.hasAttribute('compact');
    this.innerHTML = `<div class="hero${compact ? ' hero-compact' : ''}">
  <h1><span>${titleHTML}</span></h1>
  <p class="subtitle">${subtitleHTML}</p>
</div>`;
  }
}
customElements.define('site-hero', SiteHero);

// ── intro-box ─────────────────────────────────────────────────────────────────
class IntroBox extends HTMLElement {
  connectedCallback() {
    const inner = this.innerHTML;
    this.innerHTML = `<div class="intro-box"><div class="inner">${inner}</div></div>`;
  }
}
customElements.define('intro-box', IntroBox);

// ── content-card ──────────────────────────────────────────────────────────────
class ContentCard extends HTMLElement {
  connectedCallback() {
    const number  = this.getAttribute('number') || '';
    const title   = this.getAttribute('title')  || '';
    const color   = this.getAttribute('color');
    const colorClass = color ? ` ${color}-num` : '';
    const body = this.innerHTML;
    this.innerHTML = `<div class="card">
  <div class="card-header">
    <div class="card-number${colorClass}">${number}</div>
    <div class="card-title">${title}</div>
  </div>
  <div class="card-body">${body}</div>
</div>`;
  }
}
customElements.define('content-card', ContentCard);

// ── chapter-nav ───────────────────────────────────────────────────────────────
class ChapterNav extends HTMLElement {
  connectedCallback() {
    const prevHref  = this.getAttribute('prev-href');
    const prevTitle = this.getAttribute('prev-title');
    const nextHref  = this.getAttribute('next-href');
    const nextTitle = this.getAttribute('next-title');
    const prevLink = prevHref
      ? `<a class="chapter-nav-item chapter-nav-prev" href="${prevHref}">
    <span class="chapter-nav-label">← Previous</span>
    <span class="chapter-nav-title">${prevTitle}</span>
  </a>`
      : '';
    const nextLink = nextHref
      ? `<a class="chapter-nav-item chapter-nav-next" href="${nextHref}">
    <span class="chapter-nav-label">Next →</span>
    <span class="chapter-nav-title">${nextTitle}</span>
  </a>`
      : '';
    this.innerHTML = `<div class="chapter-nav">${prevLink}${nextLink}</div>`;
  }
}
customElements.define('chapter-nav', ChapterNav);

// ── site-footer ───────────────────────────────────────────────────────────────
class SiteFooter extends HTMLElement {
  connectedCallback() {
    const text = this.getAttribute('text') || '';
    this.innerHTML = `<div class="footer"><p>${text}</p></div>`;
  }
}
customElements.define('site-footer', SiteFooter);

// ── Diagram Magnifier ─────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const LENS_SIZE   = 280;   // px diameter
  const ZOOM        = 2.5;   // magnification factor
  const HALF        = LENS_SIZE / 2;

  const lens = document.createElement('div');
  lens.className = 'diagram-lens';
  document.body.appendChild(lens);

  let lensClone = null;
  let activeSvg = null;

  function showLens(wrap, clientX, clientY) {
    const svg = wrap.querySelector('svg');
    if (!svg) return;

    // Rebuild clone only when entering a new diagram
    if (svg !== activeSvg) {
      activeSvg = svg;
      lensClone = svg.cloneNode(true);
      lensClone.style.cssText = '';
      lens.innerHTML = '';
      lens.appendChild(lensClone);
    }

    // Position of the SVG element on screen
    const svgRect  = svg.getBoundingClientRect();
    const svgW     = svgRect.width;
    const svgH     = svgRect.height;

    // Cursor position relative to SVG, clamped so lens doesn't show empty space
    const relX = Math.max(0, Math.min(svgW, clientX - svgRect.left));
    const relY = Math.max(0, Math.min(svgH, clientY - svgRect.top));

    // The clone must be scaled and offset so that `relX/relY` maps to the center
    const scaledW = svgW * ZOOM;
    const scaledH = svgH * ZOOM;
    const offsetX = HALF - relX * ZOOM;
    const offsetY = HALF - relY * ZOOM;

    lensClone.style.width    = `${scaledW}px`;
    lensClone.style.height   = `${scaledH}px`;
    lensClone.style.position = 'absolute';
    lensClone.style.left     = `${offsetX}px`;
    lensClone.style.top      = `${offsetY}px`;

    // Center lens directly on cursor/finger
    lens.style.left = `${clientX - HALF}px`;
    lens.style.top  = `${clientY - HALF}px`;
    lens.classList.add('is-visible');
  }

  function hideLens() {
    lens.classList.remove('is-visible');
    activeSvg = null;
  }

  document.querySelectorAll('.diagram-wrap').forEach(wrap => {
    // Mouse
    wrap.addEventListener('mousemove', e => showLens(wrap, e.clientX, e.clientY));
    wrap.addEventListener('mouseleave', hideLens);

    // Touch
    wrap.addEventListener('touchstart', e => {
      e.preventDefault();
      const t = e.touches[0];
      showLens(wrap, t.clientX, t.clientY);
    }, { passive: false });
    wrap.addEventListener('touchmove', e => {
      e.preventDefault();
      const t = e.touches[0];
      showLens(wrap, t.clientX, t.clientY);
    }, { passive: false });
    wrap.addEventListener('touchend', hideLens);
    wrap.addEventListener('touchcancel', hideLens);
  });
});
