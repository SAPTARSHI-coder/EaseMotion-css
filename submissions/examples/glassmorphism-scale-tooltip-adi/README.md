# CSS Scale-Hover Tooltip for Glassmorphism UI Layouts

A minimal, high-performance pure CSS animated tooltip component styled to complement modern Glassmorphism aesthetics, designed in a sleek monochromatic (black and white) color scheme.

## Key Features

- **Pure CSS Transition:** Zero JavaScript execution overhead.
- **Glassmorphism Aesthetics:** Frosted glass background, thin high-contrast borders, shadow depth, and a matching rotated pointer arrow.
- **Spring-Physics Scale:** Implements a custom spring scaling transition (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`) on hover and focus.
- **Keyboard Accessibility:** Focusable triggers (`<button>`) that bind to `:focus-within` and `:focus-visible` with full ARIA descriptions (`aria-describedby`, `role="tooltip"`).
- **Graceful Motion Support:** Automatic overrides for users who prefer reduced motion.

---

## Configuration via CSS Custom Properties

Customize the tooltip's scale, speed, easing, blur, and border style:

```css
:root {
  /* Colors */
  --tooltip-bg: rgba(20, 20, 20, 0.92);
  --tooltip-border: rgba(255, 255, 255, 0.12);
  --tooltip-text-color: #ffffff;
  
  /* Filter & Shadows */
  --tooltip-backdrop-blur: 12px;
  --tooltip-shadow: 
    0 12px 32px -4px rgba(0, 0, 0, 0.8), 
    0 1px 0 rgba(255, 255, 255, 0.06) inset;
    
  /* Scale-Hover Parameters */
  --tooltip-scale-start: 0.86;
  --tooltip-scale-end: 1;
  --tooltip-transition-duration: 0.28s;
  --tooltip-transition-easing: cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Custom spring */
}
```

---

## Accessibility Integration

Align interactive triggers with correct ARIA mappings:

```html
<button 
  class="action-btn tooltip-trigger" 
  aria-describedby="projects-tooltip"
  type="button"
>
  Projects

  <!-- Glassmorphic Tooltip Box -->
  <span class="tooltip-box" role="tooltip" id="projects-tooltip">
    <span class="tooltip-header">Works Portfolio</span>
    <span class="tooltip-body">Explore active repositories and packages.</span>
  </span>
</button>
```
