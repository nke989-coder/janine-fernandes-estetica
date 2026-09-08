const mediaStyles = document.createElement('link');
mediaStyles.rel = 'stylesheet';
mediaStyles.href = 'media.css';
document.head.appendChild(mediaStyles);

const janineLogo = 'data:image/jpeg;base64,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';

const applyOfficialLogo = () => {
  const headerBrand = document.querySelector('.site-header .brand');
  if (headerBrand) {
    headerBrand.innerHTML = `<img src="${janineLogo}" alt="Janine Fernandes" class="janine-official-logo">`;
  }
  const footerBrand = document.querySelector('.site-footer .footer-brand');
  if (footerBrand) {
    footerBrand.innerHTML = `<img src="${janineLogo}" alt="Janine Fernandes" class="janine-official-logo janine-official-logo-footer">`;
  }
  const style = document.createElement('style');
  style.textContent = `.janine-official-logo{display:block;width:154px;height:auto;object-fit:contain;border-radius:2px}.janine-official-logo-footer{width:170px}@media(max-width:640px){.janine-official-logo{width:132px}.janine-official-logo-footer{width:154px}}`;
  document.head.appendChild(style);
};
applyOfficialLogo();

const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
const syncHeader = () => { if (header) header.classList.toggle('scrolled', window.scrollY > 24); };
syncHeader(); window.addEventListener('scroll', syncHeader, { passive: true });
if (menuButton && mobileMenu) {
  const setMenu = (open) => { menuButton.setAttribute('aria-expanded', String(open)); mobileMenu.classList.toggle('open', open); document.body.classList.toggle('menu-open', open); };
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  mobileLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));
  window.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });
}
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');
if (reducedMotion || !('IntersectionObserver' in window)) reveals.forEach((item) => item.classList.add('visible'));
else { const observer = new IntersectionObserver((entries, instance) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); instance.unobserve(entry.target); } }), { threshold: 0.12, rootMargin: '0px 0px -40px' }); reveals.forEach((item) => observer.observe(item)); }

const siteFooter = document.querySelector('footer');
if (siteFooter && !siteFooter.querySelector('.atlas-signature')) {
  const atlasSignature = document.createElement('div'); atlasSignature.className = 'atlas-signature';
  atlasSignature.innerHTML = `<a class="atlas-credit" href="https://atlaspresenca.com.br" target="_blank" rel="noopener noreferrer" aria-label="Site desenvolvido pela Atlas Presença"><span>Site desenvolvido pela</span><img src="https://raw.githubusercontent.com/nke989-coder/studio-melissa-pugsley/main/atlas-monograma.png" alt="" aria-hidden="true"><strong>Atlas Presença</strong></a>`;
  siteFooter.appendChild(atlasSignature);
  const atlasStyles = document.createElement('style');
  atlasStyles.textContent = `.atlas-signature{width:min(1180px,calc(100vw - 40px));margin:30px auto 0;padding:22px 0 2px;border-top:1px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center}.atlas-credit{display:inline-flex;align-items:center;justify-content:center;gap:8px;color:#eee4dd;font-size:9px;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;cursor:pointer;transition:color .2s ease}.atlas-credit:hover,.atlas-credit:focus-visible{color:#fff}.atlas-credit img{width:26px;height:auto;display:block;object-fit:contain}.atlas-credit strong{font-weight:600;letter-spacing:.13em}@media(max-width:640px){.atlas-signature{width:calc(100vw - 24px);margin-top:24px;padding-top:20px}.atlas-credit{flex-wrap:wrap}}`;
  document.head.appendChild(atlasStyles);
}
