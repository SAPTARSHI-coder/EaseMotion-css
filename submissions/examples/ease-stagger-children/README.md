# Staggered Child Animation Utility

CSS utility class that automatically applies staggered delays to child elements, creating sequential entrance animations without manual delay classes.

## Classes

### Base Utility
| Class | Effect |
|-------|--------|
| `ease-stagger-children` | Applies staggered delays to all child elements |

### Animation Variants
| Class | Effect |
|-------|--------|
| `ease-stagger-fade-up` | Fade in + slide up |
| `ease-stagger-fade` | Fade in only |
| `ease-stagger-slide-left` | Slide in from left |
| `ease-stagger-scale` | Scale in |

## Usage

```html
<ul class="ease-stagger-children ease-stagger-fade-up">
  <li>Item 1 — animates first</li>
  <li>Item 2 — animates 100ms later</li>
  <li>Item 3 — animates 200ms later</li>
  <li>Item 4 — animates 300ms later</li>
</ul>
```

## How It Works

```css
.ease-stagger-children > * {
  animation-delay: calc(var(--ease-stagger-index, 0) * var(--ease-stagger-delay, 100ms));
}
```

## Customization

```css
:root {
  --ease-stagger-delay: 150ms; /* change delay between items */
}
```

## Features
- Pure CSS, no JavaScript
- Works with any animation class
- Supports up to 12 children
- Customizable delay via CSS variable
- Respects prefers-reduced-motion