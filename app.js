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
    <a class="atlas-signature-link"
       href="https://atlaspresenca.com.br/"
       target="_blank"
       rel="noopener noreferrer"
       aria-label="Site desenvolvido pela ATLAS PRESENÇA — abrir site da ATLAS">
      <span class="atlas-signature-copy">Site desenvolvido pela</span>
      <span class="atlas-signature-brand">
        <span class="atlas-signature-mark" aria-hidden="true">
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="presentation">
            <path d="M24 4 42 42h-8.2l-3.1-7H17.2L14 42H6L24 4Zm0 13-4.3 10.3h8.6L24 17Z" fill="currentColor"/>
            <path d="M14.8 31.2h18.4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" opacity=".45"/>
          </svg>
        </span>
        <strong>ATLAS PRESENÇA</strong>
      </span>
    </a>
  `;
  siteFooter.appendChild(atlasSignature);

  const atlasStyles = document.createElement('style');
  atlasStyles.textContent = `
    .atlas-signature {
      width: min(1180px, calc(100vw - 40px));
      margin: 30px auto 0;
      padding: 24px 0 2px;
      border-top: 1px solid rgba(255,255,255,.14);
      display: flex;
      justify-content: center;
    }
    .atlas-signature-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 11px;
      flex-wrap: wrap;
      color: rgba(255,255,255,.62);
      text-decoration: none;
      cursor: pointer;
      transition: color .2s ease, transform .2s ease, opacity .2s ease;
    }
    .atlas-signature-link:hover,
    .atlas-signature-link:focus-visible {
      color: #fff;
      transform: translateY(-1px);
    }
    .atlas-signature-copy {
      font-size: 11px;
      font-weight: 400;
      letter-spacing: .01em;
      text-transform: none;
    }
    .atlas-signature-brand {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #fff;
    }
    .atlas-signature-mark {
      width: 28px;
      height: 28px;
      display: inline-grid;
      place-items: center;
      color: #fff;
      flex: 0 0 28px;
    }
    .atlas-signature-mark svg {
      width: 28px;
      height: 28px;
      display: block;
    }
    .atlas-signature-brand strong {
      font-size: 10px;
      line-height: 1;
      letter-spacing: .18em;
      font-weight: 600;
    }
    @media (max-width: 640px) {
      .atlas-signature {
        width: calc(100vw - 24px);
        margin-top: 24px;
        padding-top: 20px;
      }
      .atlas-signature-link {
        gap: 8px;
      }
      .atlas-signature-copy {
        font-size: 10px;
      }
      .atlas-signature-mark,
      .atlas-signature-mark svg {
        width: 24px;
        height: 24px;
      }
      .atlas-signature-mark {
        flex-basis: 24px;
      }
      .atlas-signature-brand strong {
        font-size: 9px;
        letter-spacing: .15em;
      }
    }
  `;
  document.head.appendChild(atlasStyles);
}
