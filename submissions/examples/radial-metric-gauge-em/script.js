/* =============================================================
   Interactive Radial Metric Gauge Indicator Card
   EaseMotion — Vanilla JS Logic
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // The total arc path length for "M 20 110 A 80 80 0 0 1 180 110"
  // Calculated: half-circle circumference = π × r = π × 80 ≈ 251.3
  const ARC_LENGTH = 251;

  // Needle spans 180 degrees (from -90deg at 0% to +90deg at 100%)
  // So: rotate(-90deg) at 0%, rotate(+90deg) at 100%
  const NEEDLE_MIN_DEG = -90;
  const NEEDLE_RANGE   = 180;

  const cards = document.querySelectorAll('.gauge-card');
  const randomBtn = document.getElementById('btn-randomise');

  /**
   * Determines threshold class and label from a percentage value.
   */
  function getThreshold(pct) {
    if (pct >= 80) return { cls: 'is-critical', label: 'Critical' };
    if (pct >= 60) return { cls: 'is-medium',   label: 'Moderate' };
    return              { cls: '',               label: 'Healthy'  };
  }

  /**
   * Animates a single gauge card to a new percentage value.
   * @param {Element} card - The .gauge-card element
   * @param {number}  targetPct - Target percentage (0–100)
   * @param {number}  duration - Animation duration in ms
   */
  function animateGauge(card, targetPct, duration = 900) {
    const fill        = card.querySelector('.gauge-fill');
    const needle      = card.querySelector('.gauge-needle');
    const valueEl     = card.querySelector('.gauge-value');
    const statusEl    = card.querySelector('.gauge-status-text');

    const start      = performance.now();
    // Read the current displayed value to animate from it
    const startPct   = parseFloat(card.dataset.currentPct ?? 0);

    function easeOut(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function step(now) {
      const elapsed  = now - start;
      const t        = Math.min(elapsed / duration, 1);
      const easedT   = easeOut(t);
      const currentPct = startPct + (targetPct - startPct) * easedT;

      // --- Update arc fill ---
      // dashoffset: ARC_LENGTH = 0%, 0 = 100%
      fill.style.strokeDashoffset = ARC_LENGTH - (ARC_LENGTH * currentPct / 100);

      // --- Update needle rotation ---
      const deg = NEEDLE_MIN_DEG + (NEEDLE_RANGE * currentPct / 100);
      needle.style.transform = `rotate(${deg}deg)`;

      // --- Update numeric readout ---
      valueEl.textContent = Math.round(currentPct);

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        // Final state: apply threshold classes and status text
        const { cls, label } = getThreshold(targetPct);
        card.classList.remove('is-medium', 'is-critical');
        if (cls) card.classList.add(cls);
        statusEl.textContent = label;
        card.dataset.currentPct = targetPct;
      }
    }

    requestAnimationFrame(step);
  }

  // --- Initial render: animate each card from 0 to its data-value ---
  cards.forEach(card => {
    const target = parseFloat(card.dataset.value ?? 0);
    card.dataset.currentPct = 0;
    animateGauge(card, target, 1200);
  });

  // --- Click card to re-animate to a new random value ---
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const newVal = Math.floor(Math.random() * 100) + 1;
      card.dataset.value = newVal;
      animateGauge(card, newVal);
    });
  });

  // --- Randomise button: animate all cards ---
  if (randomBtn) {
    randomBtn.addEventListener('click', () => {
      cards.forEach(card => {
        const newVal = Math.floor(Math.random() * 100) + 1;
        card.dataset.value = newVal;
        animateGauge(card, newVal);
      });
    });
  }
});
