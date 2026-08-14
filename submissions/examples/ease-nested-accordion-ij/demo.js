(function () {
  const accordion = document.querySelector('.na-accordion');

  accordion.addEventListener('click', function (e) {
    const header = e.target.closest('.na-header');
    if (!header) return;

    const panel = header.closest('.na-panel');
    const content = panel.querySelector('.na-content');
    const isOpen = header.getAttribute('aria-expanded') === 'true';

    header.setAttribute('aria-expanded', String(!isOpen));
    if (isOpen) {
      content.classList.remove('open');
    } else {
      content.classList.add('open');
    }
  });
})();
