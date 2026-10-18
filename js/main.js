const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
);

document.querySelectorAll('section:not(.hero)').forEach((el) => observer.observe(el));

const btnAbrir = document.getElementById('abrir-modal-modelos');
const overlayModal = document.getElementById('overlay-modelos');
const btnCerrarModal = document.getElementById('cerrar-modal-modelos');

function abrirModal() {
  if (!overlayModal) return;
  overlayModal.classList.add('abierto');
  document.body.classList.add('modal-abierto');
}

function cerrarModal() {
  if (!overlayModal) return;
  overlayModal.classList.remove('abierto');
  document.body.classList.remove('modal-abierto');
}

if (btnAbrir) {
  btnAbrir.addEventListener('click', abrirModal);
}

if (btnCerrarModal) {
  btnCerrarModal.addEventListener('click', cerrarModal);
}

if (overlayModal) {
  overlayModal.addEventListener('click', (e) => {
    if (e.target === overlayModal) cerrarModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (overlayModal && overlayModal.classList.contains('abierto')) {
      cerrarModal();
    }
    if (menuPanel && menuPanel.classList.contains('is-open')) {
      cerrarMenu();
    }
  }
});

const menuToggle = document.querySelector('.menu-toggle');
const menuPanel = document.getElementById('menu-panel');
const overlayMenu = document.getElementById('overlay-menu');
const menuClose = document.getElementById('menu-cerrar');

function abrirMenu() {
  if (!menuPanel || !overlayMenu) return;
  menuPanel.classList.add('is-open');
  overlayMenu.classList.add('is-visible');
  document.body.classList.add('menu-open');
  menuToggle.setAttribute('aria-expanded', 'true');
}

function cerrarMenu() {
  if (!menuPanel || !overlayMenu) return;
  menuPanel.classList.remove('is-open');
  overlayMenu.classList.remove('is-visible');
  document.body.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuPanel && menuPanel.classList.contains('is-open');
    if (isOpen) {
      cerrarMenu();
    } else {
      abrirMenu();
    }
  });
}

if (menuClose) {
  menuClose.addEventListener('click', cerrarMenu);
}

if (overlayMenu) {
  overlayMenu.addEventListener('click', cerrarMenu);
}

document.querySelectorAll('.mobile-nav a').forEach((link) => {
  link.addEventListener('click', cerrarMenu);
});
