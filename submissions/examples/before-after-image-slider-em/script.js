/* =============================================================
   Interactive Comparison Image Slider (Before/After)
   EaseMotion — Vanilla JS Logic
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const comparison = document.getElementById('comparison');
  const rangeInput = document.getElementById('comparison-range');

  if (!comparison || !rangeInput) return;

  /**
   * Updates the CSS --split custom property and ARIA state
   * from the current range input value (0–100).
   */
  function updateSplit(value) {
    const pct = `${value}%`;
    comparison.style.setProperty('--split', pct);
    rangeInput.setAttribute('aria-valuenow', value);
  }

  // --- Range input events (mouse, touch, keyboard — all handled natively) ---
  rangeInput.addEventListener('input', () => {
    updateSplit(rangeInput.value);
  });

  // --- Touch Support ---
  // The transparent <input type="range"> natively handles touch events.
  // However, we also support pointer events for custom drag on the handle.
  let isDragging = false;

  comparison.addEventListener('pointerdown', (e) => {
    isDragging = true;
    comparison.setPointerCapture(e.pointerId);
    updateFromPointer(e);
  });

  comparison.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    updateFromPointer(e);
  });

  comparison.addEventListener('pointerup', () => {
    isDragging = false;
  });

  comparison.addEventListener('pointercancel', () => {
    isDragging = false;
  });

  /**
   * Converts pointer X position to a 0–100 percentage
   * relative to the comparison container.
   */
  function updateFromPointer(e) {
    const rect = comparison.getBoundingClientRect();
    let x = e.clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));
    const pct = Math.round((x / rect.width) * 100);

    // Sync the range input so keyboard still works correctly
    rangeInput.value = pct;
    updateSplit(pct);
  }

  // --- Keyboard Support (Arrow keys) ---
  // Native range input handles Left/Right arrow keys automatically.
  // We still expose them explicitly for completeness.
  rangeInput.addEventListener('keydown', (e) => {
    let val = parseInt(rangeInput.value);
    if (e.key === 'ArrowLeft')  { val = Math.max(0, val - 1); }
    if (e.key === 'ArrowRight') { val = Math.min(100, val + 1); }
    rangeInput.value = val;
    updateSplit(val);
  });

  // Initialise at 50%
  updateSplit(50);
});
