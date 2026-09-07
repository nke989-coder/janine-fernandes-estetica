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
