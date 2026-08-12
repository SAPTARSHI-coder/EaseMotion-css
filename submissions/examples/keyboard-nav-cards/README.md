# Keyboard Navigation for Interactive Cards

## Overview

Adds keyboard navigation support to interactive demo cards for accessibility compliance.

## Features

- **Tab Navigation**: Cards are focusable via Tab key using `tabindex="0"`
- **Enter/Space Activation**: Cards can be activated using keyboard
- **ARIA Attributes**: Proper `role="button"` and `aria-pressed` for screen readers
- **Focus Indicators**: Visible focus outline when navigating via keyboard

## Usage

Add keyboard support to cards:

```html
<article 
  class="ease-card ease-card-shadow ease-card-hover"
  tabindex="0"
  role="button"
  aria-pressed="false"
  onclick="handleCardClick(this)"
  onkeydown="handleCardKeydown(event, this)"
>
  <div class="card-content">
    <h3>Interactive Card</h3>
    <p>Press Enter or Space to activate</p>
  </div>
</article>
```

## JavaScript Handler

```javascript
function handleCardKeydown(event, card) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleCardClick(card);
  }
}

function handleCardClick(card) {
  const isPressed = card.getAttribute('aria-pressed') === 'true';
  card.setAttribute('aria-pressed', !isPressed);
}
```

## CSS Focus Style

```css
.interactive-card:focus {
  outline: 2px solid var(--ease-color-primary, #6c63ff);
  outline-offset: 3px;
}
```

## Accessibility Benefits

- **WCAG Compliance**: Meets keyboard navigation requirements
- **Screen Reader Support**: ARIA attributes communicate state
- **Visual Feedback**: Clear focus indicators for keyboard users

## Files

- `demo.html` - Interactive demonstration
- `style.css` - Demo styling
- `README.md` - This documentation
