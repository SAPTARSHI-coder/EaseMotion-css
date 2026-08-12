document.addEventListener('keydown', (e) => {
  // We want to prevent defaults for things like Ctrl+S to showcase custom feedback
  const key = e.key.toUpperCase();
  const lowerKey = e.key.toLowerCase();

  // Find all virtual keyboard keys matching the active modifiers or keys
  if (e.ctrlKey) {
    pressVirtualKey('CTRL');
  }
  if (e.altKey) {
    pressVirtualKey('ALT');
  }
  if (e.shiftKey) {
    pressVirtualKey('SHIFT');
  }

  // Handle normal keys
  if (key === 'S' || key === 'Z' || key === 'P' || key === 'K') {
    pressVirtualKey(key);
  }
  
  // Custom interactive combination handling
  if (e.ctrlKey && lowerKey === 's') {
    e.preventDefault();
    triggerCardFeedback('card-save');
  }
  if (e.ctrlKey && lowerKey === 'z') {
    e.preventDefault();
    triggerCardFeedback('card-undo');
  }
  if (e.ctrlKey && e.altKey && lowerKey === 'p') {
    e.preventDefault();
    triggerCardFeedback('card-publish');
  }
  if (lowerKey === 'k') {
    triggerCardFeedback('card-search');
  }
});

document.addEventListener('keyup', (e) => {
  const key = e.key.toUpperCase();
  
  if (!e.ctrlKey) releaseVirtualKey('CTRL');
  if (!e.altKey) releaseVirtualKey('ALT');
  if (!e.shiftKey) releaseVirtualKey('SHIFT');

  if (key === 'S' || key === 'Z' || key === 'P' || key === 'K') {
    releaseVirtualKey(key);
  }
});

function pressVirtualKey(name) {
  const elements = document.querySelectorAll(`kbd[data-key="${name}"]`);
  elements.forEach(el => {
    el.classList.add('pressed');
  });
}

function releaseVirtualKey(name) {
  const elements = document.querySelectorAll(`kbd[data-key="${name}"]`);
  elements.forEach(el => {
    el.classList.remove('pressed');
  });
}

function triggerCardFeedback(cardId) {
  const card = document.getElementById(cardId);
  if (!card) return;

  if (card.classList.contains('unavailable')) {
    // Show quick error flash
    card.style.borderColor = 'rgba(239, 68, 68, 0.8)';
    card.style.boxShadow = '0 0 15px rgba(239, 68, 68, 0.3)';
    setTimeout(() => {
      card.style.borderColor = '';
      card.style.boxShadow = '';
    }, 400);
    return;
  }

  // Visual success feedback
  const originalBorder = card.style.borderColor;
  const originalShadow = card.style.boxShadow;
  
  card.style.borderColor = 'rgba(16, 185, 129, 0.8)';
  card.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.3)';
  
  // Make virtual keys look pressed
  const keys = card.querySelectorAll('kbd');
  keys.forEach(k => k.classList.add('pressed'));

  setTimeout(() => {
    card.style.borderColor = originalBorder;
    card.style.boxShadow = originalShadow;
    keys.forEach(k => k.classList.remove('pressed'));
  }, 400);
}

// Add click listeners to cards
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.shortcut-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      triggerCardFeedback(card.id);
    });
    
    // Support enter / space keys for focus state interaction
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerCardFeedback(card.id);
      }
    });
  });
});
