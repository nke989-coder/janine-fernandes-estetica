const mediaStyles = document.createElement('link');
mediaStyles.rel = 'stylesheet';
mediaStyles.href = 'media.css';
document.head.appendChild(mediaStyles);

const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
const year = document.querySelector('[data-year]');

if (year) year.textContent = new Date().getFullYear();

const syncHeader = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 24);
};

syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });

if (menuButton && mobileMenu) {
  const setMenu = (open) => {
    menuButton.setAttribute('aria-expanded', String(open));
    mobileMenu.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
  };

  menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  mobileLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');

if (reducedMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((item) => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      instance.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });

  reveals.forEach((item) => observer.observe(item));
}

const siteFooter = document.querySelector('footer');

if (siteFooter && !siteFooter.querySelector('.atlas-signature')) {
  const atlasSignature = document.createElement('div');
  atlasSignature.className = 'atlas-signature';
  atlasSignature.setAttribute('aria-label', 'Site desenvolvido pela Atlas Presença');
  atlasSignature.innerHTML = `
    <span>Site desenvolvido pela</span>
    <span class="atlas-signature-brand">
      <img src="https://raw.githubusercontent.com/nke989-coder/studio-melissa-pugsley/main/atlas-monograma.png" alt="" aria-hidden="true" />
      <strong>ATLAS PRESENÇA</strong>
    </span>
  `;
  siteFooter.appendChild(atlasSignature);

  const atlasStyles = document.createElement('style');
  atlasStyles.textContent = `
    .atlas-signature {
      width: min(1180px, calc(100vw - 40px));
      margin: 28px auto 0;
      padding: 22px 0 4px;
      border-top: 1px solid rgba(255,255,255,.12);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
      color: rgba(255,255,255,.5);
      font-size: 11px;
      letter-spacing: .02em;
    }
    .atlas-signature-brand {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      color: rgba(255,255,255,.82);
    }
    .atlas-signature-brand img {
      width: 22px;
      height: 22px;
      object-fit: contain;
      filter: brightness(0) invert(1);
      opacity: .92;
    }
    .atlas-signature-brand strong {
      font-size: 10px;
      letter-spacing: .16em;
      font-weight: 600;
    }
    @media (max-width: 640px) {
      .atlas-signature {
        margin-top: 22px;
        padding-top: 18px;
        font-size: 10px;
        gap: 8px;
      }
      .atlas-signature-brand img {
        width: 20px;
        height: 20px;
      }
      .atlas-signature-brand strong {
        font-size: 9px;
      }
    }
  `;
  document.head.appendChild(atlasStyles);
}
