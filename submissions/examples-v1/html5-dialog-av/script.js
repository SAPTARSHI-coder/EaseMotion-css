/**
 * HTML5 Dialog Architecture Proposal
 */
document.addEventListener('DOMContentLoaded', () => {

  // --- ❌ BAD: Legacy JS Logic ---
  const legacyModal = document.getElementById('legacy-modal');
  const legacyOpen = document.getElementById('legacy-open-btn');
  const legacyClose = document.getElementById('legacy-close-btn');

  legacyOpen.addEventListener('click', () => {
    legacyModal.style.display = 'grid';
  });

  legacyClose.addEventListener('click', () => {
    legacyModal.style.display = 'none';
  });

  // --- ✅ GOOD: Modern HTML5 Dialog Logic ---
  const modernDialog = document.getElementById('modern-dialog');
  const modernOpen = document.getElementById('modern-open-btn');
  const modernClose = document.getElementById('modern-close-btn');

  modernOpen.addEventListener('click', () => {
    // PERFECT: Native browser mathematically handles focus, backdrop, and Z-index natively!
    modernDialog.showModal();
  });

  modernClose.addEventListener('click', () => {
    modernDialog.close();
  });

});
