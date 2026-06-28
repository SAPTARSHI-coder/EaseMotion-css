# Accessible Accordion Component

## Overview

A fully accessible accordion component example for EaseMotion CSS. Built with semantic HTML, proper ARIA attributes, and smooth animations.

## Features

- ✅ **Semantic HTML** - Uses native `<details>` and `<summary>` elements
- ✅ **Keyboard Navigation** - Fully navigable via keyboard (Enter/Space)
- ✅ **Screen Reader Support** - Proper ARIA attributes for assistive technology
- ✅ **Smooth Animations** - Chevron rotation and fade-in effects
- ✅ **Focus Management** - Visible focus indicators for keyboard users
- ✅ **Responsive Design** - Works on all screen sizes

## Usage

Add the accordion component to your page:

```html
<div class="accordion">
  <details class="accordion-item">
    <summary class="accordion-header">
      <span class="accordion-icon">
        <!-- Chevron icon -->
      </span>
      <span class="accordion-title">Question Here</span>
    </summary>
    <div class="accordion-content">
      <p>Answer content here.</p>
    </div>
  </details>
</div>
```

## CSS Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `--ease-speed-normal` | `200ms` | Animation duration |
| `--ease-ease` | `cubic-bezier(0.4, 0, 0.2, 1)` | Easing function |
| `--ease-color-primary` | `#6c63ff` | Primary accent color |
| `--ease-radius-md` | `8px` | Border radius |

## Browser Support

Works in all modern browsers that support:
- `<details>` and `<summary>` elements
- CSS custom properties
- CSS transitions

## Files

- `demo.html` - Interactive demonstration
- `style.css` - Component styling
- `README.md` - This documentation
