document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('navHamburger');
  const menu = document.getElementById('navMenu');
  const dropdownContainer = document.querySelector('.ease-navbar-ak__dropdown');
  const dropdownTrigger = document.getElementById('dropdownTrigger');

  // ─── 1. Toggle Mobile Menu Stack ───
  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.classList.contains('open');
    
    if (isExpanded) {
      hamburger.classList.remove('open');
      menu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    } else {
      hamburger.classList.add('open');
      menu.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
    }
  });

  // ─── 2. Mobile Dropdown Toggle Interceptor ───
  dropdownTrigger.addEventListener('click', (e) => {
    // Check if matching mobile viewport break-threshold
    if (window.innerWidth <= 768) {
      e.preventDefault(); // Halt normal link bubble routing behavior
      dropdownContainer.classList.toggle('mobile-open');
    }
  });

  // ─── 3. Global Auto-Close Reset Listener ───
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      // Clear mobile layout states when returning to desktop boundaries
      hamburger.classList.remove('open');
      menu.classList.remove('open');
      dropdownContainer.classList.remove('mobile-open');
    }
  });
});