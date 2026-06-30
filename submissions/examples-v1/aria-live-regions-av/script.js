/**
 * ARIA Live Regions Architecture Proposal
 * Demonstrates strictly utilizing aria-live to completely eliminate catastrophic accessibility failures natively.
 */

document.addEventListener("DOMContentLoaded", () => {
  const legacyBtn = document.getElementById("legacy-btn");
  const legacyContainer = document.getElementById("legacy-error-container");

  // ❌ BAD: Legacy DOM Injection
  legacyBtn.addEventListener("click", () => {
    // We dynamically inject an error message natively.
    // However, because the parent container violently lacks `aria-live`, screen readers completely ignore this natively!
    // Blind users will have zero mathematical idea the form violently failed!
    legacyContainer.innerHTML = `
      <div class="error-message">
        Error: Invalid credit card number provided.
      </div>
    `;
  });

  const modernBtn = document.getElementById("modern-btn");
  const modernContainer = document.getElementById("modern-error-container");

  // ✅ GOOD: Modern ARIA Live DOM Injection
  modernBtn.addEventListener("click", () => {
    // We dynamically natively inject an error message into a container mathematically stamped with `aria-live="polite"`.
    // The screen reader natively detects this physical DOM mutation and beautifully reads the text aloud!
    modernContainer.innerHTML = `
      <div class="error-message">
        Error: Invalid credit card number provided.
      </div>
    `;
  });
});
