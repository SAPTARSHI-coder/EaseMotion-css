(() => {
  const groups = document.querySelectorAll('.ease-snap-focus');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function getDistanceValue(group) {
    return Number.parseFloat(group.dataset.distance || '70');
  }

  function getDurationValue(group) {
    return Number.parseFloat(group.dataset.duration || '320');
  }

  function resetGroup(group) {
    const cards = group.querySelectorAll('.card');
    cards.forEach((card) => {
      card.classList.remove('is-active', 'is-neighbor');
      card.style.removeProperty('--ease-snap-translate-x');
      card.style.removeProperty('--ease-snap-translate-y');
      card.style.removeProperty('--ease-snap-scale');
    });
  }

  function applyGroup(group, activeCard) {
    if (reducedMotion.matches) {
      resetGroup(group);
      activeCard.classList.add('is-active');
      return;
    }

    const distance = getDistanceValue(group);
    const cards = Array.from(group.querySelectorAll('.card'));
    const activeRect = activeCard.getBoundingClientRect();
    const activeCenterX = activeRect.left + activeRect.width / 2;
    const activeCenterY = activeRect.top + activeRect.height / 2;

    cards.forEach((card) => {
      if (card === activeCard) {
        card.classList.add('is-active');
        card.classList.remove('is-neighbor');
        card.style.setProperty('--ease-snap-scale', '1.03');
        card.style.transform = 'translate3d(0, 0, 0) scale(1.03)';
        return;
      }

      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = centerX - activeCenterX;
      const deltaY = centerY - activeCenterY;
      const distanceFromActive = Math.hypot(deltaX, deltaY);
      const strength = Math.max(0, 1 - distanceFromActive / distance);
      const offsetX = deltaX * strength * 0.16;
      const offsetY = deltaY * strength * 0.16;

      card.classList.add('is-neighbor');
      card.classList.remove('is-active');
      card.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) scale(1)`;
    });
  }

  groups.forEach((group) => {
    const cards = group.querySelectorAll('.card');
    cards.forEach((card) => {
      const activate = () => applyGroup(group, card);
      card.addEventListener('mouseenter', activate);
      card.addEventListener('focus', activate);
      card.addEventListener('mouseleave', () => resetGroup(group));
      card.addEventListener('blur', (event) => {
        if (!group.contains(event.relatedTarget)) {
          resetGroup(group);
        }
      });
    });

    group.addEventListener('mouseleave', () => resetGroup(group));
  });

  const distanceRange = document.getElementById('distanceRange');
  const speedRange = document.getElementById('speedRange');
  const root = document.documentElement;

  if (distanceRange && speedRange) {
    distanceRange.addEventListener('input', (event) => {
      root.style.setProperty('--ease-snap-distance', `${event.target.value}px`);
      document.querySelectorAll('.ease-snap-focus').forEach((group) => {
        group.dataset.distance = event.target.value;
      });
    });

    speedRange.addEventListener('input', (event) => {
      root.style.setProperty('--ease-snap-duration', `${event.target.value}ms`);
      document.querySelectorAll('.ease-snap-focus').forEach((group) => {
        group.dataset.duration = event.target.value;
      });
    });
  }
})();
