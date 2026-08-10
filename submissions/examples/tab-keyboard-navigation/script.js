document.addEventListener('DOMContentLoaded', () => {
  const tabList = document.querySelector('[role="tablist"]');
  const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));
  const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

  tabList.addEventListener('keydown', (e) => {
    const currentTab = document.activeElement;
    const currentIndex = tabs.indexOf(currentTab);

    if (currentIndex === -1) return;

    let targetIndex = null;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        targetIndex = (currentIndex + 1) % tabs.length;
        break;

      case 'ArrowLeft':
      case 'ArrowUp':
        targetIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        break;

      case 'Home':
        targetIndex = 0;
        break;

      case 'End':
        targetIndex = tabs.length - 1;
        break;

      default:
        return;
    }

    e.preventDefault();
    switchTab(tabs[targetIndex]);
  });

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => switchTab(tab));
  });

  function switchTab(newTab) {
    tabs.forEach((tab) => {
      tab.setAttribute('aria-selected', 'false');
      tab.setAttribute('tabindex', '-1');
      tab.classList.remove('active');
    });

    newTab.setAttribute('aria-selected', 'true');
    newTab.setAttribute('tabindex', '0');
    newTab.classList.add('active');
    newTab.focus();

    const targetPanelId = newTab.getAttribute('aria-controls');
    panels.forEach((panel) => {
      if (panel.id === targetPanelId) {
        panel.classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
      }
    });
  }
});