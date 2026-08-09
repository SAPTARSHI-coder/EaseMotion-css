# Slide-Up Dropdown (`ease-slide-up-dropdown-ksk`)

1. What does this do?  
An animated dropdown menu component. Hovering or focusing the trigger container activates a slide-up, scale-up entrance transition with a spring bezier curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`) and subtle blur reduction, accompanied by a rotating caret chevron.

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
  --ease-dropdown-offset:   12px;          /* initial slide-up offset */
}
```

3. Why is it useful?  
Standard dropdowns open abruptly. This enhancement animates the card upward smoothly while remaining lightweight, fully keyboard focusable, prefers-reduced-motion compatible, and supports both Light and Dark theme modes.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #54615.*
