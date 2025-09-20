const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');
const currentYearEl = document.getElementById('current-year');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navList.classList.toggle('is-open');
  });

  navList.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute('aria-expanded', 'false');
      navList.classList.remove('is-open');
    }
  });
}

if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear().toString();
}
