const triggerButton = document.getElementById('popover-trigger');
const popover = document.getElementById('confirm-popover');
const cancelButton = popover.querySelector('[data-action="cancel"]');
const confirmButton = popover.querySelector('[data-action="confirm"]');
const focusableButtons = [cancelButton, confirmButton];
let lastFocusedElement = null;

function openPopover() {
  if (!popover.hidden) {
    return;
  }

  lastFocusedElement = document.activeElement;
  popover.hidden = false;
  requestAnimationFrame(() => popover.classList.add('is-open'));
  triggerButton.setAttribute('aria-expanded', 'true');
  cancelButton.focus();
  document.addEventListener('click', handleDocumentClick);
  document.addEventListener('keydown', handleKeyDown);
}

function closePopover() {
  if (popover.hidden) {
    return;
  }

  popover.classList.remove('is-open');
  triggerButton.setAttribute('aria-expanded', 'false');

  const hideAfterTransition = () => {
    popover.hidden = true;
    popover.removeEventListener('transitionend', hideAfterTransition);
  };

  popover.addEventListener('transitionend', hideAfterTransition);
  document.removeEventListener('click', handleDocumentClick);
  document.removeEventListener('keydown', handleKeyDown);
  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

function togglePopover() {
  if (popover.hidden) {
    openPopover();
  } else {
    closePopover();
  }
}

function handleDocumentClick(event) {
  if (popover.contains(event.target) || triggerButton.contains(event.target)) {
    return;
  }

  closePopover();
}

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    event.preventDefault();
    closePopover();
    return;
  }

  if (event.key === 'Tab' && !popover.hidden) {
    trapFocus(event);
  }
}

function trapFocus(event) {
  const currentIndex = focusableButtons.indexOf(document.activeElement);
  if (event.shiftKey && currentIndex === 0) {
    event.preventDefault();
    focusableButtons[focusableButtons.length - 1].focus();
    return;
  }

  if (!event.shiftKey && currentIndex === focusableButtons.length - 1) {
    event.preventDefault();
    focusableButtons[0].focus();
  }
}

triggerButton.addEventListener('click', (event) => {
  event.stopPropagation();
  togglePopover();
});

triggerButton.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    togglePopover();
  }
});

cancelButton.addEventListener('click', () => {
  closePopover();
});

confirmButton.addEventListener('click', () => {
  closePopover();
});
