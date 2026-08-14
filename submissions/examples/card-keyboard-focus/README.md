# Card Keyboard Focus

## Overview

Cards can be reached using the Tab key by adding `tabindex="0"`. This makes interactive cards accessible via keyboard navigation.

## Problem

Cards without keyboard focus support are inaccessible to:
- Users who cannot use a mouse
- Keyboard-only users
- Screen reader users navigating via keyboard

## Solution

Add `tabindex="0"` to make cards focusable:

```html
<article 
  class="ease-card ease-card-shadow ease-card-hover"
  tabindex="0"
  role="button"
  onclick="handleCardClick(this)"
  onkeydown="handleCardKeydown(event, this)"
>
  <!-- Card content -->
</article>
```

## Key Properties

| Property | Value | Purpose |
|----------|-------|---------|
| `tabindex="0"` | 0 | Allows keyboard focus |
| `role="button"` | button | Announces as interactive |
| `onkeydown` | handler | Enables Enter/Space activation |

## JavaScript Handler

```javascript
function handleCardKeydown(event, card) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleCardClick(card);
  }
}
```

## CSS Focus Styles

```css
.focusable-card {
  cursor: pointer;
}

.focusable-card:focus {
  outline: 2px solid var(--ease-color-primary);
  outline-offset: 3px;
  border-color: var(--ease-color-primary-light);
}
```

## Accessibility Benefits

- **Keyboard Navigation**: Cards can be reached via Tab
- **Activation**: Enter or Space activates the card
- **Visual Focus**: Clear focus indicator for keyboard users
- **Screen Reader**: `role="button"` announces interactivity

## Files

- `demo.html` - Interactive demonstration
- `style.css` - Component styling
- `README.md` - This documentation
