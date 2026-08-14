# Full Screen Overlay Panel — EaseMotion CSS

A premium, high-performance fullscreen overlay panel utility showing multiple overlay styles, flexible content interfaces, and transition options.

## What does this do?
This feature provides customizable full-screen overlay panels (often used for navigation menus, global search overlays, or quick action consoles) with GPU-accelerated transition modes including:
- **Circular Ripple Reveal** (expansion centered from trigger click coordinate)
- **Zoom & Fade** (smooth scale-up opacity transition)
- **Slide Down** (classic vertical screen drop-in)

Staggered micro-animations (`stagger-item`) are embedded to animate child elements sequentially upon overlay activation.

## How is it used?

### 1. HTML Markup
Create the overlay container with the core and transition style classes:

```html
<!-- Fullscreen Overlay Container -->
<div class="fullscreen-overlay transition-ripple" id="my-overlay" role="dialog" aria-modal="true" aria-label="Navigation Menu" tabindex="-1">
  
  <!-- Close Button -->
  <button class="btn-close-overlay" onclick="closeOverlay('my-overlay')" aria-label="Close Panel">✕</button>
  
  <!-- Content Container -->
  <div class="overlay-container">
    <nav class="menu-nav">
      <!-- Staggered Items -->
      <a href="#" class="menu-link stagger-item" style="--i: 1">Dashboard</a>
      <a href="#" class="menu-link stagger-item" style="--i: 2">Analytics Profile</a>
      <a href="#" class="menu-link stagger-item" style="--i: 3">Developer API</a>
    </nav>
  </div>

</div>
```

### 2. Trigger Event Coordinate Capture
For the circular ripple transition, coordinate values must be passed from the mouse click to the overlay element using CSS custom properties:

```javascript
function openOverlay(event, overlayId) {
  const overlay = document.getElementById(overlayId);
  
  if (event) {
    overlay.style.setProperty('--ripple-x', `${event.clientX}px`);
    overlay.style.setProperty('--ripple-y', `${event.clientY}px`);
  }
  
  overlay.classList.add('is-active');
}
```

## Why is it useful?
- **GPU-Accelerated**: Relies exclusively on high-performance transitions (`opacity`, `transform`, and `clip-path`) preventing layout recalculation lags.
- **Accessiblity Compliant (A11y)**: Restores focus to the triggering element on close, traps keyboard focus inside active panels, enforces ARIA dialog roles, and supports closure with the `Escape` key.
- **Adaptive Layout**: Responsive grid alignment supports complex control systems, settings cards, and text search blocks equally across desktop and mobile form factors.

## Tech Stack
- HTML5 (semantic layout & ARIA structures)
- CSS3 (backdrop-filter glassmorphism, transitions, clip-paths, custom variables)
- Vanilla JavaScript (coordinates capture, keyboard focus trap, simulation logic)

## Preview
Open `demo.html` directly in your browser to interact with the showcase panel.
