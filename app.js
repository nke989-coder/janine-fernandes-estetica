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
  atlasSignature.innerHTML = `
    <a class="atlas-credit"
       href="https://atlaspresenca.com.br"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Site desenvolvido pela Atlas Presença">
      <span>Site desenvolvido pela</span>
      <img src="https://raw.githubusercontent.com/nke989-coder/studio-melissa-pugsley/main/atlas-monograma.png" alt="" aria-hidden="true" />
      <strong>Atlas Presença</strong>
    </a>
  `;
  siteFooter.appendChild(atlasSignature);

  const atlasStyles = document.createElement('style');
  atlasStyles.textContent = `
    .atlas-signature {
      width: min(1180px, calc(100vw - 40px));
      margin: 30px auto 0;
      padding: 22px 0 2px;
      border-top: 1px solid rgba(255,255,255,.15);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .atlas-credit {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      color: #eee4dd;
      font-size: 9px;
      letter-spacing: .1em;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      transition: color .2s ease;
    }
    .atlas-credit:hover,
    .atlas-credit:focus-visible {
      color: #fff;
    }
    .atlas-credit img {
      width: 26px;
      height: auto;
      display: block;
      object-fit: contain;
    }
    .atlas-credit strong {
      font-weight: 600;
      letter-spacing: .13em;
    }
    @media (max-width: 640px) {
      .atlas-signature {
        width: calc(100vw - 24px);
        margin-top: 24px;
        padding-top: 20px;
      }
      .atlas-credit {
        flex-wrap: wrap;
      }
    }
  `;
  document.head.appendChild(atlasStyles);
}
