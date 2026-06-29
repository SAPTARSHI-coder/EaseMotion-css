/**
 * EaseMotion Modal Scroll Lock Fix
 * Solves the issue where pure CSS `:target` modals allow the background body to scroll.
 */

function handleModalScrollLock() {
  const hash = window.location.hash;
  
  // Check if the current URL hash points to an element with the ease-modal-overlay class
  if (hash) {
    const targetElement = document.querySelector(hash);
    if (targetElement && targetElement.classList.contains('ease-modal-overlay')) {
      // Lock the body scroll
      document.body.style.overflow = 'hidden';
      return;
    }
  }
  
  // If no modal hash, restore scroll
  document.body.style.overflow = '';
}

// Listen for hash changes (when modal opens/closes)
window.addEventListener('hashchange', handleModalScrollLock);

// Check on initial page load in case a modal hash is already in the URL
document.addEventListener('DOMContentLoaded', handleModalScrollLock);
