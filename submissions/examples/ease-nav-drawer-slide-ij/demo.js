(function () {
  var drawer = document.getElementById('nds-drawer');
  var overlay = document.getElementById('nds-overlay');
  var hamburger = document.getElementById('nds-hamburger');
  var closeBtn = document.getElementById('nds-close');
  var modeSelect = document.getElementById('nds-mode');
  var content = document.getElementById('nds-content');
  var items = document.querySelectorAll('.nds-item');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    hamburger.classList.add('open');
    if (modeSelect.value === 'push') {
      content.classList.add('pushed');
    }
    items.forEach(function (item, i) {
      var delay = parseInt(item.getAttribute('data-delay')) || i + 1;
      item.style.transitionDelay = (delay * 0.05) + 's';
    });
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    hamburger.classList.remove('open');
    content.classList.remove('pushed');
    items.forEach(function (item) {
      item.style.transitionDelay = '';
    });
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openDrawer);
  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  items.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      closeDrawer();
    });
  });

  modeSelect.addEventListener('change', function () {
    if (drawer.classList.contains('open')) {
      content.classList.toggle('pushed', modeSelect.value === 'push');
    }
  });
})();
