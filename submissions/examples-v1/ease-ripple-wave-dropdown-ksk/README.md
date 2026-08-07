# Ripple-Wave Dropdown (`ease-ripple-wave-dropdown-ksk`)

1. What does this do?  
An animated dropdown menu component. Hovering or focusing the trigger container opens the card menu with a circular mask crop-path expansion (`clip-path: circle(0%)` → `circle(150%)`) acting as a digital ripple wave, while items play a secondary radial background sweep starting from the cursor click/focus origin outward.

2. How is it used?  
Wrap the trigger and the menu inside `.dropdown-wrapper`. No JS is required for display:

```html
<div class="dropdown-wrapper" tabindex="0">
  <div class="dropdown-trigger">
    <span>Dropdown</span>
  </div>
  <div class="dropdown-menu" role="menu">
    <a href="#" class="dropdown-item">Item 1</a>
    <a href="#" class="dropdown-item">Item 2</a>
  </div>
</div>
```

Configure parameters using CSS variables:
```css
.dropdown-wrapper {
  --ease-dropdown-duration: 0.45s;
  --ease-dropdown-easing:   cubic-bezier(0.25, 1, 0.5, 1);
  --ease-ripple-bg:         rgba(99, 102, 241, 0.12); /* radial overlay fill */
}
```

3. Why is it useful?  
Standard menus open abruptly. This enhancement animates the card with an organic circular sweep while remaining lightweight, fully keyboard focusable, prefers-reduced-motion compatible, and supports both Light and Dark theme modes.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #54624.*
