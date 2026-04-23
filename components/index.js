/* Ambient Counterpoint — Web Components */

// ── site-nav ──────────────────────────────────────────────────────────────────
class SiteNav extends HTMLElement {
  connectedCallback() {
    const href  = this.getAttribute('href');
    const label = this.getAttribute('label') || 'Ambient Counterpoint';
    const isChordFinder = window.location.pathname.includes('chord-finder');
    const toolLink = isChordFinder ? '' : `<a href="chord-finder.html" target="_blank" class="site-nav-tool">Harmonic Navigator</a>`;
    const left = href
      ? `<a href="${href}">${label}</a>`
      : `<span class="site-nav-home">Ambient Counterpoint</span>`;
    this.innerHTML = `<nav class="site-nav">${left}${toolLink}</nav>`;
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

// ── Diagram Zoom ──────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.createElement('dialog');
  dialog.className = 'diagram-zoom';
  document.body.appendChild(dialog);

  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });

  document.querySelectorAll('.diagram-wrap').forEach(wrap => {
    wrap.addEventListener('click', () => {
      const svg = wrap.querySelector('svg');
      if (!svg) return;
      dialog.innerHTML = '';
      dialog.appendChild(svg.cloneNode(true));
      const closeBtn = document.createElement('button');
      closeBtn.className = 'diagram-zoom-close';
      closeBtn.textContent = '✕ close';
      closeBtn.addEventListener('click', () => dialog.close());
      dialog.appendChild(closeBtn);
      dialog.showModal();
    });
  });
});
