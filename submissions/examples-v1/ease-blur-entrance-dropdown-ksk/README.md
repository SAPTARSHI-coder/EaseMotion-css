# Blur-Entrance Dropdown (`ease-blur-entrance-dropdown-ksk`)

1. What does this do?  
An animated dropdown menu component. Hovering or focusing the trigger container activates a blur-entrance transition where the menu scales, slides, and transitions from a blurred state (`filter: blur(12px) scale(0.95) translateY(8px)`) to high-clarity full scale using a spring bezier curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`).

2. How is it used?  
Wrap the trigger and the menu inside `.dropdown-wrapper`. No JS is required for display:

```html
<div class="dropdown-wrapper" tabindex="0">
  <div class="dropdown-trigger">
    <span>Dropdown</span>
  </div>
  <div class="dropdown-menu">
    <a href="#" class="dropdown-item">Item 1</a>
    <a href="#" class="dropdown-item">Item 2</a>
  </div>
</div>
```

Configure parameters using CSS variables:
```css
.dropdown-wrapper {
  --ease-dropdown-duration: 0.35s;
  --ease-dropdown-easing:   cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-dropdown-blur:     12px;          /* initial blur offset */
  --ease-dropdown-scale:    0.95;          /* starting scale factor */
  --ease-dropdown-offset:   8px;           /* starting vertical offset */
}
```

3. Why is it useful?  
Standard menus open abruptly. This enhancement animates the card upward and resolves blur focus organic transitions while remaining lightweight, fully keyboard focusable, prefers-reduced-motion compatible, and supports both Light and Dark theme modes.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #54619.*
