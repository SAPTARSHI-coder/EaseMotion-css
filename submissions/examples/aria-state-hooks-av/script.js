/**
 * ARIA State Hooks Architecture Proposal
 * Demonstrates updating the native ARIA accessibility tree instead of toggling arbitrary CSS classes.
 */

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.ease-demo-accordion-btn');

  btn.addEventListener('click', () => {
    // ❌ BAD: Legacy Class Toggling (Desyncs the visual state from screen readers)
    // btn.classList.toggle('is-active');
    // document.querySelector('#content-1').classList.toggle('show');

    // ✅ GOOD: Native ARIA State Toggling
    // We update the physical ARIA attribute in the DOM. 
    // The CSS natively listens to this exact attribute to trigger the visual animation!
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !isExpanded);
  });
});
