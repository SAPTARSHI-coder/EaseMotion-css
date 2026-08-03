/* =============================================================
   Floating Action Speed Dial Radial Menu — EaseMotion
   Vanilla JS Toggle & Dismissal Behavior
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const speedDial = document.getElementById('speed-dial-menu');
  const trigger = document.getElementById('speed-dial-trigger');
  const actionBtns = speedDial.querySelectorAll('.speed-dial__action');

  if (!speedDial || !trigger) return;

  /**
   * Toggle speed dial open/close state
   * @param {boolean} [forceState] Optional boolean to explicitly open or close
   */
  function toggleSpeedDial(forceState) {
    const isCurrentlyOpen = speedDial.classList.contains('is-open');
    const shouldOpen = typeof forceState === 'boolean' ? forceState : !isCurrentlyOpen;

    if (shouldOpen) {
      speedDial.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    } else {
      speedDial.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
    }
  }

  // 1. Toggle on main trigger click
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSpeedDial();
  });

  // 2. Close on outside click
  document.addEventListener('click', (e) => {
    if (speedDial.classList.contains('is-open') && !speedDial.contains(e.target)) {
      toggleSpeedDial(false);
    }
  });

  // 3. Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && speedDial.classList.contains('is-open')) {
      toggleSpeedDial(false);
      trigger.focus(); // Return focus to trigger for accessibility
    }
  });

  // 4. Action button click handler (close menu after action)
  actionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tooltip = btn.previousElementSibling;
      const actionName = tooltip ? tooltip.textContent : 'Action';
      console.log(`Speed Dial Action Triggered: ${actionName}`);

      // Close menu with slight delay after action click
      setTimeout(() => {
        toggleSpeedDial(false);
      }, 150);
    });
  });
});
