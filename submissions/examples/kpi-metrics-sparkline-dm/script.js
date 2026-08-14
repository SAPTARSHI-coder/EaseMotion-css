/**
 * EaseMotion CSS: Live Metrics KPI Card with Sparkline Pulse Trace
 * JavaScript module for count-up counter animation and interactive SVG sparkline hover inspection
 */

document.addEventListener('DOMContentLoaded', () => {
  const kpiCards = document.querySelectorAll('.kpi-card');
  const btnReplay = document.getElementById('btn-replay-anim');

  /**
   * Animate Number Count-Up
   */
  function animateValue(el, targetVal, duration = 1600, prefix = '', suffix = '', decimals = 0) {
    let startTimestamp = null;
    const startVal = 0;

    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // EaseOutQuart easing
      const easedProgress = 1 - Math.pow(1 - progress, 4);
      const currentVal = startVal + (targetVal - startVal) * easedProgress;

      let formatted = currentVal.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      });

      el.textContent = `${prefix}${formatted}${suffix}`;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  /**
   * Trigger Card Animations (Count-up + SVG stroke draw)
   */
  function triggerCardAnimation(card) {
    if (card.classList.contains('animated')) return;
    card.classList.add('animated');

    const valueEl = card.querySelector('.kpi-metric-value');
    if (valueEl) {
      const target = parseFloat(valueEl.getAttribute('data-target')) || 0;
      const prefix = valueEl.getAttribute('data-prefix') || '';
      const suffix = valueEl.getAttribute('data-suffix') || '';
      const decimals = parseInt(valueEl.getAttribute('data-decimals'), 10) || 0;

      animateValue(valueEl, target, 1800, prefix, suffix, decimals);
    }
  }

  /**
   * IntersectionObserver for Viewport Triggering
   */
  const observerOptions = {
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        triggerCardAnimation(entry.target);
      }
    });
  }, observerOptions);

  kpiCards.forEach(card => observer.observe(card));

  /**
   * Replay Animations Button Listener
   */
  if (btnReplay) {
    btnReplay.addEventListener('click', () => {
      kpiCards.forEach(card => {
        card.classList.remove('animated');
        const valueEl = card.querySelector('.kpi-metric-value');
        if (valueEl) {
          const prefix = valueEl.getAttribute('data-prefix') || '';
          const suffix = valueEl.getAttribute('data-suffix') || '';
          const decimals = parseInt(valueEl.getAttribute('data-decimals'), 10) || 0;
          valueEl.textContent = `${prefix}${decimals > 0 ? (0).toFixed(decimals) : 0}${suffix}`;
        }
        setTimeout(() => triggerCardAnimation(card), 100);
      });
    });
  }

  /**
   * Interactive SVG Sparkline Hover Inspection
   */
  document.querySelectorAll('.sparkline-container').forEach(container => {
    const svg = container.querySelector('.sparkline-svg');
    const path = container.querySelector('.sparkline-path');
    const guide = container.querySelector('.sparkline-guide');
    const point = container.querySelector('.sparkline-point');
    const tooltip = container.querySelector('.sparkline-tooltip');

    const seriesData = JSON.parse(container.getAttribute('data-series') || '[]');
    if (!seriesData.length || !svg || !path) return;

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const mouseX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const ratio = mouseX / rect.width;

      // Map to nearest series data point index
      const pointIndex = Math.min(
        Math.floor(ratio * seriesData.length),
        seriesData.length - 1
      );
      const val = seriesData[pointIndex];

      // Get Y position on SVG (viewBox is 0 0 300 70)
      // viewBox X is ratio * 300
      const viewBoxX = ratio * 300;
      // Calculate Y proportional to viewBox height (70 - value mapped)
      const maxVal = Math.max(...seriesData);
      const minVal = Math.min(...seriesData);
      const valRange = (maxVal - minVal) || 1;
      const viewBoxY = 65 - ((val - minVal) / valRange) * 55;

      container.classList.add('hovering');

      if (guide) {
        guide.setAttribute('x1', viewBoxX);
        guide.setAttribute('x2', viewBoxX);
      }

      if (point) {
        point.setAttribute('cx', viewBoxX);
        point.setAttribute('cy', viewBoxY);
      }

      if (tooltip) {
        const cardType = container.closest('.kpi-card').getAttribute('data-kpi');
        let formattedVal = val;
        if (cardType === 'revenue') formattedVal = `$${(val * 1200).toLocaleString()}`;
        else if (cardType === 'users') formattedVal = `${(val * 480).toLocaleString()} users`;
        else if (cardType === 'conversion') formattedVal = `${(val / 20).toFixed(2)}%`;

        tooltip.textContent = formattedVal;
        tooltip.style.left = `${mouseX}px`;
      }
    });

    container.addEventListener('mouseleave', () => {
      container.classList.remove('hovering');
    });
  });
});
