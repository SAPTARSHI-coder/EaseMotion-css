/**
 * Bounce-Pulse Tabs - SaaS Showcase
 * EaseMotion CSS - GSSoC 2026
 */

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  function switchTab(index) {
    // Update tabs
    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
      tab.setAttribute('aria-selected', i === index ? 'true' : 'false');
    });

    // Update panels
    panels.forEach((panel, i) => {
      panel.classList.toggle('active', i === index);
    });
  }

  // Click handlers
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      switchTab(index);
    });

    // Keyboard navigation
    tab.addEventListener('keydown', (e) => {
      let targetIndex = index;
      
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        targetIndex = (index + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        targetIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        targetIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        targetIndex = tabs.length - 1;
      }

      if (targetIndex !== index) {
        tabs[targetIndex].focus();
        switchTab(targetIndex);
      }
    });
  });
});