# ease-bottom-nav

A floating mobile bottom navigation bar with animated active states, a sliding pill indicator, rounded icon bumps, and smooth transitions. Pure CSS with a minimal JS trigger for active-state switching.

## Features

- Floating pill-shaped nav bar with blurred glass background
- Sliding indicator that animates to the active item's position
- Icon lift + scale animation on active state
- Label fade/expand only shown on the active item
- Notification badge dot support
- Tap feedback (`:active` scale-down) for mobile feel
- Fully responsive, safe for small screens

## Usage

1. Link `style.css` in your HTML `<head>`.
2. Copy the `.ease-bottom-nav` markup from `demo.html`, including the `.ease-bottom-nav__indicator` span.
3. Include the small JS block to handle active-state switching and indicator positioning.

```html
<nav class="ease-bottom-nav">
  <span class="ease-bottom-nav__indicator"></span>
  <button class="ease-bottom-nav__item ease-bottom-nav__item--active">
    <span class="ease-bottom-nav__icon">⌂</span>
    <span class="ease-bottom-nav__label">Home</span>
  </button>
  <!-- more items -->
</nav>