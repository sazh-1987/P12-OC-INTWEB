// Collapses + accessibilité
(() => {
  const triggers = document.querySelectorAll('.img-click');

  triggers.forEach((el) => {
    // Accessibilité : rendre l'image "activable"
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.setAttribute('aria-controls', el.dataset.target);
    el.setAttribute('aria-expanded', 'false');

    const targetId = el.dataset.target;
    const panel = document.getElementById(targetId);

    if (panel) {
      panel.setAttribute('aria-hidden', 'true');
    }

    const toggle = () => {
      if (!panel) return;
      const isOpen = panel.classList.toggle('open');
      el.setAttribute('aria-expanded', String(isOpen));
      panel.setAttribute('aria-hidden', String(!isOpen));
    };

    el.addEventListener('click', toggle);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
})();


const heroImg = document.querySelector('.hero-visual img');

heroImg.addEventListener('mouseenter', () => {
  heroImg.src = 'assets/img/KL.webp';
});

heroImg.addEventListener('mouseleave', () => {
  heroImg.src = 'assets/img/KLlogo.webp';
});